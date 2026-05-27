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
- **Cloudflare Pages** — Git-integrated: push to `master` auto-deploys production (`agendalila.com`); any other branch / PR gets a preview URL. Build `npm run build`, output `dist/`. No GH Actions. **Workflow:** work on `dev` (→ preview), merge `dev → master` to ship. No analytics/tracking is wired (the `/privacidad` page states this) — if added later, keep it cookieless and update `/privacidad`.

## Architecture (data-driven — edit data, not templates)

```
public/                 # iCiel Cadena (woff2/otf), logos/, photos/, og-image.jpg,
                        # favicon.png, apple-touch-icon.png, manifest.webmanifest
functions/
└── api/request-invite.js   # CF Pages Function: form POST → D1 insert + Resend notify
schema.sql              # D1 `leads` table (apply with wrangler d1 execute)
src/
├── components/         # one .astro per section + shared primitives:
│   │                   #   Eyebrow, SectionHead, Feature
│   └── feature-mocks/  # the 5 inline product mocks (Agenda, Crm, Reminders, …)
├── data/               # typed content (edit here, not templates):
│                       #   site, hero, proof, problems, features, founder, faq, cta
├── layouts/
│   └── BaseLayout.astro  # SEO, meta, OG, JSON-LD, favicon/apple-touch/manifest links
├── pages/              # index.astro (composes sections) + privacidad.astro
└── styles/
    └── global.css      # @import tailwindcss + @font-face + @theme tokens + base
```

## Design Source (separate from architecture)

Design/brand comes from the **Claude Design handoff** (`agendalila-design-system/project/ui_kits/marketing-saas/`), NOT from amorelila-landing. See `docs/2026-05-26-marketing-saas-design-audit.md`. **Sections shipped:** nav → hero (w/ 3 product tiles) → social proof → problem → 5 zig-zag features (w/ inline product mocks) → founder story → FAQ → request-access form → footer. The handoff's **flagship testimonial was deferred** (it would be Estefanía again, redundant right after the founder story; revisit with a real different-client quote) — its `#para-quien` nav link was removed. Tokens in `src/styles/global.css` port the handoff's `colors_and_type.css` (which matches the app's prod `globals.css`).

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

**Anti-slop copy discipline (load-bearing — the user audits hard for this):** sound like a real CR salon owner, not a brochure. Use voseo *grammar*, but never name linguistic / marketing / design jargon as nouns — those scream AI: "voseo" (the word), "win-back", "superficies". Money is **"plata"**, never "dinero". No over-clever paradoxes, no off-brand slang ("gringa"), avoid em-dash overuse. The handoff copy itself carries these tells (it was AI-generated) — audit every line, don't port verbatim. Read it aloud as if Estefanía said it.

## Development

- `npm run dev` — dev server. **On Windows, port 3000 is reserved (EACCES)** → run `npx astro dev --port 4321 --host 127.0.0.1` instead.
- `npm run build` — static build to `dist/`
- `npm run preview` — preview the build
- `npm run format` / `format:check` — Prettier
- `npm run check` — Astro + TS diagnostics

## Status — LIVE

Live at **agendalila.com** (CF Pages, apex custom domain + Universal SSL). All sections shipped (testimonial deferred). The request form works end-to-end: POST → D1 `leads` insert → Resend notify → Cloudflare Email Routing forwards `info@agendalila.com` to the owner's inbox. OG image + favicons + manifest done. `/privacidad` published. (iCiel Cadena self-hosted, same license posture as live amorelila.com.)

### Operations / provisioning (Cloudflare)

- **D1:** database `agendalila-leads`, bound to the Pages project as **`DB`** (Production). Schema in `schema.sql` — apply with `npx wrangler d1 execute agendalila-leads --remote --file=./schema.sql`. Inspect leads: `… --command "SELECT * FROM leads"`.
- **Resend:** secret **`RESEND_API_KEY`** on the Pages project. The notify `from` MUST be a Resend-verified sender — `no-reply@notificaciones.agendalila.com` (the app's verified subdomain). The apex `@agendalila.com` is NOT verified → silently 403s (and the function's best-effort catch hides it → lead saves but no email). Notify `to` defaults to `info@agendalila.com` (override via optional var `LEAD_NOTIFY_TO`).
- **Email Routing:** `info@agendalila.com` forwards to the owner's inbox (Cloudflare zone → Email Routing). Receive-only; sending is Resend's job.

### Gotchas (hit at launch)

1. The Pages project can silently **disconnect from GitHub** ("disconnected from your Git account" banner) → pushes stop deploying, prod freezes. Fix: reconnect Git in Pages → Settings.
2. The apex **edge-caches HTML** — verify new deploys on `agendalila-landing.pages.dev` or with a `?cb=` query, not a bare request to `agendalila.com`.

### Regenerating the OG image / icons

No `sharp`/`satori` installed — they were made by screenshotting temp Astro templates (1200×630 card / icon, brand fonts + colors) with a headless browser, then saved to `public/`. To redo: add a temp page under `src/pages/`, run dev, screenshot at the target size, save to `public/`, delete the temp page.

### Remaining (optional)

- **Términos** page (`/terminos`) — pairs with `/privacidad` (footer link ready to add).
- **Testimonial** section — deferred until a real, different-client quote exists.
