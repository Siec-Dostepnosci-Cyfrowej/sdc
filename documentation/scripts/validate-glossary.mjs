import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const glossaryPath = resolve(__dirname, '..', 'slownik', 'slownik.json');
const allowedDefinitionTypes = new Set(['legal', 'normative', 'official', 'industry', 'sdc']);

function fail(message, errors) {
  errors.push(message);
}

function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

const raw = await readFile(glossaryPath, 'utf8');
let glossary;

try {
  glossary = JSON.parse(raw);
} catch (error) {
  console.error(`❌ Nie można odczytać slownik.json: ${error.message}`);
  process.exit(1);
}

const errors = [];

if (!glossary || typeof glossary !== 'object' || Array.isArray(glossary)) {
  fail('Plik słownika musi zawierać obiekt JSON.', errors);
}

if (!Array.isArray(glossary?.terms)) {
  fail('Pole "terms" musi być tablicą.', errors);
}

const terms = Array.isArray(glossary?.terms) ? glossary.terms : [];
const canonicalByLower = new Map();
const aliasOwners = new Map();

for (const [index, entry] of terms.entries()) {
  const path = `terms[${index}]`;

  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
    fail(`${path}: wpis musi być obiektem.`, errors);
    continue;
  }

  if (typeof entry.term !== 'string' || !entry.term.trim()) {
    fail(`${path}: brak niepustego pola "term".`, errors);
    continue;
  }

  if (entry.term !== entry.term.trim()) {
    fail(`${path} (${entry.term}): pole "term" zawiera spacje na początku lub końcu.`, errors);
  }

  const canonicalKey = entry.term.toLocaleLowerCase('pl');
  if (canonicalByLower.has(canonicalKey)) {
    fail(`${path}: duplikat hasła "${entry.term}" (wcześniej: ${canonicalByLower.get(canonicalKey)}).`, errors);
  } else {
    canonicalByLower.set(canonicalKey, entry.term);
  }

  if (typeof entry.definition !== 'string' || !entry.definition.trim()) {
    fail(`${path} (${entry.term}): brak niepustej definicji.`, errors);
  } else if (entry.definition !== entry.definition.trim()) {
    fail(`${path} (${entry.term}): definicja zawiera spacje na początku lub końcu.`, errors);
  }

  if (!allowedDefinitionTypes.has(entry.definitionType)) {
    fail(
      `${path} (${entry.term}): nieprawidłowy definitionType "${entry.definitionType}". Dozwolone: ${[...allowedDefinitionTypes].join(', ')}.`,
      errors,
    );
  }

  if (entry.aliases !== undefined && !Array.isArray(entry.aliases)) {
    fail(`${path} (${entry.term}): "aliases" musi być tablicą.`, errors);
  }

  for (const alias of Array.isArray(entry.aliases) ? entry.aliases : []) {
    if (typeof alias !== 'string' || !alias.trim()) {
      fail(`${path} (${entry.term}): alias musi być niepustym tekstem.`, errors);
      continue;
    }

    const aliasKey = alias.toLocaleLowerCase('pl');
    if (aliasKey === canonicalKey) {
      fail(`${path} (${entry.term}): alias "${alias}" powtarza hasło kanoniczne.`, errors);
    }

    if (aliasOwners.has(aliasKey) && aliasOwners.get(aliasKey) !== entry.term) {
      fail(
        `${path} (${entry.term}): alias "${alias}" jest już przypisany do hasła "${aliasOwners.get(aliasKey)}".`,
        errors,
      );
    } else {
      aliasOwners.set(aliasKey, entry.term);
    }
  }

  if (entry.relatedTerms !== undefined && !Array.isArray(entry.relatedTerms)) {
    fail(`${path} (${entry.term}): "relatedTerms" musi być tablicą.`, errors);
  }

  if (entry.references !== undefined && !Array.isArray(entry.references)) {
    fail(`${path} (${entry.term}): "references" musi być tablicą.`, errors);
  }

  const references = Array.isArray(entry.references) ? entry.references : [];

  if (entry.definitionType && entry.definitionType !== 'sdc' && references.length === 0) {
    fail(`${path} (${entry.term}): definicja typu "${entry.definitionType}" wymaga co najmniej jednego źródła w "references".`, errors);
  }

  for (const [referenceIndex, reference] of references.entries()) {
    const referencePath = `${path}.references[${referenceIndex}]`;

    if (!reference || typeof reference !== 'object' || Array.isArray(reference)) {
      fail(`${referencePath}: źródło musi być obiektem.`, errors);
      continue;
    }

    if (typeof reference.label !== 'string' || !reference.label.trim()) {
      fail(`${referencePath}: brak niepustego "label".`, errors);
    }

    if (typeof reference.url !== 'string' || !isHttpUrl(reference.url)) {
      fail(`${referencePath}: "url" musi być bezwzględnym adresem HTTP(S).`, errors);
    }

    const sourceText = `${reference.label ?? ''} ${reference.url ?? ''}`.toLocaleLowerCase('pl');
    if (sourceText.includes('lab dostępności') || sourceText.includes('labdostepnosci.pl')) {
      fail(
        `${referencePath}: Lab Dostępności może być materiałem pomocniczym, ale nie źródłem kanonicznym definicji SDC.`,
        errors,
      );
    }
  }
}

