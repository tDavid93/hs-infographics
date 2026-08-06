---
name: BG14 Meta Desk
description: A tactical Tavern Scout Binder for Hearthstone Battlegrounds Season 14 decisions.
colors:
  paper: "#f3ead7"
  paper-strong: "#fff8e8"
  ink: "#21180f"
  ink-soft: "#584a38"
  line: "#2e2418"
  blue: "#1d5b81"
  teal: "#00826d"
  red: "#b63f31"
  gold: "#be7f22"
  green: "#29734c"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "0"
  body:
    fontFamily: "Atkinson Hyperlegible, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "Atkinson Hyperlegible, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.73rem"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "0.06em"
rounded:
  chip: "999px"
  control: "10px"
  card: "14px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "18px"
  lg: "24px"
components:
  nav-tab:
    backgroundColor: "{colors.paper-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 14px"
  filter-active:
    backgroundColor: "#ffe28f"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
  content-card:
    backgroundColor: "#fbf2df"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "18px"
---

# Design System: BG14 Meta Desk

## Overview

**Creative North Star: "The Tavern Scout Binder"**

The site is a coach's desk reference for a volatile Battlegrounds season: warm paper, inked rules, stamped labels, tabbed navigation, and clipped card specimens. It is expressive enough to feel made for Hearthstone players, but it stays in Read mode: hierarchy, scan speed, and trust in source separation beat spectacle.

The design rejects the previous generic dark dashboard. It keeps the factual content and route structure, but gives every repeated element a binder function: nav as tabs, filters as selector chips, grades as stamps, cards as specimens, source notes as filed references.

**Key Characteristics:**
- Warm paper surfaces with strong ink borders and visible reading structure.
- Dense but legible cards that keep decision rules close to card identity.
- Binder-tab navigation and stamp-like metadata for route and confidence context.
- Light, tactile depth with soft shadows only where panels lift from the desk.

## Colors

The palette is warm paper plus restrained ink and a few tactical marker colors.

### Primary
- **Deep Ink**: Primary text, borders, and active tab fills.
- **Desk Paper**: Page background and the broad guide surface.

### Secondary
- **Scout Blue**: Links, icon accents, and tactical headings inside cards.
- **Warning Red**: caution labels, meta-note headings, and high-attention affordances.
- **Highlighter Gold**: selected filters, stamped chips, and important callouts.

### Neutral
- **Soft Ink**: Body copy and secondary explanations.
- **Filed Paper**: Cards, source panels, changelog items, and specimen backplates.

### Named Rules

**The Evidence Color Rule.** Blue is for navigation or source action, red is for caution, and gold is for selected or highlighted state. Do not use them as arbitrary decoration.

## Typography

**Display Font:** Bricolage Grotesque with system sans fallback.  
**Body Font:** Atkinson Hyperlegible with system sans fallback.

**Character:** Display type should feel handwritten-adjacent and tactical without becoming a novelty face. Body type prioritizes quick reading, long Hungarian words, and mobile clarity.

### Hierarchy
- **Display** (800, `clamp(3rem, 8.5vw, 6rem)`, 0.9): root title and major hero use only.
- **Headline** (800, `clamp(1.9rem, 4vw, 3.2rem)`, 0.98): section titles and overview statements.
- **Title** (700-800, 1.2rem-2.35rem, 1.1): comp names, card headings, and reference cards.
- **Body** (400, 1rem, 1.6): explanatory copy with a preferred measure around 65-75ch.
- **Label** (900, 0.72rem-0.78rem, tracked uppercase): stamps, chips, route labels, and confidence markers.

### Named Rules

**The Binder Label Rule.** Labels should sit beside or below a heading as metadata, never as a decorative kicker that delays the actual title.

## Layout

The shell uses a max-width desk surface of 1240px with a 28px viewport gutter. Overview pages use a taller masthead; subpages use a compact masthead so users reach filters, comps, strategy tables, or references sooner. Major content sections are bordered paper sheets with a left binder margin on desktop. Mobile collapses to a single-column notebook page and turns site navigation into four equal tabs.

## Elevation & Depth

Depth is tactile and structural. Broad panels use soft ambient shadows to lift from the desk, while inner cards rely more on ink borders and paper tone than heavy shadows. Hover states may lift links or cards slightly, but resting content should remain calm.

### Shadow Vocabulary
- **Desk Lift** (`0 20px 42px rgb(60 38 14 / 0.16)`): masthead, major sections, and comp cards.
- **Card Lift** (`0 10px 22px rgb(78 50 20 / 0.1)`): repeated cards and route panels.

## Shapes

The system uses gently rounded paper panels: 14px for cards and sections, 10px for controls, and full pills only for compact chips or stamps. Borders are ink-like and usually 1px inside repeated cards, 2px for major sheets.

## Components

### Buttons
- **Shape:** compact rounded tab or chip (10px).
- **Primary:** dark ink background with paper text for active language and tab states.
- **Hover / Focus:** active state changes fill, plus a visible blue focus ring.

### Chips
- **Style:** pill-shaped stamps with highlighter gold selected state and ink text.
- **State:** selected filters use gold fill; inactive filters on dark toolbar stay outlined for contrast.

### Cards / Containers
- **Corner Style:** paper-card radius (14px).
- **Background:** filed paper with ink borders.
- **Shadow Strategy:** card lift for repeated panels, desk lift for large sections.
- **Internal Padding:** 18px for cards, 24px for major sections.

### Navigation
- Binder tabs sit in a tan bar under the masthead. Active tabs become light paper with an ink border. On mobile, navigation is a four-cell grid to prevent clipped labels.

### Hearthstone Card Specimens

Card art remains sourced from HearthstoneJSON. The site frames each card as a clipped specimen with Tavern tier gem, art window, nameplate, type line, rules box, attack and health counters, and a short meta note.

## Do's and Don'ts

### Do:
- **Do** keep strategy text close to the card, route, or board state it explains.
- **Do** use gold only for selected/highlight states or important stamps.
- **Do** keep subpage mastheads compact so the user reaches the tool surface quickly.
- **Do** preserve bilingual parity when adding visible content.

### Don't:
- **Don't** return to a generic dark dashboard or glass-card visual system.
- **Don't** use community evidence as win-rate proof.
- **Don't** add decorative grids, glow effects, or large ornamental backgrounds without a product function.
- **Don't** use color alone to communicate tier, confidence, or active state.
