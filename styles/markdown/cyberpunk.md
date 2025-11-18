````markdown
# CYBERPUNK STYLE (Markdown)

A neon-infused, retro-futuristic aesthetic inspired by cyberpunk culture,
featuring vibrant colors and a high-tech digital atmosphere.

Intended for:
- tech project documentation
- sci-fi themed content
- futuristic creative systems
- digital art projects

This file documents how to use **cyberpunk** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML (e.g. GitHub Pages, static site),
you can inject the style directly at the top of the file:

```html
<style>
body {
  background: #0a0e27;
  color: #e0e0e0;
  font-family: "Fira Code", "Courier New", monospace;
  letter-spacing: 0.02em;
  line-height: 1.6;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 2rem;
  text-shadow: 0 0 2px rgba(0, 255, 255, 0.3);
}
h1, h2, h3 {
  color: #00ffff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.4);
  border-bottom: 2px solid #ff00ff;
  padding-bottom: 0.3rem;
  margin-top: 2.5rem;
}
pre, code {
  background: #1a1a2e;
  border: 1px solid #ff00ff;
  border-radius: 3px;
  padding: 0.25rem 0.4rem;
  color: #00ff00;
  box-shadow: 0 0 5px rgba(255, 0, 255, 0.3);
}
hr {
  border: none;
  border-top: 1px solid #ff00ff;
  box-shadow: 0 0 5px rgba(255, 0, 255, 0.5);
  margin: 2.5rem 0;
}
a {
  color: #ff00ff;
  text-decoration: none;
  text-shadow: 0 0 5px rgba(255, 0, 255, 0.6);
}
a:hover {
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}
blockquote {
  border-left: 3px solid #ff00ff;
  padding-left: 1rem;
  color: #b0b0b0;
  background: rgba(255, 0, 255, 0.05);
}
</style>
```

---

## 2. Style Tag (for meta-tracking)

For the Style Atlas system, include:

```html
<!-- STYLE:CYBERPUNK -->
```

---

## 3. Rendering

- For **static site generators**: link `styles/css/cyberpunk.css`
- For **Pandoc → PDF**: use `styles/pdf/cyberpunk/cyberpunk.yaml`

---

## 4. Design Notes

Key elements:
- **Neon cyan** (#00ffff) for headers with glow effects
- **Magenta** (#ff00ff) for accents and borders
- **Dark blue background** (#0a0e27) for depth
- **Green code** (#00ff00) for terminal aesthetic
- **Text shadows** and **box shadows** for neon glow effect
- Monospaced fonts for digital/technical feel

````
