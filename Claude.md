# CLAUDE.md — Endogeneity Website Build Rules

## Project

Build an experimental DJ / music website for **ENDOGENEITY**.

This is not a normal portfolio website.
It should feel like one immersive digital canvas with directional navigation.

The first goal is to build and test the **4-grid directional navigation prototype**.
Content, images, music links, and final copy can be added later.

---

## Mandatory Front-End Design Skill

Before writing or editing any front-end code, always invoke/use the front-end design skill first. No exceptions.

If reference images are provided:
- Study them before coding
- Match layout, spacing, typography, proportions, mood, and interaction style
- Do not copy blindly, but preserve the design logic
- Use screenshots after every major change to compare against references
- Fix visual mismatch before adding more features

## Core Concept

The homepage is a minimal 2x2 navigation grid.

```text
ME        SOUND

MACHINES  CONTACT
```

The landing page should feel empty, dark, spacious, and immersive.

There should be no traditional page reload.
The site should behave like one animated interface.

When a user clicks a tile:

* The view/canvas moves toward that direction.
* The selected section expands inside the same page.
* The background grid/crosshair shifts in that direction.
* The transition should feel smooth, premium, and cinematic.

Directional behavior:

```text
ME       → top-left
SOUND    → top-right
MACHINES → bottom-left
CONTACT  → bottom-right
```

---

## Site Sections

### 1. ME

Purpose: personal introduction, not a boring bio.

Content placeholders:

* Who/what is Endogeneity
* Berlin-based electronic music direction
* Short personal story
* Photo/card placeholders
* Text cards for ideas, influences, experiments

Example tone:

> Sound experiment. Obsession. Endogeneity.

---

### 2. SOUND

Purpose: mixes, music direction, sound identity.

Content placeholders:

* Latest mix
* Music influences
* SoundCloud / YouTube embed placeholders
* Waveform visual
* Tracklist placeholder
* Mood: hypnotic, textured, electronic, underground

Do not fake events or achievements.

---

### 3. MACHINES

Purpose: tools, gear, process.

Content placeholders:

* Digitakt
* Drum machine
* Mixer
* Cables
* Setup photos
* “tools used to shape the sound”

This section can be visual-heavy.

---

### 4. CONTACT

Purpose: simple contact / booking / collaboration.

Content placeholders:

* Instagram
* SoundCloud
* Email
* Booking / collab message

Keep it clean and minimal.

---

## Visual Direction

The site should feel:

* Underground
* Futuristic
* Minimal
* Premium
* Dark club / experimental music energy
* Inspired by Awwwards-style navigation, but not a direct copy

Avoid:

* Corporate look
* Generic portfolio layout
* Bright full-page gradients
* Overly shiny cyberpunk look
* Childish animations
* Too much text on homepage

---

## Color Palette

Use this palette:

```css
--bg-main: #050006;
--bg-secondary: #07040A;
--text-main: #F4F1EA;
--text-muted: #8C8595;
--neon-pink: #FF2BD6;
--neon-purple: #7A4DFF;
--electric-blue: #1E8CFF;
--grid-line: rgba(255, 255, 255, 0.08);
--pink-grid-line: rgba(255, 43, 214, 0.18);
```

Usage rules:

* Main background must be matte near-black.
* Main text should be off-white.
* Neon pink should be used for hover, active states, cursor, highlights, and small glow details.
* Purple/blue should be secondary only.
* Grid lines must be subtle.
* Logo should be one of the brightest elements.
* Do not overuse glow.

---

## Background

Use a dark matte background.

Required background details:

* Near-black base
* Very subtle grain/noise texture
* Thin grid lines
* Faint dotted/crosshair elements
* Optional radial glow behind active section only

Do not use:

* Heavy gradients
* Bright cyberpunk background
* Large distracting patterns
* Overly reflective surfaces

The background should support the logo and navigation, not compete with them.

---

## Typography

Use futuristic/techno typography for headings.

Preferred Google Fonts:

* Heading: `Orbitron`
* Alternative heading: `Syncopate`
* Alternative heading: `Audiowide`
* Body: `Space Grotesk`
* Alternative body: `Sora`

Default recommendation:

```css
Heading font: Orbitron
Body font: Space Grotesk
```

Typography rules:

* Avoid Arial, Roboto, Inter unless used only as fallback.
* Use uppercase section names.
* Use wide letter spacing for navigation labels.
* Body text must remain readable.
* Keep text minimal and sharp.

---

## Logo Usage

Use the final ENDOGENEITY logo direction:

* Vinyl record
* Abstract 3D E
* Matte neon pink / black / off-white style
* Minimal glow
* Avoid overly reflective vinyl
* Prefer matte finish
* Use only 2 subtle reflection shades on vinyl
* Avoid too many highlights

Logo rules:

* Use logo on landing page if asset is available.
* If logo asset is missing, use text wordmark placeholder: `ENDOGENEITY`.
* Do not recreate the logo randomly.
* Do not change logo concept unless asked.
* Logo should work on dark background first.

---

## Homepage Layout

The homepage should start with:

* Dark background
* Small ENDOGENEITY logo/wordmark
* 2x2 grid navigation
* Subtle crosshair/cursor element
* Minimal labels
* No long paragraph on first view

Example structure:

