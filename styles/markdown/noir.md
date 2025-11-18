````markdown
# NOIR STYLE (Markdown)

A classic film noir aesthetic featuring high contrast black and white,
dramatic shadows, and vintage typography inspired by 1940s detective films.

Intended for:
- mystery or detective themed content
- vintage documentation
- dramatic creative writing
- retro project READMEs

This file documents how to use **noir** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML (e.g. GitHub Pages, static site),
you can inject the style directly at the top of the file:

```html
<style>
body {
  background: #1a1a1a;
  color: #e8e8e8;
  font-family: "Crimson Text", Georgia, serif;
  line-height: 1.7;
  max-width: 850px;
  margin: 2rem auto;
  padding: 1.5rem 2.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}
h1, h2, h3 {
  color: #ffffff;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-bottom: 3px double #666666;
  padding-bottom: 0.4rem;
  margin-top: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
}
pre, code {
  background: #0d0d0d;
  border: 1px solid #3a3a3a;
  border-radius: 2px;
  padding: 0.3rem 0.5rem;
  color: #d0d0d0;
  font-family: "Courier Prime", monospace;
}
hr {
  border: none;
  border-top: 2px solid #4a4a4a;
  margin: 2.5rem 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
a {
  color: #b8b8b8;
  text-decoration: underline;
  text-decoration-style: dotted;
}
a:hover {
  color: #ffffff;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
}
blockquote {
  border-left: 4px solid #666666;
  padding-left: 1.5rem;
  color: #c0c0c0;
  font-style: italic;
  background: rgba(255, 255, 255, 0.02);
}
</style>
```

---

## 2. Style Tag (for meta-tracking)

For the Style Atlas system, include:

```html
<!-- STYLE:NOIR -->
```

---

## 3. Rendering

- For **static site generators**: link `styles/css/noir.css`
- For **Pandoc → PDF**: use `styles/pdf/noir/noir.yaml`

---

## 4. Design Notes

Key elements:
- **High contrast** black (#1a1a1a) and white (#ffffff)
- **Serif fonts** for elegant, vintage feel
- **Text shadows** for dramatic depth
- **Double borders** for classic document styling
- **Grayscale palette** for authentic noir atmosphere
- Inspired by 1940s film noir and vintage detective novels

````