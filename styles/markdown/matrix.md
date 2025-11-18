`````markdown
````markdown
# MATRIX STYLE (Markdown)

A digital rain aesthetic inspired by The Matrix, featuring cascading green
characters and a cyberpunk atmosphere with code-like elements.

Intended for:
- cybersecurity documentation
- hacking tutorials
- cyber-themed projects
- digital art content

This file documents how to use **matrix** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML (e.g. GitHub Pages, static site),
you can inject the style directly at the top of the file:

```html
<style>
body {
  background: #0d0208;
  color: #00ff41;
  font-family: "Courier New", "Consolas", monospace;
  font-size: 14px;
  letter-spacing: 0.03em;
  line-height: 1.6;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  text-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
}
h1, h2, h3 {
  color: #00ff41;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.8), 0 0 20px rgba(0, 255, 65, 0.4);
  letter-spacing: 0.2em;
  margin-top: 2.5rem;
  position: relative;
}
h1::after, h2::after, h3::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #00ff41, transparent);
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.6);
}
pre, code {
  background: #001a0d;
  border: 1px solid #00ff41;
  border-radius: 3px;
  padding: 0.25rem 0.5rem;
  color: #00ff41;
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
}
hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, #00ff41, transparent);
  box-shadow: 0 0 8px rgba(0, 255, 65, 0.5);
  margin: 2rem 0;
}
a {
  color: #39ff14;
  text-decoration: none;
  text-shadow: 0 0 5px rgba(57, 255, 20, 0.6);
}
a:hover {
  color: #00ff41;
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.9);
}
blockquote {
  border-left: 3px solid #00ff41;
  padding-left: 1rem;
  color: #00cc33;
  background: rgba(0, 255, 65, 0.05);
  box-shadow: inset 0 0 10px rgba(0, 255, 65, 0.1);
}
</style>
```

---

## 2. Style Tag (for meta-tracking)

For the Style Atlas system, include:

```html
<!-- STYLE:MATRIX -->
```

---

## 3. Rendering

- For **static site generators**: link `styles/css/matrix.css`
- For **Pandoc → PDF**: use `styles/pdf/matrix/matrix.yaml`

---

## 4. Design Notes

Key elements:
- **Matrix green** (#00ff41) with digital glow
- **Deep black** (#0d0208) background for depth
- **Text shadows** for glowing effect
- **Gradient underlines** for headers
- **Box shadows** for neon atmosphere
- **Monospace fonts** for code aesthetic

````

`````
