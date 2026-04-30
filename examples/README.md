# Examples

Minimal import examples for downstream repos.

## Plain CSS

```css
@import "@niceneasy/brand/tokens.css";

.surface {
  background: var(--nice-bg-dark);
  color: var(--nice-paper-50);
  border: 1px solid var(--nice-border-dark);
}
```

## Tailwind v3

```js
module.exports = {
  presets: [require('@niceneasy/brand/tailwind-v3')],
  content: ['./src/**/*.{ts,tsx}']
}
```

## Tailwind v4

```css
@import "tailwindcss";
@import "@niceneasy/brand/tailwind-v4.css";
```

## VS Code Webview

```css
@import "@niceneasy/brand/tokens.css";
@import "@niceneasy/brand/vscode.css";

body {
  background: var(--nice-vscode-bg);
  color: var(--nice-vscode-fg);
}
```
