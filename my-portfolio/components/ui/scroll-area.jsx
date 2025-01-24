"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}>
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef(
  ({ className, orientation = "vertical", size = "2.5", ...props }, ref) => (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        `flex touch-none select-none transition-colors`,
        orientation === "vertical" && `h-full w-${size} border-l-transparent p-[1px]`,
        orientation === "horizontal" && `h-${size} flex-col border-t-transparent p-[1px]`,
        className
      )}
      {...props}>
      <ScrollAreaPrimitive.ScrollAreaThumb
        className={`relative flex-1 rounded-full bg-accent`}
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
);

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }