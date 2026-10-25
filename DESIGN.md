# DESIGN.md: Mitchelle portfolio design system

Version 1.0 · October 2026 · Light theme only. The design system for the portfolio and media kit of Mitchelle, a Nairobi-based lifestyle, skincare, fashion and beauty content creator. Written for people and coding agents building her pages. Everything you need is in this one file: rules, tokens, components and the full stylesheet.

---

## 0. How to use this file

You are building or changing a page for Mitchelle. Read this file in full first.

**Precedence:** explicit instruction from Mitchelle or Farid > this file > your own taste.

**Workflow for every page:**

1. Write down, in one sentence, the one question the page or section answers for a brand (§2).
2. Build it from the components in §12. Prefer an existing component over inventing one.
3. Style only with the tokens in §4. No raw hex values or ad-hoc shadows inside components.
4. Use Lucide icons only (§9). Never emoji.
5. Write every label with §10.
6. Run the checklist in §14 before you finish.

**Setup:** paste the `:root` block from §4 and the stylesheet from §13 into the page (or link them as `tokens.css` and `bundle.css`, tokens first). Then copy the markup from §12.

---

## 1. The look in one paragraph

An Apple product page made for one person. A white canvas, the system font set big, bold and tightly tracked, thin 1px lines instead of shadows, and every button, tag and pill a full pill. Her photos carry all the colour. The interface itself is white, gray and near-black, with exactly one rosy accent (`rose`) for the main button, links and focus, plus pastel tags for her five niches. The one feminine flourish is a single word per headline set in Instrument Serif italic, in rose: "Content that feels like *you*".

---

## 2. Principles

1. **Her photos carry the colour.** Colour comes from her content, the rose accent and the pastel niche tags. Nothing else.
2. **One job per section.** Each section answers one question a brand has: who is she, what does she post about, how many people see it, what has she made, what can I book, how do I reach her. Anything that doesn't answer its section's question goes.
3. **One obvious next step.** One rose button per view. Everything else is secondary or ghost.
4. **Flat and lined.** 1px `border` lines separate things. Cards and buttons get no shadows.
5. **Same thing, same way.** One shape for every button and tag, one icon set, one label per action.

---

## 3. Hard rules

**MUST**

1. Use the light theme. There is no dark theme.
2. Use the system font stack (`--font-sans`) for all UI and body text. Instrument Serif italic (`--font-serif`) only for the one accent word in a headline and the monogram.
3. Use tokens for every colour, size, radius and shadow.
4. Give every button, tag and glass pill `radius-full`.
5. Keep one primary (rose) button per view, labelled "Work With Me".
6. Meet WCAG AA: 4.5:1 for normal text, 3:1 for large text, icons and focus rings. The token notes in §4 list the verified pairs.
7. Show a visible focus ring on `:focus-visible`: 2px solid `focus`, 2px offset.
8. Apply hover styles only under `@media (hover: hover) and (pointer: fine)`.
9. Honor `prefers-reduced-motion` and `prefers-reduced-transparency`.
10. Give every image alt text that says what's in the shot.

**MUST NOT**

1. Use emoji anywhere, including headings, buttons, sample data and alt text.
2. Use gradients, glows, coloured page backgrounds or coloured section backgrounds.
3. Put shadows on cards, tiles or buttons. `shadow-overlay` is for menus and tooltips only.
4. Put rose on headings, card backgrounds or section backgrounds.
5. Use more than one italic serif word per headline, or put one on every headline on a page.
6. Invent stats, brand logos, testimonials or quotes. Use marked placeholders (`00.0K`, `[Brand name]`) and flag them.
7. Mix square and round buttons, or mix icon libraries.
8. Use text-left, image-right zigzag sections down the page.

---

## 4. Tokens

Paste this block once, at the root of the page.

```css
/* Mitchelle, generated from tokens.json */
:root {
  --bg: #ffffff;
  --bg-secondary: #f9f9f9;
  --fill-soft: #f4f4f4;
  --surface: #ffffff;
  --text: #0d0d0d;
  --text-2: #5d5d5d;
  --text-3: #6e6e6e;
  --border-subtle: #0d0d0d0f;
  --border: #0d0d0d1a;
  --border-strong: #0d0d0d29;
  --hover: #0d0d0d0d;
  --primary-fill: #0d0d0d;
  --on-primary: #ffffff;
  --rose: #c42a6b;
  --rose-hover: #a8215a;
  --on-rose: #ffffff;
  --rose-soft: #fdeef4;
  --rose-line: #f4c4d8;
  --focus: var(--rose);
  --tag-pink-bg: #ffeef6;
  --tag-pink-text: #963c67;
  --tag-purple-bg: #f3ecfe;
  --tag-purple-text: #6b3ab4;
  --tag-orange-bg: #ffefe5;
  --tag-orange-text: #923b0f;
  --tag-yellow-bg: #fff6d9;
  --tag-yellow-text: #6e5400;
  --tag-blue-bg: #e5f3ff;
  --tag-blue-text: #004f99;
  --tag-gray-bg: #f4f4f4;
  --tag-gray-text: #4f4f4f;
  --glass-tint: #ffffffc7;
  --glass-border: #00000014;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-3xl: 28px;
  --radius-full: 9999px;
  --shadow-overlay: 0 0 0 1px #0000000f, 0 8px 24px -6px #0000001f;
  --font-sans: ui-sans-serif, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-serif: "Instrument Serif", "New York", Georgia, serif;
}
.display { font-family: var(--font-sans); font-size: 56px; line-height: 60px; font-weight: 700; letter-spacing: -0.035em; }
.large-title { font-family: var(--font-sans); font-size: 34px; line-height: 41px; font-weight: 700; letter-spacing: -0.02em; }
.title-1 { font-family: var(--font-sans); font-size: 28px; line-height: 34px; font-weight: 600; letter-spacing: -0.02em; }
.title-2 { font-family: var(--font-sans); font-size: 24px; line-height: 30px; font-weight: 600; }
.title-3 { font-family: var(--font-sans); font-size: 20px; line-height: 26px; font-weight: 600; }
.accent-display { font-family: var(--font-serif); font-size: 64px; line-height: 60px; font-weight: 400; font-style: italic; }
.accent-title { font-family: var(--font-serif); font-size: 38px; line-height: 41px; font-weight: 400; font-style: italic; }
.lg { font-family: var(--font-sans); font-size: 18px; line-height: 28px; font-weight: 400; }
.body { font-family: var(--font-sans); font-size: 16px; line-height: 24px; font-weight: 400; }
.sm { font-family: var(--font-sans); font-size: 14px; line-height: 20px; font-weight: 400; }
.footnote { font-family: var(--font-sans); font-size: 13px; line-height: 18px; font-weight: 400; }
.caption { font-family: var(--font-sans); font-size: 12px; line-height: 16px; font-weight: 500; }
```

