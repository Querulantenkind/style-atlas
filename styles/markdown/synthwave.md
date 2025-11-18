`````markdown
````markdown
# SYNTHWAVE STYLE (Markdown)

An 80s retrowave aesthetic with sunset gradients, neon grid, and nostalgic
vibes from classic retro-futuristic artwork.

Intended for:
- retro-themed projects
- music documentation
- creative portfolios
- 80s nostalgia content

This file documents how to use **synthwave** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML (e.g. GitHub Pages, static site),
you can inject the style directly at the top of the file:

```html
<style>
body {
  background: linear-gradient(180deg, #2b1055 0%, #7597de 50%, #ff6cab 100%);
  color: #ffffff;
  font-family: "Arial", sans-serif;
  font-size: 15px;
  line-height: 1.7;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}
h1, h2, h3 {
  color: #ff6cab;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  text-shadow: 0 0 20px #ff6cab, 0 0 40px #ff6cab;
  border-bottom: 3px solid #ffeb3b;
  padding-bottom: 0.5rem;
  margin-top: 2.5rem;
}
h1 {
  background: linear-gradient(90deg, #ff6cab, #ffeb3b, #00d9ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
pre, code {
  background: rgba(43, 16, 85, 0.6);
  border: 1px solid #ff6cab;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  color: #00d9ff;
  box-shadow: 0 0 10px rgba(0, 217, 255, 0.3);
}
hr {
  border: none;
  height: 3px;
  background: linear-gradient(90deg, #ff6cab, #ffeb3b, #00d9ff);
  box-shadow: 0 0 15px rgba(255, 108, 171, 0.6);
  margin: 2.5rem 0;
}
a {
  color: #ffeb3b;
  text-decoration: none;
  text-shadow: 0 0 10px #ffeb3b;
  border-bottom: 2px solid #ffeb3b;
}
a:hover {
  color: #00d9ff;
  text-shadow: 0 0 15px #00d9ff;
  border-bottom-color: #00d9ff;
}
blockquote {
  border-left: 4px solid #ff6cab;
  padding-left: 1rem;
  color: #ffffff;
  background: rgba(255, 108, 171, 0.1);
  box-shadow: 0 0 20px rgba(255, 108, 171, 0.2);
}
</style>
```

---

## 2. Style Tag (for meta-tracking)

For the Style Atlas system, include:

```html
<!-- STYLE:SYNTHWAVE -->
```

---

## 3. Rendering

- For **static site generators**: link `styles/css/synthwave.css`
- For **Pandoc → PDF**: use `styles/pdf/synthwave/synthwave.yaml`

---

## 4. Design Notes

Key elements:
- **Sunset gradient** (purple → blue → pink)
- **Neon colors** (pink #ff6cab, cyan #00d9ff, yellow #ffeb3b)
- **Multiple glows** and text shadows
- **Grid patterns** for retro-futuristic feel
- **Gradient text** for major headers
- **Sans-serif fonts** for 80s look

````

`````
