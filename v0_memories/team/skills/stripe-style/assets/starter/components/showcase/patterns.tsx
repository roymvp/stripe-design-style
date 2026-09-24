import { ArrowRight, Check, Command, LayoutGrid, Rows3 } from 'lucide-react'
import { ActionLink, Badge, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, MeshSurface, SiteFooter, SiteNav } from '@design-systems/stripe-style'
import { Section } from './section'

export function CardShowcase() {
  return <Section id="cards" title="卡片与定价" description="同一套几何，不同的表面。内容顶端对齐，比较型卡片的操作固定在底部。" meta="5 类卡片 · 32px 内边距">
    <div className="grid gap-6 md:grid-cols-2">
      <Card elevation="lift"><CardHeader><LayoutGrid size={24} className="text-primary" aria-hidden="true" /><CardTitle>为内容建立秩序</CardTitle><CardDescription>纯白表面与细描边，让信息本身成为主角。</CardDescription></CardHeader><CardContent><div className="rounded-md bg-secondary p-5"><div className="flex items-center justify-between border-b border-border pb-3 text-sm"><span>组件内容</span><Badge variant="outline">示例</Badge></div><p className="mt-3 text-sm leading-relaxed text-muted-foreground">标题、说明、内容与操作，各有清晰的位置。</p></div></CardContent><CardFooter><a className="ds-link flex items-center gap-2 text-sm" href="#installation">查看组件用法<ArrowRight size={16} aria-hidden="true" /></a></CardFooter></Card>
      <Card variant="cream"><CardHeader><Rows3 size={24} aria-hidden="true" /><CardTitle>在冷色之间，留一点温度。</CardTitle><CardDescription>暖米色只作为间奏，不替代默认的白色画布。</CardDescription></CardHeader><CardContent><p className="text-heading-md leading-relaxed">让页面有变化，<br />不让视觉失去连贯。</p></CardContent><CardFooter><a className="flex items-center gap-2 text-sm font-normal" href="#colors">查看表面规范<ArrowRight size={16} aria-hidden="true" /></a></CardFooter></Card>
    </div>
    <div className="mt-10 flex items-center justify-between gap-4"><h3 className="text-heading-md">定价卡片组合</h3><span className="text-sm text-muted-foreground">演示方案，非真实商品</span></div>
    <div className="ds-pricing-grid mt-6">{[
      {title:'起步', price:'0', description:'探索基础能力', features:['基础组件','单个工作空间'],featured:false},
      {title:'标准', price:'99', description:'建立日常工作流',features:['完整组件','协作工作空间','使用指引'],featured:false},
      {title:'专业', price:'299', description:'连接完整产品体验',features:['所有标准能力','高级组合模式','优先设计评审'],featured:true},
      {title:'定制', price:null, description:'适配团队独特需求',features:['定制组件','专属规范','迁移支持'],featured:false},
    ].map(tier => <Card key={tier.title} variant={tier.featured ? 'featured' : 'pricing'}><CardHeader><CardTitle>{tier.title}</CardTitle><CardDescription>{tier.description}</CardDescription></CardHeader><CardContent><p className="ds-numeric text-display-md">{tier.price === null ? '按需' : `¥${tier.price}`}<span className="ml-1 text-sm">{tier.price === null ? '' : '/ 月'}</span></p><ul className="mt-6 flex flex-col gap-4">{tier.features.map(feature => <li key={feature} className="flex items-start gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0" aria-hidden="true" />{feature}</li>)}</ul></CardContent><CardFooter><ActionLink href="#inputs" variant={tier.featured ? 'default' : 'outline'} size="sm" className="w-full">体验样例</ActionLink></CardFooter></Card>)}</div>
  </Section>
}

