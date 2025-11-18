# BLACKOPS STYLE (Markdown)

A dark, industrial, terminal-grade aesthetic for documentation and creative systems.

Intended for:
- project READMEs
- technical specs
- “black ops” themed creative engines

This file documents how to use **blackops** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML (e.g. GitHub Pages, static site),
you can inject the style directly at the top of the file:

```html
<style>
body {
  background: #0c0c0e;
  color: #c8c8c8;
  font-family: "IBM Plex Mono", monospace;
  letter-spacing: 0.03em;
  line-height: 1.55;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 2rem;
}
h1, h2, h3 {
  color: #e0e0e0;
  text-transform: uppercase;
  border-bottom: 1px solid #2b2b2f;
  padding-bottom: 0.25rem;
  margin-top: 2.5rem;
}
pre, code {
  background: #141417;
  border: 1px solid #242427;
  border-radius: 2px;
  padding: 0.2rem 0.3rem;
  color: #e6e6e6;
}
hr {
  border: none;
  border-top: 1px dashed #333;
  margin: 2.5rem 0;
}
a {
  color: #7da8ff;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
