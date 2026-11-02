# Feature: ai-builder-portfolio

Objective: port the approved prototype (`../portfolio-design/v2/index.html`) into the React site, positioning Enderson as an engineer who builds and ships products with AI agents.
Branch: `feat/ai-builder-portfolio` · Delivery: ask-on-risk (single PR expected) · Checks: `pnpm build`, `pnpm lint` (no unit test runner in repo).

## Specs

- S1 — Home reproduces the prototype: giant name hero, statement "Diseño el sistema. Los agentes construyen. Yo publico.", animated flow diagram ("Cómo llega una idea a la tienda", horizontal on desktop, vertical under 700px, hover highlights a product's path), products rows, tools for agents, "Cómo trabajo" band with stack marquees, experience, big "Hablemos" contact.
- S2 — "Loop de desarrollo" section right after the flow diagram, generic: user said "sin especificar nada, solo más genérico sin mencionar proyectos y los nombres reales de los test". No project names and no real test file names in that section.
- S3 — Dark mode: toggle in nav, defaults to system preference, persists the choice; the "Cómo trabajo" band inverts.
- S4 — ES and EN complete via paraglide messages; no hardcoded user-facing strings.
- S5 — Projects and About pages adopt the same visual language; `/reins` guide and static privacy/support pages keep working and stay readable in both themes.
- S6 — Never expose infrastructure (IPs, hosts, Tailscale, servers, project ids, tester counts); stack and providers only.

## Tasks

- T1 — S1–S6. Route: delegated to one Sonnet writer (user instruction: "delega el trabajo con sonnet 5.5 nunca con opus"; context backstop). Status: done — build + lint pass, screenshots in ../portfolio-design/shots/port (light, dark, 390px).

## Log

- L1 (2026-11-02, user, verbatim): "Vamos a usar la habilidad de app designer para mejorar mi portafolio, enfocarlo en lo que he construido hasta ahora y lo que tengo en producción, de mi manera de construir y de trabajar con la IA necesito que lo enfoquemos como AI builder si así me consideras, conoces suficiente de mi, de mis proyectos, mis memorias en engram, no quiero que seas súper explícito, tampoco vamos a ventilar infraestructura y cosas así, solo stack, mis proveedores favoritos y cosas por el estilo que sea sin duda llamativa para cualquier reclutador, y teniendo ese impacto visual de una web bien construida"
- L2 (user): "No, ninguna me gusta, te lo dejaré a tú imaginación, ignora todo lo que te pedí antes, si tuvieras que construir un portafolio web de un ingeniero como yo, y sabiendo cómo trabajo, como lo harías? Con un diseño impactante, Llamativo"
- L3 (user): "Bien me gusta la idea, también me gustaría que agregáramos una sección después de “cómo llega un producto a la tienda” que sea “loop de desarrollo” donde se incluyan las e2e que actualmente estamos usando para probar regresión, además el modo oscuro"
- L4 (user): "O sea si, pero sin especificar nada, solo más genérico sin mencionar proyectos y los nombres reales de los test por ejemplo"
- L5: prototype approved; loop section made generic (journey types, no names, no counts). Next: T1 port.
- L6: T1 ported by Sonnet writer; parent spot-checked `pnpm build`, `pnpm lint` and screenshots (home dark, projects, about mobile). Risk: none.
