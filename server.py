#!/usr/bin/env python3
"""本地静态站点启动脚本。

用途：
1. 直接在 `billzi2016.github.io` 目录下启动一个本地 HTTP 服务。
2. 解决 `file://` 打开时 MIDI 文件和前端脚本可能被浏览器拦截的问题。
3. 让你可以用 `http://localhost:6324` 这种地址稳定预览整个网站。

使用方式：
    python3 server.py
    python3 server.py --port 9000

说明：
- 这是一个只服务当前目录静态文件的小工具，不会改动网站内容。
- 代码注释写得比较细，方便你后面自己继续扩展。
"""

from __future__ import annotations

import argparse
import http.server
import socketserver
from pathlib import Path


class ReusableTCPServer(socketserver.TCPServer):
    """允许快速重启服务时复用端口，避免短时间内端口被占用。"""

    allow_reuse_address = True


def build_argument_parser() -> argparse.ArgumentParser:
    """构造命令行参数解析器。

    这里只暴露两个最常用参数：
    - host：监听地址，默认本机 localhost
    - port：监听端口，默认 6324
    """

    parser = argparse.ArgumentParser(description="启动个人网站的本地静态服务器。")
    parser.add_argument(
        "--host",
        default="127.0.0.1",
        help="要监听的主机地址，默认是 127.0.0.1。",
    )
    parser.add_argument(
        "--port",
        type=int,
        default=6324,
        help="要监听的端口，默认是 6324。",
    )
    return parser


def run_server(host: str, port: int) -> None:
    """在当前脚本所在目录启动静态文件服务。"""

    # 用脚本所在目录作为网站根目录，避免从别的路径启动时找错资源。
    site_root = Path(__file__).resolve().parent

    # Python 3.7+ 的 SimpleHTTPRequestHandler 支持 directory 参数，
    # 可以明确指定服务目录，而不需要改全局工作目录。
    handler = lambda *args, **kwargs: http.server.SimpleHTTPRequestHandler(  # noqa: E731
        *args,
        directory=str(site_root),
        **kwargs,
    )

    with ReusableTCPServer((host, port), handler) as httpd:
        print(f"Serving {site_root}")
        print(f"Open: http://{host}:{port}")
        print("Press Ctrl+C to stop.")
        httpd.serve_forever()


def main() -> None:
    """解析参数并启动服务。"""

    parser = build_argument_parser()
    args = parser.parse_args()
    run_server(args.host, args.port)


if __name__ == "__main__":
    main()
