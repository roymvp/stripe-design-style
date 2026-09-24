"use client"

import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "./utils"

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-10 shrink-0 items-center rounded-pill border border-transparent bg-muted-foreground/35 p-0.5 outline-none transition-colors duration-[var(--ds-duration)] ease-[var(--ds-ease)] focus-visible:ring-2 focus-visible:ring-ring/25 data-checked:bg-primary disabled:cursor-not-allowed disabled:opacity-45",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="size-4.5 rounded-pill bg-background shadow-lift transition-transform duration-[var(--ds-duration)] ease-[var(--ds-ease)] data-checked:translate-x-4"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
