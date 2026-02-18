"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/useInView"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  variant?: "fade-up" | "scale-in" | "slide-in"
  staggerChildren?: boolean
  threshold?: number
}

const variantMap: Record<NonNullable<AnimatedSectionProps["variant"]>, string> = {
  "fade-up": "fade-up",
  "scale-in": "scale-in",
  "slide-in": "slide-in",
}

export function AnimatedSection({
  children,
  className,
  variant = "fade-up",
  staggerChildren = false,
  threshold,
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      data-variant={variantMap[variant]}
      className={cn(
        "reveal",
        isInView && "is-visible",
        staggerChildren && "stagger-children",
        className
      )}
    >
      {children}
    </div>
  )
}
