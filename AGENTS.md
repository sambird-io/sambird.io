<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Working on this site (sambird.io portfolio)

Sam Bird's personal portfolio. Single page: **Hero → About → Experience → Selected
Work → Skills → Contact** (`app/page.tsx` composes the sections in
`components/sections/`).
Next.js 16 + Tailwind v4, dark mode, deployed as a standalone Docker image on Fly.

## Content lives in `lib/content.ts` (single source of truth)
Most changes are data edits here, not component changes. The hero badge, `<title>`,
and all OpenGraph/SEO metadata (`app/layout.tsx`) derive from `site`, so they update
automatically.
- `site` — `name, role, company, tagline, bio, location, email, links{linkedin,github}`.
  Current positioning: **Lead Cloud Engineer @ Lloyds Banking Group**, focused on
  cloud and data platforms in regulated financial services (Yorkshire, UK).
- `experience[]` — most-recent-first; each `{company, role, period, logo, logoAlt,
  bullets[]}`, rendered by `components/sections/experience.tsx` + `timeline-item.tsx`.
  The list keys on `company-role-period`, so those three together must stay unique.
- `skills[]` — groups of `{title, skills[]}`.
- `selectedWork[]` — talks and substantial public projects; links are optional.

## Change recipes
- **Positioning / bio / tagline** → edit `site` fields (never hardcode in components).
- **Add/update a job** → edit `experience[]` (most-recent-first; unique company-role-period).
- **Add a company logo** → PNG in `public/img/<name>.png`, set `logo` + a real `logoAlt`.
  Source official logos from Wikimedia:
  `curl -A "sambird.io-build" -o public/img/<name>.png "https://upload.wikimedia.org/.../250px-<Logo>.png"`,
  then verify with `file`.
- **Skills** → edit `skills[]` groups; keep to Sam's real toolchain.
- **Talks / public projects** → edit `selectedWork[]`; only publish work that is
  already public or cleared for external sharing.

## Editorial rules (do not break)
- **Accuracy over polish** — every claim must be true. The old site shipped fake stats
  ("happy clients", "coffees/day") and a leaked home address; never reintroduce that.
- **No invented metrics** — use real numbers (e.g. deploy ½-day → <30 min); otherwise
  write an honest qualitative bullet. **No `TODO`** in any rendered value.
- Experience bullets are impact statements (problem → action → outcome), kept tight.
  Positioning is **DevOps / Cloud engineering**, not people-management.

## Build → ship → deploy
1. **Test:** `npx tsc --noEmit` · `npm run lint` ·
   `npm audit --omit=dev --audit-level=high` · `npm run build` (must emit standalone
   output — the Dockerfile depends on it). Eyeball: `npm run dev`, then
   `curl -s localhost:3000 | grep -E '<title>|TODO'` → right title, zero `TODO`.
   (The dev server is killed when idle in agent harnesses — restart if the port is dead.)
2. **GitHub** (`sambird-io/sambird.io`): branch off `main` (never commit to `main`
   directly); use conventional commits;
   `gh pr create --base main` → `gh pr merge <#> --squash --delete-branch` → sync `main`.
3. **Deploy to Fly** (app **`sambird`**, primary region `lhr`) — in place, **never destroy**
   (that releases the IPs + sambird.io/www certs): `fly deploy --ha=false -a sambird`.
   The deploy-time `not listening on … 0.0.0.0:3000` warning is a **false alarm**
   (Fly checks the socket before Next finishes binding).
4. **Verify:** `curl -s https://sambird.fly.dev` → `200` + new `<title>`; `grep` the
   live HTML for changed strings; `fly logs -a sambird --no-tail | tail -30` shows `✓ Ready`.

## Custom domain (only when DNS / hostnames change)
DNS is on **GoDaddy** (manual). apex `sambird.io` → `A 66.241.124.227`,
`AAAA 2a09:8280:1:a164:c7:2bf4:a389:f25`; `www` → `CNAME sambird.fly.dev` and is
permanently redirected to the apex by Next.js. Certs:
`fly certs list -a sambird` (apex + www should be `Issued`). The original sambird.io
outage was a retired *shared* Fly IPv4 left in GoDaddy — a dedicated IPv4
(`fly ips allocate-v4 -a sambird`, ~$2/mo) would prevent a repeat; currently on the
free shared IP. `min_machines_running = 0`, so the first request after idle cold-starts.
