"use client";

import { Check, X } from "lucide-react";
import { Section } from "@/components/Section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { DIFFERENTIATORS } from "@/config/site";

const ROWS: { notThis: string; weDeliver: string }[] = [
  { notThis: DIFFERENTIATORS.notThis[0], weDeliver: DIFFERENTIATORS.weDeliver[0] },
  { notThis: DIFFERENTIATORS.notThis[1], weDeliver: DIFFERENTIATORS.weDeliver[1] },
  { notThis: DIFFERENTIATORS.notThis[2], weDeliver: DIFFERENTIATORS.weDeliver[2] },
  { notThis: "", weDeliver: DIFFERENTIATORS.weDeliver[3] },
  { notThis: "", weDeliver: DIFFERENTIATORS.weDeliver[4] },
  { notThis: "", weDeliver: DIFFERENTIATORS.weDeliver[5] },
];

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
      <h2 className="text-display text-2xl font-bold text-white md:text-3xl">
        Not just mocks
      </h2>
      <div className="relative mt-8 overflow-hidden rounded-2xl border border-slate-700/80 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={80}
          glow
          disabled={false}
          proximity={72}
          inactiveZone={0.01}
          variant="indigo"
        />
      <div className="relative overflow-hidden rounded-xl border-0 bg-slate-800/95 shadow-[0px_0px_20px_0px_rgba(15,23,42,0.25)]">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          <div className="border-b border-slate-700 bg-slate-800/50 px-6 py-4 md:border-b-0 md:border-r">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Others do
            </h3>
          </div>
          <div className="border-b border-slate-700 bg-slate-800 px-6 py-4 md:border-b-0 md:border-l md:border-slate-600/50">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300">
              We deliver
            </h3>
          </div>
        </div>
        {ROWS.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-1 gap-0 border-t border-slate-700/80 md:grid-cols-2"
          >
            <div className="flex items-center gap-3 border-slate-700 bg-slate-800/40 px-6 py-3 md:border-r">
              {row.notThis ? (
                <>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-600">
                    <X className="h-3.5 w-3.5 text-slate-400" />
                  </span>
                  <span className="text-slate-400">{row.notThis}</span>
                </>
              ) : (
                <span className="text-slate-600">—</span>
              )}
            </div>
            <div className="flex items-center gap-3 border-slate-700 bg-slate-800/90 px-6 py-3 md:border-l md:border-slate-600/30">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600/80">
                <Check className="h-3.5 w-3.5 text-white" />
              </span>
              <span className="text-slate-200">{row.weDeliver}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
    </Section>
  );
}
