# Design Audit — Claude Design `marketing-saas` kit → agendalila-landing

**Date:** 2026-05-26
**Source:** Claude Design handoff bundle, kit `ui_kits/marketing-saas/` (`HeroAndProof.jsx`, `FeaturesAndCTA.jsx`, `saas.css`, `README.md`) + shared `colors_and_type.css` + `SKILL.md`.
**Purpose:** audit the design before bootstrapping the production landing, and record the decisions.

## Verdict

**Strong, production-worthy, faithful to the brief, with a clean port path.** A complete 10-section landing, on-brand, accessible by design. The only real functional gap is the request-access **form** (a no-op in the demo). Nothing blocking.

## What it gets right

- **Complete structure per brief:** nav → hero (one-line value prop + rubro chips + 3 real-product tiles) → social proof (founder photo + 3 honest stats) → problem (3 cards) → 5 **zig-zag** features with inline product mocks (Agenda, CRM, Recordatorios, Página de reservas, Métricas) → founder story (first person, real photo) → flagship testimonial → FAQ (incl. "¿cómo consigo invitación?" + "¿funciona para barbería?") → final CTA form → footer.
- **Brand discipline:** uses the shared tokens; the WCAG rule is baked in (`#725f94` interactive, `#ae96d0` decoration-only); warm off-white base; Montserrat + iCiel Cadena; **no Liquid Glass** (admin-only); **no butterfly** (salon-only); **barbershop-safe** (rubro chips, neutral voice, barber service accents in tokens).
- **Invitation-only honored:** every CTA = "Solicitá tu invitación"; no pricing table; FAQ handles pricing softly ("te pasamos el detalle en el onboarding").
- **Voseo, CR-first, authentic founder narrative.**
- **A11y considered:** `focus-visible`, `prefers-reduced-motion`, `aria-expanded`, alt text, lazy + width/height on the founder photo, mobile hamburger drawer. A prior design audit's WCAG fixes appear applied.
- **Inline product mocks** (not stale screenshots), built from the same tokens — they double as proof the design system is tight.

## Issues to resolve during the port (by severity)

- **🔴 HIGH — request-access form is a no-op** (`onSubmit` → `setSubmitted(true)`). It's the page's whole purpose. **Decision: Cloudflare Pages Function → D1 `leads` table + Resend notification to info@agendalila.com** (approved).
- **🟡 MED — it's a React-via-CDN demo** (`window` globals, no imports/exports). The port converts it to Astro components + `src/data/*.ts` + tiny vanilla scripts (no React) — expected work, not a flaw.
- **🟡 MED — iCiel Cadena font:** self-hosted (woff2/otf), same as the live `amorelila.com`. Same licensing posture as the production salon site.
- **🟢 LOW — demo asset paths** (`../../assets/...`) to rewire to `public/`; missing production SEO/meta/OG image/favicon variants; no analytics/cookie banner (CF Web Analytics auto-injected once Pages is connected).

## Decisions

- **Architecture / structure / tech / conventions = mirror `amorelila-landing`** (Astro 5 static + Tailwind v4 via Vite + sitemap + TS strict + CF Pages auto-deploy on push to master; data-driven `src/data/*.ts`; components per section; `BaseLayout.astro`; `global.css` tokens). **Design/brand = the Claude Design handoff** (this kit). These are deliberately separate inputs.
- **Founder name = Estefanía Sánchez** — confirmed by both the handoff and `amorelila-landing`'s own `CLAUDE.md` (Facebook `ByEstefania.Sanchez`).
- **Hosting:** new repo → CF Pages; apex `agendalila.com` → CNAME → Pages project. (Apex is free — the `*.agendalila.com` wildcard route only catches subdomains.)

## Port plan

1. **Foundation** ✅ (this commit): Astro scaffold + tokens (`global.css`) + `BaseLayout` + assets (font, logos, favicon, founder photo) + placeholder `index.astro` that builds.
2. **Content → `src/data/*.ts`** (rubros, problems, features, faq, founder, footer) — the kit already structures these as arrays.
3. **Sections → `.astro`** (Nav, Hero, SocialProof, Problem, Features [5 zig-zag + mocks], Founder, Testimonial, FAQ, FinalCTA, Footer) + `ui/` + vanilla scripts (drawer, accordion, form). Compose in `index.astro`.
4. **Form backend** (Pages Function → D1 `leads` + Resend).
5. OG image + favicon variants + polish + connect CF Pages.
