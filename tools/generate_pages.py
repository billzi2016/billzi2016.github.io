#!/usr/bin/env python3
"""Regenerate repeated static HTML fragments."""

from __future__ import annotations

import html
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
HEAD_TEMPLATE = (ROOT / "templates" / "head.html").read_text()

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
        "title": "Ziqian Bi | Personal Intro",
    },
    "music.html": {
        "title": "Ziqian Bi | Music",
        "description": "A small classical audio listening room with a shuffled playlist curated by Ziqian Bi.",
    },
}


def render_description(value: str | None) -> str:
    if not value:
        return ""
    escaped = html.escape(value, quote=True)
    return f'    <meta name="description" content="{escaped}" />\n'


def render_head(config: dict[str, str]) -> str:
    return (
        HEAD_TEMPLATE.replace("{{ title }}", html.escape(config["title"], quote=True))
        .replace("{{ description }}", render_description(config.get("description")))
        .rstrip()
    )


def replace_head(path: Path, head_html: str) -> bool:
    original = path.read_text()
    updated, count = re.subn(r"  <head>.*?  </head>\n*", f"{head_html}\n", original, count=1, flags=re.S)
    if count != 1:
        raise RuntimeError(f"Could not replace head in {path}")
    if updated == original:
        return False
    path.write_text(updated)
    return True


def main() -> None:
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
