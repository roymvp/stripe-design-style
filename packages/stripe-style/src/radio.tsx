"use client"

import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { cn } from "./utils"

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  )
}

function Radio({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot="radio"
      className={cn(
        "peer flex size-5 shrink-0 items-center justify-center rounded-pill border border-input bg-background outline-none transition-[background-color,border-color,box-shadow] duration-[var(--ds-duration)] ease-[var(--ds-ease)] focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:border-ring data-checked:border-primary data-checked:bg-primary disabled:cursor-not-allowed disabled:opacity-45",
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-indicator"
        className="size-2 rounded-pill bg-primary-foreground data-unchecked:hidden"
      />
    </RadioPrimitive.Root>
  )
}

export { Radio, RadioGroup }
