# Git

History is documentation: it is read by whoever decides whether to trust a change,
and by whoever bisects a broken production deploy. Format: the [Angular commit
message guidelines][angular], the origin of Conventional Commits. Siblings own their
topics: order of work → `methodology.md`, naming → `clean-code.md`, comments →
`documentation.md`.

[angular]: https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md

## Commits

```text
<type>(<scope>): <short summary>

<body>

<footer>
```

- **Types**, and only these: `build`, `ci`, `docs`, `feat`, `fix`, `perf`,
  `refactor`, `test`.
- **Scope** is the part of the site the change lands in: a section, named after its
  component in kebab-case (`hero`, `final-cta`); a page (`privacidad`); or an area
  (`layout`, `styles`, `functions`, `public`). A change spanning areas takes the
  section it serves. A dependency bump is `deps`. Omit the scope for a change that
  belongs to no one part, usually repository configuration.
- **Summary**: imperative present tense, no capital first letter, no full stop.
  "add", not "added" or "adds".
- **Body**: required, except for a `docs` commit. Imperative present tense. It says
  _why_, not what: the diff already says what. If the change fixes something, name
  the behaviour that was wrong.
- **Footer**: only when there is something to put there. `BREAKING CHANGE:` for a
  contract others depend on (the lead-form fields, a public URL), `Fixes #<n>` to
  close an issue.
- **One logical change per commit.** A commit needing "and" in its summary is two
  commits.
- **Never a trailer naming a tool or an assistant** as author or co-author. Who
  typed it is not what history is for.

## Branches

```text
<type>/<short-description>
```

The same types, then what the branch does, in words separated by hyphens:
`feat/testimonials`, `fix/form-error-state`. A branch is cut from `master` and merged
back through a pull request. Every pushed branch gets a Cloudflare preview URL.
`master` is production: it changes only by merging a pull request, and only when the
user says to merge.

## Pull requests

- The title takes the commit format and describes the branch as a whole.
- The description says why the change exists, what it does, what it deliberately
  leaves undone, what was proven rather than assumed (commands run, the preview URL
  checked, screenshots of visual changes), and which steps of `methodology.md` were
  skipped, and why. A reviewer's first question is always "how do you know", and a
  description that answers it before being asked is the point.
- A branch that depends on another opens against that branch, not against `master`,
  so its diff shows only its own work.

## Merging

**Squash by default**, with `gh pr merge --squash --delete-branch`. A pull request
lands on `master` as one commit taking the pull request's title, so every commit on
`master` is a complete change that builds, and every one is a production deploy. The
branch's individual commits then live only in the pull request, where they are read
in review. A branch whose commits are individually worth reading later is the
exception, and merges with them intact.

**Never rewrite what is published.** A branch nobody else has may be rebased or
amended freely. Once `master` has it, or someone else could have pulled it, it
stands. A mixed history is honest; a rewritten shared branch breaks every clone of it.

**Delete a branch once its pull request is merged**, locally and on GitHub. The
commit is on `master` and the pull request is the record.
