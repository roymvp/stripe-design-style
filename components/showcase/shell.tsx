'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowUpRight, BookOpen, Braces, CheckCheck, Circle, CreditCard, Layers, LayoutGrid, Menu, MousePointer2, PanelTop, Palette, SlidersHorizontal, Type, X } from 'lucide-react'
import { Button } from '@design-systems/stripe-style'
import { navigation, sourceUrl } from '@/lib/design-system'

const icons = { overview: BookOpen, code: Braces, color: Palette, type: Type, layout: LayoutGrid, button: MousePointer2, input: SlidersHorizontal, card: CreditCard, nav: PanelTop, layers: Layers, check: CheckCheck }

export function ShowcaseShell({ children }: { children: ReactNode }) {
  const [active, setActive] = useState('overview')
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
    }, { rootMargin: '-90px 0px -65% 0px', threshold: 0 })
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  const links = <>{navigation.map(group => <div key={group.title}><div className="sidebar-group-label">{group.title}</div><ul>{group.items.map(item => {
    const Icon = icons[item.icon]
    return <li key={item.id}><a className="sidebar-link" href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined} onClick={() => { setActive(item.id); setMobileOpen(false) }}><Icon size={16} strokeWidth={1.6} aria-hidden="true" />{item.label}</a></li>
  })}</ul></div>)}</>
  return <div className="workbench">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:p-4">跳到主要内容</a>
    <aside className="workbench-sidebar" aria-label="设计系统目录">
      <a href="#overview" className="sidebar-brand">stripe 风格<span className="mt-1 block text-sm font-light tracking-normal text-muted-foreground">设计系统</span></a>
      <nav className="sidebar-content" aria-label="设计规范目录">{links}</nav>
      <div className="sidebar-footer"><div className="flex items-center gap-2"><Circle size={7} fill="currentColor" aria-hidden="true" /><span>v0.1.0 · 验收预览</span></div><p className="mt-2">Next.js · Tailwind · shadcn/ui</p></div>
    </aside>
    <div className="workbench-main">
      <header className="workbench-topbar" onKeyDown={e => { if (e.key === 'Escape') { setMobileOpen(false); toggle.current?.focus() } }}>
        <div className="flex items-center gap-3"><Button ref={toggle} variant="ghost" size="icon" className="md:hidden" aria-label={mobileOpen ? '关闭目录' : '打开目录'} aria-expanded={mobileOpen} aria-controls="mobile-index" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</Button><span className="text-sm text-muted-foreground"><span className="hidden sm:inline">设计系统<span className="px-3 text-border">/</span></span><span className="text-foreground">组件与规范</span></span></div>
        <a href={sourceUrl} target="_blank" rel="noreferrer noopener" className="flex items-center gap-2 text-sm text-secondary-foreground">查看源规范<ArrowUpRight size={16} aria-hidden="true" /><span className="sr-only">（新窗口）</span></a>
        {mobileOpen && <nav id="mobile-index" aria-label="移动端设计目录" className="mobile-index md:hidden">{links}</nav>}
      </header>
      <main id="main-content" className="page-content">{children}</main>
    </div>
  </div>
}
