# 工具脚本

这个目录存放仓库维护脚本。

这里的文件是源码工具，不是公开网站资产。除非确实希望访客下载，否则不要把工具脚本放进 `public/`。

## `render_piano_m4a.py`

离线工具，用于把本地 MIDI 文件渲染成只包含钢琴音色的 M4A。

默认路径：

- 输入 MIDI：`public/assets/midi/`
- 输出 M4A：`public/assets/m4a/`
- 钢琴采样：`public/assets/soundfonts/site-grand-piano/acoustic_grand_piano/`

依赖：

- Python 3
- `numpy`
- `scipy`
- `ffmpeg`

示例：

```bash
python3 tools/render_piano_m4a.py
```

需要时可以覆盖路径：

```bash
python3 tools/render_piano_m4a.py --input public/assets/midi --output public/assets/m4a
```