**Verified contrast (WCAG 2.x):** `text` on `bg` 19.4:1 · `text-2` on `bg` 6.6:1, on `fill-soft` 6.0:1 · `text-3` on `bg` 5.1:1, on `fill-soft` 4.6:1 · `rose` on `bg` 5.4:1, on `rose-soft` 4.8:1 · `on-rose` on `rose` 5.4:1 · every tag text on its tag background 6.0:1 or more.

---

## 5. Typography

Two families. The system font (`--font-sans`): San Francisco on Apple devices, Segoe on Windows. Instrument Serif italic (`--font-serif`) from Google Fonts, for one accent word only.

| Token | Size / line | Weight | Use for |
|---|---|---|---|
| `display` | 56 / 60, -0.035em | 700 | The hero headline. Once per page. |
| `large-title` | 34 / 41, -0.02em | 700 | Section headlines, the contact headline |
| `title-1` | 28 / 34, -0.02em | 600 | Stat numbers (tabular figures), PDF page titles |
| `title-2` | 24 / 30 | 600 | Sub-section titles |
| `title-3` | 20 / 26 | 600 | Card and tile titles |
| `accent-display` | 64 / 60, italic | 400 serif | The italic word in a display headline (1.12x) |
| `accent-title` | 38 / 41, italic | 400 serif | The italic word in a large-title headline |
| `lg` | 18 / 28 | 400 | Hero subhead and intro lines, in `text-2` |
| `body` | 16 / 24 | 400 | Reading text. Buttons at 16px weight 500. |
| `sm` | 14 / 20 | 400 | Card descriptions, lists, glass pills (500) |
| `footnote` | 13 / 18 | 400 | Metadata, dates, tag labels (500) |
| `caption` | 12 / 16 | 500 | Badges. Nothing smaller. |

**Rules**

- Mark the accent word up as `<span class="mi-it">word</span>`. It turns italic serif, rose, 1.12x the headline size. The hero and the contact headline are the best places for it.
- Keep about four type sizes per section. Weights 400 to 700 only.
- Reading lines stay between 60 and 75 characters.
- Use `font-variant-numeric: tabular-nums` for numbers.

---

## 6. Colour usage

- The canvas is `bg` (white). Cards and tiles are `surface` with a 1px `border`. The contact panel is the only area on `bg-secondary`.
- Text is `text`. Descriptions use `text-2`; captions and dates `text-3`.
- `rose` is her colour: the primary button, links, the focus ring, the one italic word in a headline, the avatar ring and check icons. Nowhere else.
- Text on a rose fill is `on-rose`. Selected states use `rose-soft` with a `rose-line` border.
- Niche tags use fixed pastel pairs. Keep a niche's colour the same everywhere:

| Niche | Tag class | Background / text |
|---|---|---|
| Fashion | `mi-tag` (default) | `tag-pink-bg` / `tag-pink-text` |
| Skincare | `mi-tag-purple` | `tag-purple-bg` / `tag-purple-text` |
| Beauty | `mi-tag-orange` | `tag-orange-bg` / `tag-orange-text` |
| Lifestyle | `mi-tag-yellow` | `tag-yellow-bg` / `tag-yellow-text` |
| Travel | `mi-tag-blue` | `tag-blue-bg` / `tag-blue-text` |
| Virtual, In person | `mi-tag-gray` | `tag-gray-bg` / `tag-gray-text` |

---

## 7. Layout

- **One container per page:** `max-width: 1200px; margin-inline: auto; padding-inline: 16px` (24px from 768px, 32px from 1280px). Headings, grids and the nav logo share one left edge.
- **Spacing:** sections sit `space-24` (96px) apart. A section heading sits `space-12` (48px) above its content. Group by closeness first; add a border only when space isn't enough.
- **Hero:** stacked and centred. Avatar, headline, one-line subhead, the two buttons, the niche tags.
- **Work tiles (bento):** 6 columns at desktop. Spans in each row add up to 6, and no tile is ever left alone on a row. Use `data-count` with the real number of tiles; 3 tiles use `data-layout="lead"` (one big, two stacked). 2 columns between 480 and 719px container width, 1 column below.
- **Service cards:** one row of 3 equal cards, buttons lined up.
- **Nav:** 64px tall, never smaller.
- **PDF media kit:** A4 portrait pages (794 x 1123 px at 96 dpi) with `space-16` (64px) margins, one section per page.
- Must work from 320px wide up. Touch targets at least 44 x 44px.

