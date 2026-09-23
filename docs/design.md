# Design direction

The portfolio introduces Sam with a centered “Hi, I’m Sam” hero, a concise
description, and clear links to projects, writing and contact. A soft blue glow
and rounded calls to action add warmth without crowding the content. Employer
logos and three areas of focus lead into the selected projects and writing.

The projects and writing indexes use simple, ruled text rows. About, Speaking,
Uses and Contact share a consistent page header and readable list treatment.
Case studies explain the problem, approach and result; the Kubernetes case
study keeps its diagram because it explains the system.

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
production AI claims are introduced. Light and dark themes share the same
blue-accent identity and preserve accessible contrast.

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
