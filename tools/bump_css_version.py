#!/usr/bin/env python3
"""Update the shared stylesheet cache-busting version in static HTML pages."""

from __future__ import annotations

import argparse
import re
from pathlib import Path


# ROOT 指向仓库根目录，确保脚本从任意工作目录运行时都能定位 HTML 文件。
ROOT = Path(__file__).resolve().parents[1]

# 当前站点的顶层静态 HTML 页面列表。
# 新增页面时，把文件名加入这里即可让版本号批量更新覆盖到它。
HTML_PAGES = [
    "index.html",
    "experience.html",
    "projects.html",
    "publications.html",
    "personal.html",
    "music.html",
]

# 只匹配 ./styles/main.css?v=... 这一类主样式入口。
# 捕获组 1 保留路径和 ?v= 前缀，捕获组 2 是要替换的版本号。
CSS_VERSION_RE = re.compile(r'(\./styles/main\.css\?v=)([^"]+)')


def update_page(path: Path, version: str) -> bool:
    original = path.read_text()
    # 用正则替换版本号，不改动 stylesheet 路径和其它 link 标签。
    updated, count = CSS_VERSION_RE.subn(rf"\g<1>{version}", original)
    if count == 0:
        raise RuntimeError(f"No main.css version found in {path}")
    # 返回 False 表示该页面已经是目标版本，方便脚本保持幂等输出。
    if updated == original:
        return False
    path.write_text(updated)
    return True


def main() -> None:
    # 示例：python3 tools/bump_css_version.py 20260624-1
    # 版本号本身不做格式限制，方便按日期、递增编号或任意发布标识使用。
    parser = argparse.ArgumentParser(description="Update ./styles/main.css?v=... across static pages.")
    parser.add_argument("version", help="New cache-busting version, for example 20260624-1")
    args = parser.parse_args()

    # 逐页更新并记录真正发生变化的文件，避免输出误导。
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