**Running order of the portfolio:** Nav · Hero · What I create (niches) · Audience (StatRow) · Selected work (WorkTiles) · Services (ServiceCards) · Contact (ContactBlock).

---

## 8. Imagery

- Bright, natural, warm photos: real skin, real texture. Colourful backgrounds are welcome; this is where the colour lives.
- Fixed ratios with `object-fit: cover`: 4:3 for work tiles, 1:1 for the avatar.
- Work tiles show the photo full-bleed at the top, then a 1px line, then the text.
- Labels over a photo use the frosted `GlassPill`. It's the only translucent element, and only over photos.
- No stock photos and no illustrations. Until real photos arrive, tiles show a pastel placeholder with a Lucide `image` icon.

---

## 9. Iconography

Lucide only, as inline SVG: 24 x 24 viewBox, `fill="none"`, `stroke="currentColor"`, stroke width 1.5, round caps and joins. Sizes 16 and 20 only (`mi-icon`, `mi-icon-sm`). Icons sit before their label with a 6px gap; decorative icons get `aria-hidden="true"`.

| Concept | Lucide icon |
|---|---|
| Email | `mail` |
| Handle (@) | `at-sign` |
| Location, in-person work | `map-pin` |
| Virtual work | `laptop` |
| Date | `calendar` |
| Included item in a service | `check` |
| Link that leaves the page | `arrow-up-right` |
| Empty photo slot | `image` |
| Mobile menu | `menu` |

No Unicode symbols as icons. Write platform names out in words (Instagram, TikTok).

---

## 10. Voice and copy

Calm, warm, direct. Mitchelle talking, not a brand performing.

- First person: "I create", never "Mitchelle creates". The exception is a three-line bio for a press release.
- Headlines are sentence case and promise an outcome.
- Buttons start with a verb and use Title Case. Use the same two labels everywhere: **"Work With Me"** (primary, opens email) and **"See My Work"** (secondary, jumps to the work). Never "Get in Touch" on one page and "Contact" on another.
- Digits for numbers ("3 Reels"). Name deliverables, platforms and real numbers. Date every stat ("As of October 2026").
- No emoji, no exclamation marks, no "passionate", no "elevate your brand".

| Write this | Not this |
| --- | --- |
| Content that feels like *you* | Elevating brands through authentic storytelling |
| Send me the product and the brief. I'll send back UGC you can run as ads. | Let's create magic together!! |
| Three Reels and five stories across two weeks, with 90 days of usage rights. | High-quality content package |

**Real details to use:** name Mitchelle (Mimie to her followers) · email mitchelleatienooduor@gmail.com · Instagram and TikTok @mitchelle.irl · based in Nairobi, Kenya · works virtually (product promotions, reviews, UGC) and in person (brand launches, events, photoshoots, beauty appointments, lifestyle experiences) · past work: a promo video for The Summer Lounge at Sarit Centre and a promo video for the makeup artist @glam_by_tyee. Follower counts change: confirm them before every update.

---

## 11. Logo

There's no drawn logo yet.

- **Wordmark:** "Mitchelle" in the system font, bold, tightly tracked, with a rose full stop (`<span class="mi-wordmark">Mitchelle<b>.</b></span>`).
- **Nav lockup:** the monogram plus the name at 18px (`mi-logo`).
- **Monogram:** an italic serif M in rose on a `rose-soft` circle (`mi-mono`, `mi-mono-lg`).
- Keep the monogram's width clear on every side. Don't stretch, outline, shadow or re-font it. When her final name and handle are settled, outline the wordmark into SVG.

---

## 12. Components

All components are plain HTML and CSS using the `mi-` classes from §13.

### Logo

The "Mitchelle." wordmark with a rose full stop, and the italic serif M monogram on a soft rose circle.

- Provide: her display name. The full stop is a `<b>` so it takes the rose colour.
- Nav: monogram plus the name at 18px (`mi-logo`). Cover and contact pages: the large wordmark. Profile picture or favicon: the large monogram alone.
- Keep the monogram's width clear on every side.
- Don't stretch it, outline it, add a shadow or set it in another font.
- This stands in for a drawn logo. When the name and handle are final, outline it into SVG.

```html
<div class="mi-stage" style="gap:48px;align-items:center">
  <span class="mi-wordmark">Mitchelle<b>.</b></span>
  <a class="mi-logo" href="#"><span class="mi-mono" aria-hidden="true">M</span>Mitchelle</a>
  <span class="mi-mono mi-mono-lg" aria-label="Mitchelle monogram">M</span>
</div>
```

### Nav

The 64px top bar for the static site: logo on the leading edge, four section links in the middle, and the primary button on the trailing edge.

- Provide: the logo lockup, three to five links to page sections (Work, Services, About, Contact), and the "Work With Me" button at 40px (`mi-btn-sm`).
- White background with a 1px `border` bottom edge. Sticky on the site. Not used in the PDF.
- Links are 16px weight 500 in `text-2`; the current section gets `aria-current` and `text`.
- Below 768px, show the logo, the button and a Lucide `menu` button that opens the links.
- Don't shrink it below 64px or use smaller links to look minimal.

```html
<div style="padding:16px 0">
  <nav class="mi-nav" aria-label="Main">
    <a class="mi-logo" href="#"><span class="mi-mono" aria-hidden="true">M</span>Mitchelle</a>
    <ul class="mi-nav-links">
      <li><a href="#" aria-current="page">Work</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <a class="mi-btn mi-btn-primary mi-btn-sm" href="#">Work With Me</a>
  </nav>
</div>
```

### Button

Pill buttons: a rose primary, a white secondary with a thin outline, and a quiet ghost.

