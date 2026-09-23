"use client"

import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react"
import { cn } from "./utils"

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      role="navigation"
      aria-label="分页"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return <ul data-slot="pagination-content" className={cn("flex items-center gap-1", className)} {...props} />
}

function PaginationItem(props: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

function PaginationLink({
  className,
  isActive,
  ...props
}: React.ComponentProps<"a"> & { isActive?: boolean }) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        "flex h-9 min-w-9 items-center justify-center rounded-xs px-2 text-body-sm text-foreground outline-none transition-colors duration-[var(--ds-duration)] hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring/25 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground",
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <PaginationLink aria-label="上一页" className={cn("gap-1 px-2.5", className)} {...props}>
      <ChevronLeftIcon className="size-4" />
      <span>上一页</span>
    </PaginationLink>
  )
}

function PaginationNext({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <PaginationLink aria-label="下一页" className={cn("gap-1 px-2.5", className)} {...props}>
      <span>下一页</span>
      <ChevronRightIcon className="size-4" />
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      data-slot="pagination-ellipsis"
      className={cn("flex h-9 w-9 items-center justify-center text-muted-foreground", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">更多页</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
