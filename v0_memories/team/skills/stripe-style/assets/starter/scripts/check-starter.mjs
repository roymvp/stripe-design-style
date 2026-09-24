import { mkdtemp, cp, readFile, access } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { execFileSync } from 'node:child_process'

const root = process.cwd()
const temp = await mkdtemp(join(tmpdir(), 'stripe-starter-'))
const paths = ['app','components','lib','packages','public','scripts','design-system','package.json','pnpm-lock.yaml','pnpm-workspace.yaml','postcss.config.mjs','next.config.mjs','next-env.d.ts','tsconfig.json','components.json']
for (const path of paths) {
  await cp(resolve(root,path),join(temp,path),{recursive:true,filter:src=>!src.includes('/node_modules')&&!src.includes('/.next')&&!src.endsWith('.tgz')&&!src.endsWith('qa-axe.js')})
}
const manifest = JSON.parse(await readFile(join(temp,'package.json'),'utf8'))
for (const dependency of Object.values(manifest.dependencies)) {
  if (dependency.startsWith('file:')) {
    const relative = dependency.slice(5)
    if (relative.startsWith('/')) throw new Error('Absolute file dependency is not portable')
    await access(resolve(temp,relative,'package.json'))
  }
}
console.log('Clean starter:',temp)
for (const args of [['install','--frozen-lockfile'],['exec','tsc','--noEmit'],['run','verify:source'],['run','build']]) {
  execFileSync('pnpm',args,{cwd:temp,stdio:'inherit',env:{...process.env,NEXT_TELEMETRY_DISABLED:'1'}})
}
execFileSync('pnpm',['--dir','packages/stripe-style','pack','--pack-destination',temp],{cwd:temp,stdio:'inherit'})
console.log('PASS: clean install, full typecheck, source audit, production build, UI package packing. Artifacts:',temp)
