import { Section } from "@/components/Section"
import { CountUp } from "@/components/motion/CountUp"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { SECTION_COPY, STANDOUT_QUOTE, TESTIMONIALS } from "@/config/site"

const PROOF_STATS = [
  { value: <CountUp to={4} suffix="x" />, label: "More callbacks" },
  { value: "20–70%", label: "Salary jump" },
  { value: <CountUp to={12} suffix="" />, label: "Mocks in 30 days" },
] as const

const logos = ["Google", "Amazon", "Microsoft", "Stripe"]

export function ProofBlock() {
  return (
    <Section
      id="proof"
      label="Proof"
      backgroundClassName="bg-linear-to-b from-slate-900 to-slate-800"
      ambientOrbs={[{ position: "left" }, { position: "right", delay: true }]}
      motionVariant="fade-up"
      staggerChildren
    >
      <h2 className="text-display text-2xl font-bold text-white md:text-3xl">
        Real results
      </h2>

      <div className="mt-8 grid grid-cols-3 gap-4 md:gap-6">
        {PROOF_STATS.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-xl border border-indigo-700/50 p-2 md:rounded-2xl md:p-2"
          >
            <GlowingEffect
              blur={0}
              borderWidth={2}
              spread={50}
              glow
              disabled={false}
              proximity={48}
              inactiveZone={0.05}
              variant="indigo"
            />
            <div className="relative rounded-lg border-0 bg-linear-to-br from-slate-800 to-indigo-950/40 px-4 py-5 text-center shadow-[0px_0px_20px_0px_rgba(15,23,42,0.25)] md:px-6 md:py-6">
              <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <blockquote className="mt-10 rounded-2xl border border-indigo-700 bg-linear-to-br from-slate-800 to-indigo-950/50 p-6 text-center md:p-8">
        <p className="text-xl font-semibold leading-relaxed text-white md:text-2xl">
          &ldquo;{STANDOUT_QUOTE.quote}&rdquo;
        </p>
        <footer className="mt-3 text-sm font-medium uppercase tracking-wider text-indigo-300">
          {STANDOUT_QUOTE.attribution}
        </footer>
      </blockquote>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="relative overflow-hidden rounded-xl border border-slate-700/80 p-2 md:rounded-2xl md:p-2"
          >
            <GlowingEffect
              blur={0}
              borderWidth={2}
              spread={60}
              glow
              disabled={false}
              proximity={56}
              inactiveZone={0.03}
              variant="indigo"
            />
            <article className="relative rounded-lg border-0 bg-slate-800 p-5 shadow-[0px_0px_20px_0px_rgba(15,23,42,0.25)] md:p-5">
              <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-3 text-sm font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-slate-400">{testimonial.role}</p>
            </article>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm font-medium uppercase tracking-[0.12em] text-slate-400">
        {SECTION_COPY.logoStripLabel}
      </p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-400">
        {logos.map((logo) => (
          <span
            key={logo}
            className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2"
          >
            {logo}
          </span>
        ))}
      </div>
    </Section>
  )
}
