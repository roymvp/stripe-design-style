import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { ActionLink, Badge, MeshSurface } from '@design-systems/stripe-style'
import { colors, radii, spacing, typeRoles } from '@/lib/design-system'
import { Section } from './section'

export function Overview() {
  return <section id="overview" aria-labelledby="overview-title">
    <div className="mb-7 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-muted-foreground">设计语言，落实到每一个界面。</p><Badge variant="outline">v0.1.0 · 待验收</Badge></div>
    <MeshSurface src="/images/mesh.webp" priority className="hero-frame">
      <div className="hero-copy"><h1 id="overview-title" className="text-balance">清晰、轻盈，<br />也足够有力量。</h1><p className="mt-5 text-base leading-relaxed text-secondary-foreground">以流动色彩打开界面，以精确细节组织内容。<br className="hidden sm:block" />一套从设计基础到产品体验的可复用语言。</p><div className="mt-7 flex flex-wrap items-center gap-4"><ActionLink href="#buttons">探索组件<ArrowRight data-icon="inline-end" /></ActionLink><a href="#installation" className="flex items-center gap-2 text-sm font-normal text-foreground">开始使用<ArrowUpRight size={16} aria-hidden="true" /></a></div></div>
    </MeshSurface>
    <div className="grid gap-7 border-b border-border py-8 sm:grid-cols-3">
      {[['轻盈的排版', '300 字重，紧凑字距。让内容有空间，也有秩序。'], ['克制的强调', '一个靛蓝主操作，清晰区分阅读与行动。'], ['有依据的细节', '每个颜色、圆角和间距，都能追溯到源规范。']].map(([title, text]) => <div key={title}><h2 className="text-base font-normal">{title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
    </div>
  </section>
}

export function Foundations() {
  return <>
    <Section id="colors" title="色彩" description="靛蓝引导行动，深海军蓝承载信息。冷白与暖米色构成表面的节奏。" meta="20 个源颜色 tokens">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-5">{colors.slice(0,5).map(color => <div key={color.name}><div className="color-swatch" style={{ backgroundColor: `var(--stripe-${color.name})` }} /><div className="mt-4 flex flex-col gap-1"><span className="text-sm font-normal">{color.label}</span><code className="font-mono text-sm text-muted-foreground">{color.value.toUpperCase()}</code></div></div>)}</div>
      <div className="mt-7 rounded-md bg-secondary px-5 py-4 text-sm leading-relaxed text-secondary-foreground">用色原则：每个营销内容区只保留一个填充主按钮。Ruby 与 Magenta 留在渐变或产品点色中，不扩展为按钮色。</div>
      <details className="mt-6"><summary className="cursor-pointer text-sm font-normal text-primary">展开全部颜色 tokens</summary><div className="mt-5 grid gap-x-8 md:grid-cols-2">{colors.map(color => <div className="color-detail" key={color.name}><span aria-hidden="true" className="color-detail-chip" style={{ backgroundColor: `var(--stripe-${color.name})` }} /><div className="min-w-0"><p className="text-sm">{color.label}</p><code className="break-all font-mono text-sm text-muted-foreground">{color.name}</code></div><code className="font-mono text-sm">{color.value}</code></div>)}</div></details>
    </Section>
    <Section id="typography" title="字体与排版" description="轻字重与负字距形成显示层级；金额和数值使用等宽数字，便于纵向比较。" meta="Inter + 中文系统字体">
      <div className="grid gap-8 rounded-lg bg-secondary p-8 md:grid-cols-2"><div><p className="text-6xl font-light tracking-tight">Aa <span className="text-4xl">永</span></p><p className="mt-4 text-sm text-muted-foreground">Inter Variable · 300 / 400</p></div><div className="flex flex-col justify-center gap-3"><p className="text-base">清晰表达，让复杂变得有序。</p><p className="ds-numeric text-2xl font-light">¥ 12,840.00 <span className="text-muted-foreground">0123456789</span></p><p className="text-sm leading-relaxed text-muted-foreground">Sohne 为专有字体，不随包分发。拉丁字符使用 Inter；中文优先用系统字体，缺字时按需加载本地 Noto Sans SC 分片。</p></div></div>
      <div className="mt-5">{typeRoles.slice(0, 10).map(([name, size, weight, line, tracking]) => <TypeRow key={name} name={name} size={size} weight={weight} line={line} tracking={tracking} />)}</div>
      <details className="mt-4"><summary className="cursor-pointer text-sm font-normal text-primary">查看按钮、辅助与微型字号（5 项）</summary><div>{typeRoles.slice(10).map(([name,size,weight,line,tracking]) => <TypeRow key={name} name={name} size={size} weight={weight} line={line} tracking={tracking} />)}</div></details>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">原始 10 / 11 / 13px tokens 保留用于对照；实际中文辅助文案最低使用 14px。中文标题放宽行高，避免笔画拥挤。Inter 的 ss01 不等同于 Sohne 的同名字形集。</p>
    </Section>
    <Section id="geometry" title="间距与层次" description="以 8px 为基础单位，小间距用于细节，大间距用于建立阅读节奏。" meta="8 档间距 · 6 档圆角">
      <div className="preview-panel"><div className="flex flex-wrap items-end justify-between gap-5 p-8">{spacing.map(([name,value]) => <div key={name} className="flex min-w-10 flex-col items-center gap-4"><div className="flex h-20 items-end"><div className="rounded-xs bg-accent" style={{width: 24, height: value}} /></div><span className="ds-numeric text-sm">{value}px</span><code className="font-mono text-sm text-muted-foreground">{name}</code></div>)}</div><p className="preview-caption">营销区块 64–96px · 卡片内边距 32px · 产品面板 24px</p></div>
      <div className="mt-8 grid grid-cols-3 gap-6 sm:grid-cols-6">{radii.map(([name,value]) => <div key={name} className="flex flex-col items-center gap-4"><div className="h-16 w-full border border-input bg-secondary" style={{borderRadius: value}} /><span className="text-sm">{name} <span className="text-muted-foreground">{value === 9999 ? '∞' : `${value}px`}</span></span></div>)}</div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{[['无阴影', '平面内容', ''], ['一级阴影', '轻量卡片', 'shadow-lift'], ['二级阴影', '浮动产品面板', 'shadow-panel']].map(([name, desc, shadow]) => <div className={`rounded-lg bg-secondary p-6 ${shadow}`} key={name}><p className="text-base font-normal">{name}</p><p className="mt-2 text-sm text-muted-foreground">{desc}</p></div>)}</div>
    </Section>
  </>
}

function TypeRow({name,size,weight,line,tracking}: {name:string;size:number;weight:number;line:string;tracking:string}) {
  return <div className="type-row"><code className="font-mono text-sm text-muted-foreground">{name}</code><p className={`type-specimen ${name.includes('tabular') || name === 'caption' ? 'ds-numeric' : ''}`} style={{fontSize:`var(--text-${name})`,fontWeight:weight,lineHeight:`var(--text-${name}--line-height)`,letterSpacing:`var(--text-${name}--letter-spacing)`}}>{name.includes('tabular') ? '¥ 128,640.00' : size > 25 ? '精确，也从容。' : '让每一个细节恰到好处。'}</p><span className="type-measure ds-numeric text-sm text-muted-foreground">{size}px / {weight}<br /><span className="text-sm">行高 {line} · {tracking}px</span></span></div>
}
