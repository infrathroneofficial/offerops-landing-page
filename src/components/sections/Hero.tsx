import type { ReactNode } from "react"
import { Section } from "@/components/Section"
import { CountUp } from "@/components/motion/CountUp"
import { Button } from "@/components/ui/button"
import { HERO_METRICS, SITE_CONFIG } from "@/config/site"

export function Hero() {
  return (
    <Section
      id="hero"
      noBorder
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      backgroundClassName="bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-800/80"
      motionVariant="scale-in"
      staggerChildren
    >
      <div
        aria-hidden
        className="ambient-orb absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="ambient-orb ambient-orb-delay absolute -right-24 top-16 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl"
      />

      <header className="relative z-10 mx-auto text-center">
        <span className="inline-block rounded-full border border-indigo-500/50 bg-indigo-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
          {SITE_CONFIG.heroBadge}
        </span>
        <h1 className="mt-6 text-3xl md:text-6xl font-bold leading-tight tracking-tight text-white text-balance">
          Production stories get offers.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-base leading-relaxed text-slate-300">
          {SITE_CONFIG.heroSubtext}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-400">
          {SITE_CONFIG.heroEmpathy}
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
          {SITE_CONFIG.heroConfidence}
        </p>

        <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-3 rounded-xl border border-slate-700 bg-slate-800/80 p-3 shadow-sm backdrop-blur">
          <Metric label={HERO_METRICS.mocks} value={<CountUp to={12} suffix="+" />} />
          <Metric label={HERO_METRICS.interviewCalls} value={<CountUp to={4} suffix="x" />} />
          <Metric label={HERO_METRICS.salaryJump} value={<CountUp to={70} suffix="%" />} />
        </div>

        <div className="mt-8">
          <Button
            asChild
            variant="primary"
            size="lg"
            className="cta-primary min-h-[48px] rounded-xl px-8 py-4 text-lg font-semibold"
          >
            <a href="#cta">{SITE_CONFIG.ctaText}</a>
          </Button>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          30 days. Next cohort {SITE_CONFIG.cohortDate}
        </p>
      </header>
    </Section>
  )
}

function Metric({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="rounded-lg bg-slate-800 px-3 py-3 text-center shadow-sm ring-1 ring-slate-600/70">
      <p className="text-xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-slate-400">{label}</p>
    </div>
  )
}
