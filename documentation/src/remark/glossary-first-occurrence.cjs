'use strict';

/**
 * glossary-first-occurrence.cjs
 *
 * Wersja CommonJS (dla Windows + jiti używanego przez Docusaurus).
 * Umieść jako: src/remark/glossary-first-occurrence.cjs
 *
 * Różnica względem oryginału z docusaurus-plugin-glossary:
 *   linkOnlyFirstOccurrence: true  → każdy termin linkowany tylko raz na plik.
 */

// Własna implementacja visit — eliminuje zależność ESM-only unist-util-visit
function visit(tree, type, visitor) {
  function walk(node, index, parent) {
    if (node.type === type) {
      const result = visitor(node, index, parent);
      if (typeof result === 'number') return result;
    }
    if (Array.isArray(node.children)) {
      for (let i = 0; i < node.children.length; i++) {
        const result = walk(node.children[i], i, node);
        if (typeof result === 'number') {
          i = result - 1; // visitor może zwrócić nowy index
        }
      }
    }
  }
  walk(tree, 0, null);
}
const path = require('path');
const fs = require('fs');

// ─── cache ────────────────────────────────────────────────────────────────────
const glossaryCache = new Map();
const CACHE_TTL = 5000;

function clearGlossaryCache(filePath) {
  if (filePath) glossaryCache.delete(filePath);
  else glossaryCache.clear();
}

// ─── walidacja JSON ───────────────────────────────────────────────────────────
function validateGlossaryTerms(data) {
  const errors = [];
  if (!data || typeof data !== 'object') {
    errors.push('Glossary data must be an object');
    return { terms: [], errors };
  }
  if (!Array.isArray(data.terms)) {
    errors.push('Field "terms" must be an array');
    return { terms: [], errors };
  }
  const validTerms = data.terms.filter((t, i) => {
    if (!t || typeof t !== 'object')              { errors.push(`terms[${i}]: not an object`);    return false; }
    if (typeof t.term !== 'string' || !t.term.trim()) { errors.push(`terms[${i}]: missing "term"`); return false; }
    if (typeof t.definition !== 'string')         { errors.push(`terms[${i}]: missing "definition"`); return false; }
    return true;
  });
  return { terms: validTerms, errors };
}

