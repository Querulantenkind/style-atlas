# style-atlas
This repository is a growing collection of reusable styles   for text-based projects (Markdown, HTML/CSS, PDF).

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
│   │   └─ ghost.md
│   │
│   ├─ css/
│   │   ├─ blackops.css
│   │   ├─ redacted.css
│   │   └─ ghost.css
│   │
│   ├─ pdf/
│   │   ├─ blackops/
│   │   ├─ redacted/
│   │   └─ ghost/
│   │
│   └─ meta/
│       ├─ styles.yml
│       └─ CONVENTIONS.md
│
└─ docs/                     # GitHub Pages Root
    ├─ index.md              # Startseite mit Style-Switcher
    ├─ styles/
    │   ├─ base.css          # neutrales Default-Theme
    │   ├─ switcher.js       # kleines JS zum Umschalten
    │   ├─ blackops.css      # Kopie/Variante des blackops-Styles
    │   ├─ redacted.css      # Kopie/Variante des redacted-Styles
    │   └─ ghost.css         # Kopie/Variante des ghost-Styles
    │
    └─ preview/
        ├─ blackops.md       # Beispielseite nur mit blackops
        ├─ redacted.md       # Beispielseite nur mit redacted
        └─ ghost.md          # Beispielseite nur mit ghost
