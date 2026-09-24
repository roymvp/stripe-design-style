"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cn } from "./utils"

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn("flex flex-col gap-4", className)} {...props} />
}

function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("relative flex items-center gap-6 border-b border-border", className)}
      {...props}
    />
  )
}

function TabsTab({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-tab"
      className={cn(
        "-mb-px cursor-default border-b-2 border-transparent px-0.5 pb-3 text-body-md font-medium text-muted-foreground outline-none transition-colors duration-[var(--ds-duration)] ease-[var(--ds-ease)] hover:text-foreground focus-visible:text-foreground data-selected:border-primary data-selected:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn("outline-none focus-visible:ring-2 focus-visible:ring-ring/25", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTab, TabsPanel }
