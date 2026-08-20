# BrightBoard Design System

> **We brighten your brand.** — the design language of BrightBoard, Belgium's
> LED-technology specialist for sport, events and retail.

---

## 1. Company & product context

**BrightBoard BV** (Zone 5 Mollem 318, 1730 Asse, Belgium · +32 (0)2 486 06 20 · info@brightboard.eu)
is an LED-technology company with **17+ years** of experience (partner of the KBVB / Royal Belgian FA
since 2008). They **design, produce, sell, rent, install, program and operate** LED displays worldwide —
from the Longines Global Champions Tour and Belgian Pro League stadiums to UEFA Champions League matches,
plus retail, corporate and industrial installations.

Tagline: **"Brightens your brand"** (the formal lockup set in light, letter-spaced caps under the wordmark) — also voiced as **"We brighten your brand."** in headlines. Everything aims for a **"WOW" experience**.

### Products & sub-brands
- **BrightSports** — LED boarding, scoreboards, LED canopies, outdoor screens & totems for clubs, stadia and events (incl. equestrian). UEFA-grade *SportsPerimeter*.
- **BrightScreens** — LED/LCD for retail, shops, corporate, government.
- **BrightIndustries** — information displays for industrial environments.
- **BrightDesign** — seamless architectural LED integration.
- **BrightMobile** — mobile/trailer LED, 360° rotating screens.
- **BrightServices** — content creation, maintenance Carepacks, **24/7 support**, operators on-site.
- **BrightBoard 360°** — integrated show lighting, pyro and boarding visuals for fan experience.

Clients referenced in copy: KAA Gent, R. Antwerp FC, KV Mechelen, SV Zulte Waregem, Union SG,
KVC Westerlo, STVV, FC Dender, RWDM, the Red Devils, Skoda Belgium, De Lange Munte.

### Sources used to build this system
- Uploaded logos: `uploads/BrightBoard logo bo.png` (black-out, for light bg), `uploads/BrightBoard logo wo.png` (white-out, for dark bg).
- Uploaded quotation PDF: `uploads/Jumping Goch- LED Perimeter.pdf` — real project spec (140 m boarding, 70 cabinets, pitch 6.25, 320×144 px/panel, 6500–7500 nits, >7680 Hz refresh) and the company's terms. Drives the Control-software UI kit context.
- Public site **brightboard.eu** (EN) — product taxonomy, copy voice, client list.
- LinkedIn (company) — sub-brand list, "WE BRIGHTEN YOUR BRAND", 11-year screen lifetime claim.

> No source codebase or Figma was provided — components and UI kits are original recreations built
> to match the brand's visual language and site copy.

---

## 2. Content fundamentals (voice & tone)

- **Confident, benefit-led, energetic.** Sells outcomes — visibility, fan experience, sponsor revenue, ROI — not specs alone. The recurring payoff word is **"shine"** ("clubs already shining with BrightBoard") and the **"WOW"** experience.
- **"You / your"** second person, addressing the club or brand owner. BrightBoard is **"we / our"**. Warm and partnership-oriented ("we take care of you before, during and after the event").
- **Casing:** Sentence case for body and most headings. **Mono UPPERCASE** for eyebrows/labels/specs (e.g. `TOTAL LED SOLUTIONS`, `LED BOARDING · INDOOR`). The wordmark is all-caps **BRIGHT**+**BOARD**.
- **Numbers & specs are proof.** Lead with concrete figures: `254 m boarding`, `7500 nits`, `>7680 Hz`, `17+ years`, `since 2008`, `24/7`. Render hero numbers in the dot-matrix LED face.
- **Bilingual reality:** the business operates in Dutch/Flemish + English. Default deliverables to **English** unless asked; Dutch is fine for BE-facing work.
- **No emoji** in product/marketing UI. (Social posts use a few — 🔥🚀 — but keep them out of the product surfaces.)
- **Punchy CTAs:** "Request a quote", "Discover", "Ready to shine?", "Watch showreel".

Example lines to emulate:
> "We brighten your brand." · "One partner, every screen." · "Razor-sharp visuals, maximum impact." ·
> "These clubs are already shining with BrightBoard." · "Ready to shine?"

---

## 3. Visual foundations

**Palette.** Three pillars, exactly as the brand states: **amber-orange + warm near-black (ink) + white**, on a **warm** grey scale. Orange (`--bb-orange-500 #F28A00`, sampled from the wordmark) is the single hero accent — used sparingly for the one primary action, live/glow states, and brand moments. **Text on orange is INK, never white.** Ink (`--bb-ink-950 #0D0B0A`) is the "screen-off" black and the default dark/"stadium" surface. Semantic status uses an LED-green (online/live), amber (standby), red (fault/offline). A separate **raw RGB LED-pixel** set (`--led-red/green/blue/amber`) is reserved for display/scoreboard mockups.

**Typography.** `Archivo` (grotesque) for display + UI — headings are heavy (800/900), tight tracking (`-0.02 to -0.03em`), balanced wrap. `DotGothic16` is the **signature dot-matrix face** for scoreboards, tickers and hero numerals only (never body). `Space Mono` for eyebrows, labels and technical specs (uppercase, wide `0.12em` tracking). Body is Archivo 400/500 at 16px / 1.5. **These are Google-Fonts substitutes — see caveat in §6.**

