This directory is intentionally kept as a placeholder.

The full piano sample set is not stored in the website repository because it is large.
For local audio rendering, keep the sample set outside the deployed site, for example:

```text
../midi/site-grand-piano/
```

The renderer expects the Magenta `sgm_plus` acoustic grand piano samples in this shape:

```text
site-grand-piano/
  acoustic_grand_piano/
    p21_v127.mp3
    p22_v127.mp3
    ...
```

Download source:

```text
https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus/acoustic_grand_piano/
```

Individual sample URL pattern:

```text
https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus/acoustic_grand_piano/p{pitch}_v{velocity}.mp3
```

Generated website audio files are stored in:

```text
assets/m4a/
```
