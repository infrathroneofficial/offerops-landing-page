"use client";

import { Section } from "@/components/Section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { CORE_PROBLEMS, SECTION_COPY } from "@/config/site";
import { Check, CircleAlert, Wrench } from "lucide-react";

const THEY_KNOW = [CORE_PROBLEMS[0]];
const THEY_CANT = CORE_PROBLEMS.slice(1);

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
      <h2 className="text-display text-2xl font-bold text-white md:text-3xl">
        {SECTION_COPY.problemTitle}
      </h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-700/80 bg-slate-800/60 p-6 opacity-90">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-slate-400">
              <Wrench className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold text-slate-300">They know</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {THEY_KNOW.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-400">
                <Check className="h-4 w-4 shrink-0 text-slate-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-slate-700/80 p-2 md:rounded-2xl md:p-2">
          <GlowingEffect
            blur={0}
            borderWidth={2}
            spread={60}
            glow
            disabled={false}
            proximity={56}
            inactiveZone={0.05}
            variant="indigo"
          />
          <div className="relative rounded-lg border-0 bg-slate-800/80 p-6 shadow-[0px_0px_20px_0px_rgba(15,23,42,0.3)]">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
              <CircleAlert className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold text-white">They can&apos;t</h3>
          </div>
          <ul className="mt-4 space-y-2">
            {THEY_CANT.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-300">
                <CircleAlert className="h-4 w-4 shrink-0 text-amber-400/80" />
                {item}
              </li>
            ))}
          </ul>
          </div>
        </div>
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
