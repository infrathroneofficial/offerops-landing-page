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

type AmbientOrbPosition = keyof typeof ORB_POSITION_CLASSES

type AmbientOrbConfig = {
  position: AmbientOrbPosition
  delay?: boolean
}

type SectionVariant = "default" | "warm" | "accent"

const ORB_COLORS: Record<SectionVariant, [string, string]> = {
  default: ["bg-indigo-300/10", "bg-violet-300/8"],
  warm: ["bg-amber-300/8", "bg-orange-300/6"],
  accent: ["bg-amber-400/10", "bg-orange-400/8"],
}

const SPACING_CLASSES: Record<"compact" | "default" | "large", string> = {
  compact: "py-12 md:py-16",
  default: "py-16 md:py-20",
  large: "py-20 md:py-24",
}

type SectionProps = {
  id?: string
  className?: string
  children: React.ReactNode
  noBorder?: boolean
  showDivider?: boolean
  backgroundClassName?: string
  label?: string
  motionVariant?: "fade-up" | "scale-in" | "slide-in"
  staggerChildren?: boolean
  ambientOrbs?: AmbientOrbConfig[]
  backgroundOverlay?: React.ReactNode
  variant?: SectionVariant
  spacing?: "compact" | "default" | "large"
  seamless?: boolean
}

export function Section({
  id,
  className,
  children,
  noBorder = false,
  showDivider = false,
  backgroundClassName,
  label,
  motionVariant = "fade-up",
  staggerChildren = false,
  ambientOrbs,
  backgroundOverlay,
  variant = "default",
  spacing = "default",
  seamless = true,
}: SectionProps) {
  const hasOrbs = ambientOrbs != null && ambientOrbs.length > 0
  const orbColors = ORB_COLORS[variant]

  const variantBg =
    !seamless && (variant === "warm" || variant === "accent")
      ? "section-warm"
      : undefined

  const bgClass = backgroundClassName ?? (seamless ? "bg-transparent" : variantBg)
  const paddingClass = SPACING_CLASSES[spacing]

  return (
    <section
      id={id}
      className={cn(
        bgClass,
        (hasOrbs || backgroundOverlay) && "relative overflow-hidden",
        !noBorder && showDivider && "relative",
        className
      )}
    >
      {showDivider && (
        <div
          aria-hidden
          className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-slate-600/40 to-transparent"
        />
      )}
      {backgroundOverlay}
      {hasOrbs && (
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {ambientOrbs.map((orb, i) => {
            const orbColor = i % 2 === 0 ? orbColors[0] : orbColors[1]
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
      <div
        className={cn(
          "relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-12",
          paddingClass
        )}
      >
        <AnimatedSection variant={motionVariant} staggerChildren={staggerChildren}>
          {label ? (
            <div className="mb-6 flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
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