- Provide: an `<a>` or `<button>` with `mi-btn` plus one variant, and a Title Case label that starts with a verb.
- One `mi-btn-primary` per view. It is always "Work With Me". The secondary is always "See My Work". Same label, same destination, everywhere.
- `mi-btn-ghost` for things you'd rather people skip, like "Download PDF" next to the main pair.
- 44px tall in the hero and contact panel, 40px (`mi-btn-sm`) in the nav and inside cards.
- In a row: ghost, then secondary, then primary on the trailing end. Centred pairs put primary first.
- No shadows, no square buttons. Hover styles apply to fine pointers only. Keep buttons as real links in the PDF.

```html
<div class="mi-stage" style="align-items:center">
  <a class="mi-btn mi-btn-primary" href="#">Work With Me</a>
  <a class="mi-btn mi-btn-secondary" href="#">See My Work</a>
  <a class="mi-btn mi-btn-ghost" href="#">Download PDF</a>
  <a class="mi-btn mi-btn-secondary mi-btn-sm" href="#">See My Work</a>
</div>
```

### Tag

Small pastel pills that name her niches and how she works.

- Provide: one or two words in sentence case, plus an optional 16px Lucide icon.
- Niche colours are fixed: Fashion pink (default), Skincare `mi-tag-purple`, Beauty `mi-tag-orange`, Lifestyle `mi-tag-yellow`, Travel `mi-tag-blue`.
- Working modes use `mi-tag-gray` with an icon: `laptop` for Virtual, `map-pin` for In person.
- Two or three tags per card at most. The full niche row of five belongs in the hero only.
- Tags label things; they don't link and they aren't buttons.

```html
<div class="mi-stage" style="flex-direction:column;gap:12px">
  <div class="mi-tags">
    <span class="mi-tag">Fashion</span>
    <span class="mi-tag mi-tag-purple">Skincare</span>
    <span class="mi-tag mi-tag-orange">Beauty</span>
    <span class="mi-tag mi-tag-yellow">Lifestyle</span>
    <span class="mi-tag mi-tag-blue">Travel</span>
  </div>
  <div class="mi-tags">
    <span class="mi-tag mi-tag-gray"><svg class="mi-icon mi-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"/><path d="M20.054 15.987H3.946"/></svg>Virtual</span>
    <span class="mi-tag mi-tag-gray"><svg class="mi-icon mi-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>In person</span>
  </div>
</div>
```

### GlassPill

A frosted white pill that floats over a photo to name the brand, the job or her handle.

- Provide: a short label (brand name, job type or @handle) and an optional 16px Lucide icon.
- Only over photos, pinned `space-4` from the top-leading corner of a work tile. Never on a plain background; use a `Tag` there.
- It blurs what's behind it. With reduced transparency turned on, it becomes solid white.
- One pill per photo.

```html
<div class="mi-stage">
  <div style="position:relative;width:100%;height:112px;border-radius:20px;overflow:hidden;background:linear-gradient(120deg,#f6b8cf,#c9b3f2 50%,#ffd2b3)">
    <div style="position:absolute;top:16px;left:16px;display:flex;gap:8px">
      <span class="mi-glass">[Brand name]</span>
      <span class="mi-glass"><svg class="mi-icon mi-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>handle</span>
    </div>
  </div>
</div>
```

### Avatar

Her round portrait with a thin rose ring and a white gap, like a story ring on Instagram.

- Provide: a square portrait as an `<img>` inside `mi-avatar-in`, with alt text. Face centred.
- Sizes: 40, 64, 96 (default) and 160px. The hero uses 96 or 160.
- The ring is for Mitchelle only. Other people (a makeup artist she worked with) use `mi-avatar-plain`.
- With no photo yet, the circle shows `tag-pink-bg` and her initial.

```html
<div class="mi-stage" style="align-items:center">
  <span class="mi-avatar mi-avatar-160"><span class="mi-avatar-in" style="font:italic 400 64px/1 var(--font-serif)">M</span></span>
  <span class="mi-avatar"><span class="mi-avatar-in" style="font:italic 400 40px/1 var(--font-serif)">M</span></span>
  <span class="mi-avatar mi-avatar-64"><span class="mi-avatar-in" style="font:italic 400 28px/1 var(--font-serif)">M</span></span>
  <span class="mi-avatar mi-avatar-plain mi-avatar-64"><span class="mi-avatar-in" style="background:var(--fill-soft);color:var(--text-2);font:600 20px/1 var(--font-sans)">AK</span></span>
</div>
```

### Hero

The stacked, centred opening of the portfolio: her avatar, a headline with one italic word, a one-line subhead, the two buttons and her niche tags.

- Provide: the avatar (96 or 160px), a headline under about six words that promises an outcome, one subhead sentence, the "Work With Me" and "See My Work" buttons, and the five niche tags.
- The headline is `display`. One word in `mi-it` (italic serif, rose).
- Spacing: avatar to headline `space-6`, headline to subhead `space-4`, subhead to buttons `space-8`.
- On the site, a lead work tile or a wide photo sits `space-16` below. In the PDF, the hero is the whole cover page.
- Nothing else goes in the hero: no stats, no logos, no second headline.

```html
<section class="mi-hero">
  <span class="mi-avatar"><span class="mi-avatar-in" style="font:italic 400 40px/1 var(--font-serif)">M</span></span>
  <h1>Content that feels like <span class="mi-it">you</span></h1>
  <p>I make fashion, skincare and beauty content that brands can post, boost and reuse.</p>
  <div class="mi-actions">
    <a class="mi-btn mi-btn-primary" href="#">Work With Me</a>
    <a class="mi-btn mi-btn-secondary" href="#">See My Work</a>
  </div>
  <div class="mi-tags">
    <span class="mi-tag">Fashion</span>
    <span class="mi-tag mi-tag-purple">Skincare</span>
    <span class="mi-tag mi-tag-orange">Beauty</span>
    <span class="mi-tag mi-tag-yellow">Lifestyle</span>
    <span class="mi-tag mi-tag-blue">Travel</span>
  </div>
</section>
```

### WorkTile

A bento tile for one piece of past work: the photo full-bleed on top with a glass pill, then a title, one sentence and a date.

- Provide: a 4:3 photo, a `GlassPill` naming the brand or job, a title (`title-3`), one sentence on what she made, and a footnote line with a `calendar` icon and the date.
- Wrap tiles in `mi-bento-wrap` and `mi-bento`, with `data-count` set to the real number of tiles. For 3 tiles add `data-layout="lead"` so the first is big and the other two stack beside it.
- Never 7 or more tiles in one grid, and never a tile alone on a row.
- Every tile has the same structure and padding. The lead tile's photo grows to fill its height; its text doesn't.
- Her first entries, from her brief: the advertising lounge project and the makeup artist collaboration. Use `[Brand name]` until the real name is cleared to share.

```html
<div class="mi-stage" style="display:block">
  <div class="mi-bento-wrap">
    <div class="mi-bento" data-count="3" data-layout="lead">
      <article class="mi-tile">
        <div class="mi-tile-media">
          <span class="mi-glass">Advertising lounge</span>
          <svg class="mi-icon" viewBox="0 0 24 24" aria-label="Photo to come"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        </div>
        <div class="mi-tile-body">
          <h3>Lounge launch campaign</h3>
          <p>On-site photos, a launch-night Reel and live stories for an advertising lounge opening.</p>
          <div class="mi-tile-meta"><svg class="mi-icon mi-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>2026</div>
        </div>
      </article>
      <article class="mi-tile">
        <div class="mi-tile-media purple">
          <span class="mi-glass">Makeup artist</span>
          <svg class="mi-icon" viewBox="0 0 24 24" aria-label="Photo to come"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        </div>
        <div class="mi-tile-body">
          <h3>Full glam tutorial</h3>
          <p>A start-to-finish look, filmed as a Reel.</p>
          <div class="mi-tile-meta"><svg class="mi-icon mi-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>2026</div>
        </div>
      </article>
      <article class="mi-tile">
        <div class="mi-tile-media orange">
          <span class="mi-glass">[Brand name]</span>
          <svg class="mi-icon" viewBox="0 0 24 24" aria-label="Photo to come"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        </div>
        <div class="mi-tile-body">
          <h3>Skincare review</h3>
          <p>A two-week routine test with honest results.</p>
          <div class="mi-tile-meta"><svg class="mi-icon mi-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>[Date]</div>
        </div>
      </article>
    </div>
  </div>
</div>
```

### StatRow

One plain card with a number per platform, divided by thin lines. The only place her numbers appear.

- Provide: three platforms (or her two strongest plus a combined reach figure), each with the platform name, one number and a short label.
- Numbers use `title-1` with tabular figures. Labels say what the number is: "followers", "avg. views per Reel", "engagement rate".
- Always add the date under the card in `footnote` ("As of October 2026").
- Real numbers only. `00.0K` is a placeholder.
- No coloured tiles, no icons in coloured circles, no count-up animation. Show it once, in its own section, not again on other pages.

```html
<div class="mi-stage" style="display:block">
  <div class="mi-stats">
    <div class="mi-stat">
      <div class="mi-stat-platform">Instagram</div>
      <div class="mi-stat-num">00.0K</div>
      <div class="mi-stat-label">followers</div>
    </div>
    <div class="mi-stat">
      <div class="mi-stat-platform">TikTok</div>
      <div class="mi-stat-num">0.0%</div>
      <div class="mi-stat-label">engagement rate</div>
    </div>
    <div class="mi-stat">
      <div class="mi-stat-platform">All platforms</div>
      <div class="mi-stat-num">000K</div>
      <div class="mi-stat-label">monthly reach</div>
    </div>
  </div>
  <p class="mi-stats-note">As of October 2026. Placeholder numbers.</p>
</div>
```

### ServiceCard

A card for one thing a brand can book: name, one line on what it's for, where it happens, the button, then what's included.

- Provide: a service name, one sentence, a mode line (Lucide `laptop` for Virtual, `map-pin` for In person), a "Work With Me" button, and three to five deliverables with `check` icons.
- Her services, from her brief: product promotion and reviews, UGC, brand launches and events, photoshoots, beauty appointments and lifestyle experiences. Group them into 3 cards.
- The one she most wants to sell gets `mi-service-feat` (a 2px near-black border), a "Popular" badge beside the name, and the rose primary button. The other cards use the secondary button.
- Cards sit in one row, same height, with buttons lined up.
- Prices go here only when she has real rates. Until then, leave price out rather than invent one.

