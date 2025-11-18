# style-atlas

This repository is a growing collection of reusable styles for text-based projects (Markdown, HTML/CSS, PDF).

## Available Styles

- **BlackOps** — Industrial, terminal-grade dark aesthetic
- **Redacted** — Classified, blackout dossier aesthetic
- **Ghost** — Corrupted, leaked archive aesthetic
- **Cyberpunk** — Neon-infused, retro-futuristic aesthetic with vibrant colors
- **Noir** — Classic film noir aesthetic with high contrast and dramatic shadows
- **Vapor** — Retro 80s/90s vaporwave aesthetic with pastel gradients and nostalgia

## Repository Structure

```
style-atlas/
│
├─ README.md
├─ LICENSE
├─ .gitignore
│
└─ styles/
│   ├─ markdown/
│   │   ├─ _index.md
│   │   ├─ blackops.md
│   │   ├─ redacted.md
│   │   ├─ ghost.md
│   │   ├─ cyberpunk.md
│   │   ├─ noir.md
│   │   └─ vapor.md
│   │
│   ├─ css/
│   │   ├─ blackops.css
│   │   ├─ redacted.css
│   │   ├─ ghost.css
│   │   ├─ cyberpunk.css
│   │   ├─ noir.css
│   │   └─ vapor.css
│   │
│   ├─ pdf/
│   │   ├─ blackops/
│   │   ├─ redacted/
│   │   ├─ ghost/
│   │   ├─ cyberpunk/
│   │   ├─ noir/
│   │   └─ vapor/
│   │
│   └─ _meta/
│       ├─ styles.yml
│       ├─ CONVENTIONS.md
│       └─ tags.md
│
└─ docs/                     # GitHub Pages Root
    ├─ _index.md             # Homepage with Style Switcher
    ├─ styles/
    │   ├─ base.css          # Neutral default theme
    │   ├─ switcher.js       # Style switching script
    │   ├─ blackops.css
    │   ├─ redacted.css
    │   └─ ghost.css
    │
    └─ preview/
        ├─ blackops.md
        ├─ redacted.md
        └─ ghost.md
```

## Usage

Each style is defined consistently across three mediums:

1. **Markdown** (`styles/markdown/`) — Documentation with embedded CSS
2. **CSS** (`styles/css/`) — Standalone stylesheets
3. **PDF** (`styles/pdf/`) — Pandoc templates and LaTeX packages

See `styles/_meta/CONVENTIONS.md` for guidelines on adding new styles.
style-atlas/
│
└─ styles/
    ├─ themes/               # NEU: pro Style eine Theme-Definition
    │   ├─ blackops.yml
    │   ├─ redacted.yml
    │   └─ ghost.yml
    │
    ├─ markdown/
    │   ├─ _index.md
    │   ├─ blackops.md
    │   ├─ redacted.md
    │   └─ ghost.md
    │
    ├─ css/
    │   ├─ blackops.css
    │   ├─ redacted.css
    │   └─ ghost.css
    │
    ├─ pdf/
    │   ├─ blackops/
    │   ├─ redacted/
    │   └─ ghost/
    │
    └─ meta/
        ├─ styles.yml
        └─ CONVENTIONS.md
