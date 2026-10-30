#!/usr/bin/env node
// Builds the SVG sprite static/img/images.svg from source SVG files.
// Each source SVG is wrapped in a <symbol id="...">. To add a new SVG, append
// its file name to FILES and rerun this script (npm run build:sprite).
//
// Usage: node scripts/build-images-sprite.js (from the documentation/ directory)
'use strict';

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'static', 'img');
const OUT = path.join(SRC_DIR, 'images.svg');

// Source SVG files; each becomes a <symbol> in the sprite.
const FILES = ['joo-01.svg', 'joo-03.svg', 'joo-04.svg'];

const symbols = [];
const namespaces = new Set();

for (const file of FILES) {
  const svgId = file.replace('.svg', '');
  const svgPath = path.join(SRC_DIR, file);
  const content = fs.readFileSync(svgPath, 'utf8');

  // Collect namespace declarations from the source <svg> so prefixed elements
  // (e.g. inkscape:, sodipodi:) stay well-formed in the sprite.
  const openingMatch = content.match(/<svg\b[^>]*>/i);
  if (openingMatch !== null) {
    const namespaceMatches = openingMatch[0].match(/xmlns:[\w-]+="[^"]*"/g);
    if (namespaceMatches !== null) {
      for (const declaration of namespaceMatches) {
        namespaces.add(declaration);
      }
    }
  }

  // Extract the inner content of <svg ...>...</svg> (skip the opening and closing tags).
  const innerMatch = content.match(/<svg\b[^>]*>([\s\S]*?)<\/svg>/i);
  if (innerMatch === null) {
    throw new Error(`Could not find SVG inner content in ${svgPath}`);
  }

  const viewBoxMatch = content.match(/<svg\b[^>]*viewBox="([^"]*)"/i);
  const viewBox = viewBoxMatch === null ? '0 0 600 600' : viewBoxMatch[1];

  let inner = innerMatch[1].trim();

  // Prefix CSS class names with the symbol id so rules from different symbols
  // do not clash inside the shared sprite document.
  inner = inner.replace(/\bcls-(\d+)/g, `${svgId}-cls-$1`);

  // Strip id and xmlns attributes to avoid duplicate IDs in the DOM.
  const cleaned = inner
    .replace(/ id="[^"]*"/g, '')
    .replace(/ xmlns="[^"]*"/g, '');

  symbols.push(`<symbol id="${svgId}" viewBox="${viewBox}">${cleaned}</symbol>`);
  console.log('added symbol:', svgId, '(', cleaned.length, 'chars)');
}

const namespaceAttributes = Array.from(namespaces).join(' ');
const rootAttributes = namespaceAttributes.length > 0
  ? `xmlns="http://www.w3.org/2000/svg" ${namespaceAttributes}`
  : 'xmlns="http://www.w3.org/2000/svg"';

const sprite = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  `<svg ${rootAttributes}>`,
  symbols.join('\n'),
  '</svg>',
].join('\n') + '\n';

fs.writeFileSync(OUT, sprite, 'utf8');
console.log('wrote sprite:', OUT, (sprite.length / 1024).toFixed(1), 'KB');