```text
[small logo / wordmark]

ME        SOUND

MACHINES  CONTACT

[crosshair / subtle grid / small instruction]
```

The four grid items should feel like navigation zones, not normal buttons.

---

## Navigation Behavior

Build a directional navigation system.

Initial state:

* Four tiles are visible.
* Grid is centered.
* Background is calm.
* Cursor/crosshair is centered.

On hover:

* Tile border glows softly in neon pink.
* Label becomes brighter.
* Small corner brackets appear or intensify.
* Background grid subtly reacts.
* No aggressive animation.

On click:

* Active tile expands.
* Canvas shifts toward the tile direction.
* Selected section opens in the same page.
* Other tiles fade or shrink.
* A back/close control appears.
* Transition should feel like zoom/pan/expand, not page reload.

Back behavior:

* Return to centered 2x2 grid.
* Smooth reverse animation.
* No hard reload.

---

## Expanded Section Layout

When a section opens, it should still feel part of the same canvas.

Each expanded section should include:

* Section title
* Short text block
* 2–4 content cards
* Visual placeholder area
* Back control
* Small directional indicator

Example for ME:

```text
ME
Sound experiment. Obsession. Endogeneity.

[Card 1: About]
[Card 2: Influences]
[Card 3: Process]
[Image placeholder]
```

Example for MACHINES:

```text
MACHINES
Tools used to shape the sound.

[Digitakt card]
[Drum machine card]
[Mixer card]
[Setup image placeholder]
```

---

## Animation Style

Animations should be:

* Smooth
* Slow enough to feel premium
* Minimal
* Cinematic
* Directional
* Not childish

Use:

* CSS transitions
* Vanilla JS
* Transform: translate, scale, opacity
* Subtle blur if needed

Avoid:

* Bouncy animations
* Cartoon effects
* Random glitch everywhere
* Too much flashing
* Heavy libraries unless required

Preferred timing:

```css
transition-duration: 700ms to 1200ms;
transition-easing: cubic-bezier(0.16, 1, 0.3, 1);
```

---

## Cursor / Crosshair

Add a subtle crosshair or cursor element inspired by experimental navigation websites.

Rules:

* Must be subtle.
* Should not block reading.
* Can move slightly with mouse.
* Can shift toward the active section on click.
* Neon pink dot or thin ring is acceptable.

---

## Responsiveness

Desktop first, but mobile must work.

Desktop:

* 2x2 grid layout.
* Fullscreen immersive canvas.

Tablet:

* Still 2x2 if space allows.

Mobile:

* Stack sections vertically or use 2x2 compressed layout.
* Navigation must remain usable.
* Avoid tiny text.
* Disable overly complex cursor effects on mobile.

---

## Assets

Use placeholder assets if real files are not available.

Expected future assets:

* ENDOGENEITY logo PNG/SVG
* Gear photos
* DJ/music photos
* Setup photos
* SoundCloud links
* YouTube links
* Instagram link
* Email

Do not invent real links.
Use placeholders until provided.

---

## Build Rules

* Primary output: `index.html`
* Use single-file build first: inline CSS and JS inside `index.html`
* Use Google Fonts CDN
* Use vanilla HTML/CSS/JS
* No React unless specifically asked
* No heavy animation libraries unless specifically asked
* Keep code clean and commented
* Build the navigation prototype first before adding complex content

---

## Local Server

* Always serve the site on port `3000`
* Use:

```bash
python3 -m http.server 3000
```

* Before starting, check if port 3000 is already in use.
* If port 3000 is already in use, do not start a second server.
* Site should be accessible at:

```text
http://localhost:3000
```

* Keep the server running during the build and screenshot loop.
* Only shut it down when explicitly asked.

---

## Screenshot Review Workflow

Use Puppeteer screenshots if available.

Setup:

```bash
npm i puppeteer
```

Screenshot command:

```bash
node screenshot.mjs http://localhost:3000
```

With label:

```bash
node screenshot.mjs http://localhost:3000 home
```

Screenshots should be saved in:

```text
temporary screenshots/
```

After screenshots:

* Review visual layout.
* Check spacing.
* Check typography.
* Check grid alignment.
* Check hover/active states.
* Check mobile behavior.
* Fix issues in one pass.

---

## First Build Priority

The first build should focus only on:

1. Dark matte background
2. 2x2 directional grid
3. Hover states
4. Click-to-expand directional navigation
5. Back/close behavior
6. Basic placeholder content inside each section

Do not spend time perfecting:

* Final copy
* Final images
* Music embeds
* Full branding polish

Those come after the navigation prototype works.

---

## Quality Checklist

Before calling the first version done, check:

* Does the homepage feel immersive?
* Are the 4 grid items clear?
* Does each click move in the correct direction?
* Does it feel like one canvas, not separate pages?
* Is the neon controlled and not overused?
* Is the background matte and premium?
* Are fonts futuristic but readable?
* Does it work on mobile?
* Is there a clear way to return to the grid?

---

## Final Direction

Build a dark, matte, experimental DJ website for ENDOGENEITY.

The site should feel like:

* vinyl
* sound
* signal
* direction
* underground electronic music
* immersive navigation

Start simple.
Make the 4-grid directional navigation work first.
Then improve visuals after screenshots.
