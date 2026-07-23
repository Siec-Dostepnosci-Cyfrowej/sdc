#!/usr/bin/env python3
"""
Normalize ASCII double quotes to Polish-style quotation marks „..." in Markdown files.

Rules:
- Only processes prose text (skips code blocks, inline code, HTML attributes, YAML frontmatter)
- Converts "text" to „text" where text does not contain newlines
- Does not touch already-correct „..." pairs
- Does not touch quotes inside code fences (```...```), inline code (`...`),
  HTML tags, or JSON-LD blocks
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PATTERNS = ['documentation/**/*.md', '*.md']
EXCLUDES = {'node_modules'}


def normalize_quotes(text: str) -> str:
    """Replace ASCII double-quoted strings with Polish-style quotes in prose only."""

    # Split into zones: protected (code/YAML) vs prose
    # We'll reconstruct the file keeping protected zones intact.

    lines = text.split('\n')
    result = []
    in_frontmatter = False
    in_code_block = False

    i = 0
    while i < len(lines):
        line = lines[i]

        # --- YAML frontmatter ---
        if i == 0 and line.strip() == '---':
            in_frontmatter = True
            result.append(line)
            i += 1
            continue
        if in_frontmatter:
            result.append(line)
            if i > 0 and line.strip() == '---':
                in_frontmatter = False
            i += 1
            continue

        # --- Fenced code blocks ---
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            result.append(line)
            i += 1
            continue
        if in_code_block:
            result.append(line)
            i += 1
            continue

        # --- Prose line: normalize quotes ---
        result.append(_normalize_line(line))
        i += 1

    return '\n'.join(result)


def _normalize_line(line: str) -> str:
    """Replace "..." with „..." on a single prose line, skipping protected spans."""

    # Extract protected spans (inline code, HTML tags, HTML entities, URLs)
    protected = []
    placeholder = '\x00{}\x00'

    def store(m):
        idx = len(protected)
        protected.append(m.group(0))
        return placeholder.format(idx)

    # Order matters: inline code first, then HTML tags, then URLs, then already-correct quotes
    out = re.sub(r'`[^`]+`', store, line)          # inline code
    out = re.sub(r'<[^>]+>', store, out)            # HTML tags
    out = re.sub(r'https?://\S+', store, out)       # URLs
    out = re.sub(r'„[^"]*"', store, out)            # already-correct Polish quotes

    # Now replace "..." pairs with „..."
    # Match opening " followed by non-quote chars, then closing "
    out = re.sub(r'"([^"]*)"', r'„\1"', out)

    # Restore protected spans
    for idx, original in enumerate(protected):
        out = out.replace(placeholder.format(idx), original)

    return out


def main() -> int:
    changed = 0
    for pattern in PATTERNS:
        for path in sorted(ROOT.glob(pattern)):
            if not path.is_file():
                continue
            if any(part in EXCLUDES for part in path.parts):
                continue
            original = path.read_text(encoding='utf-8')
            normalized = normalize_quotes(original)
            if normalized != original:
                path.write_text(normalized, encoding='utf-8')
                print(f'  fixed: {path.relative_to(ROOT)}')
                changed += 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
