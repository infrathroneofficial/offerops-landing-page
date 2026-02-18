import { Section } from "@/components/Section"
import { CORE_PROBLEMS, SECTION_COPY } from "@/config/site"

export function CoreProblem() {
  return (
    <Section
      id="problem"
      label="The problem"
      backgroundClassName="bg-slate-900/80"
      ambientOrbs={[{ position: "bottom-left" }]}
      motionVariant="fade-up"
      staggerChildren
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        {SECTION_COPY.problemTitle}
      </h2>
      <ul className="mt-8 space-y-4">
        {CORE_PROBLEMS.map((problem) => (
          <li
            key={problem}
            className="list-disc ml-6 text-lg md:text-base leading-relaxed text-slate-300"
          >
            {problem}
          </li>
        ))}
      </ul>
      <blockquote className="mt-8 rounded-xl border-l-4 border-indigo-500 bg-linear-to-r from-indigo-950/60 to-violet-950/50 py-5 pl-6 pr-4 text-lg font-semibold text-slate-200 shadow-sm">
        {SECTION_COPY.problemBlockquote}
      </blockquote>
    </Section>
  )
}
