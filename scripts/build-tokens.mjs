import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const tokenPath = path.join(root, 'tokens', 'brand.tokens.json')
const tokens = JSON.parse(fs.readFileSync(tokenPath, 'utf8'))

const out = {
  tokensCss: path.join(root, 'tokens', 'tokens.css'),
  vscodeCss: path.join(root, 'tokens', 'vscode.css'),
  tailwindV3: path.join(root, 'tailwind', 'tailwind-v3-preset.cjs'),
  tailwindV4: path.join(root, 'tailwind', 'tailwind-v4-theme.css')
}

for (const dir of new Set(Object.values(out).map((file) => path.dirname(file)))) {
  fs.mkdirSync(dir, { recursive: true })
}

function kebab(input) {
  return input.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)
}

function flatten(group, prefix = []) {
  const entries = []
  for (const [key, value] of Object.entries(group)) {
    if (value && typeof value === 'object' && 'value' in value) {
      entries.push([[...prefix, key].map(kebab).join('-'), resolveValue(value.value)])
    } else if (value && typeof value === 'object') {
      entries.push(...flatten(value, [...prefix, key]))
    }
  }
  return entries
}

function resolveValue(value) {
  const refMatch = typeof value === 'string' && value.match(/^\{(.+)\}$/)
  if (!refMatch) return value

  const ref = refMatch[1].split('.')
  let current = tokens
  for (const part of ref) current = current?.[part]
  if (!current || typeof current !== 'object' || !('value' in current)) {
    throw new Error(`Unresolved token reference: ${value}`)
  }
  return resolveValue(current.value)
}

function write(file, content) {
  fs.writeFileSync(file, `${content.trimEnd()}\n`)
}

const color = flatten(tokens.color, ['color'])
const legacyColor = flatten(tokens.color, [])
const semantic = flatten(tokens.semantic, [])
const typography = flatten(tokens.typography, ['font'])
const radius = flatten(tokens.radius, ['radius'])
const space = flatten(tokens.space, ['space'])
const shadow = flatten(tokens.shadow, ['shadow'])
const motion = flatten(tokens.motion, ['motion'])
const allCssVars = [...color, ...semantic, ...typography, ...radius, ...space, ...shadow, ...motion]

write(out.tokensCss, `:root {
  /* Generated from tokens/brand.tokens.json. Do not edit by hand. */
${allCssVars.map(([name, value]) => `  --nice-${name}: ${value};`).join('\n')}
${legacyColor.map(([name, value]) => `  --nice-${name}: ${value};`).join('\n')}
}`)

write(out.vscodeCss, `:root {
  /* Generated from tokens/brand.tokens.json. VS Code webviews should map into host theme variables first. */
  --nice-vscode-bg: var(--vscode-editor-background, var(--nice-color-ink-950));
  --nice-vscode-fg: var(--vscode-editor-foreground, var(--nice-color-paper-50));
  --nice-vscode-border: var(--vscode-panel-border, var(--nice-color-ink-800));
  --nice-vscode-accent: var(--vscode-focusBorder, var(--nice-color-moss-500));
  --nice-vscode-risk: var(--vscode-errorForeground, var(--nice-color-coral-400));
  --nice-vscode-evidence: var(--vscode-charts-yellow, var(--nice-color-brass-400));
}`)

const colors = Object.fromEntries(Object.entries(tokens.color).map(([family, values]) => {
  return [family, Object.fromEntries(Object.entries(values).map(([step, token]) => [step, resolveValue(token.value)]))]
}))

write(out.tailwindV3, `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: ${JSON.stringify(colors, null, 8).replace(/^/gm, '      ').trim()},
      fontFamily: {
        sans: ['Geist', 'Satoshi', 'Avenir Next', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      borderRadius: ${JSON.stringify(Object.fromEntries(radius.map(([name, value]) => [name.replace(/^radius-/, ''), value])), null, 8).replace(/^/gm, '      ').trim()},
      spacing: ${JSON.stringify(Object.fromEntries(space.map(([name, value]) => [name.replace(/^space-/, ''), value])), null, 8).replace(/^/gm, '      ').trim()},
      boxShadow: ${JSON.stringify(Object.fromEntries(shadow.map(([name, value]) => [name.replace(/^shadow-/, ''), value])), null, 8).replace(/^/gm, '      ').trim()}
    }
  }
}`)

write(out.tailwindV4, `@theme {
${color.map(([name, value]) => `  --color-${name.replace(/^color-/, '')}: ${value};`).join('\n')}
${typography.map(([name, value]) => `  --${name}: ${value};`).join('\n')}
${radius.map(([name, value]) => `  --radius-${name.replace(/^radius-/, '')}: ${value};`).join('\n')}
${space.map(([name, value]) => `  --spacing-${name.replace(/^space-/, '')}: ${value};`).join('\n')}
}`)

console.log(`Generated ${Object.values(out).map((file) => path.relative(root, file)).join(', ')}`)
