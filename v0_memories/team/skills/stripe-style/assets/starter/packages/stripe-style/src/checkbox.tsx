"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group"
import { CheckIcon, MinusIcon } from "lucide-react"
import { cn } from "./utils"

function CheckboxGroup({ className, ...props }: CheckboxGroupPrimitive.Props) {
  return (
    <CheckboxGroupPrimitive
      data-slot="checkbox-group"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  )
}

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer flex size-5 shrink-0 items-center justify-center rounded-xs border border-input bg-background text-primary-foreground outline-none transition-[background-color,border-color,box-shadow] duration-[var(--ds-duration)] ease-[var(--ds-ease)] focus-visible:ring-2 focus-visible:ring-ring/25 focus-visible:border-ring data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary disabled:cursor-not-allowed disabled:opacity-45",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current data-unchecked:hidden"
      >
        {props.indeterminate ? (
          <MinusIcon className="size-3.5" strokeWidth={3} />
        ) : (
          <CheckIcon className="size-3.5" strokeWidth={3} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, CheckboxGroup }