export function NavigationShowcase() {
  return <Section id="navigation" title="导航与页脚" description="白色导航浮于渐变之上。桌面展开链接，手机收起为可用键盘操作的菜单。" meta="响应式导航 · 4 列页脚">
    <MeshSurface src="/images/mesh.webp" className="rounded-lg p-4 sm:p-6">
      <SiteNav title="产品工作室" homeHref="#overview" items={[{label:'设计基础',href:'#colors'},{label:'组件',href:'#buttons'},{label:'使用指南',href:'#installation'}]} action={{label:'开始使用',href:'#installation'}} label="导航组件样例" />
      <div className="px-4 py-12 sm:px-6"><p className="text-display-md">导航保持安静，内容向前一步。</p><p className="mt-4 text-sm text-secondary-foreground">这里的名称和内容均为中性演示，不复用原品牌文案。</p></div>
    </MeshSurface>
    <div className="mt-6 overflow-hidden rounded-lg border border-border"><SiteFooter groups={[
      {title:'设计基础',links:[{label:'色彩系统',href:'#colors'},{label:'字体排版',href:'#typography'}]},
      {title:'组件',links:[{label:'按钮',href:'#buttons'},{label:'表单',href:'#inputs'}]},
      {title:'组合',links:[{label:'卡片',href:'#cards'},{label:'产品界面',href:'#patterns'}]},
      {title:'资源',links:[{label:'快速开始',href:'#installation'},{label:'源规范核对',href:'#audit'}]},
    ]} note="独立设计语言演示。未使用原品牌名称、标志或营销文案。" /></div>
  </Section>
}

export function ProductComposite() {
  return <Section id="patterns" title="产品界面组合" description="代码、数据与概览协同出现。深色框架承托白色工作面，数字始终使用 tnum。" meta="桌面 3 面板 → 平板 2 → 手机 1">
    <div className="rounded-xl bg-navy p-5 text-on-navy md:p-8">
      <div className="mb-7 flex items-center justify-between gap-4"><div className="flex items-center gap-3"><Command size={18} aria-hidden="true" /><span className="text-sm">工作空间预览</span></div><span className="text-sm text-on-navy/75">静态演示数据</span></div>
      <div className="ds-composite items-start">
        <div className="ds-composite-secondary min-w-0 rounded-lg border border-on-navy/20 p-5"><p className="mb-6 text-sm text-on-navy/75">配置预览</p><pre tabIndex={0} aria-label="演示配置代码" className="overflow-x-auto font-mono text-sm leading-loose text-on-navy"><code>{`const workspace = {\n  mode: 'preview',\n  locale: 'zh-CN',\n  currency: 'CNY',\n  ready: true\n}`}</code></pre><p className="mt-6 text-sm text-on-navy/75">配置仅用于展示</p></div>
        <Card variant="dashboard"><CardHeader><CardTitle>最近记录</CardTitle><CardDescription>使用右对齐的等宽数字</CardDescription></CardHeader><CardContent><table className="w-full text-sm"><caption className="sr-only">演示交易记录，不代表真实业务</caption><thead><tr className="border-b border-border text-muted-foreground"><th scope="col" className="pb-3 text-left font-normal">记录</th><th scope="col" className="pb-3 text-right font-normal">金额</th></tr></thead><tbody>{[['DEMO-1048','¥ 2,480.00'],['DEMO-1047','¥ 860.00'],['DEMO-1046','¥ 12,000.00'],['DEMO-1045','¥ 3,200.00']].map(([id,value]) => <tr className="border-b border-border last:border-0" key={id}><td className="py-4 text-muted-foreground">{id}</td><td className="ds-numeric py-4 text-right whitespace-nowrap">{value}</td></tr>)}</tbody></table></CardContent></Card>
        <div className="ds-composite-tertiary min-w-0"><Card variant="dashboard"><CardHeader><CardTitle>演示汇总</CardTitle><CardDescription>四条示例记录</CardDescription></CardHeader><CardContent><p className="ds-numeric text-display-md">¥18,540<span className="text-base">.00</span></p><div className="mt-6 border-t border-border pt-4"><p className="text-sm text-muted-foreground">用途</p><p className="mt-2 text-sm leading-relaxed">检查数字排列、内边距与不同表面的对比。</p></div></CardContent></Card></div>
      </div>
    </div>
    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">本组合用真实 DOM 文本实现，不是不可访问的界面截图。响应行为与对齐可以直接检查。</p>
  </Section>
}
