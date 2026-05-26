# AgendaLila — Marketing Landing (SaaS)

## What This Is

The **marketing/sales landing** for **AgendaLila** — the booking + CRM SaaS — that sells the software to salon, barbershop, nail, spa & aesthetics **OWNERS** (not end clients). Lives at **agendalila.com** via Cloudflare Pages.

**This is NOT:**

- the salon site `amorelila.com` (that's `amorelila-landing` — a different brand/surface, used here only as the **architecture reference**),
- the admin app `app.agendalila.com`,
- the public booking pages `<slug>.agendalila.com`.

**Model:** invitation-only. Every CTA = **"Solicitá tu invitación"**. No pricing table, no "start free", no self-serve signup.

**Differentiator:** built by an esthetician who runs a real salon (Amorelila Estética). Authenticity > feature count.

## Tech Stack (mirrors `amorelila-landing`)

- **Astro 5** — static (`output: "static"`), zero client JS except tiny vanilla islands (nav drawer, FAQ accordion, request form).
- **Tailwind CSS 4** — via `@tailwindcss/vite` (NOT `@astrojs/tailwind`).
- **@astrojs/sitemap** — auto sitemap at build.
- **TypeScript** — strict (`astro/tsconfigs/strict`).
- **Cloudflare Pages** — auto-deploy on push to `master` (build `npm run build`, output `dist/`). No GH Actions, no wrangler deploy. CF Web Analytics auto-injected by the dashboard.

## Architecture (data-driven — edit data, not templates)

```
public/                 # fonts (iCiel Cadena self-hosted), logos, favicon, photos
src/
├── components/         # one .astro per section (Nav, Hero, SocialProof, …)
│   └── ui/             # shared bits
├── data/               # content as typed TS (rubros, problems, features, faq, founder, footer)
├── layouts/
│   └── BaseLayout.astro  # SEO, meta, OG, JSON-LD, font preload, global.css import
├── pages/
│   └── index.astro     # composes the section components in order
└── styles/
    └── global.css      # @import tailwindcss + @font-face + @theme tokens + base
```

## Design Source (separate from architecture)

Design/brand comes from the **Claude Design handoff** (`agendalila-design-system/project/ui_kits/marketing-saas/`), NOT from amorelila-landing. See `docs/2026-05-26-marketing-saas-design-audit.md`. The 10 sections: nav → hero (w/ 3 product tiles) → social proof → problem → 5 zig-zag features (w/ inline product mocks) → founder story → flagship testimonial → FAQ → request-access form → footer. Tokens in `src/styles/global.css` port the handoff's `colors_and_type.css` (which matches the app's prod `globals.css`).

## Brand Specs

- **Lila as SIGNATURE, balanced** — base warm off-white (`#faf6fc`), text deep purple (`#725f94`), accent `#ae96d0` punctual. Must read fine for a **barbershop** (not exclusively feminine).
- **♿ Accessibility rule (load-bearing):** `#ae96d0` is decoration ONLY — never a button/link color on white (fails WCAG AA). All interactive = `#725f94` (`--brand`).
- **Typography:** iCiel Cadena (display, self-hosted) + Montserrat (body, Google). NEVER Inter/Roboto/Open Sans/system for display.
- **NO Liquid Glass** (admin-only). **NO butterfly motif** (salon-only). **NO icon mark** — typographic "AgendaLila" wordmark in iCiel Cadena.
- **Founder:** Estefanía Sánchez (Amorelila Estética, Curridabat, CR).

## Anti-AI rules (so it doesn't look AI-generated)

Forbidden: purple→blue / cyan-on-dark gradients; gradient text on titles/metrics; decorative glassmorphism everywhere; nested cards; grids of identical icon+title+text cards; centering everything; pure black/white. Use asymmetric layouts, left-aligned text, `clamp()` rhythm, motion only via transform/opacity with ease-out (no bounce), real diverse photos (barber/nails/spa).

## Content Language

Spanish, **Costa Rican voseo** (solicitá, mirá, contanos). Operator-facing copy is gender-neutral (`personas`, `tu equipo`, `tu agenda`); "clienta" only inside product-mock copy.

## Development

- `npm run dev` — dev server at http://127.0.0.1:3000
- `npm run build` — static build to `dist/`
- `npm run preview` — preview the build
- `npm run format` / `format:check` — Prettier
- `npm run check` — Astro + TS diagnostics

## Open TODOs (bootstrap)

- Port the 10 sections from the handoff `marketing-saas` kit → `src/components/*.astro` + `src/data/*.ts` + vanilla scripts.
- **Request-access form backend:** Cloudflare Pages Function → D1 `leads` table + Resend notification to hola@agendalila.com.
- OG image (`/og-image.jpg`, 1200×630) — see `amorelila-landing/scripts/generate-og-image.mjs` for the pattern.
- Favicon variants (`.ico`, `apple-touch-icon.png`, `manifest.webmanifest`).
- Connect repo → CF Pages project (dashboard) + apex `agendalila.com` → Pages.
- Confirm iCiel Cadena web-embed license (we self-host it, same as the live amorelila.com).
