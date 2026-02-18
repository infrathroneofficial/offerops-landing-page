import { Section } from "@/components/Section"
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
      <blockquote className="rounded-2xl border border-indigo-700 bg-linear-to-br from-slate-800 to-indigo-950/50 p-8 text-center shadow-sm">
        <p className="text-xl font-semibold leading-relaxed text-white md:text-2xl">
          "{STANDOUT_QUOTE.quote}"
        </p>
        <footer className="mt-4 text-sm font-medium uppercase tracking-[0.12em] text-indigo-300">
          {STANDOUT_QUOTE.attribution}
        </footer>
      </blockquote>
    </Section>
  )
}
