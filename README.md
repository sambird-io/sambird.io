# sambird.io

[Sam Bird](https://sambird.io)'s personal site: cloud and platform engineering,
public projects, technical writing, and talks.

## Stack and structure

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, MDX, self-hosted
Geist fonts, and `next-themes`. The production runtime is a standalone Docker
image on Fly.io.

```text
app/                  # Home, About, Projects, Writing, Speaking, Uses, Contact
                      # Case studies, MDX articles, RSS, metadata and social images
components/sections/  # Page sections
components/           # Shared navigation, cards, diagrams, typography and footer
lib/content.ts        # Identity, biography, career, skills and credentials
lib/projects.ts       # Project metadata and case studies
lib/posts.ts          # Article metadata; slugs match the MDX filenames
content/writing/      # Article bodies
public/img/           # Portrait and company logos
tests/e2e/            # Browser journeys, accessibility, assets and discovery
scripts/              # Standalone preview and HTTPS E2E server
```

The [design notes](docs/design.md) record the visual direction and research.
[AGENTS.md](AGENTS.md) covers content accuracy and the repository workflow.

## Development

Use Node 22 (see [.nvmrc](.nvmrc)).

```bash
npm ci
npm run dev
```

The development site runs at http://localhost:3000. Copy comes from `lib/` and
`content/writing/`; avoid hardcoding professional claims in visual components.

## Verification

```bash
npm run lint
npm run typecheck
npm audit --omit=dev --audit-level=high
npm run build
npx playwright install chromium webkit
npm run test:e2e
```

The browser suite covers desktop Chromium, mobile Chromium, and WebKit. It checks
all public pages, navigation, theme persistence, keyboard access, 360px layouts,
404 responses, canonical metadata, RSS, sitemap, social images, and automated
accessibility in light and dark themes. View the report with
`npm run test:e2e:report`.

Tests start the **standalone production build** behind a local HTTPS proxy,
using ports 3100 and 3101. OpenSSL creates an ephemeral self-signed certificate
for each run; only the test browser accepts it. HTTPS lets WebKit exercise the
production security policy without changing that policy for tests. On Linux,
install browser dependencies with `npx playwright install --with-deps chromium webkit`.

For an HTTP standalone preview, run `npm run start:standalone` after building
(port 3100 by default). Stop previews and tests before rebuilding `.next`.

## Deployment

The site uses the existing Fly app `sambird`. Deployments must update that app
in place so its IP addresses and domain certificates are retained.

```bash
fly deploy --remote-only --ha=false --app sambird
```

## License

Source code is [MIT](LICENSE). Personal content (bio, photo, written copy) and
third-party company logos in `public/img/` are not covered by the MIT license and
remain © Sam Bird / their respective owners.
