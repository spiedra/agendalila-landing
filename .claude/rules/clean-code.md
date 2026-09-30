---
paths:
  - "src/**"
  - "functions/**"
---

# Clean code

Code MUST be understandable with **zero project context**. Source of judgment:
_Clean Code_ (Robert C. Martin). Tools cover the mechanical layer: `astro check`
(TypeScript strict) for types, Prettier for formatting. There is no linter, so naming
and structure are this file's job. Siblings own their topics: structure →
`architecture.md`, comments → `documentation.md`, styling → `frontend.md`.

## Naming

A name answers why the thing exists, what it does, and how it is used.

- Casing, which no tool checks here:
  - `camelCase` for variables and functions. `PascalCase` for components, interfaces
    and types. `UPPER_SNAKE_CASE` for module-level constant tables (`FIELDS`).
  - Acronyms are words: `canonicalUrl`, `jsonLd`.
  - Component files are `PascalCase.astro`. Data modules are lowercase, named for
    their section (`faq.ts`). Routes follow the URL (`privacidad.astro`,
    `request-invite.js`).
- Never:
  - Single characters, except `i` (index), `e` (event or error), and the item of a
    callback that fits on one line.
  - The type inside the name: `featureList`, `titleString`.
  - `utils`, `helpers`, `common`, `misc`, `manager`, `handler`, `info` as a whole
    name.
- Components and types are nouns, functions are verbs: `SectionHead`, `splitRuns()`.
- One word per concept, project-wide. Decided: a submitted invitation request is a
  `lead`, a page region is a `section`, a shared building block is a primitive, and a
  product illustration is a `mock`.
- Use the domain's word. Where code mirrors product data, the product's Spanish term
  is the name (`rubro`, `negocio`, `equipo`). Everything else is English.
- Distinguish by meaning, never by suffix: no `title2`, no `heroData` vs `heroInfo`.
- Length tracks scope: `i` in a three-line loop, full words at module level.
- Magic numbers become named constants.

## Functions

- Small, one thing. Needs "and" to describe → split it.
- Prefer fewer arguments. Three or more → one object parameter.
- No flag arguments: a boolean that switches behavior is two functions.
- No hidden side effects: do what the name says, nothing else.
- Avoid negative conditionals: `if (isOpen)`, not `if (!isClosed)`.
- Explanatory variables over clever expressions.
- The platform before code: native `<details>`, `hidden` and HTML form validation
  before custom JS.

## Types and errors

- Strict types: no `any`, and no `!` without a comment saying why it holds. Props are
  an `interface Props`. Data modules export their type and are `as const` or
  `readonly`.
- Throw when the caller cannot proceed. Return `undefined` for absence in a lookup.
  Never `null` or `undefined` to mean failure. In `functions/`, a failure becomes an
  error response (`observability.md`).
- `set:html` only with static strings defined in this repo, never with user or
  fetched data.

## Structure

- Caller above callee: a file reads top-down like a newspaper.
- Declare variables next to their use.

## Files

- Name a file for what it owns. One dominant concept per file. A filename needing
  "and" is two files.
- Cannot name it → its job is not decided. Decide first.

## General

- Boy scout rule: leave every touched file cleaner than you found it, comments
  included.
- Fix the root cause, not the symptom.
