# Portfolio Web Page Specification & Build Prompt: Mitchelle

> **Role & Task Directive**:  
> You are an elite creative technologist and front-end design engineer specializing in high-converting, editorial influencer portfolios and digital media kits. Your task is to build a modern, feminine, stylish, and high-performance portfolio webpage for **Mitchelle**, a Nairobi-based professional lifestyle, skincare, fashion, and beauty content creator and influencer.
> 
> The portfolio must bridge the gap between high-fashion editorial aesthetics (reminiscent of an Apple product showcase infused with a boutique fashion lookbook) and commercial viability for brand managers seeking paid partnerships, UGC campaigns, event appearances, and long-term ambassadorships.

---

## 1. Creator Profile & Brand Identity

- **Name**: Mitchelle
- **Email**: `michelleatienooduor@gmail.com`
- **Location**: Nairobi, Kenya (open to local physical bookings and global virtual collaborations / travel)
- **Primary Niches**: Fashion, Skincare, Beauty, Lifestyle Experiences, Travel, Product Promotions & UGC.
- **Brand Personality**: Authentic, radiant, fashion-forward, chic, warm, and sophisticated.
- **Tone & Voice**: Calm, confident, direct, and conversational ("I create", "Content that feels like *you*"). Avoid corporate jargon ("synergy", "elevate your brand") and avoid exclamation-heavy clichés.

### Core Objectives
1. Attract brand managers, PR agencies, and creative directors for **paid partnerships**, **sponsored UGC**, **brand launches**, and **event hosting**.
2. Showcase high production quality across video (Instagram Reels / TikTok) and high-resolution editorial photography.
3. Serve as both a live web portfolio and an interactive media kit with clear collaboration tiers and contact entry points.

---

## 2. Visual Design System & Aesthetics

@DESIGN.md

---

## 3. Curated Photo Assets & Mapping

The site has access to Mitchelle’s photography in `Assets/`. Incorporate these real assets with contextual purpose:

| Asset Filename | Visual Description & Mood | Recommended Site Placement |
| :--- | :--- | :--- |
| `WhatsApp Image 2026-10-11 at 15.30.36 (1).jpeg` | **Hero Avatar & Personality Anchor**: Radiant, smiling close-up portrait with voluminous windblown natural curls, hot pink puff-sleeve top, glowing skin, water and horizon background. | Main Hero Avatar / Bio Lead image. Sets a welcoming, authentic personal tone. |
| `WhatsApp Image 2026-10-11 at 15.30.36.jpeg` | **Travel & Editorial Fashion**: Editorial medium-full shot on a yacht/boat railing over turquoise water, vibrant magenta crop top, flowing blush pink maxi skirt caught in the wind. | Travel Niche Feature / Lookbook Gallery lead. |
| `WhatsApp Image 2026-10-11 at 15.30.34 (1).jpeg` | **Lifestyle & Summer Sunshine**: Sun-drenched portrait in a bright yellow eyelet/crochet tiered sundress, hand touching natural curls, rustic stone wall and lush foliage. | Lifestyle & Resort Experience Showcase. |
| `WhatsApp Image 2026-10-11 at 15.30.35.jpeg` | **Skincare & Natural Glow**: Warm sunlit golden-hour shot with eyes gently closed, beaming smile in yellow sundress; showcases glowing, radiant, bare-skin texture. | Skincare / Natural Beauty niche card or ambient hover swap. |
| `WhatsApp Image 2026-10-11 at 15.30.35 (1).jpeg` | **Nightlife, Dining & Venue Partnerships**: Mitchelle at luxury restaurant reception ("EZ RESTAURANT / VIP ROOM 2") with illuminated stone desk, golden ceiling fixture, wearing a cowl-neck red mini dress and white heels. | Brand Launch & In-Person Hospitality Case Study tile. |
| `WhatsApp Image 2026-10-11 at 15.30.35 (2).jpeg` | **Evening Glam & Beauty**: Close vertical shot beside the illuminated "VIP ROOM 2" brass sign, red cowl mini dress, sculpted makeup, delicate gold jewellery. | Beauty & Evening Glam Niche or Service Header. |
| `WhatsApp Image 2026-10-11 at 15.30.33.jpeg` | **High Fashion & Luxury Styling**: Full-length pose blowing a kiss in a sleek marble hall; off-shoulder white draped top with bow, snakeskin mini skirt, black luxury woven handbag, red heels. | Fashion Portfolio Bento Grid lead tile. |
| `WhatsApp Image 2026-10-11 at 15.30.34.jpeg` | **Editorial Outfit Showcase**: Confident straight-to-camera pose in marble corridor holding the luxury woven bag; highlights full styling details and posture. | Outfit of the Day (OOTD) / Commercial Brand Modeling tile. |

---

## 4. Past Work & Live Video Case Studies