// ─── główna funkcja ───────────────────────────────────────────────────────────
function remarkGlossaryFirstOccurrence({
  terms = [],
  glossaryPath = null,
  routePath = '/glossary',
  siteDir = null,
  expandAcronymsOnFirstUse = false,
  linkOnlyFirstOccurrence = false,
} = {}) {

  // Wczytaj terminy z JSON (z cache)
  let glossaryTerms = terms;
  if (!glossaryTerms.length && glossaryPath && siteDir) {
    try {
      const absPath = path.resolve(siteDir, glossaryPath);
      const now = Date.now();
      const cached = glossaryCache.get(absPath);
      if (cached && now - cached.loadedAt < CACHE_TTL) {
        glossaryTerms = cached.terms;
      } else if (fs.existsSync(absPath)) {
        const raw = fs.readFileSync(absPath, 'utf8');
        let parsed;
        try { parsed = JSON.parse(raw); }
        catch (e) {
          console.error(`[glossary-plugin] JSON parse error in ${glossaryPath}:`, e.message);
          glossaryCache.set(absPath, { terms: [], loadedAt: now });
          return (tree) => tree;
        }
        const { terms: valid, errors } = validateGlossaryTerms(parsed);
        if (errors.length) errors.forEach(e => console.warn(`[glossary-plugin] ${e}`));
        glossaryTerms = valid;
        glossaryCache.set(absPath, { terms: valid, loadedAt: now });
        if (!cached && process.env.NODE_ENV !== 'production')
          console.log(`[glossary-plugin] Loaded ${valid.length} terms from ${glossaryPath}`);
      } else {
        glossaryCache.set(absPath, { terms: [], loadedAt: now });
        console.warn(`[glossary-plugin] File not found: ${glossaryPath}`);
      }
    } catch (e) {
      console.warn(`[glossary-plugin] Failed to load ${glossaryPath}:`, e.message);
    }
  }

  // Buduj mapę termin → dane
  const termMap = new Map();
  for (const termObj of glossaryTerms) {
    if (!termObj.term || termObj.autoLink === false) continue;
    const caseSensitive = termObj.caseSensitive === true;
    const register = (phrase) => {
      if (typeof phrase !== 'string' || !phrase.trim()) return;
      const key = phrase.toLowerCase();
      if (!termMap.has(key)) termMap.set(key, { termObj, phrase, caseSensitive });
    };
    register(termObj.term);
    if (Array.isArray(termObj.aliases)) termObj.aliases.forEach(register);
  }
  const sortedTerms = Array.from(termMap.entries()).sort((a, b) => b[0].length - a[0].length);
  if (!sortedTerms.length) return (tree) => tree;

  // ── helpers ──────────────────────────────────────────────────────────────

  function resolveDisplayText(match, text, seenTerms) {
    const { termObj } = match;
    if (!expandAcronymsOnFirstUse) return match.originalText;
    if (!termObj.abbreviation)     return match.originalText;
    if (seenTerms.has(termObj.term)) return match.originalText;
    const isCanonical =
      match.length === termObj.term.length &&
      match.originalText.toLowerCase() === termObj.term.toLowerCase();
    if (!isCanonical) return match.originalText;
    const lookback = text
      .substring(Math.max(0, match.index - termObj.abbreviation.length - 10), match.index)
      .toLowerCase();
    if (lookback.includes(termObj.abbreviation.toLowerCase())) return match.originalText;
    return `${termObj.abbreviation} (${match.originalText})`;
  }

  function replaceTermsInText(text, seenTerms) {
    if (!text) return [{ type: 'text', value: text }];

    const matches = [];

    for (const [lowerPhrase, { termObj, phrase, caseSensitive }] of sortedTerms) {
      if (linkOnlyFirstOccurrence && seenTerms.has(termObj.term)) continue;

      // Dokładne dopasowanie całego wyrażenia z Unicode word boundary.
      // (?<!\p{L}|\p{N}) — przed terminem nie może być litera/cyfra Unicode
      // (?!\p{L}|\p{N})  — po terminie nie może być litera/cyfra Unicode
      // Dzięki temu "post" NIE trafi w "postęp", "posterunek" itp.
      const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const flags   = caseSensitive ? 'gu' : 'giu';
      const regex   = new RegExp(`(?<!\\p{L}|\\p{N})${escaped}(?!\\p{L}|\\p{N})`, flags);

      let m;
      while ((m = regex.exec(text)) !== null) {
        matches.push({
          index: m.index,
          length: m[0].length,
          termObj,
          originalText: m[0],
        });
        if (linkOnlyFirstOccurrence) break;
      }
    }

    // Usuń nakładające się dopasowania
    matches.sort((a, b) => a.index - b.index);
    const picked = [];
    let lastEnd = 0;
    for (const m of matches) {
      if (m.index >= lastEnd) { picked.push(m); lastEnd = m.index + m.length; }
    }

    if (!picked.length) return [{ type: 'text', value: text }];

    const result = [];
    let cursor = 0;
    for (const match of picked) {
      if (match.index > cursor)
        result.push({ type: 'text', value: text.substring(cursor, match.index) });

      const displayText = resolveDisplayText(match, text, seenTerms);
      seenTerms.add(match.termObj.term);

      result.push({
        type: 'mdxJsxFlowElement',
        name: 'GlossaryTerm',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'term',       value: match.termObj.term },
          { type: 'mdxJsxAttribute', name: 'definition', value: match.termObj.definition || '' },
          { type: 'mdxJsxAttribute', name: 'routePath',  value: routePath },
        ],
        children: [{ type: 'text', value: displayText }],
      });
      cursor = match.index + match.length;
    }
    if (cursor < text.length)
      result.push({ type: 'text', value: text.substring(cursor) });

    return result;
  }

  // ── transformer ───────────────────────────────────────────────────────────
  return function transformer(tree) {
    let usedGlossaryTerm = false;

    const headingTextNodes = new WeakSet();
    visit(tree, 'heading', (h) => {
      visit(h, 'text', (t) => headingTextNodes.add(t));
    });

    const seenTerms = new Set(); // scope: jeden plik

    visit(tree, 'text', (node, index, parent) => {
      if (
        parent.type === 'code'              ||
        parent.type === 'inlineCode'        ||
        parent.type === 'link'              ||
        parent.type === 'mdxJsxFlowElement' ||
        parent.type === 'mdxJsxTextElement'
      ) return;
      if (headingTextNodes.has(node)) return;

      const replacements = replaceTermsInText(node.value, seenTerms);
      if (replacements.length === 1 && replacements[0].type === 'text') return;

      const newNodes = replacements.map((r) => {
        if (r.type === 'mdxJsxFlowElement' && parent.type === 'paragraph') {
          usedGlossaryTerm = true;
          return { type: 'mdxJsxTextElement', name: r.name,
                   attributes: r.attributes, children: r.children };
        }
        if (r.type === 'mdxJsxFlowElement') usedGlossaryTerm = true;
        return r;
      });

      parent.children.splice(index, 1, ...newNodes);
      return index + newNodes.length - 1;
    });

    if (usedGlossaryTerm) {
      const importNode = {
        type: 'mdxjsEsm',
        value: 'import GlossaryTerm from "@theme/GlossaryTerm";',
        data: {
          estree: {
            type: 'Program', sourceType: 'module',
            body: [{
              type: 'ImportDeclaration',
              specifiers: [{ type: 'ImportDefaultSpecifier',
                             local: { type: 'Identifier', name: 'GlossaryTerm' } }],
              source: { type: 'Literal', value: '@theme/GlossaryTerm',
                        raw: '"@theme/GlossaryTerm"' },
            }],
          },
        },
      };
      const hasImport = Array.isArray(tree.children) &&
        tree.children.some(
          (n) => n.type === 'mdxjsEsm' &&
                 (n.value?.includes('@theme/GlossaryTerm') ||
                  n.data?.estree?.body?.some((s) => s.source?.value === '@theme/GlossaryTerm'))
        );
      if (!hasImport) {
        if (!Array.isArray(tree.children)) tree.children = [];
        let insertAt = 0;
        for (let i = 0; i < tree.children.length; i++) {
          if (tree.children[i].type === 'yaml' || tree.children[i].type === 'toml')
            insertAt = i + 1;
          else break;
        }
        tree.children.splice(insertAt, 0, importNode);
      }
    }
  };
}

module.exports = remarkGlossaryFirstOccurrence;
module.exports.clearGlossaryCache = clearGlossaryCache;
