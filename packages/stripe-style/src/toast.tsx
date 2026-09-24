"use client"

import { Toast as ToastPrimitive } from "@base-ui/react/toast"
import { XIcon } from "lucide-react"
import { cn } from "./utils"

const ToastProvider = ToastPrimitive.Provider
const useToast = ToastPrimitive.useToastManager

function ToastViewport({ className, ...props }: ToastPrimitive.Viewport.Props) {
  return (
    <ToastPrimitive.Portal>
      <ToastPrimitive.Viewport
        data-slot="toast-viewport"
        className={cn(
          "fixed top-auto right-4 bottom-4 z-[100] flex w-[min(24rem,calc(100vw-2rem))] flex-col",
          className
        )}
        {...props}
      />
    </ToastPrimitive.Portal>
  )
}

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager()
  return toasts.map((toast) => (
    <ToastPrimitive.Root
      key={toast.id}
      toast={toast}
      data-slot="toast"
      className={cn(
        "absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] w-full [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-index)*-16px))_scale(calc(1-(var(--toast-index)*0.05)))] rounded-md border border-border bg-card p-4 text-card-foreground shadow-float transition-[transform,opacity] duration-[var(--ds-duration)] ease-[var(--ds-ease)] select-none after:absolute after:bottom-full after:left-0 after:h-4 after:w-full after:content-[''] data-[ending-style]:opacity-0 data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-offset-y)*-1-var(--toast-index)*16px))] data-[starting-style]:[transform:translateY(150%)]"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex flex-1 flex-col gap-0.5">
          <ToastPrimitive.Title className="text-body-md font-medium text-foreground" />
          <ToastPrimitive.Description className="text-body-sm text-muted-foreground" />
        </div>
        <ToastPrimitive.Close
          className="flex size-6 shrink-0 items-center justify-center rounded-xs text-muted-foreground outline-none transition-colors hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring/25"
          aria-label="关闭"
        >
          <XIcon className="size-3.5" />
        </ToastPrimitive.Close>
      </div>
    </ToastPrimitive.Root>
  ))
}

export { ToastProvider, ToastViewport, ToastList, useToast }
