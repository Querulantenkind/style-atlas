`````markdown
````markdown
# TERMINAL STYLE (Markdown)

A classic command-line aesthetic with authentic terminal styling,
featuring green-on-black monospace typography reminiscent of vintage terminals.

Intended for:
- CLI tool documentation
- command-line tutorials
- technical system docs
- retro computing projects

This file documents how to use **terminal** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML (e.g. GitHub Pages, static site),
you can inject the style directly at the top of the file:

```html
<style>
body {
  background: #000000;
  color: #00ff00;
  font-family: "Courier New", "Consolas", monospace;
  font-size: 14px;
  letter-spacing: 0.05em;
  line-height: 1.5;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem 2rem;
}
h1, h2, h3 {
  color: #00ff00;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border-bottom: 1px solid #00ff00;
  padding-bottom: 0.3rem;
  margin-top: 2.5rem;
}
h1::before { content: "# "; }
h2::before { content: "## "; }
h3::before { content: "### "; }
pre, code {
  background: #001100;
  border: 1px solid #00ff00;
  border-radius: 2px;
  padding: 0.2rem 0.4rem;
  color: #00ff00;
}
pre {
  padding: 1rem;
  overflow-x: auto;
}
hr {
  border: none;
  border-top: 1px solid #00ff00;
  margin: 2rem 0;
}
a {
  color: #00dd00;
  text-decoration: underline;
}
a:hover {
  color: #00ff00;
  background: #002200;
}
blockquote {
  border-left: 3px solid #00ff00;
  padding-left: 1rem;
  color: #00cc00;
  background: #001100;
  margin-left: 0;
}
strong {
  color: #00ff00;
  font-weight: bold;
}
</style>
```

---

## 2. Style Tag (for meta-tracking)

For the Style Atlas system, include:

```html
<!-- STYLE:TERMINAL -->
```

---

## 3. Rendering

- For **static site generators**: link `styles/css/terminal.css`
- For **Pandoc → PDF**: use `styles/pdf/terminal/terminal.yaml`

---

## 4. Design Notes

Key elements:
- **Classic green** (#00ff00) on black background
- **Monospace fonts** (Courier New, Consolas) for authenticity
- **Hash prefixes** for headers (# ## ###)
- **Minimal styling** with simple borders
- **Letter-spacing** for readability
- **Subtle variations** in green tones for hierarchy

````

`````
