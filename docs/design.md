# Design direction

The portfolio is a quiet, minimal working notebook. Clear language, readable
type and generous space carry the identity; a warm near-white / charcoal base
and a restrained green link color provide just enough visual structure. Avoid
decorative frames, numbered section labels, gradient or grid backgrounds,
ornamental illustrations, and card surfaces.

This direction keeps the strongest parts of the previous content and removes
visual devices that competed with it. The home page introduces Sam, then moves
directly to selected projects and recent writing. The projects and writing
indexes use simple, ruled text rows. About, Speaking, Uses and Contact share the
same type-led page header and list treatment. Case studies explain the problem,
approach and result; the Kubernetes case study keeps its diagram because it
explains the system.

Design references:

- [Paco Coursey](https://paco.me) — direct positioning, clear project purpose,
  typography and low-maintenance design.
- [Lee Robinson](https://leerob.com) — concise introduction and direct access to
  projects and writing.
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) — keep text contrast, focus states,
  keyboard access and reflow intact while simplifying the visual system.

## Content and identity

Keep Sam's voice, truthful career history, portrait, case studies and long-form
articles. Use one self-hosted sans family throughout the interface; reserve
monospaced type for code. Color supports links and current navigation state,
not decoration. Light and dark themes use the same layout and hierarchy.

Content comes from the existing portfolio. AI work remains described as
learning and experimentation. No invented metrics, clients, testimonials or
production AI claims are introduced.

## Interaction and accessibility

Navigation retains a visible current-page state, keyboard focus indicators, a
skip link and mobile Escape handling. Interactive controls keep generous hit
areas. Links stay identifiable without color alone. Reduced-motion preferences
are respected. Fonts are self-hosted from the Geist package, without a
build-time Google request.

Playwright covers desktop Chromium, mobile Chromium and WebKit against the
standalone production build over local HTTPS. It checks every page route,
assets, navigation, themes, narrow layouts, metadata, feeds, missing pages and
automated accessibility in both themes. Automated scans supplement visual
review; they do not establish full WCAG conformance.
