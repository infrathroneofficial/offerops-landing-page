"use client";

import { Section } from "@/components/Section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CORE_PROBLEMS, SECTION_COPY } from "@/config/site";
import { CircleAlert } from "lucide-react";

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
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        {SECTION_COPY.problemTitle}
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CORE_PROBLEMS.map((problem) => (
          <div
            key={problem}
            className="flex items-center gap-3 rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-3.5 transition-colors hover:border-slate-600 hover:bg-slate-800"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-700/80 text-slate-400">
              <CircleAlert className="h-4 w-4" />
            </span>
            <p className="text-sm font-medium leading-snug text-slate-200 md:text-base">
              {problem}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-700/80 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
          variant="indigo"
        />
        <div className="relative flex items-center justify-between gap-6 rounded-xl bg-slate-800/95 px-5 py-5 shadow-[0px_0px_27px_0px_rgba(15,23,42,0.4)] md:px-8 md:py-6">
          <p className="text-lg font-semibold leading-snug text-white md:text-xl">
            {SECTION_COPY.problemBlockquote}
          </p>
          <span className="hidden shrink-0 rounded-full bg-indigo-500/20 px-3 py-1.5 text-sm font-medium text-indigo-300 md:inline-block">
            30 days
          </span>
        </div>
      </div>
    </Section>
  );
}
