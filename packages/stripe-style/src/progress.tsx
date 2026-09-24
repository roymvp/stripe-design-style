"use client"

import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { cn } from "./utils"

function Progress({
  className,
  value,
  ...props
}: ProgressPrimitive.Root.Props) {
  return (
    <ProgressPrimitive.Root data-slot="progress" value={value} className={cn("w-full", className)} {...props}>
      <ProgressPrimitive.Track
        data-slot="progress-track"
        className="h-1.5 w-full overflow-hidden rounded-pill bg-secondary"
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="h-full rounded-pill bg-primary transition-[width] duration-[var(--ds-duration-slow)] ease-[var(--ds-ease)]"
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
