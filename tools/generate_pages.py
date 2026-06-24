#!/usr/bin/env python3
"""Regenerate repeated static HTML fragments."""

from __future__ import annotations

import html
import re
from pathlib import Path


# ROOT 指向仓库根目录，而不是 tools/ 目录本身。
# 这样无论从仓库根目录还是其它目录执行脚本，都能稳定找到模板和页面文件。
ROOT = Path(__file__).resolve().parents[1]

# 公共 head 模板只维护一份；具体页面标题和 description 由下面的 PAGES 配置注入。
HEAD_TEMPLATE = (ROOT / "templates" / "head.html").read_text()

# 每个静态页面的 head 元数据配置。
# 只有确实需要 SEO/分享摘要的页面才写 description；没有 description 的页面会生成更简洁的 head。
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
    # description 需要 HTML escape，避免引号或特殊字符破坏 meta 标签。
    # 返回值末尾带换行，是为了模板里的下一行 link 保持正常缩进。
    if not value:
        return ""
    escaped = html.escape(value, quote=True)
    return f'    <meta name="description" content="{escaped}" />\n'


def render_head(config: dict[str, str]) -> str:
    # 用最简单的字符串替换即可，不引入模板引擎，保持这个静态站的工具链轻量。
    # rstrip() 用来去掉模板文件末尾换行，保证重复运行脚本时不会不断插入空行。
    return (
        HEAD_TEMPLATE.replace("{{ title }}", html.escape(config["title"], quote=True))
        .replace("{{ description }}", render_description(config.get("description")))
        .rstrip()
    )


def replace_head(path: Path, head_html: str) -> bool:
    original = path.read_text()
    # 只替换第一个 <head>...</head> 区块，并吞掉后面可能已有的空行。
    # 这样脚本是幂等的：连续运行多次，不会制造重复换行或额外 diff。
    updated, count = re.subn(r"  <head>.*?  </head>\n*", f"{head_html}\n", original, count=1, flags=re.S)
    if count != 1:
        raise RuntimeError(f"Could not replace head in {path}")
    # 返回 False 表示页面本来就是最新状态，调用方可以据此输出更清楚的结果。
    if updated == original:
        return False
    path.write_text(updated)
    return True


def main() -> None:
    # 批量处理 PAGES 里的静态页面。新增页面时，只需要在 PAGES 里补一项。
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
