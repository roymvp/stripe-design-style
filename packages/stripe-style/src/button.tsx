'use client'

import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from './utils'

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-pill border border-transparent font-sans font-normal whitespace-nowrap outline-none transition-[background-color,box-shadow,transform] duration-[var(--ds-duration)] ease-[var(--ds-ease)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-press',
        outline: 'border-primary bg-background text-primary hover:bg-secondary active:bg-accent',
        secondary: 'border-primary bg-background text-primary hover:bg-secondary active:bg-accent',
        dark: 'bg-navy text-on-navy hover:bg-primary-press active:bg-primary-press',
        ghost: 'text-foreground hover:bg-secondary',
        link: 'text-primary hover:underline underline-offset-4',
      },
      size: {
        default: 'min-h-11 md:min-h-10 text-button-md px-4 py-2 gap-2',
        sm: 'min-h-11 md:min-h-10 text-button-sm px-4 py-2 gap-2',
        lg: 'min-h-12 text-button-md px-6 py-3 gap-2',
        icon: 'size-11',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

function ActionLink({ className, variant, size, ...props }: React.ComponentProps<'a'> & VariantProps<typeof buttonVariants>) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export { Button, ActionLink, buttonVariants }
