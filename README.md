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

Cloudflare Pages, Git-integrated. **Push to `master` → production** (`agendalila.com`); other branches / PRs get preview URLs. Build `npm run build`, output `dist/`. Workflow: work on **`dev`** → merge `dev → master` to ship.

## Operations

### Request form

The form posts to `functions/api/request-invite.js`, which saves a lead to D1 and sends a notification email through Resend. Cloudflare Email Routing forwards `info@agendalila.com` to the owner's inbox; it only receives, and Resend does all sending.

| Binding or variable | Kind                                     | Purpose                                                                                                                                            |
| ------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DB`                | D1 binding (database `agendalila-leads`) | Lead storage. Schema: `schema.sql`.                                                                                                                |
| `RESEND_API_KEY`    | Secret                                   | Notification email.                                                                                                                                |
| `LEAD_NOTIFY_TO`    | Optional variable                        | Notification recipient; the default is in the function.                                                                                            |
| `LEAD_NOTIFY_FROM`  | Optional variable                        | Notification sender; the default is in the function. Must be on a Resend-verified domain: the apex `agendalila.com` is not, and Resend rejects it. |

Bindings are set per environment (Production, Preview) in the Pages project's settings. The form works on a preview deployment only when Preview has them too.

Wrangler needs a login first: `npx wrangler login`. Then:

```bash
# Apply the schema
npx wrangler d1 execute agendalila-leads --remote --file=./schema.sql
# Read the leads
npx wrangler d1 execute agendalila-leads --remote --command "SELECT * FROM leads ORDER BY created_at DESC"
# Stream the function's logs (add --environment preview for previews)
npx wrangler pages deployment tail --project-name agendalila-landing
```

### Troubleshooting

- **Pushes stop deploying.** The Pages project can lose its GitHub connection ("disconnected from your Git account" in the dashboard). Reconnect Git in the project's settings.
- **A deploy isn't visible on agendalila.com.** The apex caches HTML at the edge. Check the deployment's `*.pages.dev` URL, or add a `?cb=<anything>` query.
- **A lead is saved but no email arrives.** The notification is best-effort, so a rejected send never fails the request. The usual cause is a sender outside a Resend-verified domain.

### Social image and icons

No image tooling is installed. `public/og-image.jpg` (1200×630), `public/favicon.png` (64×64) and `public/apple-touch-icon.png` (180×180) are screenshots of temporary pages built with the brand fonts and colors. To redo one: add a page under `src/pages/`, run the dev server, screenshot the page at the target size with a headless browser, save the image to `public/`, and delete the page.

## Notes

- **Architecture/conventions** mirror the sibling `amorelila-landing` repo (proven Astro + Tailwind v4 + CF Pages setup). **Design/brand** comes from the Claude Design handoff (`marketing-saas` kit) — see `docs/`.
- Content lives in `src/data/*.ts` — edit data, not templates.
- `CLAUDE.md` has the full conventions + brand rules.
