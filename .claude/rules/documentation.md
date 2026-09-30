---
paths:
  - "src/**"
  - "functions/**"
  - "docs/**"
  - "**/*.md"
---

# Documentation

The comment standard first, then § Documents for every markdown file.

Every file and exported symbol MUST be understandable with **zero project context**.
Format: [TSDoc][tsdoc] `/** … */` blocks. In the plain-JS files under `functions/`,
[JSDoc][jsdoc] with `{types}`, because nothing else states them. Content: **what +
why**. No tool checks any of this, so this rule is the check.

[tsdoc]: https://tsdoc.org
[jsdoc]: https://jsdoc.app

## Format

- `/** … */` = documentation for the consumer of the code, which editors show on
  hover. `//` = an implementation note inside a body. `{/* … */}` = a note inside
  Astro markup.
- Every file opens with a header comment (in `.astro`, the first lines of the
  frontmatter): what it owns, distinct from its siblings.
- A symbol gets a `/** */` when it is exported, nontrivial, or non-obvious. Otherwise
  omit it. A `Props` field gets one when its name and type don't show its meaning.
- First line = summary. Imperative for functions: "Split", not "Splits".
- Tags, only where the signature can't show it:
  - `@param name - meaning and unit`, never the type. All parameters or none.
  - `@returns`: skip it for `void`.
  - `@throws`: only errors a caller must handle.

## Content

- State the what and the why the code can't show: intent, invariants, failure modes,
  units, accessibility and security rationale, limits.
- NEVER reference plans, tasks, audits, reviews, phases, or sessions. History lives
  in commit messages.
- Never restate the symbol's name or type as its description.
- Define domain vocabulary (lead, rubro, estudio, mock) once, at its declaration site.
- Design rationale that spans files goes in `docs/adr/`, never in a comment. At most
  one ADR pointer per file header.
- Document what is enforced, not intended.
- No `TODO`: do it, or track it outside the code.

## Example (the shape to copy)

The header of `src/components/Feature.astro`: what one instance renders, how its two
columns are laid out, and how `reverse` changes that on desktop and not on mobile.

## Documents

Every markdown file: `README.md`, `docs/`, `CLAUDE.md`, the rules, `.impeccable.md`.

**A claim is stated once, and everywhere else links to it.** A claim is anything that
can become false: a version, what a check covers, which bindings the form needs, why
a step is required. A copy drifts, and the copy nobody updated is the one a reader
finds. A command may still appear as a step wherever someone runs it. Its explanation
stays with the claim.

**The home follows what the claim is.**

| Kind                                         | Home                                    |
| -------------------------------------------- | --------------------------------------- |
| What it is; how to run, deploy or operate it | `README.md`                             |
| Why it is shaped this way                    | `docs/adr/`                             |
| What every change must satisfy               | `.claude/rules/`                        |
| What every session needs and cannot derive   | `CLAUDE.md`, or a rule without `paths:` |
| What only one area needs                     | that area's path-scoped rule            |
| Visual design context                        | `.impeccable.md`                        |

**`README.md` and `CLAUDE.md` route.** They link to a home and do not restate it. A
session opens a file that `CLAUDE.md` only names when it chooses to, so what every
session needs is written in `CLAUDE.md` or a rule itself.

**`CLAUDE.md` stays short.** What can be derived by reading the code does not belong
in it, and no rule is restated there: a rule stated twice will disagree with itself.

**Nothing is anchored to a point in time**: no "now", "currently", "new" or "today",
and no count that changes as the code does. Decision records and the working documents
in `docs/superpowers/` are dated, and are the exception.

How the code works belongs in the code. One document, one job.
