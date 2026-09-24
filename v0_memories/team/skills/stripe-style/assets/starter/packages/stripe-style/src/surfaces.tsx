import type { ComponentProps } from 'react'
import { cn } from './utils'

export function MeshSurface({ src, className, children, priority = false, ...props }: ComponentProps<'div'> & { src: string; priority?: boolean }) {
  return <div className={cn('ds-mesh', className)} {...props}>
    <img src={src} alt="" aria-hidden="true" width={1920} height={1920} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} className="ds-mesh-image" />
    {children}
  </div>
}

export function SiteFooter({ groups, note, className }: { groups: { title: string; links: { label: string; href: string }[] }[]; note: string; className?: string }) {
  return <footer className={cn('ds-footer', className)}>
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {groups.map(group => <div key={group.title} className="flex flex-col gap-4"><h3 className="text-sm font-normal text-foreground">{group.title}</h3><ul className="flex flex-col gap-3">{group.links.map(link => <li key={link.href}><a className="text-sm hover:text-primary" href={link.href}>{link.label}</a></li>)}</ul></div>)}
    </div>
    <p className="mt-12 border-t border-border pt-6 text-sm">{note}</p>
  </footer>
}
