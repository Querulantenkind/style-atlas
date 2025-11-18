````markdown
# VAPORWAVE STYLE (Markdown)

A retro 80s/90s vaporwave aesthetic featuring pastel gradients, nostalgic vibes,
and glitchy roman numerals inspired by vaporwave art and A E S T H E T I C culture.

Intended for:
- retro-futuristic projects
- nostalgic creative content
- aesthetic documentation
- vaporwave-themed applications

This file documents how to use **vapor** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML (e.g. GitHub Pages, static site),
you can inject the style directly at the top of the file:

```html
<style>
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  color: #f0f0f0;
  font-family: "VT323", "Courier New", monospace;
  line-height: 1.7;
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  text-shadow: 0 0 8px rgba(255, 0, 255, 0.5);
}
h1, h2, h3 {
  color: #ffccff;
  font-family: "VT323", monospace;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-shadow: 0 0 15px rgba(255, 102, 255, 0.8), 2px 2px 0px #ff00ff;
  border-bottom: 3px solid #ff99ff;
  padding-bottom: 0.3rem;
  margin-top: 2.5rem;
}
pre, code {
  background: rgba(102, 51, 153, 0.4);
  border: 2px solid #ff99ff;
  border-radius: 4px;
  padding: 0.3rem 0.5rem;
  color: #ccffcc;
  box-shadow: 0 0 10px rgba(255, 153, 255, 0.3);
}
hr {
  border: none;
  height: 3px;
  background: linear-gradient(90deg, #ff99ff, #66ffff, #ff99ff);
  margin: 2.5rem 0;
  box-shadow: 0 0 10px rgba(255, 153, 255, 0.6);
}
a {
  color: #66ffff;
  text-decoration: none;
  text-shadow: 0 0 8px rgba(102, 255, 255, 0.8);
}
a:hover {
  color: #ff99ff;
  text-shadow: 0 0 12px rgba(255, 153, 255, 0.9);
}
blockquote {
  border-left: 4px solid #ff99ff;
  padding-left: 1.5rem;
  color: #ffccff;
  font-style: italic;
  background: rgba(255, 102, 255, 0.1);
}
</style>
```

---

## 2. Style Tag (for meta-tracking)

For the Style Atlas system, include:

```html
<!-- STYLE:VAPOR -->
```

---

## 3. Rendering

- For **static site generators**: link `styles/css/vapor.css`
- For **Pandoc → PDF**: use `styles/pdf/vapor/vapor.yaml`

---

## 4. Design Notes

Key elements:
- **Pastel purple/pink gradient** background
- **Cyan (#66ffff)** and **pink (#ff99ff)** accent colors
- **VT323 font** for retro computer aesthetic
- **Multiple text shadows** for glow effects
- **Wide letter spacing** for A E S T H E T I C feel
- Inspired by vaporwave art, 80s/90s nostalgia, and internet aesthetics

````