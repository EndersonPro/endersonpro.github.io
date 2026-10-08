# Feature: claude-startups-landing

## Objective
Turn the home page of endersonvizc.dev into a product-first landing for Reins, built with and around Claude, to support the Claude for Startups application.

## Problem / Why
The site reads as a freelance portfolio. Claude Startups reviewers look for an own product, its stage, and how it uses Claude. Reins (own product, Claude Code companion) is not on Home or Projects.

## Scope
- Home: Reins hero (what it is, who it is for), beta status (iOS TestFlight + Google Play closed testing), real screenshots, explicit "Built with Claude" section, CTAs to TestFlight / Android beta / guide. Personal profile kept below as "founder".
- Projects: add Reins as first card.
- ES + EN copy via paraglide messages.

## Constraints
- No fabricated metrics or claims. Only verified facts: beta on TestFlight, closed testing on Google Play, works with Claude Code (also Codex/OpenCode).
- Screenshots from `reins-monorepo/reins/stores/ios`, excluding any showing employer project names (IMG_2355 shows "Siigo.Application.Pos").
- Artifacts in English; ES copy neutral professional Spanish.

## Delivery
- Strategy: ask-on-risk. Forecast ~300 authored lines (excluding images). Single PR expected.
- RDD: off (global). Ordinary checks only.

## Tasks
- [x] T1 — Home landing + Projects card + i18n + screenshots + styles. Route: delegated (writer trigger: 4+ non-trivial files). Checks: `pnpm build`, `pnpm lint`.

## Acceptance criteria
- Home first screen names Reins, states beta status on both stores, and mentions Claude explicitly.
- Screenshots render, optimized (webp/png resized), with alt text.
- Build and lint pass. ES and EN both complete.

## Progress / Evidence
- Branch: feat/claude-startups-landing
- T1 done (delegated writer). Home is now a Reins landing: hero (beta eyebrow, "Built for Claude Code" badge, TestFlight + Android group CTAs, guide link, hero screenshot), status strip, 4-screenshot gallery (scroll-snap under 900px), "Built with Claude" section, 5 features, founder block reusing the existing profile copy. Reins is the first Projects card (category "Own product", links to `/reins`). Beta URLs moved to `src/lib/reins-links.ts`. `/reins` added to sitemap. Meta descriptions mention Reins and Claude Code.
- Screenshots: IMG_2344/2346/2351/2352 -> `src/assets/img/reins/{hosts,agent-chat,usage,inbox}.webp` (cwebp, 640x1385, q80, 26-74 KB). IMG_2355 excluded. Username + Tailscale IP (hosts.webp) and local path (inbox.webp) pixelated before first push; verified unreadable.
- Authored lines: ~570 added / ~76 removed (CSS ~245, messages ~106), above the 400 forecast mainly from the landing CSS; kept as one coherent unit (single PR).
- Checks: `pnpm build` passed; `pnpm lint` (ESLint) no issues; `npx @biomejs/biome check src` reports format-only diagnostics repo-wide (no biome config, default 80-column width; pre-existing on base files such as home.tsx, reins.tsx, about.tsx) plus generated `src/paraglide/**`; no Biome lint-rule findings in touched files.
- Commit: see `git log` on the branch (feat(home): turn home into a Reins product landing).

- Delivery: user approved; fast-forward merged to main and pushed (GitHub Pages deploy on push to main).

## Next step
Visual check of the live site at 360px and desktop; apply to Claude for Startups with an @endersonvizc.dev email.
