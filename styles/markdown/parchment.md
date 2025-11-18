`````markdown
````markdown
# PARCHMENT STYLE (Markdown)

An ancient manuscript aesthetic with aged paper texture, warm sepia tones,
and classic serif typography for a historical, scholarly atmosphere.

Intended for:
- historical documentation
- literary projects
- academic manuscripts
- vintage content

This file documents how to use **parchment** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML (e.g. GitHub Pages, static site),
you can inject the style directly at the top of the file:

```html
<style>
body {
  background: #f4e8d0;
  color: #3d2817;
  font-family: "Georgia", "Garamond", serif;
  font-size: 16px;
  line-height: 1.8;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem 3rem;
  border: 1px solid #c9a66b;
  box-shadow: 0 0 20px rgba(61, 40, 23, 0.2), inset 0 0 100px rgba(139, 90, 43, 0.05);
}
h1, h2, h3 {
  color: #5d3a1a;
  font-family: "Georgia", "Garamond", serif;
  font-weight: normal;
  text-align: center;
  border-bottom: 2px solid #8b5a2b;
  padding-bottom: 0.5rem;
  margin-top: 3rem;
  letter-spacing: 0.1em;
}
h1 {
  font-variant: small-caps;
  font-size: 2.5rem;
}
pre, code {
  background: #e8dcc0;
  border: 1px solid #c9a66b;
  border-radius: 2px;
  padding: 0.2rem 0.4rem;
  color: #5d3a1a;
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
}
hr {
  border: none;
  height: 2px;
  background: repeating-linear-gradient(90deg, #8b5a2b 0, #8b5a2b 10px, transparent 10px, transparent 20px);
  margin: 2rem 0;
}
a {
  color: #8b5a2b;
  text-decoration: underline;
}
a:hover {
  color: #5d3a1a;
}
blockquote {
  border-left: 4px solid #8b5a2b;
  padding-left: 1.5rem;
  color: #5d3a1a;
  font-style: italic;
  background: rgba(139, 90, 43, 0.05);
  margin: 1rem 0;
}
</style>
```

---

## 2. Style Tag (for meta-tracking)

For the Style Atlas system, include:

```html
<!-- STYLE:PARCHMENT -->
```

---

## 3. Rendering

- For **static site generators**: link `styles/css/parchment.css`
- For **Pandoc → PDF**: use `styles/pdf/parchment/parchment.yaml`

---

## 4. Design Notes

Key elements:
- **Sepia tones** (#f4e8d0, #3d2817) for aged paper
- **Serif fonts** (Georgia, Garamond) for classic look
- **Brown accents** (#8b5a2b) for ink-like elements
- **Centered headers** with small-caps
- **Subtle texture** via box shadows
- **Wide margins** for manuscript feel

````

`````
