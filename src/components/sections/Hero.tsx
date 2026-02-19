import { HeroAurora } from "@/components/HeroAurora";
import { Section } from "@/components/Section";
import { CountUp } from "@/components/motion/CountUp";
import { Button } from "@/components/ui/button";
import { HERO_METRICS, SITE_CONFIG } from "@/config/site";
import { BarChart3, Target, Zap } from "lucide-react";
import type { ReactNode } from "react";

const HERO_PILLS = [
  { label: "12 Mocks", icon: Zap },
  { label: "Real client exposure", icon: Target },
  { label: "Resume that converts", icon: BarChart3 },
] as const;

export function Hero() {
  return (
    <Section
      id="hero"
      noBorder
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      backgroundClassName="bg-linear-to-b from-slate-950 via-slate-900/90 to-slate-800/80"
      motionVariant="scale-in"
      staggerChildren
      backgroundOverlay={<HeroAurora />}
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
        <h1 className="mt-6 text-display text-4xl font-bold leading-[1.1] tracking-tight text-white text-balance md:text-6xl lg:text-7xl">
          <span className="text-amber-400">Production stories</span> get offers.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
          {SITE_CONFIG.heroSubtext}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {HERO_PILLS.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full bg-slate-800/90 px-4 py-1.5 text-sm font-medium text-slate-200 ring-1 ring-slate-600/80"
            >
              <Icon className="h-4 w-4 text-amber-400/90" aria-hidden />
              {label}
            </span>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-500">
          {SITE_CONFIG.heroEmpathy}
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-slate-700/80 bg-slate-800/70 p-4 shadow-xl backdrop-blur md:gap-6 md:p-5">
          <Metric
            label={HERO_METRICS.mocks}
            value={<CountUp to={12} suffix="+" />}
          />
          <Metric
            label={HERO_METRICS.interviewCalls}
            value={<CountUp to={4} suffix="x" />}
          />
          <Metric
            label={HERO_METRICS.salaryJump}
            value={<CountUp to={70} suffix="%" />}
          />
        </div>

        <div className="mt-10">
          <Button
            asChild
            variant="primary"
            size="lg"
            className="cta-primary min-h-[52px] rounded-xl px-10 py-4 text-lg font-semibold"
          >
            <a href="#cta">{SITE_CONFIG.ctaText}</a>
          </Button>
        </div>
        <p className="mt-5 text-sm text-slate-400">
          30 days · Next cohort {SITE_CONFIG.cohortDate}
        </p>
      </header>
    </Section>
  );
}

function Metric({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="rounded-xl bg-slate-800/90 px-4 py-4 text-center ring-1 ring-slate-600/70 md:py-5">
      <p className="text-3xl font-bold text-white md:text-4xl">{value}</p>
      <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </div>
  );
}
