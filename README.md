# sambird.io

[Sam Bird](https://sambird.io)'s personal site — Lead Cloud Engineer @ Lloyds Banking Group.

**Live:** https://sambird.io

## Stack

- [Next.js 16](https://nextjs.org) (App Router) · React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) · [Geist](https://vercel.com/font) · `next-themes` (dark mode)
- Deployed as a standalone Docker image on [Fly.io](https://fly.io)

## Structure

```
app/                 # routes, layout, metadata, OG image, sitemap, robots
components/
  sections/          # Hero · About · Experience · Skills · Contact
  …                  # nav, footer, theme toggle, timeline item
lib/content.ts       # ← all site copy (single source of truth)
public/img/          # avatar + company logos
```

## Editing content

Almost everything is data in **`lib/content.ts`** — `site` (name, role, bio, links),
`experience[]`, and `skills[]`. The hero, page `<title>`, and OpenGraph metadata all
derive from it, so a copy change is usually a one-file edit. See
[`AGENTS.md`](./AGENTS.md) for the full content model, editorial rules, and the
change → deploy workflow.

## Local development

Requires Node 22 (see [`.nvmrc`](./.nvmrc)).

```bash
npm install
npm run dev        # http://localhost:3000
```

## Quality checks

```bash
npm run lint       # eslint
npx tsc --noEmit   # types
npm run build      # production build (standalone output)
```

## Deploy

Hosted on Fly.io (app `sambird`). Deploy in place:

```bash
fly deploy --ha=false -a sambird
```

Full deploy and custom-domain (DNS/cert) notes live in [`AGENTS.md`](./AGENTS.md).

## License

Source code is [MIT](./LICENSE). Personal content (bio, photo, written copy) and the
third-party company logos in `public/img/` are **not** covered by the MIT license and
remain © Sam Bird / their respective owners.
