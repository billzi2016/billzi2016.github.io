#!/usr/bin/env python3
"""Update cache-busting versions for local CSS and JavaScript assets."""

from __future__ import annotations

import argparse
import json
import re
import time
from pathlib import Path


# ROOT 指向仓库根目录，确保脚本从任意目录执行时都能定位页面、模板和资源引用。
ROOT = Path(__file__).resolve().parents[1]

# 本地回退日志。它记录每次 bump 前后的完整文件内容，已在 .gitignore 中忽略。
LOG_PATH = ROOT / ".asset-version-log.jsonl"

# 顶层静态页面。新增 HTML 页面时，把文件名加入这里，版本号更新就会自动覆盖。
HTML_PAGES = [
    "index.html",
    "experience.html",
    "projects.html",
    "publications.html",
    "personal.html",
    "music.html",
]

# head 模板也必须更新，否则下次运行 generate_pages.py 会把 HTML 的 CSS 版本退回旧值。
TEMPLATE_FILES = ["templates/head.html"]

# 只更新本地静态资源的 ?v= 版本号：
# - ./styles/main.css?v=...
# - ./scripts/*.js?v=...
# 不碰外部 URL，也不碰没有版本号的数据文件。
ASSET_VERSION_RE = re.compile(r'((?:\./styles/main\.css|\./scripts/[^"?]+\.js)\?v=)([^"]+)')


def target_files() -> list[Path]:
    return [ROOT / filename for filename in HTML_PAGES + TEMPLATE_FILES]


def update_file(path: Path, version: str) -> dict[str, object]:
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
    if not LOG_PATH.exists():
        raise RuntimeError("No asset version log found; nothing to roll back.")
    lines = [line for line in LOG_PATH.read_text().splitlines() if line.strip()]
    if not lines:
        raise RuntimeError("Asset version log is empty; nothing to roll back.")
    return json.loads(lines[-1])


def rollback_last() -> None:
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
    # 示例：python3 tools/bump_asset_version.py 20260624-2
    # 版本号不强制格式，方便按日期、发布批次或手动编号使用。
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
