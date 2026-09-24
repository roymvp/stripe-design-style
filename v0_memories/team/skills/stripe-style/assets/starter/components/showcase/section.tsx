import type { ReactNode } from 'react'

export function Section({ id, title, description, meta, children }: { id: string; title: string; description: string; meta?: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="section-shell">
    <div className="section-heading"><div><h2 id={`${id}-title`}>{title}</h2><p>{description}</p></div>{meta && <span className="section-meta">{meta}</span>}</div>
    {children}
  </section>
}
