`````markdown
````markdown
# HOLOGRAM STYLE (Markdown)

A futuristic holographic projection aesthetic with blue glows, scan lines,
and translucent effects reminiscent of sci-fi interfaces.

Intended for:
- sci-fi documentation
- futuristic UI/UX projects
- space-themed content
- high-tech presentations

This file documents how to use **hologram** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML (e.g. GitHub Pages, static site),
you can inject the style directly at the top of the file:

```html
<style>
body {
  background: #000a1a;
  color: #00d9ff;
  font-family: "Segoe UI", "Arial", sans-serif;
  font-size: 15px;
  letter-spacing: 0.03em;
  line-height: 1.7;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  text-shadow: 0 0 8px rgba(0, 217, 255, 0.6);
}
h1, h2, h3 {
  color: #00f0ff;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  text-shadow: 0 0 15px rgba(0, 240, 255, 0.9), 0 0 30px rgba(0, 240, 255, 0.5);
  border-bottom: 2px solid rgba(0, 217, 255, 0.5);
  padding-bottom: 0.5rem;
  margin-top: 2.5rem;
}
pre, code {
  background: rgba(0, 217, 255, 0.05);
  border: 1px solid rgba(0, 217, 255, 0.4);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  color: #00d9ff;
  box-shadow: inset 0 0 10px rgba(0, 217, 255, 0.2);
}
hr {
  border: none;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.7), transparent);
  box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
  margin: 2.5rem 0;
}
a {
  color: #00f0ff;
  text-decoration: none;
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.7);
  border-bottom: 1px solid rgba(0, 240, 255, 0.3);
}
a:hover {
  color: #ffffff;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.9);
  border-bottom-color: rgba(255, 255, 255, 0.6);
}
blockquote {
  border-left: 3px solid rgba(0, 217, 255, 0.6);
  padding-left: 1rem;
  color: #00b8d4;
  background: rgba(0, 217, 255, 0.05);
  box-shadow: inset 0 0 20px rgba(0, 217, 255, 0.1);
}
</style>
```

---

## 2. Style Tag (for meta-tracking)

For the Style Atlas system, include:

```html
<!-- STYLE:HOLOGRAM -->
```

---

## 3. Rendering

- For **static site generators**: link `styles/css/hologram.css`
- For **Pandoc → PDF**: use `styles/pdf/hologram/hologram.yaml`

---

## 4. Design Notes

Key elements:
- **Cyan-blue** (#00d9ff) holographic glow
- **Deep space black** (#000a1a) background
- **Light font weights** for translucent effect
- **Text shadows** for projection glow
- **Translucent borders** and backgrounds
- **Sans-serif fonts** for modern feel

````

`````
