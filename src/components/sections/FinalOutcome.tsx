import { Check } from "lucide-react"
import { Section } from "@/components/Section"
import { Button } from "@/components/ui/button"
import { FINAL_OUTCOME, SECTION_COPY, SITE_CONFIG } from "@/config/site"

export function FinalOutcome() {
  return (
    <Section
      id="outcome"
      label="Outcome"
      backgroundClassName="bg-linear-to-b from-slate-900/90 to-slate-800"
      ambientOrbs={[{ position: "top-right" }]}
      motionVariant="fade-up"
      staggerChildren
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        {SECTION_COPY.outcomeHeadline}
      </h2>
      <p className="mt-3 text-lg md:text-base leading-relaxed text-slate-400">
        {SECTION_COPY.outcomeEmotionalLine}
      </p>
      <ul className="mt-8 space-y-4 rounded-xl bg-slate-800 py-6 pl-8 pr-6 shadow-sm ring-1 ring-slate-700">
        {FINAL_OUTCOME.map((item) => (
          <li key={item} className="flex items-start gap-4 text-slate-200">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600/80">
              <Check className="h-4 w-4 text-white" />
            </span>
            <span className="text-lg md:text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <Button
        asChild
        variant="primary"
        size="lg"
        className="cta-primary mt-8 min-h-[48px] rounded-xl px-8 py-4 text-lg font-semibold"
      >
        <a href="#cta">{SITE_CONFIG.ctaText}</a>
      </Button>
    </Section>
  )
}
