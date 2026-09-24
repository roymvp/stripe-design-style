"use client"

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "./utils"

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("flex flex-col divide-y divide-border border-y border-border", className)}
      {...props}
    />
  )
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn(className)} {...props} />
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex w-full items-center justify-between gap-4 py-4 text-left text-body-lg font-medium text-foreground outline-none transition-colors duration-[var(--ds-duration)] hover:text-primary focus-visible:ring-2 focus-visible:ring-ring/25",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className="size-5 shrink-0 text-muted-foreground transition-transform duration-[var(--ds-duration)] ease-[var(--ds-ease)] group-data-[panel-open]:rotate-180"
          aria-hidden="true"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionPanel({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-panel"
      className={cn(
        "h-[var(--accordion-panel-height)] overflow-hidden text-body-md text-muted-foreground transition-[height] duration-[var(--ds-duration)] ease-[var(--ds-ease)] data-starting-style:h-0 data-ending-style:h-0",
        className
      )}
      {...props}
    >
      <div className={cn("pb-4", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel }
