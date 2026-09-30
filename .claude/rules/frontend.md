---
paths:
  - "src/**/*.{astro,css}"
---

# Frontend and styling

How the site looks, and how it stays accessible. Siblings own their topics:
structure → `architecture.md`, copy → `content.md`. The full design context (users,
personality, principles) is `.impeccable.md`.

## Styling

- Tailwind utilities in markup. A scoped `<style>` only for what utilities can't
  express, such as pseudo-elements and `[open]` states. No `@apply`, and no global
  CSS outside `src/styles/global.css`.
- Colors, fonts, radii, shadows, easing and durations come from the tokens in
  `src/styles/global.css`. A value that isn't there becomes a token first: no raw hex
  or `rgba()` in components.
- The Tailwind scale first. An arbitrary value (`text-[17px]`) only to match a
  specific design value.
- Mobile first: base styles for a ~375px screen, enhanced with `md:` and `lg:`. No
  horizontal scroll at any width.
- Motion animates `transform` and `opacity` only, eases out, never bounces, and never
  bypasses the global `prefers-reduced-motion` reset.

## Accessibility (WCAG AA)

- Interactive elements use `--brand` (`lilac-700`) or darker. `--brand-decor`
  (`lilac-500`) is decoration only: never text, links or buttons on a light
  background, where it fails contrast.
- One `h1` per page, headings in order, each section with an `id`.
- Everything interactive is reachable by keyboard and shows the focus ring; never
  remove the outline. Touch targets are at least 44px.
- Decorative SVGs and images are `aria-hidden="true"`; content images have a
  meaningful `alt`; every form field has a label.

## Brand

- Typography: headings in `font-display` (iCiel Cadena) with `clamp()` sizes, body in
  Montserrat. Never Inter, Roboto, Open Sans or a system font for display.
- Lilac is a signature, not a flood, and the site reads as well for a barbershop as
  for a salon.
- No Liquid Glass (the admin app's look), no butterfly motif (the salon brand's), no
  icon mark in the page: the brand is the typographic wordmark.
- Never the generic AI look: purple-to-blue or cyan-on-dark gradients, gradient text,
  decorative glassmorphism, nested cards, grids of identical icon cards, everything
  centered, pure black or white.
