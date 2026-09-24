"use client"

import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "./utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "min-h-10 w-full min-w-0 rounded-sm border border-input bg-background px-3 py-2 text-base font-light text-foreground transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground aria-invalid:border-foreground aria-invalid:border-dashed md:text-body-md",
        className
      )}
      {...props}
    />
  )
}

export { Input }
