import { cn } from "@/lib/utils"
import { AnimatedSection } from "@/components/motion/AnimatedSection"

const ORB_POSITION_CLASSES: Record<
  "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center" | "left" | "right",
  string
> = {
  "top-left": "absolute top-12 left-12 md:left-24 h-48 w-48 md:h-56 md:w-56",
  "top-right": "absolute top-12 right-12 md:right-24 h-48 w-48 md:h-56 md:w-56",
  "bottom-left": "absolute bottom-12 left-12 md:left-24 h-48 w-48 md:h-56 md:w-56",
  "bottom-right": "absolute bottom-12 right-12 md:right-24 h-48 w-48 md:h-56 md:w-56",
  center: "absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2",
  left: "absolute top-1/2 left-12 md:left-24 h-48 w-48 -translate-y-1/2",
  right: "absolute top-1/2 right-12 md:right-24 h-48 w-48 -translate-y-1/2",
}

export type AmbientOrbPosition = keyof typeof ORB_POSITION_CLASSES

type AmbientOrbConfig = {
  position: AmbientOrbPosition
  delay?: boolean
}

type SectionProps = {
  id?: string
  className?: string
  children: React.ReactNode
  noBorder?: boolean
  backgroundClassName?: string
  label?: string
  motionVariant?: "fade-up" | "scale-in" | "slide-in"
  staggerChildren?: boolean
  ambientOrbs?: AmbientOrbConfig[]
  /** Rendered at the section level (behind content, above orbs). */
  backgroundOverlay?: React.ReactNode
}

export function Section({
  id,
  className,
  children,
  noBorder = false,
  backgroundClassName,
  label,
  motionVariant = "fade-up",
  staggerChildren = false,
  ambientOrbs,
  backgroundOverlay,
}: SectionProps) {
  const hasOrbs = ambientOrbs != null && ambientOrbs.length > 0

  return (
    <section
      id={id}
      className={cn(
        backgroundClassName,
        (hasOrbs || backgroundOverlay) && "relative overflow-hidden",
        noBorder ? "" : "border-t border-slate-700/60",
        className
      )}
    >
      {backgroundOverlay}
      {hasOrbs && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {ambientOrbs.map((orb, i) => {
            const orbColor = i % 2 === 0 ? "bg-indigo-300/20" : "bg-violet-300/20"
            return (
              <div
                key={orb.position + "-" + i}
                className={cn(
                  "rounded-full blur-3xl ambient-orb",
                  ORB_POSITION_CLASSES[orb.position],
                  orbColor,
                  orb.delay && "ambient-orb-delay"
                )}
              />
            )
          })}
        </div>
      )}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24">
        <AnimatedSection variant={motionVariant} staggerChildren={staggerChildren}>
          {label ? (
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-indigo-500/60" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {label}
              </p>
            </div>
          ) : null}
          {children}
        </AnimatedSection>
      </div>
    </section>
  )
}
