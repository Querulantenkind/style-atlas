`````markdown
````markdown
# BLUEPRINT STYLE (Markdown)

A technical blueprint aesthetic with grid lines, engineering style measurements,
and classic architectural drawing appearance.

Intended for:
- technical documentation
- engineering projects
- architecture content
- system design docs

This file documents how to use **blueprint** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML (e.g. GitHub Pages, static site),
you can inject the style directly at the top of the file:

```html
<style>
body {
  background: #0c2e4e;
  background-image: 
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  color: #ffffff;
  font-family: "Courier New", monospace;
  font-size: 14px;
  line-height: 1.6;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 2rem;
}
h1, h2, h3 {
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border: 2px solid #ffffff;
  padding: 0.5rem 1rem;
  margin-top: 2.5rem;
  background: rgba(0, 0, 0, 0.3);
}
h1::before { content: "1.0 "; }
h2::before { content: "2.0 "; }
h3::before { content: "3.0 "; }
pre, code {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #6ba3d4;
  border-radius: 2px;
  padding: 0.25rem 0.5rem;
  color: #6ba3d4;
}
hr {
  border: none;
  height: 2px;
  background: repeating-linear-gradient(90deg, #ffffff 0, #ffffff 5px, transparent 5px, transparent 10px);
  margin: 2rem 0;
}
a {
  color: #6ba3d4;
  text-decoration: none;
  border-bottom: 1px dashed #6ba3d4;
}
a:hover {
  color: #ffffff;
  border-bottom-color: #ffffff;
}
blockquote {
  border-left: 3px solid #6ba3d4;
  padding-left: 1rem;
  color: #d0d0d0;
  background: rgba(107, 163, 212, 0.1);
}
blockquote::before {
  content: "NOTE: ";
  font-weight: bold;
  color: #6ba3d4;
}
</style>
```

---

## 2. Style Tag (for meta-tracking)

For the Style Atlas system, include:

```html
<!-- STYLE:BLUEPRINT -->
```

---

## 3. Rendering

- For **static site generators**: link `styles/css/blueprint.css`
- For **Pandoc → PDF**: use `styles/pdf/blueprint/blueprint.yaml`

---

## 4. Design Notes

Key elements:
- **Blueprint blue** (#0c2e4e) background
- **Grid pattern** overlay for technical feel
- **White text** for high contrast
- **Section numbering** (1.0, 2.0, 3.0) on headers
- **Boxed headers** like title blocks
- **Monospace fonts** for precision
- **Dashed lines** for references

````

`````
