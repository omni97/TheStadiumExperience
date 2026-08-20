# The Stadium Experience

One-page site. Open `index.html` directly — no build step, no dependencies.

```
index.html          ~120 KB
assets/             ~2 MB
  hero-before.webp  hero reveal — stadium without the experience
  hero-after.webp   hero reveal — with LED boarding + light show
  *.webp / *.jpg    photos, icons, club logos
  logo.webp         header + footer wordmark
  favicon.webp      browser icon
```

## Notes

- The hero is a before/after reveal: drag (mouse or touch) to wipe between `hero-before.webp` and
  `hero-after.webp`. It runs a short intro sweep on load so the interaction is discoverable.
- Images were extracted from inline base64 to `assets/` and converted to WebP (~7.6 MB → 1.5 MB).
- ⚠️ `logo.webp` is only 128×128 — the source was inlined at that size, so the header logo (80 CSS px)
  renders soft on retina screens. Drop in a ≥256px version to fix.
- Copy is in NL / EN / FR / DE, in the `i18n` object at the bottom of `index.html`.
- The "in actie" section embeds a YouTube player and needs an internet connection.
- `prefers-reduced-motion` disables the hero intro sweep.
