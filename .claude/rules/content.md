---
paths:
  - "src/data/**"
  - "src/components/**"
  - "src/pages/**"
  - "src/layouts/**"
---

# Content and voice

What the site says, and how it says it. Siblings own their topics: where copy lives →
`architecture.md`, how it looks → `frontend.md`.

## Voice

- Visitor-facing copy is Spanish with Costa Rican voseo (solicitá, mirá, contanos),
  addressed to the business owner, and gender-neutral (personas, tu equipo, tu
  agenda). "Clienta" appears only inside product-mock UI.
- Write the way Estefanía talks, then read it aloud. Plain beats clever.
- No AI or brochure tells: jargon as nouns (voseo, win-back, superficies), hype,
  clever paradoxes, chains of em-dashes, off-brand slang. Money is "plata", never
  "dinero".
- Estefanía's business is an "estudio". The nail segment is "Manicuristas".

## Truth

- Never invent clients, quotes, stats or badges. A testimonial comes only from a real
  client other than the founder.
- A feature marked `soon: true` in `src/data/features.ts` is not live: nothing on the
  site presents it as available.
- Every call to action is `site.cta` in `src/data/site.ts`. No pricing, trials or
  signup.
- Contact channels and social links come only from `src/data/site.ts`.
- Mock data uses clearly fictional names, and services a real aesthetics studio
  offers.
