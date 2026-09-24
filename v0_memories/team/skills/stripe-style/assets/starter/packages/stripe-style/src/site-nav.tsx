'use client'

import { useId, useRef, useState, type ReactNode } from 'react'
import { Menu, X } from 'lucide-react'
import { Button, ActionLink } from './button'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from './navigation-menu'
import { cn } from './utils'

export type NavItem = { label: string; href: string }
export function SiteNav({ title, homeHref = '#', items, action, className, label = '网站导航' }: {
  title: ReactNode; homeHref?: string; items: NavItem[]; action?: NavItem; className?: string; label?: string
}) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const trigger = useRef<HTMLButtonElement>(null)
  return <nav aria-label={label} className={cn('ds-nav', className)} onKeyDown={e => {
    if (e.key === 'Escape' && open) { setOpen(false); trigger.current?.focus() }
  }} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false) }}>
    <div className="ds-nav-row">
      <a href={homeHref} className="font-normal" onClick={() => setOpen(false)}>{title}</a>
      <div className="ds-nav-links">
        <NavigationMenu>
          <NavigationMenuList>
            {items.map(item => <NavigationMenuItem key={item.href}><NavigationMenuLink href={item.href}>{item.label}</NavigationMenuLink></NavigationMenuItem>)}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {action && <ActionLink href={action.href} size="sm">{action.label}</ActionLink>}
      <Button ref={trigger} variant="ghost" size="icon" className="ds-nav-toggle" aria-expanded={open} aria-controls={id} aria-label={open ? '关闭导航菜单' : '打开导航菜单'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <div id={id} className="ds-mobile-links">{items.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</div>}
  </nav>
}