**The core motif: the LED pixel.** The wordmark is built from circular dots; the whole system echoes it — a glowing dot in the eyebrow, the **fading dotted rule** (`.bb-dotrule`) that divides the letterhead (dense at the logo, fading out across the page), `.bb-dotgrid` radial-dot background textures (on ink, light, amber), and the `LEDPanel` component (glowing dot-matrix text on a dark board with a CRT scanline).

**Letterhead & documents.** Formal materials (quotes/offers — a core BrightBoard artifact) follow a fixed system: `Logo` + tagline top-left, a mono section eyebrow top-right, the fading dotted rule beneath; a grey fading dotted rule + mono uppercase contact line as footer. Titles on formal documents use a **lighter, letter-spaced display treatment** (e.g. "VOTRE DEVIS" in light tracked orange) — distinct from the heavy 900-weight web hero. **Tables** use solid **orange category bars** (white text), a light-grey header row, thin warm-grey row borders, mono numerals for prices, and a grey total row. See `ui_kits/quotation/`.

**Backgrounds.** Two modes. **Ink/"stadium"** (dark, dot-grid texture, orange radial bloom in a corner) for hero, control software, footers, brand moments. **Light** (warm `--bb-grey-50` page, white cards) for content sections. No busy gradients — the only "gradient" is a soft orange **radial glow/bloom**. Real installations should use **warm, high-contrast photography** of screens lit up in venues.

**Corners & geometry.** Confident, slightly hard-edged (LED-cabinet feel): controls/cards `10–14px`, large panels `20–28px`, pills for badges/tags. Nothing pill-soft except chips.

**Elevation & glow.** Warm-tinted shadows on light (`--shadow-xs…xl`). The signature emphasis is the **orange LED bloom** (`--glow-orange`, `--glow-orange-lg`) and coloured `box-shadow` glows on live dots, switches and progress fills — light that *emits*, not just casts.

**Motion.** Purposeful, quick. `--ease-out` (120–200ms) for hover/press; `--ease-snap` (slight overshoot) for toggles/radios. **Press = scale 0.94–0.97** (buttons shrink). **Hover** = card lift (`translateY(-3px)` + deeper shadow), links brighten toward orange. Live indicators use a slow **pulse** (`bb-pulse-dot`). Respect `prefers-reduced-motion`; no infinite decorative loops beyond the small live dot.

**Borders & dividers.** 1px warm-grey on light; 1px ink-800 on dark. Inputs use a 1.5px resting border that turns orange with a 3px `--brand-ring` on focus.

**Cards.** Light: white, 1px warm border, `--shadow-sm`, `14px` radius; hover lifts. Dark: `--bb-ink-900` fill, `--border-dark`. Media-topped product cards clip an `LedScreen` at the top.

---

## 4. Iconography

- **System:** **Lucide** (outline, 2px stroke, rounded) loaded from CDN — a clean, modern outline set that matches the brand's confident, technical-but-friendly tone. Used in both UI kits via `window.lucide.createIcons()`. **This is a substitution** — BrightBoard's site icons weren't provided; flag if pixel-exact icons are required and share the source set.
- **Stroke & sizing:** 16px (inline/labels), 18–22px (nav, feature chips), 2px stroke, `currentColor` so icons inherit context (grey on ink, orange on accent chips).
- **The brand device is the LED dot**, not an icon: a single glowing circle (`.bb-eyebrow::before`, live badges, dot-grid). Prefer it for brand moments over any glyph.
- **No emoji** in product/marketing surfaces. No unicode-as-icon except the tiny select caret `▾` and dialog `×`.
- **Logos:** the dot-matrix wordmark PNGs live in `assets/` (`logo-brightboard-dark.png` for light bg, `logo-brightboard-light.png` for ink). The `Logo` component is a font lockup for UI; use the PNGs when the exact circular-dot wordmark matters.

---

## 5. Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (`@import`s all tokens + fonts + base).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `base.css`.
- `assets/` — `logo-brightboard-dark.png`, `logo-brightboard-light.png`.
- `SKILL.md` — Agent-Skills-compatible entry for using this system.

**Components** (`window.BrightBoardDesignSystem_8b998d.<Name>`)
- `components/forms/` — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch
- `components/data-display/` — Card, Badge, Tag, Avatar, StatTile
- `components/navigation/` — Tabs
- `components/feedback/` — Dialog, Toast, Tooltip, ProgressBar
- `components/brand/` — **LEDPanel** (signature), Logo, PixelHeading

Each component dir has `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, and one `*.card.html` (Design System tab thumbnail).

**Foundations** (`foundations/*.card.html`) — Design System tab specimens for Colors, Type, Spacing, Brand.

**UI kits** (`ui_kits/`)
- `website/` — brightboard.eu marketing site recreation (see its README).
- `control-software/` — BrightBoard Control LED CMS recreation (see its README).
- `quotation/` — BrightBoard offer/letterhead document recreation (see its README).

**Starting points:** Button, Card, Logo, LEDPanel, plus both UI kit screens.

---

## 6. Caveats

- ⚠️ **Fonts are substitutes.** No brand font files were provided; the wordmark uses a custom circular
  dot-matrix face. We use `Archivo` (UI/display), `DotGothic16` (dot-matrix accents) and `Space Mono`
  (labels/specs) from Google Fonts. **Please share the real brand fonts** to swap in.
- ⚠️ **Icons are Lucide (substitute).** Share BrightBoard's own icon set for an exact match.
- ⚠️ **Orange sampled from the logo** (`#F28A00`, from `#EB8B02`). Confirm against official brand guidelines if they exist.
- Imagery in the UI kits uses on-brand LED placeholders — swap for real venue photography/renders.
