#!/usr/bin/env python3
"""Update the shared stylesheet cache-busting version in static HTML pages."""

from __future__ import annotations

import argparse
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
HTML_PAGES = [
    "index.html",
    "experience.html",
    "projects.html",
    "publications.html",
    "personal.html",
    "music.html",
]
CSS_VERSION_RE = re.compile(r'(\./styles/main\.css\?v=)([^"]+)')


def update_page(path: Path, version: str) -> bool:
    original = path.read_text()
    updated, count = CSS_VERSION_RE.subn(rf"\g<1>{version}", original)
    if count == 0:
        raise RuntimeError(f"No main.css version found in {path}")
    if updated == original:
        return False
    path.write_text(updated)
    return True


def main() -> None:
    parser = argparse.ArgumentParser(description="Update ./styles/main.css?v=... across static pages.")
    parser.add_argument("version", help="New cache-busting version, for example 20260624-1")
    args = parser.parse_args()

    changed = []
    for filename in HTML_PAGES:
        if update_page(ROOT / filename, args.version):
            changed.append(filename)

    if changed:
        print("Updated CSS version in:", ", ".join(changed))
    else:
        print("All CSS versions already match.")


if __name__ == "__main__":
    main()
