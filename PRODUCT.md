# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Inferred from the existing site: Hearthstone Battlegrounds players who want a fast Season 14 reference while learning, reviewing, or making in-game decisions. The primary user needs clear comp direction, key card recognition, build routes, and current meta caveats without reading long patch notes.

## Product Purpose

BG14 Meta Desk is a bilingual helper site for Hearthstone Battlegrounds Season 14. It turns official card-pool data, HearthstoneJSON card imagery, and directional community reads into a compact guide for comps, Dark Gifts, board states, strategies, references, and changelog updates.

## Positioning

The site combines card-level visual recognition with strategic decision rules in Hungarian and English. Its useful mechanism is not a generic tier list; it connects each comp to commit signals, avoid conditions, board states, build routes, references, and confidence-labeled community context.

## Operating Context

Users may browse before or between games, often on desktop but with mobile support. The guide must stay navigable across overview, comps, strategy, references, and changelog content. Cloudflare builds from the GitHub `main` branch with Astro static output.

## Capabilities and Constraints

The site is an Astro static app. It uses localized data files for HU and EN content, HearthstoneJSON image URLs for card art, and client-side tribe filtering on the comps page. The redesign must preserve existing routes, bilingual navigation, source links, accessibility semantics, and the current factual content.

## Brand Commitments

The current product name is BG14 Meta Desk / Dark Gifts Meta Desk. The tone is practical, analytical, and player-focused. No official Blizzard affiliation is claimed.

## Evidence on Hand

Existing source files include `src/data/bg14.ts`, `src/data/bg14-en.ts`, route pages under `src/pages`, reusable Astro components, and `src/styles/global.css`. Source references include Blizzard, HearthPwn, HSBG, HearthstoneJSON, r/BobsTavern, and YouTube guide searches. No custom logo, owned screenshots, analytics, or real win-rate dataset is present.

## Product Principles

Prioritize decision speed over spectacle.
Separate official facts from community reads and confidence levels.
Make card identity and strategic context visible together.
Keep bilingual parity across important surfaces.
Preserve static-site performance and Cloudflare deployability.

## Accessibility & Inclusion

The site should remain keyboard navigable, responsive, readable on mobile, and semantically structured for screen readers. Color cannot be the only carrier of comp grade, confidence, or navigation state.
