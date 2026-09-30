# agendalila-landing

Marketing/sales landing for **AgendaLila** — the booking + CRM SaaS for salons, barbershops, nail bars, spas & aesthetics businesses. Lives at **agendalila.com**.

Invitation-only product → the landing's job is to tell the story and capture access requests. It does **not** sell self-serve or show pricing.

## Stack

- **[Astro](https://astro.build/)** — static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** — via `@tailwindcss/vite`
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**
- **[Cloudflare Pages](https://pages.cloudflare.com/)** — hosting, previews and the request form's function
- **TypeScript** — strict

Versions: `package.json`.

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # static output → dist/
npm run preview
```

## Deployment

Cloudflare Pages, Git-integrated: build `npm run build`, output `dist/`. Every pushed branch gets a preview URL. **`master` is production** (`agendalila.com`) and changes only through a merged pull request. Branches, commits, pull requests and merging: `.claude/rules/git.md`.

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

## Conventions

- What every change must satisfy (git, methodology, architecture, code, documentation, observability, frontend, content): `.claude/rules/`. `CLAUDE.md` is Claude Code's entry point.
- Visual design context: `.impeccable.md`. The review of the Claude Design handoff the site was built from: `docs/2026-05-26-marketing-saas-design-audit.md`.
- The architecture mirrors the sibling `amorelila-landing` repo.
