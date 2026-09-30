# Methodology

How every change gets made, and in what order. Siblings own their topics: history
and the pull request → `git.md`, structure → `architecture.md`, documents →
`documentation.md`.

## The steps

Design first, and prove it against something real before asking anyone to read it.
A step that a skill runs names it. The skill owns the procedure; this rule owns the
order.

1. **Brainstorm.** Agree what problem is being solved and what shape solves it.
   Investigate, never assume: read the code it touches, and where the answer depends
   on a library or service (Astro, Tailwind, Cloudflare), read that project's own
   documentation and rest the decision on it. `superpowers:brainstorming`.
2. **Spec.** Write the agreed design down, including what it deliberately does not
   settle. `superpowers:brainstorming`, to `docs/superpowers/specs/`.
3. **Plan.** Turn the spec into steps concrete enough to argue with: the files, the
   code, the commits. `superpowers:writing-plans`, to `docs/superpowers/plans/`.
4. **Audit the plan.** Read it back against the codebase before implementing any of
   it. A defect costs least here. `auditing-plans`.
5. **Implement.** On a branch (`git.md`). Review at the seams, not at every step.
   `superpowers:subagent-driven-development` or `superpowers:executing-plans`.
6. **Verify.** Run it. `npm run check`, `npm run format:check` and `npm run build`
   pass. A visual change is looked at, at phone (~375px) and desktop widths. A change
   under `functions/` is exercised on the branch's preview deployment, since
   `astro dev` does not run it. A passing build says the site compiles. It does not
   say the page looks right or that the form saves a lead.
7. **Open the pull request.** The contract is in `git.md`.

## The checkpoint

**Before the first edit of a change, one of two things is true:** a plan for it
exists in `docs/superpowers/plans/`, or the skipped steps have been named, with the
reason. A session names them in the conversation before that edit. The pull request
description names them for everyone (`git.md`). A skipped step that cannot be read in
the pull request was not skipped in the open.

A change small enough to design in conversation, such as a copy fix or a style tweak,
may skip steps two to four, and says so.

A step counts by what it leaves behind, not by which skill ran it. A step whose
outcome does not exist was skipped, whether its skill was missing or not run, and is
said the same way.
