# Style Atlas Conventions

This document defines how new styles should be added to the Style Atlas.

Each style must be:

- uniquely identifiable
- consistent across media (markdown, css, pdf)
- described in `styles/meta/styles.yml`

---

## 1. Style ID

- Use a short, lowercase identifier without spaces.
- Example: `blackops`, `redacted`, `ghost`, `minimal`.

This ID is used:
- as filename prefix (`blackops.md`, `blackops.css`, `blackops.yaml`, …)
- as key in `styles/meta/styles.yml`
- in style tags: `<!-- STYLE:BLACKOPS -->`

---

## 2. Required Files per Style

For each new style `<id>`, the following structure is required:

```text
styles/
  markdown/
    <id>.md

  css/
    <id>.css

  pdf/
    <id>/
      <id>.yaml
      <id>.tex
      <id>.sty

  meta/
    styles.yml        # add an entry for <id>
