"use client"

import { Section } from "@/components/Section"
import { FAQ_ITEMS } from "@/config/site"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section
      id="faq"
      label="FAQ"
      backgroundClassName="bg-slate-900"
      ambientOrbs={[{ position: "bottom-left" }]}
      motionVariant="fade-up"
    >
      <h2 className="text-display text-2xl font-bold text-white md:text-3xl">
        Frequently asked questions
      </h2>
      <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
        Everything you need to know before joining the War Room.
      </p>
      <ul className="mt-8 space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <li
              key={item.question}
              className="rounded-xl border border-slate-700/80 bg-slate-800/60 transition-colors hover:border-amber-500/30 hover:bg-slate-800/80"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:text-amber-400/90"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-white">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="border-t border-slate-700/80 px-5 py-4 text-sm leading-relaxed text-slate-300 md:text-base">
                  {item.answer}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
