---
name: BG14 Meta Desk
description: A compact dark tavern strategy desk for Hearthstone Battlegrounds Season 14 decisions.
colors:
  bg: "#070a0f"
  bg-2: "#0c1119"
  panel: "#111823"
  panel-2: "#172130"
  panel-3: "#202b3b"
  ink: "#f7efe2"
  muted: "#b5c0cf"
  faint: "#7e8a9c"
  line: "#2d394b"
  line-strong: "#46566e"
  gold: "#f2b84b"
  cyan: "#56c7ff"
  green: "#68d99a"
  red: "#ff7d72"
typography:
  display:
    fontFamily: "Rajdhani, Atkinson Hyperlegible, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 5vw, 4.6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "0"
  body:
    fontFamily: "Atkinson Hyperlegible, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.58
    letterSpacing: "0"
  label:
    fontFamily: "Atkinson Hyperlegible, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "0.08em"
rounded:
  control: "8px"
  panel: "12px"
  section: "14px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "20px"
components:
  nav-tab-active:
    backgroundColor: "rgb(242 184 75 / 0.12)"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  filter-active:
    backgroundColor: "{colors.gold}"
    textColor: "#1c1204"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  content-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "16px"
---

# Design System: BG14 Meta Desk

## Overview

**Creative North Star: "Compact Tavern Strategy Desk"**

The interface should feel like a polished in-game scouting tool: dark carved panels, restrained amber and cyan accents, crisp tabs, and dense guide cards. The successful version is not a landing page and not a decorative notebook. It gets players from page load to comp decisions quickly.

The system keeps Hearthstone atmosphere through dark tavern surfaces and card specimens, while preserving a practical guide hierarchy. Empty hero space is a failure state. Controls must never cover the content the player is trying to inspect.

**Key Characteristics:**
- Compact header with season identity, update date, language switch, and immediate navigation.
- Dark panels with clear borders and restrained amber/cyan accents.
- Desktop comp cards use a responsive internal card grid instead of cramped horizontal scrollbars.
- Sticky behavior is limited to primary navigation; filters remain in flow.

## Colors

The palette is dark tavern UI with tactical accents.

### Primary
- **Void Background**: page ground and deep app shell.
- **Tavern Panel**: core cards, comp panels, route blocks, source blocks.
- **Warm Ink**: primary text on dark surfaces.

### Secondary
- **Amber Signal**: selected filters, tier highlights, comp grades, and important labels.
- **Arcane Cyan**: links, tactical subheads, source actions, and focus support.
- **Combat Green / Damage Red**: positive confidence/grades and low-confidence or warning states.

### Neutral
- **Muted Steel**: body copy and secondary descriptions.
- **Faint Steel**: metadata, inactive labels, and low-emphasis chrome.

### Named Rules

**The Two Accent Rule.** Amber marks selected or important state; cyan marks navigation, links, and tactical headings. Do not scatter both colors across the same component without a role.

## Typography

**Display Font:** Rajdhani with Atkinson Hyperlegible/system fallback.  
**Body Font:** Atkinson Hyperlegible with system fallback.  
**Card Rules Font:** Georgia, only inside the Hearthstone-style rules text box.

**Character:** Rajdhani gives the guide a game-interface edge without becoming novelty lettering. Atkinson Hyperlegible carries the long strategy copy cleanly in both Hungarian and English.

### Hierarchy
- **Display** (700, `clamp(2.35rem, 5vw, 4.6rem)`, 0.92): site title only.
- **Headline** (700, `clamp(1.85rem, 3.2vw, 3rem)`, 0.98): section titles and snapshot headlines.
- **Title** (650-800, 1.2rem-2.15rem, 1.1): comp names, cards, and references.
- **Body** (400-500, 1rem, 1.58): guide explanations.
- **Label** (900, 0.72rem-0.78rem, tracked uppercase): grades, filters, confidence, and metadata.
- **Card Rules** (Georgia, 0.64rem-0.78rem, 1.12): only for text inside the simulated Hearthstone card rules panel.

## Layout

The shell is a 1320px app-width container. The masthead is compact, not theatrical. Primary nav may stick near the top; secondary filters must stay in document flow. Comps use a two-column page grid when space allows, and each comp card lays its core cards out in a responsive grid on desktop. Mobile collapses to one column and allows horizontal card scrolling only where needed.

## Elevation & Depth

Depth comes from dark tonal layering and soft black shadows. Major panels get the strongest shadow; repeated cards sit flatter so the screen does not become noisy.

### Shadow Vocabulary
- **Panel Lift** (`0 22px 60px rgb(0 0 0 / 0.38)`): masthead and comp cards.
- **Card Lift** (`0 12px 28px rgb(0 0 0 / 0.18)`): repeated guide cards.

## Shapes

Use modest radii: 8px for buttons and tabs, 12px for cards, 14px for sections. Avoid the rounded paper-ticket look. Hearthstone card specimens can keep their native fantasy rounding, but app chrome should stay crisp.

## Components

### Buttons
- **Shape:** compact rounded rectangle (8px).
- **Primary / Active:** amber fill with dark text.
- **Hover / Focus:** border and background shift with visible cyan focus outline.

### Chips
- **Style:** compact dark chip with steel border.
- **State:** selected chip becomes amber; inactive chips remain dark.

### Cards / Containers
- **Corner Style:** 12px card radius.
- **Background:** dark panel surfaces with 1px borders.
- **Shadow Strategy:** light card lift; avoid heavy stacked shadows inside comp cards.
- **Internal Padding:** 16px for cards, 20px for major sections.

### Navigation
- Primary nav is a compact sticky tab bar. Active route uses amber tint and readable text. Mobile uses a four-cell grid to prevent clipped route labels.

### Hearthstone Card Specimens

Card art stays from HearthstoneJSON. Desktop card specimens are smaller and arranged as a grid inside each comp, reducing horizontal scroll. Mobile may scroll horizontally to preserve card readability.

## Do's and Don'ts

### Do:
- **Do** keep hero/header height low enough that real guide content appears quickly.
- **Do** keep filters in flow so they do not cover card titles or card art.
- **Do** use amber for selected state and cyan for source/action emphasis.
- **Do** keep comp cards dense but readable.

### Don't:
- **Don't** use parchment, notebook, or fake paper styling for this site.
- **Don't** use oversized empty hero blocks.
- **Don't** make desktop comp cards depend on horizontal scroll when a grid can fit.
- **Don't** let sticky bars overlap content.
