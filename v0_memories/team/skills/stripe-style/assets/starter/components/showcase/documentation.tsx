import { ArrowUpRight, Check, Package } from 'lucide-react'
import { auditRows, sourceUrl } from '@/lib/design-system'
import { CopyCommand } from './interactive'
import { Section } from './section'

export function Documentation() {
  return <>
    <Section id="installation" title="从完整 starter 开始" description="当前项目就是可运行的 starter。组件独立成包，预览使用公共导出，不依赖隐藏文件。" meta="Next.js 16 · Tailwind CSS 4">
      <div className="grid gap-8 lg:grid-cols-2"><div><div className="mb-5 flex items-center gap-3"><Package size={20} aria-hidden="true" /><h3 className="text-heading-md">本地可安装组件包</h3></div><CopyCommand value="pnpm add ./packages/stripe-style" /><p className="text-sm leading-relaxed text-muted-foreground">包名为 @design-systems/stripe-style，尚未发布到 npm。使用时通过 GitHub 获取完整 starter；也可以安装本地打包的 tgz。正式 v0 导入将在验收后进行。</p></div><pre className="section-code" tabIndex={0} aria-label="组件导入与样式配置示例"><code>{`import {\n  Button, Input, Card, SiteNav\n} from '@design-systems/stripe-style'\n\n// globals.css\n@import 'tailwindcss';\n@import '@design-systems/stripe-style/tokens.css';\n@source '../node_modules/@design-systems/stripe-style/src';`}</code></pre></div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">{['自包含组件、tokens 与渐变资产','Inter 开放字体与中文回退','保留源规范与补充决策记录'].map(item => <div className="flex items-start gap-2 text-sm text-secondary-foreground" key={item}><Check size={16} className="mt-0.5 shrink-0" aria-hidden="true" />{item}</div>)}</div>
    </Section>
    <Section id="audit" title="源规范核对" description="区分原文已有、实现补充和源文件未定义的内容。完整不意味着凭空增加一套规范。" meta="唯一来源 · 不混合其他品牌">
      <div>{auditRows.map(([title,state,detail]) => <div className="audit-row" key={title}><h3 className="font-normal">{title}</h3><span className="text-secondary-foreground">{state}</span><p className="text-muted-foreground">{detail}</p></div>)}</div>
      <div className="mt-8 rounded-lg bg-secondary p-6"><h3 className="text-base font-normal">源文件的边界</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">这是一份 alpha 阶段的第三方设计分析，不是官方设计系统。未提供组件库、原始网状渐变、完整暗色主题、图表语法、语义状态色与动效时间。交互补充、中文适配和新制作的资产均在项目核对文档中单独记录。</p><a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="ds-link mt-4 inline-flex items-center gap-2 text-sm">查看固定版本的原始 DESIGN.md<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only">（新窗口）</span></a></div>
    </Section>
    <footer className="flex flex-wrap items-center justify-between gap-4 py-8 text-sm text-muted-foreground"><p>stripe 风格 · 独立设计系统实验</p><p>等待验收后，保存为可复用设计系统。</p></footer>
  </>
}
