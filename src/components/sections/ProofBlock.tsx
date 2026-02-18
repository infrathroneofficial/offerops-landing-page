import { Section } from "@/components/Section"
import { INSTRUCTOR, SECTION_COPY, TESTIMONIALS } from "@/config/site"

const proofCards = [
  {
    title: "Resume transformation",
    description:
      "Led Intel → AMD node migration in production EKS cluster achieving 18% cost reduction with zero downtime using PDB-controlled drain strategy and Prometheus validation.",
    metric: null,
  },
  {
    title: "Interview and salary outcomes",
    description: "2–4x increase in interview calls. Salary jump (20–70%).",
    metric: "2–4x · 20–70%",
  },
  {
    title: "Metrics-first storytelling",
    description:
      "You train to speak in metrics, impact, trade-offs, decisions, and risks — not generic tool lists.",
    metric: null,
  },
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
      <h2 className="text-2xl md:text-3xl font-bold text-white">Real results</h2>
      <p className="mt-3 text-lg md:text-base leading-relaxed text-slate-400">
        {SECTION_COPY.proofSectionContext}
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {proofCards.map((card) => (
          <article
            key={card.title}
            className={`card-hover rounded-xl border p-6 shadow-sm ${
              card.metric
                ? "border-indigo-700 bg-linear-to-br from-slate-800 to-indigo-950/50"
                : "border-slate-700 bg-slate-800"
            }`}
          >
            <h3 className="text-lg font-semibold text-white">{card.title}</h3>
            {card.metric ? (
              <p className="mt-2 text-2xl font-semibold tracking-tight text-indigo-400">{card.metric}</p>
            ) : null}
            <p className="mt-3 text-lg md:text-base leading-relaxed text-slate-300">
              {card.description}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {TESTIMONIALS.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-xl border border-slate-700 bg-slate-800 p-5 shadow-sm"
          >
            <p className="text-lg md:text-base leading-relaxed text-slate-300">"{testimonial.quote}"</p>
            <p className="mt-3 text-sm font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-slate-400">{testimonial.role}</p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm font-medium uppercase tracking-[0.12em] text-slate-400">
        {SECTION_COPY.logoStripLabel}
      </p>
      <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
        {logos.map((logo) => (
          <span
            key={logo}
            className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 shadow-sm"
          >
            {logo}
          </span>
        ))}
      </div>
      <div className="mt-8 rounded-xl border border-indigo-700 bg-linear-to-r from-slate-800 to-indigo-950/60 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-indigo-300">
          Who runs the War Room
        </p>
        <p className="mt-2 text-base leading-relaxed text-slate-300">
          <span className="font-semibold text-white">{INSTRUCTOR.name}</span>: {INSTRUCTOR.tagline}
        </p>
      </div>
    </Section>
  )
}