```html
<div class="mi-stage" style="display:block">
  <div class="mi-services">
    <article class="mi-service">
      <h3>Reviews and UGC</h3>
      <p>You send the product and the brief. I send back content you can post or run as ads.</p>
      <div class="mi-service-mode"><svg class="mi-icon mi-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"/><path d="M20.054 15.987H3.946"/></svg>Virtual</div>
      <a class="mi-btn mi-btn-secondary mi-btn-sm" href="#">Work With Me</a>
      <ul class="mi-checks">
        <li><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Short-form video for Reels or TikTok</li>
        <li><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Styled product photos</li>
        <li><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>An honest written review</li>
      </ul>
    </article>
    <article class="mi-service mi-service-feat">
      <div class="mi-service-head"><h3>Launches and events</h3><span class="mi-badge">Popular</span></div>
      <p>I come to your launch, opening or appointment and share it as it happens.</p>
      <div class="mi-service-mode"><svg class="mi-icon mi-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>In person</div>
      <a class="mi-btn mi-btn-primary mi-btn-sm" href="#">Work With Me</a>
      <ul class="mi-checks">
        <li><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Live stories on the day</li>
        <li><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>A recap Reel within 48 hours</li>
        <li><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Photos for your own channels</li>
      </ul>
    </article>
    <article class="mi-service">
      <h3>Photoshoots</h3>
      <p>Editorial and lifestyle shoots for your campaigns, lookbooks and socials.</p>
      <div class="mi-service-mode"><svg class="mi-icon mi-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>In person</div>
      <a class="mi-btn mi-btn-secondary mi-btn-sm" href="#">Work With Me</a>
      <ul class="mi-checks">
        <li><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Modelling for your brand</li>
        <li><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Behind-the-scenes content</li>
        <li><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Posts on my channels</li>
      </ul>
    </article>
  </div>
</div>
```

### ContactBlock

The closing panel: a headline with one italic word, a line of reassurance, the same two buttons as the hero, and a short list of ways to reach her.

- Provide: a headline, one sentence, the "Work With Me" and "See My Work" buttons, and two to four contact rows (email, platform handles, base city).
- Each row: a 32px `fill-soft` circle with a Lucide icon, a title, one line of detail, and `arrow-up-right` when it opens another site.
- Sits on `bg-secondary` with a 1px border and `radius-3xl`. It's the only non-white area of the page.
- One per document, at the end. The email must be a working `mailto:` link on the site and in the PDF.

```html
<div class="mi-stage" style="display:block">
  <section class="mi-contact">
    <h2>Let's make something <span class="mi-it">together</span></h2>
    <p>I work with brands in fashion, beauty, skincare and lifestyle, virtually or in person.</p>
    <div class="mi-actions">
      <a class="mi-btn mi-btn-primary" href="#">Work With Me</a>
      <a class="mi-btn mi-btn-secondary" href="#">See My Work</a>
    </div>
    <ul class="mi-rows">
      <li><a class="mi-row" href="#">
        <span class="mi-row-icon"><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
        <span class="mi-row-text"><span class="mi-row-title">Email</span><span class="mi-row-sub">mitchelleatienooduor@gmail.com</span></span>
      </a></li>
      <li><a class="mi-row" href="#">
        <span class="mi-row-icon"><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg></span>
        <span class="mi-row-text"><span class="mi-row-title">Instagram</span><span class="mi-row-sub">@mitchelle.irl</span></span>
        <svg class="mi-icon mi-icon-sm" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
      </a></li>
      <li><a class="mi-row" href="#">
        <span class="mi-row-icon"><svg class="mi-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></span>
        <span class="mi-row-text"><span class="mi-row-title">Based in</span><span class="mi-row-sub">[City], available to travel</span></span>
      </a></li>
    </ul>
  </section>
</div>
```

---

## 13. Stylesheet

The complete component stylesheet. Load it after the tokens in §4.

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap');

*, *::before, *::after { box-sizing: border-box; }
html { color-scheme: light; }
body { margin: 0; font-family: var(--font-sans); font-size: 16px; line-height: 24px; background: var(--bg); color: var(--text); -webkit-font-smoothing: antialiased; font-synthesis-weight: none; }
.mi-stage { padding: var(--space-6); display: flex; flex-wrap: wrap; gap: var(--space-6); align-items: flex-start; }

