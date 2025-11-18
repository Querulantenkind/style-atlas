# REDACTED STYLE (Markdown)

A classified, blackout-document aesthetic inspired by official dossiers
and partially censored files.

Intended for:
- security / intelligence themed docs
- incident reports, internal memos
- creative “classified” style READMEs

This file documents how to use **redacted** in Markdown contexts.

---

## 1. Embedded CSS (for HTML / GitHub Pages)

If your Markdown is rendered as HTML, you can inject the style at the top
of the file:

```html
<style>
body {
  background: #111111;
  color: #dcdcdc;
  font-family: "Roboto Mono", monospace;
  line-height: 1.6;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
}
h1, h2, h3 {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border-bottom: 1px solid #333333;
  padding-bottom: 0.3rem;
  margin-top: 2.5rem;
}
pre, code {
  background: #161616;
  border: 1px solid #2b2b2b;
  padding: 0.35rem 0.45rem;
  border-radius: 2px;
  color: #ffffff;
}
hr {
  border: none;
  border-top: 1px dashed #444444;
  margin: 2.5rem 0;
}
.redacted {
  background: #000000;
  color: #000000;
  padding: 0 0.4em;
  border-radius: 2px;
}
</style>
