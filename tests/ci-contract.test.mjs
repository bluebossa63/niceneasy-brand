import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('../', import.meta.url)
const readOptional = async (path) => readFile(new URL(path, root), 'utf8').catch(() => '')

test('Brand has a reproducible blocking coverage gate', async () => {
  const packageJson = JSON.parse(await readOptional('package.json'))
  const workflow = await readOptional('.github/workflows/ci.yml')
  const sonar = await readOptional('sonar-project.properties')
  const lockfile = await readOptional('package-lock.json')

  assert.match(packageJson.scripts?.coverage ?? '', /--experimental-test-coverage/)
  assert.match(packageJson.scripts?.['check:generated'] ?? '', /generated-artifacts\.test\.mjs/)
  assert.doesNotMatch(workflow, /paths-ignore:/)
  assert.match(workflow, /precheck-command:\s*["']npm run check:generated["']/)
  assert.match(workflow, /test-command:\s*["']npm run coverage["']/)
  assert.match(sonar, /^sonar\.exclusions=.*tests\/\*\*/m)
  assert.match(sonar, /^sonar\.javascript\.lcov\.reportPaths=coverage\/lcov\.info$/m)
  assert.notEqual(lockfile, '', 'package-lock.json is required for npm ci')
})
