# The Stadium Experience

One-page site. Open `index.html` directly — no build step, no dependencies.

```
index.html          ~116 KB
assets/             ~20 MB  (images + hero video)
  intro-video.mp4   hero background video
  bg-*.webp         section background photos
  icon-*.webp       card / process / contact icons
  <club>.webp       reference logos
```

## Notes

- Images were extracted from inline base64 to `assets/` and converted to WebP (~7.6 MB → 1.7 MB).
- The hero video (`assets/intro-video.mp4`, 17.9 MB) is the largest file. Re-encoding to 1080p / CRF 28
  brings it to ~4 MB without visible loss:
  `ffmpeg -i intro-video.mp4 -vf scale=1920:-2 -c:v libx264 -crf 28 -an -movflags +faststart out.mp4`
  (`-an` strips audio — the hero plays muted.)
- Copy is in NL / EN / FR / DE, in the `i18n` object at the bottom of `index.html`.
- The "in actie" section embeds a YouTube player and needs an internet connection.
- `prefers-reduced-motion` disables the hero video and falls back to a static background.
