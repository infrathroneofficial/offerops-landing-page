"use client";

import { Section } from "@/components/Section";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SECTION_COPY, WHO_THIS_IS_FOR } from "@/config/site";
import { ArrowRight } from "lucide-react";

const GRID_AREAS = [
  "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  "md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]",
  "md:[grid-area:2/1/3/7] xl:[grid-area:1/9/2/13]",
  "md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/5]",
  "md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/9]",
  "md:[grid-area:3/7/4/13] xl:[grid-area:2/9/3/13]",
] as const;

function WhoThisIsForGridItem({
  area,
  children,
}: {
  area: string;
  children: React.ReactNode;
}) {
  return (
    <li className={`min-h-48 list-none md:min-h-56 ${area}`}>
      <div className="relative h-full rounded-2xl border border-slate-700/80 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          variant="indigo"
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-0 bg-slate-800/95 p-5 shadow-[0px_0px_27px_0px_rgba(15,23,42,0.4)] md:p-6">
          <div className="flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-slate-600 bg-slate-700/50 p-2">
              <ArrowRight className="h-4 w-4 text-indigo-400 md:h-5 md:w-5" />
            </div>
            <p className="font-sans text-base font-medium leading-relaxed text-white text-balance md:text-lg md:font-semibold">
              {children}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export function WhoThisIsFor() {
  return (
    <Section
      id="who"
      label="Who it's for"
      backgroundClassName="bg-slate-900"
      ambientOrbs={[{ position: "top-right" }]}
      motionVariant="slide-in"
      staggerChildren
    >
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        {SECTION_COPY.whoTitle}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
        {SECTION_COPY.whoTagline}
      </p>
      <ul className="mt-8 grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 xl:max-h-144 xl:grid-rows-2">
        {WHO_THIS_IS_FOR.map((item, index) => (
          <WhoThisIsForGridItem key={item} area={GRID_AREAS[index]}>
            {item}
          </WhoThisIsForGridItem>
        ))}
      </ul>
    </Section>
  );
}
