import assert from 'node:assert/strict'
import { readFile, readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const { cn } = await import('../packages/stripe-style/src/utils.ts')
assert.equal(cn('text-primary-foreground', 'text-button-md'), 'text-primary-foreground text-button-md')
assert.equal(cn('text-body-md', 'text-card-foreground'), 'text-body-md text-card-foreground')

const root = process.cwd()
const source = await readFile(resolve(root, 'design-system/source/DESIGN.md'), 'utf8')
const css = await readFile(resolve(root, 'packages/stripe-style/src/tokens.css'), 'utf8')
assert(css.includes('@theme static'), 'Public tokens must remain available for dynamic CSS variable consumers')
const section = (name, next) => source.split(`\n${name}:\n`)[1].split(`\n${next}:\n`)[0]
const counts = { colors: 0, typography: 0, spacing: 0, rounded: 0, components: 0 }
for (const [, name, hex] of section('colors', 'typography').matchAll(/^  ([\w-]+): "(#[\da-f]+)"/gm)) {
  assert(css.includes(`--stripe-${name}: ${hex};`), `Color mismatch: ${name}`)
  counts.colors++
}
for (const [, name, block] of section('typography', 'rounded').matchAll(/^  ([\w-]+):\n((?:    .+\n?)+)/gm)) {
  for (const [property, suffix] of [['fontSize', ''], ['fontWeight', '--font-weight'], ['lineHeight', '--line-height'], ['letterSpacing', '--letter-spacing']]) {
    const value = block.match(new RegExp(`${property}: (.+)`))?.[1].trim()
    const expected = value === '1.0' ? '1' : value === '0px' ? '0' : value
    assert(css.includes(`--text-${name}${suffix}: ${expected};`), `Typography mismatch: ${name}.${property}=${value}`)
  }
  counts.typography++
}
for (const [group, next, prefix] of [['rounded','spacing','radius'], ['spacing','components','spacing']]) {
  for (const [,name,value] of section(group,next).matchAll(/^  ([\w-]+): (\d+px)/gm)) {
    assert(css.includes(`--${prefix}-${name}: ${value};`), `${group} mismatch: ${name}`)
    counts[group]++
  }
}
const map = {
  'button-primary-pill': ['button.tsx','bg-primary'],
  'button-primary-pill-pressed': ['button.tsx','active:bg-primary-press'],
  'button-secondary': ['button.tsx','border-primary'],
  'button-on-dark': ['button.tsx','bg-navy'],
  'text-input': ['input.tsx','rounded-sm'],
  'text-input-focused': ['input.tsx','focus-visible:border-ring'],
  'card-feature-light': ['card.tsx','default:'],
  'card-pricing': ['card.tsx','pricing:'],
  'card-pricing-featured': ['card.tsx','featured:'],
  'card-cream-band': ['card.tsx','cream:'],
  'card-dashboard-mockup': ['card.tsx','dashboard:'],
  'pill-tag-soft': ['badge.tsx','bg-accent'],
  'nav-bar-on-mesh': ['site-nav.tsx','ds-nav'],
  'link-on-light': ['tokens.css','.ds-link'],
  'footer-light': ['surfaces.tsx','ds-footer'],
}
for (const [,name] of source.split('\ncomponents:\n')[1].split('\n---')[0].matchAll(/^  ([\w-]+):/gm)) {
  assert(map[name], `Unmapped source component: ${name}`)
  const [file, marker] = map[name]
  assert((await readFile(resolve(root,'packages/stripe-style/src',file),'utf8')).includes(marker), `Missing component ${name}`)
  counts.components++
}
assert.deepEqual(counts, { colors:20, typography:15, spacing:8, rounded:6, components:15 })
async function inspect(dir) {
  for (const entry of await readdir(dir, { withFileTypes:true })) {
    if (['node_modules','.next','.git','source'].includes(entry.name)) continue
    const path = resolve(dir, entry.name)
    if (entry.isDirectory()) { await inspect(path); continue }
    if (!/\.(tsx?|css|json|mjs|md)$/.test(path)) continue
    const text = await readFile(path,'utf8')
    assert(!text.includes('\uFFFD'), `Corrupted text in ${path}`)
    if (path.includes('/packages/stripe-style/src/')) {
      assert(!/from ['"](?:@\/|cn['"]|.*user_read_only)/.test(text), `Host-bound import in ${path}`)
    }
  }
}
await inspect(root)
console.log('PASS: exact source token values, all 15 component mappings, independent package imports, no replacement characters.', counts)
