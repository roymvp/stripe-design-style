import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from './utils'

const cardVariants = cva('group/card flex min-w-0 flex-col gap-6 rounded-lg p-8 text-body-md', {
  variants: {
    variant: {
      default: 'border border-border bg-card text-card-foreground',
      pricing: 'border border-border bg-card text-card-foreground',
      featured: 'bg-navy text-on-navy',
      cream: 'bg-cream text-foreground',
      dashboard: 'bg-card text-card-foreground shadow-panel p-6',
    },
    elevation: { flat: '', lift: 'shadow-lift', panel: 'shadow-panel' },
  },
  defaultVariants: { variant: 'default', elevation: 'flat' },
})

function Card({ className, variant, elevation, ...props }: ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
  return <div data-slot="card" data-variant={variant ?? 'default'} className={cn(cardVariants({ variant, elevation }), className)} {...props} />
}
function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-header" className={cn('flex flex-col gap-3', className)} {...props} />
}
function CardTitle({ className, ...props }: ComponentProps<'h3'>) {
  return <h3 data-slot="card-title" className={cn('text-heading-lg text-balance', className)} {...props} />
}
function CardDescription({ className, ...props }: ComponentProps<'p'>) {
  return <p data-slot="card-description" className={cn('text-body-md leading-relaxed text-muted-foreground group-data-[variant=featured]/card:text-on-navy/80 group-data-[variant=cream]/card:text-secondary-foreground', className)} {...props} />
}
function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('min-w-0 flex-1', className)} {...props} />
}
function CardFooter({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-footer" className={cn('mt-auto flex flex-wrap items-center gap-3', className)} {...props} />
}
function CardAction({ className, ...props }: ComponentProps<'div'>) {
  return <div data-slot="card-action" className={cn('self-end', className)} {...props} />
}
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction }
