import { Section } from "@/components/Section"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { STANDOUT_QUOTE } from "@/config/site"

export function StandoutQuote() {
  return (
    <Section
      id="participant-quote"
      noBorder
      backgroundClassName="bg-slate-900"
      motionVariant="scale-in"
      className="border-none py-10 md:py-14"
    >
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-indigo-700/80 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={60}
          glow
          disabled={false}
          proximity={48}
          inactiveZone={0.02}
          variant="indigo"
        />
        <blockquote className="relative rounded-xl bg-slate-800/95 px-6 py-8 text-center md:px-10 md:py-10">
          <p className="text-xl font-semibold leading-relaxed text-white md:text-2xl lg:text-3xl">
            &ldquo;{STANDOUT_QUOTE.quote}&rdquo;
          </p>
          <footer className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-amber-400/90">
            {STANDOUT_QUOTE.attribution}
          </footer>
        </blockquote>
      </div>
    </Section>
  )
}
