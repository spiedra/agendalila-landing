---
paths:
  - "src/**"
  - "functions/**"
  - "public/**"
  - "astro.config.mjs"
  - "package.json"
  - "schema.sql"
---

# Architecture

Where each kind of code lives, and what may depend on what. Siblings own their
topics: naming → `clean-code.md`, styling → `frontend.md`, errors and logs →
`observability.md`.

## Static first

Every page is prerendered HTML. No server rendering, no UI framework, no `client:*`
hydration. Interactivity is a small vanilla `<script>` inside the component that
needs it, and the content works without it.

## Layers

| Path                           | Owns                                                                                                                                                                                |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/data/`                    | Every visitor-facing string, typed, one module per section.                                                                                                                         |
| `src/components/`              | One component per page section, and the shared primitives repeated patterns are built from. `feature-mocks/` holds the product illustrations, the only components with copy inline. |
| `src/layouts/BaseLayout.astro` | The document shell: `<head>`, meta, Open Graph, JSON-LD.                                                                                                                            |
| `src/pages/`                   | Routes, composing sections. No logic.                                                                                                                                               |
| `src/styles/global.css`        | Design tokens and base styles.                                                                                                                                                      |
| `functions/`                   | Cloudflare Pages Functions, the only server code. Plain JS without npm dependencies; `astro dev` does not run them.                                                                 |
| `public/`                      | Static assets, served as-is.                                                                                                                                                        |

- A section component imports its own data module. Data modules import no
  components.
- Secrets and service configuration live in Cloudflare bindings and environment
  variables, never in code. `README.md` § Operations lists them.

## Contracts

**The lead form** is shared by the form in `FinalCta.astro`, `FIELDS` in
`functions/api/request-invite.js`, and the `leads` table in `schema.sql`. Change all
three together, with a D1 migration, and mark the commit `BREAKING CHANGE`
(`git.md`).

## Dependencies

No npm dependency or third-party script is added without the user's approval. The
platform and the existing stack come first.
