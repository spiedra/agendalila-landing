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
npm run dev      # dev server (Windows: 3000 is reserved → npx astro dev --port 4321)
npm run build    # static output → dist/
npm run preview
```

## Deployment

Cloudflare Pages, Git-integrated. **Push to `master` → production** (`agendalila.com`); other branches / PRs get preview URLs. Build `npm run build`, output `dist/`. Workflow: work on **`dev`** → merge `dev → master` to ship. (See `CLAUDE.md` → *Status / Operations* for the D1 + Resend + Email Routing setup behind the request form.)

## Notes

- **Architecture/conventions** mirror the sibling `amorelila-landing` repo (proven Astro + Tailwind v4 + CF Pages setup). **Design/brand** comes from the Claude Design handoff (`marketing-saas` kit) — see `docs/`.
- Content lives in `src/data/*.ts` — edit data, not templates.
- `CLAUDE.md` has the full conventions + brand rules.
