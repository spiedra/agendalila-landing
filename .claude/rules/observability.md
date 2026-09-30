---
paths:
  - "functions/**"
  - "src/**/*.astro"
---

# Observability

What the site reports when something fails, and what it never collects. Siblings own
their topics: error handling in code → `clean-code.md`, structure →
`architecture.md`.

## Server (Pages Functions)

- Never swallow an error. Every `catch` either returns an error response or logs
  `console.error("[<function>] <what failed>", context)`.
- A resolved `fetch` is not a success: check `res.ok` or the status of every external
  call. A best-effort step, such as the notification email, may carry on after a
  failure, but logs it.
- Error responses are JSON `{ error }` with the matching status: 400 malformed
  request, 422 invalid input, 500 server failure.
- Logs never contain personal data: no names, phone numbers, emails or form contents.
  Log statuses, error messages and IDs.
- Where the logs are read: `README.md` § Operations.

## Browser

- No `console.*` in shipped code.
- A failure a visitor can hit shows a clear error state in Spanish, never a silent
  no-op.

## Analytics

None: no analytics, trackers or cookies, as `/privacidad` promises. Adding any needs
the user's approval, must be cookieless, and updates `/privacidad` in the same change.
