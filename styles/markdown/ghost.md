# GHOST STYLE (Markdown)

A corrupted, leaked archive aesthetic — as if the document was recovered
from a failing storage node or degraded backup.

Intended for:
- “leaked” reports
- glitchy lore documents
- ghost archive themed READMEs

This file documents how to use **ghost** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML, inject the style at the top:

```html
<style>
body {
  background: #0b0d11;
  color: #d0d0d0;
  font-family: "JetBrains Mono", monospace;
  line-height: 1.6;
  max-width: 860px;
  margin: 2.5rem auto;
  padding: 2rem 2.5rem;
}
h1, h2, h3 {
  color: #f5f5f5;
  letter-spacing: 0.05em;
  text-shadow: 0 0 4px #232323;
  margin-top: 2.5rem;
}
pre, code {
  background: #17191d;
  border: 1px solid #25282e;
  padding: 0.3rem 0.4rem;
  border-radius: 2px;
  color: #f0f0f0;
}
hr {
  border: none;
  border-top: 1px solid #333333;
  margin: 2.5rem 0;
}
.ghost {
  opacity: 0.45;
  filter: blur(0.6px);
}
.corrupt {
  opacity: 0.7;
  color: #aaaaaa;
  text-shadow: 0 0 3px #555555;
}
.glitch {
  display: inline-block;
  position: relative;
}
.glitch::before {
  content: attr(data-text);
  position: absolute;
  left: 1px;
  top: 0;
  color: #ff0055;
  opacity: 0.35;
}
</style>
