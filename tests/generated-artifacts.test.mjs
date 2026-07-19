import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const generated = [
  'tokens/tokens.css',
  'tokens/vscode.css',
  'tailwind/tailwind-v3-preset.cjs',
  'tailwind/tailwind-v4-theme.css',
]

test('generated brand artifacts stay synchronized with the canonical tokens', async () => {
  const before = await Promise.all(generated.map((path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')))

  await import('../scripts/build-tokens.mjs')
  await import('../scripts/check-brand.mjs')

  const after = await Promise.all(generated.map((path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')))
  assert.deepEqual(after, before)
})
