# agendalila-landing

Marketing/sales landing for **AgendaLila** — the booking + CRM SaaS for salons, barbershops, nail bars, spas & aesthetics businesses. Lives at **agendalila.com**.

Invitation-only product → the landing's job is to tell the story and capture access requests. It does **not** sell self-serve or show pricing.

## Stack

- **[Astro 5](https://astro.build/)** — static site generator
- **[Tailwind CSS 4](https://tailwindcss.com/)** — via `@tailwindcss/vite`
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**
- **[Cloudflare Pages](https://pages.cloudflare.com/)** — hosting & auto-deploy
- **TypeScript** — strict

## Development

```bash
npm install
npm run dev      # http://127.0.0.1:3000
npm run build    # static output → dist/
npm run preview
```

## Deployment

Push to `master` → Cloudflare Pages auto-deploys (build `npm run build`, output `dist/`).

## Notes

- **Architecture/conventions** mirror the sibling `amorelila-landing` repo (proven Astro + Tailwind v4 + CF Pages setup). **Design/brand** comes from the Claude Design handoff (`marketing-saas` kit) — see `docs/`.
- Content lives in `src/data/*.ts` — edit data, not templates.
- `CLAUDE.md` has the full conventions + brand rules.
