import { Section } from "@/components/Section"
import { WEEK_BREAKDOWN } from "@/config/site"

export function ThirtyDayBreakdown() {
  return (
    <Section
      id="breakdown"
      label="Curriculum"
      backgroundClassName="bg-linear-to-b from-slate-900 to-slate-800/90"
      ambientOrbs={[{ position: "top-left" }, { position: "bottom-right", delay: true }]}
      motionVariant="fade-up"
      staggerChildren
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">30-Day War Room</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {WEEK_BREAKDOWN.map((week, index) => (
          <article
            key={week.title}
            className="card-hover relative rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-sm"
          >
            <span className="mb-4 inline-flex rounded-full bg-indigo-600 px-2.5 py-1 text-xs font-semibold text-white">
              Week {index + 1}
            </span>
            <h3 className="text-xl font-semibold text-white">{week.title}</h3>
            <ul className="mt-4 space-y-3">
              {week.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="list-disc ml-5 text-lg md:text-base leading-relaxed text-slate-300"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