/* Shared */
.mi-icon { width: 20px; height: 20px; flex: none; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
.mi-icon-sm { width: 16px; height: 16px; }
.mi-it { font-family: var(--font-serif); font-style: italic; font-weight: 400; letter-spacing: -0.01em; color: var(--rose); }
.mi-actions { display: flex; flex-wrap: wrap; gap: var(--space-3); }
a { color: var(--rose); }

/* Logo */
.mi-logo { display: inline-flex; align-items: center; gap: var(--space-2); font: 700 18px/1 var(--font-sans); letter-spacing: -0.01em; color: var(--text); text-decoration: none; }
.mi-mono { width: 28px; height: 28px; flex: none; display: grid; place-items: center; border-radius: var(--radius-full); background: var(--rose-soft); color: var(--rose); font: italic 400 20px/1 var(--font-serif); }
.mi-mono-lg { width: 64px; height: 64px; font-size: 44px; }
.mi-wordmark { font: 700 64px/1 var(--font-sans); letter-spacing: -0.04em; color: var(--text); }
.mi-wordmark b { color: var(--rose); }

/* Nav */
.mi-nav { height: 64px; display: flex; align-items: center; gap: var(--space-8); padding: 0 var(--space-6); background: var(--bg); border-bottom: 1px solid var(--border); }
.mi-nav-links { display: flex; gap: var(--space-8); margin: 0 auto; padding: 0; list-style: none; }
.mi-nav-links a { font: 500 16px/24px var(--font-sans); color: var(--text-2); text-decoration: none; }
.mi-nav-links a[aria-current] { color: var(--text); }

/* Button */
.mi-btn { display: inline-flex; align-items: center; justify-content: center; gap: 6px; height: 44px; padding: 0 var(--space-6); border: 1px solid transparent; border-radius: var(--radius-full); font: 500 16px/1 var(--font-sans); text-decoration: none; white-space: nowrap; cursor: pointer; transition: background-color 150ms cubic-bezier(0.2, 0, 0, 1); }
.mi-btn-primary { background: var(--rose); color: var(--on-rose); }
.mi-btn-secondary { background: var(--surface); border-color: var(--border-strong); color: var(--text); }
.mi-btn-ghost { background: transparent; color: var(--text-2); }
.mi-btn-sm { height: 40px; padding: 0 var(--space-4); font-size: 14px; }
.mi-btn:focus-visible, .mi-nav-links a:focus-visible, .mi-row:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
@media (hover: hover) and (pointer: fine) {
  .mi-btn-primary:hover { background: var(--rose-hover); }
  .mi-btn-secondary:hover, .mi-btn-ghost:hover { background: var(--hover); color: var(--text); }
  .mi-nav-links a:hover { color: var(--text); }
  .mi-row:hover { background: var(--hover); }
}

/* Tag */
.mi-tags { display: flex; flex-wrap: wrap; gap: var(--space-2); }
.mi-tag { display: inline-flex; align-items: center; gap: var(--space-1); height: 28px; padding: 0 var(--space-3); border-radius: var(--radius-full); font: 500 13px/1 var(--font-sans); background: var(--tag-pink-bg); color: var(--tag-pink-text); }
.mi-tag-purple { background: var(--tag-purple-bg); color: var(--tag-purple-text); }
.mi-tag-orange { background: var(--tag-orange-bg); color: var(--tag-orange-text); }
.mi-tag-yellow { background: var(--tag-yellow-bg); color: var(--tag-yellow-text); }
.mi-tag-blue { background: var(--tag-blue-bg); color: var(--tag-blue-text); }
.mi-tag-gray { background: var(--tag-gray-bg); color: var(--tag-gray-text); }

/* GlassPill */
.mi-glass { display: inline-flex; align-items: center; gap: 6px; height: 32px; padding: 0 var(--space-3); border-radius: var(--radius-full); background: var(--glass-tint); -webkit-backdrop-filter: blur(20px) saturate(180%); backdrop-filter: blur(20px) saturate(180%); box-shadow: 0 0 0 1px var(--glass-border); font: 500 14px/1 var(--font-sans); color: var(--text); white-space: nowrap; }
@media (prefers-reduced-transparency: reduce) { .mi-glass { background: var(--bg); -webkit-backdrop-filter: none; backdrop-filter: none; } }

/* Avatar */
.mi-avatar { width: 96px; aspect-ratio: 1 / 1; flex: none; padding: 3px; border-radius: var(--radius-full); background: var(--rose); }
.mi-avatar-in { position: relative; width: 100%; height: 100%; display: grid; place-items: center; overflow: hidden; border: 3px solid var(--bg); border-radius: var(--radius-full); background: var(--tag-pink-bg); color: var(--tag-pink-text); }
.mi-avatar-in img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.mi-avatar-plain { padding: 0; background: none; }
.mi-avatar-plain .mi-avatar-in { border: 0; }
.mi-avatar-40 { width: 40px; }
.mi-avatar-64 { width: 64px; }
.mi-avatar-160 { width: 160px; }

/* Hero */
.mi-hero { display: flex; flex-direction: column; align-items: center; text-align: center; padding: var(--space-12) var(--space-6); }
.mi-hero h1 { margin: var(--space-6) 0 0; max-width: 20ch; font: 700 56px/60px var(--font-sans); letter-spacing: -0.035em; }
.mi-hero h1 .mi-it { font-size: 1.12em; line-height: 0.9; }
.mi-hero p { margin: var(--space-4) 0 0; max-width: 52ch; font-size: 18px; line-height: 28px; color: var(--text-2); }
.mi-hero .mi-actions { justify-content: center; margin-top: var(--space-8); }
.mi-hero .mi-tags { justify-content: center; margin-top: var(--space-6); }

/* Section heading */
.mi-sh { margin: 0 0 var(--space-12); }
.mi-sh h2 { margin: 0; font: 700 34px/41px var(--font-sans); letter-spacing: -0.02em; }
.mi-sh h2 .mi-it { font-size: 1.12em; }
.mi-sh p { margin: var(--space-2) 0 0; max-width: 60ch; font-size: 18px; line-height: 28px; color: var(--text-2); }

/* WorkTile and bento */
.mi-bento-wrap { container-type: inline-size; }
.mi-bento { display: grid; gap: var(--space-6); grid-template-columns: minmax(0, 1fr); }
@container (min-width: 480px) and (max-width: 719px) {
  .mi-bento { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .mi-bento > :last-child:nth-child(odd) { grid-column: 1 / -1; }
}
@container (min-width: 720px) {
  .mi-bento { grid-template-columns: repeat(6, minmax(0, 1fr)); }
  .mi-bento > * { grid-column: span 2; }
  .mi-bento[data-count="2"] > * { grid-column: span 3; }
  .mi-bento[data-count="3"][data-layout="lead"] > :first-child { grid-column: span 4; grid-row: span 2; }
  .mi-bento[data-count="4"] > :nth-child(1), .mi-bento[data-count="4"] > :nth-child(4) { grid-column: span 4; }
  .mi-bento[data-count="5"] > :first-child { grid-column: span 4; }
  .mi-bento[data-layout="lead"] > :first-child .mi-tile-media { flex: 1; aspect-ratio: auto; min-height: 240px; }
  .mi-bento[data-layout="lead"] > :first-child .mi-tile-body { flex: none; }
}
.mi-tile { display: flex; flex-direction: column; overflow: hidden; border: 1px solid var(--border); border-radius: var(--radius-2xl); background: var(--surface); }
.mi-tile-media { position: relative; aspect-ratio: 4 / 3; display: grid; place-items: center; border-bottom: 1px solid var(--border); background: var(--tag-pink-bg); color: var(--tag-pink-text); }
.mi-tile-media.purple { background: var(--tag-purple-bg); color: var(--tag-purple-text); }
.mi-tile-media.orange { background: var(--tag-orange-bg); color: var(--tag-orange-text); }
.mi-tile-media img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.mi-tile-media .mi-glass { position: absolute; top: var(--space-4); left: var(--space-4); }
.mi-tile-body { flex: 1; display: flex; flex-direction: column; gap: var(--space-2); padding: var(--space-6); }
.mi-tile-body h3 { margin: 0; font: 600 20px/26px var(--font-sans); }
.mi-tile-body p { margin: 0; max-width: 60ch; font-size: 14px; line-height: 20px; color: var(--text-2); }
.mi-tile-meta { display: flex; align-items: center; gap: 6px; margin-top: auto; padding-top: var(--space-2); font-size: 13px; line-height: 18px; color: var(--text-3); }

/* StatRow */
.mi-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border: 1px solid var(--border); border-radius: var(--radius-xl); background: var(--surface); }
.mi-stat { padding: var(--space-6); }
.mi-stat + .mi-stat { border-left: 1px solid var(--border); }
.mi-stat-platform { display: flex; align-items: center; gap: 6px; margin-bottom: var(--space-3); font-size: 13px; line-height: 18px; color: var(--text-3); }
.mi-stat-num { font: 600 28px/34px var(--font-sans); letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
.mi-stat-label { font-size: 14px; line-height: 20px; color: var(--text-2); }
.mi-stats-note { margin: var(--space-2) 0 0; font-size: 13px; line-height: 18px; color: var(--text-3); }

/* ServiceCard */
.mi-services { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--space-6); }
.mi-service { display: flex; flex-direction: column; gap: var(--space-4); padding: var(--space-8); border: 1px solid var(--border); border-radius: var(--radius-2xl); background: var(--surface); }
.mi-service-feat { border: 2px solid var(--text); }
.mi-service-head { display: flex; align-items: center; justify-content: space-between; gap: var(--space-2); }
.mi-service h3 { margin: 0; font: 600 20px/26px var(--font-sans); }
.mi-badge { height: 22px; padding: 0 var(--space-2); border-radius: var(--radius-full); background: var(--primary-fill); color: var(--on-primary); font: 600 12px/22px var(--font-sans); white-space: nowrap; }
.mi-service p { margin: 0; font-size: 14px; line-height: 20px; color: var(--text-2); }
.mi-service-mode { display: flex; align-items: center; gap: 6px; font-size: 13px; line-height: 18px; color: var(--text-3); }
.mi-service .mi-btn { align-self: stretch; }
.mi-checks { display: flex; flex-direction: column; gap: var(--space-2); margin: 0; padding: 0; list-style: none; }
.mi-checks li { display: flex; gap: var(--space-2); font-size: 14px; line-height: 20px; }
.mi-checks .mi-icon { width: 16px; height: 16px; margin-top: 2px; color: var(--rose); }

/* ContactBlock */
.mi-contact { display: flex; flex-direction: column; align-items: center; padding: var(--space-16) var(--space-6); border: 1px solid var(--border); border-radius: var(--radius-3xl); background: var(--bg-secondary); text-align: center; }
.mi-contact h2 { margin: 0; font: 700 34px/41px var(--font-sans); letter-spacing: -0.02em; }
.mi-contact h2 .mi-it { font-size: 1.12em; }
.mi-contact > p { margin: var(--space-4) 0 0; max-width: 48ch; font-size: 18px; line-height: 28px; color: var(--text-2); }
.mi-contact .mi-actions { justify-content: center; margin-top: var(--space-8); }
.mi-rows { width: 100%; max-width: 420px; margin: var(--space-8) 0 0; padding: 0; list-style: none; overflow: hidden; border: 1px solid var(--border); border-radius: var(--radius-xl); background: var(--surface); text-align: left; }
.mi-rows li + li { border-top: 1px solid var(--border); }
.mi-row { display: flex; align-items: center; gap: var(--space-3); min-height: 56px; padding: var(--space-2) var(--space-4); color: var(--text); text-decoration: none; }
.mi-row-icon { width: 32px; height: 32px; flex: none; display: grid; place-items: center; border-radius: var(--radius-full); background: var(--fill-soft); color: var(--text-2); }
.mi-row-icon .mi-icon { width: 16px; height: 16px; }
.mi-row-text { flex: 1; min-width: 0; }
.mi-row-title { display: block; font: 600 16px/24px var(--font-sans); }
.mi-row-sub { display: block; font-size: 13px; line-height: 18px; color: var(--text-2); }
.mi-row > .mi-icon { color: var(--text-3); }
```

---

## 14. Pre-ship checklist

**Intent**
- [ ] Each section answers one brand question, and everything in it serves that question.

**Visual**
- [ ] Light theme only; white canvas; no gradients, glows or coloured backgrounds.
- [ ] Zero emoji anywhere, including sample data and alt text.
- [ ] Tokens only; no raw hex in components.
- [ ] No shadows on cards or buttons; 1px borders separate.
- [ ] Every button, tag and pill is a full pill.
- [ ] Rose only on the primary button, links, focus, the accent word, the avatar ring and check icons.
- [ ] At most one italic serif word per headline.

**Interaction**
- [ ] One "Work With Me" primary button per view; "See My Work" as the secondary.
- [ ] Hover (fine pointer only) and focus-visible styles exist.
- [ ] Reduced motion and reduced transparency handled.

**Content**
- [ ] First-person copy, sentence-case headlines, Title Case buttons.
- [ ] Every number is real and dated; placeholders flagged.
- [ ] Email and social links work (`mailto:` and full URLs).

**Accessibility and layout**
- [ ] Contrast meets §4; visible focus everywhere; alt text on every image.
- [ ] Works at 320px; touch targets 44px; bento rows never strand a tile.
