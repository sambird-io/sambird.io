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
components/           # Shared navigation, simple project/article rows and footer
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

[GitHub Actions](https://github.com/sambird-io/sambird.io/actions/workflows/ci.yml)
runs these gates on pull requests and on `main`:

1. Lint, TypeScript, production dependency audit, standalone build and browser tests.
2. Build the production Docker image, run it, and smoke-test its routes, assets,
   security headers and build revision.
3. After both gates pass on `main`, deploy to Fly and smoke-test the public domain.

The workflow can also be run manually on `main` through **Actions → CI → Run
workflow**. Pull requests never deploy. Production runs are serialized and aren't
cancelled by later pushes. Browser reports and failure traces are retained as
workflow artifacts for seven days.

The Fly app is `sambird`. Deployments update it in place; never recreate it because
that would release the IP addresses and domain certificates. `fly.toml` retains
automatic stop/start and adds an HTTP health check at `/health`. That endpoint
reports the build revision, allowing CI to reject a stale release.

### Deploy credential

GitHub requires the repository secret `FLY_API_TOKEN`, containing an **app-scoped**
deploy token for `sambird`. The token configured on 20 September 2026 expires after
one year; rotate it before 20 September 2027 or sooner when needed. With Fly and
GitHub authenticated, rotate it without displaying it:

```bash
set -o pipefail
fly tokens create deploy --app sambird --name github-actions-sambird --expiry 8760h |
  gh secret set FLY_API_TOKEN --repo sambird-io/sambird.io
```

Revoke the old token in Fly after verifying the replacement. Keep credentials out
of the repository and build context. See Fly's [GitHub Actions guide](https://fly.io/docs/launch/continuous-deployment-with-github-actions/)
and [token documentation](https://fly.io/docs/security/tokens/).

### Manual recovery

The CI pipeline is the usual deployment path. For a manual recovery from a tested,
clean checkout:

```bash
fly deploy --remote-only --ha=false --app sambird --build-arg APP_REVISION="$(git rev-parse HEAD)"
BASE_URL=https://sambird.io EXPECTED_REVISION="$(git rev-parse HEAD)" node scripts/smoke-test.mjs
```

The smoke test checks the commit ID, primary routes, a case study, an article,
CSS, RSS, sitemap, robots, the social image and the `www` canonical redirect.

## License

Source code is [MIT](LICENSE). Personal content (bio, photo, written copy) and
third-party company logos in `public/img/` are not covered by the MIT license and
remain © Sam Bird / their respective owners.
