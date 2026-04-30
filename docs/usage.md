# Brand Usage

This repository is the source for corporate design artifacts. Product repositories should consume generated files instead of copying values from prose.

## Import Paths

CSS variables:

```css
@import "@niceneasy/brand/tokens.css";
```

VS Code webview variables:

```css
@import "@niceneasy/brand/tokens.css";
@import "@niceneasy/brand/vscode.css";
```

Tailwind v3 preset:

```js
module.exports = {
  presets: [require('@niceneasy/brand/tailwind-v3')]
}
```

Tailwind v4 theme:

```css
@import "@niceneasy/brand/tailwind-v4.css";
```

## Product Surface Rules

Public website:

- Use `paper`, `moss`, and restrained `brass`.
- Keep the surface light, calm, and explanatory.
- Do not use the dark cockpit treatment as the default public-site look.

Command Center:

- Use `ink` backgrounds with `moss`, `brass`, and sparse `coral`.
- Make evidence, approvals, costs, model metadata, and run state visually primary.
- Prefer line-based grouping over repeated card stacks.

VS Code plugin:

- Use VS Code theme variables first.
- Use brand tokens as fallback values only.
- Keep spacing compact and interaction keyboard-first.

## Compliance Language

Allowed:

- "designed for regulated environments"
- "FINMA-aware"
- "audit-ready"
- "evidence-preserving"

Not allowed unless formally proven:

- "FINMA compliant"
- "certified"
- "guaranteed compliance"
- unverified customer or audit claims

## Asset Rules

- Agent marks are operational seals, not mascots.
- Do not recolor SVG marks ad hoc in product repos.
- Do not introduce cyan/violet AI gradients.
- Do not use emoji as product identity.
