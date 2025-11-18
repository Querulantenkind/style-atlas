`````markdown
````markdown
# NEON STYLE (Markdown)

A vibrant neon sign aesthetic with electric glowing borders, bright colors,
and urban nightlife atmosphere reminiscent of Tokyo or Vegas.

Intended for:
- creative projects
- entertainment content
- urban culture documentation
- modern design portfolios

This file documents how to use **neon** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML (e.g. GitHub Pages, static site),
you can inject the style directly at the top of the file:

```html
<style>
body {
  background: #0a0a0a;
  color: #ffffff;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 15px;
  line-height: 1.7;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 2rem;
}
h1, h2, h3 {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 2.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  display: inline-block;
}
h1 {
  color: #ff0080;
  border: 3px solid #ff0080;
  box-shadow: 0 0 20px #ff0080, inset 0 0 20px rgba(255, 0, 128, 0.2);
  text-shadow: 0 0 15px #ff0080;
}
h2 {
  color: #00ffff;
  border: 3px solid #00ffff;
  box-shadow: 0 0 20px #00ffff, inset 0 0 20px rgba(0, 255, 255, 0.2);
  text-shadow: 0 0 15px #00ffff;
}
h3 {
  color: #ffff00;
  border: 2px solid #ffff00;
  box-shadow: 0 0 15px #ffff00, inset 0 0 15px rgba(255, 255, 0, 0.2);
  text-shadow: 0 0 10px #ffff00;
}
pre, code {
  background: #1a1a1a;
  border: 1px solid #ff00ff;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  color: #ff00ff;
  box-shadow: 0 0 10px rgba(255, 0, 255, 0.3);
}
hr {
  border: none;
  height: 3px;
  background: linear-gradient(90deg, #ff0080, #00ffff, #ffff00, #00ff00);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  margin: 2.5rem 0;
}
a {
  color: #00ff00;
  text-decoration: none;
  text-shadow: 0 0 8px #00ff00;
  border-bottom: 2px solid #00ff00;
}
a:hover {
  color: #ffffff;
  text-shadow: 0 0 15px #ffffff;
  border-bottom-color: #ffffff;
}
blockquote {
  border-left: 4px solid #ff0080;
  padding-left: 1rem;
  color: #ffffff;
  background: rgba(255, 0, 128, 0.1);
  box-shadow: 0 0 20px rgba(255, 0, 128, 0.2);
}
</style>
```

---

## 2. Style Tag (for meta-tracking)

For the Style Atlas system, include:

```html
<!-- STYLE:NEON -->
```

---

## 3. Rendering

- For **static site generators**: link `styles/css/neon.css`
- For **Pandoc → PDF**: use `styles/pdf/neon/neon.yaml`

---

## 4. Design Notes

Key elements:
- **Bright neon colors** (magenta, cyan, yellow, green)
- **Multiple glows** with box-shadow and text-shadow
- **Black background** (#0a0a0a) for maximum contrast
- **Bordered headers** like neon sign tubes
- **Sans-serif fonts** for modern urban feel
- **Rainbow gradient** for dividers

````

`````
