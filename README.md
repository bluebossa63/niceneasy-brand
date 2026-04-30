# niceneasy-brand

Corporate identity and corporate design repository for the niceneasy platform family.

The canonical design reference is:

- `docs/corporate-design.md`

Primary artifacts:

- `tokens/brand.tokens.json`
- `tokens/tokens.css`
- `tokens/vscode.css`
- `tailwind/tailwind-v3-preset.cjs`
- `tailwind/tailwind-v4-theme.css`
- `assets/logo/niceneasy-mark.svg`
- `assets/agent-marks/*.svg`

This repository is intended to become the home for:

- brand tokens
- logo and signet assets
- agent marks
- generated Tailwind presets / CSS variables
- VS Code theme variables
- usage examples for the public website, Command Center, and VS Code plugin

Do not place API DTOs or runtime contracts here. Those belong in `@niceneasy/agent-sdk`.

## Usage

Build generated outputs from the source token file:

```sh
npm run build
```

Validate that required brand artifacts exist:

```sh
npm run check
```

CSS variables:

```css
@import "@niceneasy/brand/tokens.css";
```

Tailwind v3:

```js
module.exports = {
  presets: [require('@niceneasy/brand/tailwind-v3')]
}
```

Tailwind v4:

```css
@import "@niceneasy/brand/tailwind-v4.css";
```

VS Code webviews:

```css
@import "@niceneasy/brand/tokens.css";
@import "@niceneasy/brand/vscode.css";
```

## Product Naming

`agent-command-center` is the active operator workbench. `operator-deck` is legacy naming from older planning docs and should not be treated as a separate product unless a new architecture decision explicitly reintroduces it.
