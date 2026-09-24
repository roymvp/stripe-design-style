"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./utils"

const alertVariants = cva(
  "relative flex w-full gap-3 rounded-md border px-4 py-3 text-body-md [&>svg]:size-4.5 [&>svg]:shrink-0 [&>svg]:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-card-foreground [&>svg]:text-muted-foreground",
        info: "border-info/25 bg-info-soft text-info-foreground [&>svg]:text-info",
        success: "border-success/25 bg-success-soft text-success-foreground [&>svg]:text-success",
        warning: "border-warning/30 bg-warning-soft text-warning-foreground [&>svg]:text-warning",
        danger: "border-destructive/25 bg-destructive-soft text-destructive-foreground [&>svg]:text-destructive",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Alert({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return <div role="alert" data-slot="alert" className={cn(alertVariants({ variant }), className)} {...props} />
}

function AlertContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-content" className={cn("flex flex-col gap-0.5", className)} {...props} />
}

function AlertTitle({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="alert-title" className={cn("font-medium", className)} {...props} />
}

function AlertDescription({ className, ...props }: React.ComponentProps<"p">) {
  return <p data-slot="alert-description" className={cn("text-current/80", className)} {...props} />
}

export { Alert, AlertContent, AlertTitle, AlertDescription, alertVariants }