const canonicalTerms = new Set(terms.map((entry) => entry?.term).filter((term) => typeof term === 'string'));
const canonicalLower = new Map([...canonicalTerms].map((term) => [term.toLocaleLowerCase('pl'), term]));

for (const [index, entry] of terms.entries()) {
  if (!entry || typeof entry.term !== 'string') continue;

  for (const related of Array.isArray(entry.relatedTerms) ? entry.relatedTerms : []) {
    if (typeof related !== 'string' || !related.trim()) {
      fail(`terms[${index}] (${entry.term}): relatedTerms zawiera pustą lub nieprawidłową wartość.`, errors);
      continue;
    }

    if (related === entry.term) {
      fail(`terms[${index}] (${entry.term}): relatedTerms nie może wskazywać własnego hasła.`, errors);
    }

    if (!canonicalTerms.has(related)) {
      const caseVariant = canonicalLower.get(related.toLocaleLowerCase('pl'));
      if (caseVariant) {
        fail(
          `terms[${index}] (${entry.term}): relatedTerms "${related}" ma nieprawidłową wielkość liter; użyj "${caseVariant}".`,
          errors,
        );
      } else {
        fail(`terms[${index}] (${entry.term}): relatedTerms wskazuje nieistniejące hasło "${related}".`, errors);
      }
    }
  }
}

for (const [aliasKey, owner] of aliasOwners.entries()) {
  const canonical = canonicalByLower.get(aliasKey);
  if (canonical && canonical !== owner) {
    fail(`Alias hasła "${owner}" koliduje z kanonicznym hasłem "${canonical}".`, errors);
  }
}

const sortedTerms = [...canonicalTerms].sort((a, b) => a.localeCompare(b, 'pl'));
const actualTerms = terms.map((entry) => entry?.term).filter((term) => typeof term === 'string');

for (let index = 0; index < Math.min(sortedTerms.length, actualTerms.length); index += 1) {
  if (sortedTerms[index] !== actualTerms[index]) {
    fail(
      `Hasła nie są posortowane alfabetycznie. Na pozycji ${index + 1} oczekiwano "${sortedTerms[index]}", jest "${actualTerms[index]}".`,
      errors,
    );
    break;
  }
}

if (errors.length > 0) {
  console.error(`❌ Walidacja słownika nie powiodła się (${errors.length} problemów):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

const counts = terms.reduce((acc, entry) => {
  acc[entry.definitionType] = (acc[entry.definitionType] ?? 0) + 1;
  return acc;
}, {});

console.log(`✅ Słownik poprawny: ${terms.length} haseł.`);
console.log(
  `   Typy definicji: ${Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([type, count]) => `${type}=${count}`)
    .join(', ')}.`,
);