Incorporate Mitchelle's live commercial collaborations:
1. **The Summer Lounge (Sarit Centre, Nairobi)**
   - *URL*: [Instagram Reel](https://www.instagram.com/reel/DXE9CTcjCj8/?stkn=MXZ4dGcweWx3d2xsdQ==) (`thesummer.ke`)
   - *Scope*: Venue launch campaign, on-site event coverage, lifestyle & dining experience Reel, atmospheric storytelling.
   - *Deliverables*: Dedicated launch Reel, live story sequence, photo assets.
2. **Glam by Tyee**
   - *URL*: [Instagram Reel](https://www.instagram.com/reel/DdRtHpoNhLL/?stkn=MWEyejVyamlnMndsYQ==) (`@glam_by_tyee`)
   - *Scope*: Professional makeup artist collaboration, transformative glam session, high-definition beauty video content.
   - *Deliverables*: Step-by-step beauty Reel, before-and-after spotlights, product feature tagging.
3. **UGC & Skincare Review Package (Demonstration Slot)**
   - *Scope*: 14-day honest routine test, aesthetic vanity flat-lays, unboxing and texture swatches.

---

## 5. Interactive "Pazzaz" & Micro-Interactions

Elevate the page with high-end, responsive micro-interactions:

1. **Shape-Shifting Italic Headline Word**:
   - The hero headline reads: `Content that feels like <span class="mi-it dynamic-word">you</span>`.
   - The rose italic serif word dynamically cycles smoothly (fade-up or morph) between: `glow`, `glam`, `home`, `the weekend`, `you`.
2. **Reels Video Hover Previews**:
   - Work tiles display high-resolution still covers with a subtle glass pill tag.
   - On desktop hover (or when intersecting viewport on mobile), the tile seamlessly crossfades to a looping, muted preview clip with an animated play pill.
3. **Pill-Shaped Mask Reveals**:
   - On scroll entrance, key image cards animate outward from a compact rose capsule shape (`clip-path` or SVG mask) into full-bleed rectangular/bento cards with rounded corners (`border-radius: 20px`).
4. **Context-Aware Magnetic Pill Cursor**:
   - A custom trailing pill cursor that dynamically expands and displays labels ("View Reel", "Explore", "Copy Email") when hovering over interactive media cards and CTAs, with subtle magnetic pull.
5. **Inertial Smooth Scrolling (Lenis)**:
   - Integrate Lenis smooth scrolling for a fluid, weighted luxury browsing experience.
6. **Pinned Sideways Lookbook Carousel**:
   - A dedicated editorial lookbook section that pins on vertical scroll and translates horizontally, allowing brand directors to page through outfits and campaign shoots like a magazine editorial.
7. **Niche Hover Mood Shifts**:
   - Hovering over the niche tags (Fashion, Skincare, Beauty, Lifestyle, Travel) in the hero or navigation softly modulates background subtle highlights or swaps the hero preview mood (e.g., Lavender glow for Skincare, Sky Blue tint for Travel).
8. **Tactile Monogram / 3D Tilt**:
   - An interactive 3D / parallax depth element: Mitchelle’s signature monogram "M" in rose glass that subtly refracts light, or 2.5D gyroscopic/cursor tilt on Mitchelle’s avatar card.

---

## 6. Page Structure & Section Breakdown

- **Navigation**:
  - Sticky glass bar (`backdrop-filter: blur(12px)`): Monogram logo `M Mitchelle.`, anchor links (`Work`, `Services`, `About`, `Contact`), and primary CTA button `Work With Me`.
- **Hero Section**:
  - Stacked, centered design: Story-ring avatar (`WhatsApp Image 2026-10-11 at 15.30.36 (1).jpeg`), headline with the shape-shifting italic word, concise outcome subhead, dual CTAs (`Work With Me` and `See My Work`), followed by interactive pastel niche pills.
- **Brand Metrics & Media Kit Strip**:
  - Clean typographic stat row with tabular numerals: Instagram reach, engagement rate, monthly impressions, and audience demographics (female skew, Kenya & East Africa + global diaspora).
- **Featured Work Bento Grid (Lookbook & Video)**:
  - 6-column bento layout featuring Summer Lounge at Sarit Centre, Glam by Tyee tutorial, Luxury Dining, and Travel shoots. Floating frosted `GlassPill` metadata tags over imagery.
- **Content Creation Services & Booking Formats**:
  - Three distinct offerings highlighting both Virtual and In-Person modes:
    1. *UGC & Product Reviews* (Virtual: Short-form Reels/TikToks, aesthetic photography, product whitelisting).
    2. *Event Appearances & Brand Launches* (In-Person: Sarit Centre/Nairobi events, live IG stories, recap Reels).
    3. *Editorial Campaigns & Photoshoots* (In-Person: Brand lookbooks, commercial modeling, campaign imagery).
- **About Mitchelle**:
  - Brief, warm personal philosophy, authentic lifestyle approach, and why brands choose to work with her.
- **Contact & Partnership Footer**:
  - High-impact closing block: `Let's make something <span class="mi-it">together</span>`.
  - Direct mail link (`michelleatienooduor@gmail.com`), Instagram handle link, Nairobi base indicator, and an interactive copy-to-clipboard email pill.

---

## 7. Deliverables & Technical Instructions

1. **Clean Semantic Architecture**: Produce clean, standards-compliant HTML5, modern CSS (using CSS variables defined in `michelle-design-system/tokens.css`), and lightweight modular JavaScript.
2. **Responsive & Mobile-First Optimization**: Flawless layout across iPhone/Android viewports up to ultra-wide displays (fluid typography, touch-friendly tap targets).
3. **Accessibility**: All images must feature descriptive `alt` tags, adequate color contrast ratios (WCAG AA), and full keyboard navigation support.
4. **Self-Contained & Production-Ready**: Provide all HTML, CSS, and JS code ready to run directly in the browser.
