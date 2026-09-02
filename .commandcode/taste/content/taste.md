# Content

- Public-facing documents (e.g., privacy policies) default to English, with an option to view them in neutral Spanish and neutral Portuguese. Confidence: 0.9
- Public-facing pages for a given app should adopt that app's branding (its colors and logo). Confidence: 0.85
- Never expose internal implementation details in public content: feature flags (e.g., a "remote strategy" flag) or internal GitHub repo names. Confidence: 0.9
- Descriptions of an app must reflect actual behavior only: include the real services in use (ads, Firebase Crashlytics/Analytics, own streaming backend) and omit features that don't exist or shouldn't be advertised (e.g., file downloads). Confidence: 0.85
- Store-compliance pages (privacy policies for Google Play/AdMob) must be plain static HTML served at a stable, world-accessible URL — not client-rendered SPA routes. Confidence: 0.8
- Keeps a DESIGN.md at the repo root as the canonical design spec for web projects; redesign requests are anchored to it ("basado en el DESIGN.md") and the code must be derived from that spec, not invented ad hoc. Confidence: 0.85
- Design language for his web properties (from DESIGN.md, xAI-inspired): near-black `#0a0a0a` full-bleed canvas, hairline borders instead of shadows, pill-shaped buttons with translucent white borders, Inter at weight 400 only (emphasis comes from whiteness, never bold), Geist Mono for uppercase tracked eyebrow labels, and one accent color (sunset orange) reserved for tiny markers only. Confidence: 0.75
- Prefers compact, information-dense components over spacious ones: explicitly asked to compact portfolio project cards (smaller images, tighter padding, descriptions clamped to 2 lines) once the roomier version felt too large. Confidence: 0.7
- Grounds project/repo descriptions in real data: when adding external projects, pulls actual metadata (e.g., GitHub API for language and description) instead of inventing copy. Confidence: 0.75
- Portfolio content should showcase his own open-source GitHub tools (e.g., flutree, perfscope) alongside production/client apps, linked to the repos. Confidence: 0.65
