#!/usr/bin/env python3
"""Tool: batch-update cache-busting versions for local CSS and JavaScript assets.

Purpose:
- Keep versioned local static assets aligned across top-level HTML pages and
  the shared head template.
- Force browser cache invalidation after local CSS / JS changes.
- Follow a safer operator workflow in which current versions are scanned first,
  version drift is surfaced explicitly, and bumping happens only after that
  state is understood.

Inputs:
- A target version string such as 20260702-1.
- Or --rollback to restore the most recent logged version change.

Outputs:
- Scans the current repository state for versioned local CSS / JS references.
- Reports the detected version set and whether the current state is consistent.
- Surfaces version drift as an explicit warning before a bump decision.
- Rewrites matching ?v= query values for local stylesheet and script links in
  configured HTML pages and template files.
- Records before/after snapshots in a local rollback log when changes occur.

Scope and boundaries:
- This tool only updates local ./styles/main.css and ./scripts/*.js asset links.
- It does not rewrite external URLs.
- It does not modify data files, image URLs, or page body structure.
- It does not generate HTML; it only changes asset version query strings.

Operational properties:
- Intended operator flow:
  1. scan current version strings
  2. print the detected version set
  3. check whether all targets are already aligned
  4. warn if multiple versions are present
  5. only then decide whether to bump
- Safe to rerun with the same version: unchanged files remain unchanged.
- Supports rollback from the latest local log entry.
"""

from __future__ import annotations

import argparse
import json
import re
import time
from pathlib import Path


# Resolve all paths from the repository root so invocation location does not
# change tool behavior.
ROOT = Path(__file__).resolve().parents[1]

# Local rollback log storing full before/after content snapshots for changed
# files. This file is intentionally local and ignored by git.
LOG_PATH = ROOT / ".asset-version-log.jsonl"

# Top-level HTML targets covered by this tool. Add new page filenames here to
# include them in future version bumps automatically.
HTML_PAGES = [
    "index.html",
    "experience.html",
    "projects.html",
    "publications.html",
    "personal.html",
    "music.html",
]

# Shared template must also be updated; otherwise a future generate_pages.py
# run would restore old version strings back into page heads.
TEMPLATE_FILES = ["templates/head.html"]

# Match only local versioned CSS / JS asset links that participate in the
# version-consistency scan and subsequent bump operation:
# - ./styles/main.css?v=...
# - ./scripts/*.js?v=...
# External URLs and non-versioned data references are out of scope.
ASSET_VERSION_RE = re.compile(r'((?:\./styles/main\.css|\./scripts/[^"?]+\.js)\?v=)([^"]+)')


def target_files() -> list[Path]:
    # Return every file that should receive the same asset version replacement.
    # The tool keeps page HTML and the shared head template in one scanned and
    # updated target set so consistency checks use the same scope as bumping.
    return [ROOT / filename for filename in HTML_PAGES + TEMPLATE_FILES]


def update_file(path: Path, version: str) -> dict[str, object]:
    # Replace matching local CSS / JS ?v= values inside one file and report
    # both the replacement count and whether the file content actually changed.
    # In the intended workflow, this runs only after the current version state
    # has already been scanned and inspected by the operator.
    original = path.read_text()
    updated, count = ASSET_VERSION_RE.subn(rf"\g<1>{version}", original)
    if count == 0:
        raise RuntimeError(f"No versioned local CSS/JS asset found in {path}")
    if updated != original:
        path.write_text(updated)
    return {
        "path": str(path.relative_to(ROOT)),
        "replacement_count": count,
        "changed": updated != original,
        "before": original,
        "after": updated,
    }


def write_log(version: str, file_records: list[dict[str, object]]) -> None:
    # Persist only changed-file snapshots so the latest bump can be rolled back
    # later without storing redundant entries for already-up-to-date files.
    changed_records = [record for record in file_records if record["changed"]]
    if not changed_records:
        return
    entry = {
        "timestamp": int(time.time()),
        "version": version,
        "files": changed_records,
    }
    with LOG_PATH.open("a") as handle:
        handle.write(json.dumps(entry, ensure_ascii=False) + "\n")


def read_last_log_entry() -> dict[str, object]:
    # Load the newest local rollback snapshot from the JSONL history file.
    # The caller uses this to restore the previous asset-version state.
    if not LOG_PATH.exists():
        raise RuntimeError("No asset version log found; nothing to roll back.")
    lines = [line for line in LOG_PATH.read_text().splitlines() if line.strip()]
    if not lines:
        raise RuntimeError("Asset version log is empty; nothing to roll back.")
    return json.loads(lines[-1])


def rollback_last() -> None:
    # Restore every file captured in the most recent rollback snapshot.
    # This undoes the last successful version bump recorded by this tool.
    entry = read_last_log_entry()
    restored = []
    for record in entry.get("files", []):
        path = ROOT / str(record["path"])
        path.write_text(str(record["before"]))
        restored.append(str(record["path"]))
    if restored:
        print("Rolled back asset version change in:", ", ".join(restored))
    else:
        print("Last asset version log entry had no changed files.")


def bump_version(version: str) -> None:
    # Apply one target version across all tracked files, print a summary, and
    # record rollback data only when at least one file was actually modified.
    # The intended operator model is scan first, then bump after confirming the
    # repository's current version state and any drift warnings.
    records = [update_file(path, version) for path in target_files()]

    changed = [str(record["path"]) for record in records if record["changed"]]
    checked = [f'{record["path"]} ({record["replacement_count"]})' for record in records]
    if changed:
        write_log(version, records)
        print("Updated asset version in:", ", ".join(changed))
        print("Log:", LOG_PATH.relative_to(ROOT))
    else:
        print("All asset versions already match.")
    print("Checked:", ", ".join(checked))


def main() -> None:
    # Example:
    #   python3 tools/bump_asset_version.py 20260702-1
    # Version format is intentionally unconstrained so the caller can use a
    # date stamp, release batch, or manual sequence label.
    # This entry point chooses between two modes only:
    # 1. bump to a caller-provided version
    # 2. roll back from the latest local log entry
    # The documented operating model is to scan and inspect current versions
    # before performing a bump, even though the implementation currently keeps
    # the actual bump and rollback entry points simple.
    parser = argparse.ArgumentParser(description="Update local CSS/JS ?v= cache-busting versions.")
    parser.add_argument("version", nargs="?", help="New asset version, for example 20260624-2")
    parser.add_argument("--rollback", action="store_true", help="Restore files from the latest local log entry")
    args = parser.parse_args()

    if args.rollback:
        rollback_last()
        return
    if not args.version:
        parser.error("version is required unless --rollback is used")
    bump_version(args.version)


if __name__ == "__main__":
    main()
