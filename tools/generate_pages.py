#!/usr/bin/env python3
"""Tool: regenerate page-level <head> blocks from one shared template.

Purpose:
- Keep all top-level static pages aligned on the same favicon, stylesheet link,
  shared script tags, and common metadata structure.
- Allow page-specific title / description values to be injected from one local
  config map instead of hand-editing each HTML file.

Inputs:
- templates/head.html as the single shared head fragment template.
- The PAGES mapping in this file, which declares title / description per page.

Outputs:
- Rewrites the first <head>...</head> block in each configured top-level HTML
  page under the repository root.

Scope and boundaries:
- This tool only updates page head metadata and repeated head markup.
- It does not generate body content.
- It does not bump CSS / JS cache-busting versions.
- It does not touch external URLs beyond what already exists in the template.

Operational properties:
- Idempotent: running it repeatedly should not introduce extra diffs when files
  are already up to date.
- Single-block replacement: exactly one head block is expected per page.
"""

from __future__ import annotations

import html
import re
from pathlib import Path


# Tool root: always resolve against the repository root instead of the current
# working directory, so this script behaves the same no matter where it is run.
ROOT = Path(__file__).resolve().parents[1]

# Shared input template. The tool treats this file as the canonical source for
# repeated head markup, then injects page-specific metadata from PAGES below.
HEAD_TEMPLATE = (ROOT / "templates" / "head.html").read_text()

# Per-page metadata contract for head regeneration.
# Only pages that need SEO / sharing summary text should provide description.
PAGES = {
    "index.html": {
        "title": "Ziqian Bi | Home",
        "description": (
            "Ziqian Bi personal academic homepage for AI, ML, LLM, multimodal AI, "
            "medical AI, and ML systems roles."
        ),
    },
    "experience.html": {
        "title": "Ziqian Bi | Experience",
    },
    "projects.html": {
        "title": "Ziqian Bi | Projects",
    },
    "publications.html": {
        "title": "Ziqian Bi | Publications",
    },
    "personal.html": {
        "title": "Ziqian Bi | Personal Introduction",
    },
    "music.html": {
        "title": "Ziqian Bi | Music",
        "description": "A small classical audio listening room with a shuffled playlist curated by Ziqian Bi.",
    },
}


def render_description(value: str | None) -> str:
    # Escape attribute content before injecting it into <meta>.
    # The trailing newline preserves indentation for the next template line.
    if not value:
        return ""
    escaped = html.escape(value, quote=True)
    return f'    <meta name="description" content="{escaped}" />\n'


def render_head(config: dict[str, str]) -> str:
    # Keep the toolchain lightweight: simple placeholder replacement is enough.
    # rstrip() avoids accumulating blank-line diffs across repeated executions.
    return (
        HEAD_TEMPLATE.replace("{{ title }}", html.escape(config["title"], quote=True))
        .replace("{{ description }}", render_description(config.get("description")))
        .rstrip()
    )


def replace_head(path: Path, head_html: str) -> bool:
    original = path.read_text()
    # Replace only the first <head>...</head> block and consume trailing blank
    # lines so repeated runs remain idempotent.
    updated, count = re.subn(r"  <head>.*?  </head>\n*", f"{head_html}\n", original, count=1, flags=re.S)
    if count != 1:
        raise RuntimeError(f"Could not replace head in {path}")
    # False means the file already matches the rendered template output.
    if updated == original:
        return False
    path.write_text(updated)
    return True


def main() -> None:
    # Batch-update every configured top-level page. Adding a new page only
    # requires extending PAGES with its target filename and metadata.
    changed = []
    for filename, config in PAGES.items():
        if replace_head(ROOT / filename, render_head(config)):
            changed.append(filename)
    if changed:
        print("Updated:", ", ".join(changed))
    else:
        print("All page heads are up to date.")


if __name__ == "__main__":
    main()
