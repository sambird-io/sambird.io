# Design direction

The site is an engineering notebook: warm paper, dark ink, forest green,
large typography, thin rules, and diagrams that make systems easier to understand.
The work and writing provide evidence before the longer career story.

Research references:

- [Lee Robinson](https://leerob.com): concise personal positioning and direct access to writing.
- [Paco Coursey](https://paco.me) and [his redesign rationale](https://paco.me/writing/redesign-2021): clear project purpose, typography, performance and low maintenance.
- [Josh W. Comeau](https://www.joshwcomeau.com): editorial hierarchy and useful technical article descriptions.

## Page system

- Home introduces Sam, features the Kubernetes teaching tool, then presents other
  projects, recent writing, engineering focus, and a contact invitation.
- Projects have purpose-built schematic illustrations, context, technologies,
  and a problem/approach/result narrative. Illustrations are not live dashboards.
- Writing uses an article index and a narrower, comfortable reading measure.
- About, Speaking, Uses and Contact share the same typography, rules and spacing.
- Dark mode uses deep green surfaces and pale green accents. Social images and
  the favicon follow the same identity.

Content comes from the existing portfolio and the newer main-branch content.
AI work remains described as learning and experimentation. No invented metrics,
clients, testimonials, or production AI claims are introduced.

## Interaction and accessibility

Navigation has a visible current-page indicator, keyboard focus states, a skip
link and mobile Escape handling. Interactive controls use generous targets.
Inline links remain underlined. Reduced-motion preferences suppress movement.
Fonts are self-hosted from the Geist package, without a build-time Google request.

Playwright covers desktop Chromium, mobile Chromium and WebKit against the
standalone production build over local HTTPS. It checks all page routes, assets,
navigation, themes, 360px layouts, metadata, feeds, missing pages and automated
accessibility in both themes. Visual review supplements the automated checks;
automated scans alone do not establish full WCAG conformance.
