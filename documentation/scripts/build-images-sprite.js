#!/usr/bin/env node
// Builds the SVG sprite static/img/images.svg from source SVG files.
// Each source SVG is wrapped in a <symbol id="...">. Future SVGs can be appended
// to the sprite by adding more entries to FILES.
//
// Usage: node scripts/build-images-sprite.js (from the documentation/ directory)
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'static', 'img');
const OUT = path.join(ROOT, 'static', 'img', 'images.svg');

// Source SVG files; each becomes a <symbol> in the sprite.
const FILES = ['joo-01.svg', 'joo-03.svg', 'joo-04.svg'];

const symbols = [];

for (const file of FILES) {
  const svgId = file.replace('.svg', '');
  const svgPath = path.join(SRC_DIR, file);
  const content = fs.readFileSync(svgPath, 'utf8');

  // Extract the inner content of <svg ...>...</svg> (skip the opening and closing tags).
  const innerMatch = content.match(/<svg\b[^>]*>([\s\S]*?)<\/svg>/i);
  if (!innerMatch) {
    throw new Error('Could not find SVG inner content in ' + svgPath);
  }

  const inner = innerMatch[1].trim();

  // Strip id and xmlns attributes to avoid duplicate IDs in the DOM.
  const cleaned = inner
    .replace(/ id="[^"]*"/g, '')
    .replace(/ xmlns="[^"]*"/g, '');

  symbols.push('<symbol id="' + svgId + '" viewBox="0 0 600 600">' + cleaned + '</symbol>');
  console.log('added symbol:', svgId, '(', cleaned.length, 'chars)');
}

const sprite = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="display:none;">',
  symbols.join('\n'),
  '</svg>',
].join('\n') + '\n';

fs.writeFileSync(OUT, sprite, 'utf8');
console.log('wrote sprite:', OUT, (sprite.length / 1024).toFixed(1), 'KB');

