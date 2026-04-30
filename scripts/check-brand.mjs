import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const required = [
  'docs/corporate-design.md',
  'docs/usage.md',
  'examples/README.md',
  'schemas/brand-tokens.schema.json',
  'tokens/brand.tokens.json',
  'tokens/tokens.css',
  'tokens/vscode.css',
  'tailwind/tailwind-v3-preset.cjs',
  'tailwind/tailwind-v4-theme.css',
  'assets/logo/niceneasy-mark.svg',
  'assets/agent-marks/meridian.svg',
  'assets/agent-marks/codex.svg',
  'assets/agent-marks/cipher.svg',
  'assets/agent-marks/sentinel.svg',
  'assets/agent-marks/marketing.svg'
]

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)))
if (missing.length > 0) {
  console.error(`Missing brand artifacts:\n${missing.map((file) => `- ${file}`).join('\n')}`)
  process.exit(1)
}

const designDoc = fs.readFileSync(path.join(root, 'docs', 'corporate-design.md'), 'utf8')
for (const banned of ['cyan/violet AI gradients', 'Fully FINMA compliant']) {
  if (!designDoc.includes(banned)) {
    console.error(`Corporate design doc must explicitly mention banned phrase: ${banned}`)
    process.exit(1)
  }
}

console.log('Brand artifact check passed')
