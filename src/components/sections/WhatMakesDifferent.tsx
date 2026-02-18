import { Check, X } from "lucide-react"
import { Section } from "@/components/Section"
import { DIFFERENTIATORS } from "@/config/site"

export function WhatMakesDifferent() {
  return (
    <Section
      id="different"
      label="Differentiator"
      backgroundClassName="bg-slate-900"
      ambientOrbs={[{ position: "top-right" }]}
      motionVariant="slide-in"
      staggerChildren
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">Not just mocks</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="card-hover rounded-xl border border-slate-700 bg-slate-800 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-white">What others do</h3>
          <ul className="mt-4 space-y-3">
            {DIFFERENTIATORS.notThis.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-600">
                  <X className="h-3.5 w-3.5 text-slate-400" />
                </span>
                <span className="text-lg md:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card-hover rounded-xl border border-indigo-700 bg-linear-to-br from-slate-800 to-indigo-950/50 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-white">What we deliver</h3>
          <ul className="mt-4 space-y-3">
            {DIFFERENTIATORS.weDeliver.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600/80">
                  <Check className="h-3.5 w-3.5 text-white" />
                </span>
                <span className="text-lg md:text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}
