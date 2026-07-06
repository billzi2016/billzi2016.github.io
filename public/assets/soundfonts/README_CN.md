本目录只作为占位目录保留。

完整钢琴采样集体积较大，因此不存放在网站仓库中。
如果需要在本地重新渲染音频，请把采样集放在部署网站之外，例如：

```text
../midi/site-grand-piano/
```

渲染脚本期望使用 Magenta `sgm_plus` 的 acoustic grand piano 采样，并采用如下目录结构：

```text
site-grand-piano/
  acoustic_grand_piano/
    p21_v127.mp3
    p22_v127.mp3
    ...
```

下载来源：

```text
https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus/acoustic_grand_piano/
```

单个采样文件 URL 模板：

```text
https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus/acoustic_grand_piano/p{pitch}_v{velocity}.mp3
```

网站使用的已生成音频文件存放在：

```text
assets/m4a/
```
