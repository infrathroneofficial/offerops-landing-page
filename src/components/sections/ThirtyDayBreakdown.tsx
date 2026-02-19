"use client";

import { Section } from "@/components/Section";
import { Timeline } from "@/components/ui/timeline";
import { WEEK_BREAKDOWN } from "@/config/site";

type WeekItem = (typeof WEEK_BREAKDOWN)[number] & { objective?: string };

export function ThirtyDayBreakdown() {
  const data = WEEK_BREAKDOWN.map((week, index) => {
    const w = week as WeekItem;
    return {
      title: `Week ${index + 1}`,
      content: (
        <div className="rounded-xl border border-slate-700/80 bg-slate-800/60 p-5 md:p-6">
          <h4 className="text-lg font-semibold text-white md:text-xl">
            {w.title}
          </h4>
          {w.objective && (
            <p className="mt-2 text-sm font-medium text-amber-400/90">
              {w.objective}
            </p>
          )}
          <ul className="mt-4 space-y-2">
            {w.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-sm leading-relaxed text-slate-300 md:text-base"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ),
    };
  });

  return (
    <Section
      id="breakdown"
      label="Curriculum"
      backgroundClassName="bg-linear-to-b from-slate-900 to-slate-800/90"
      ambientOrbs={[
        { position: "top-left" },
        { position: "bottom-right", delay: true },
      ]}
      motionVariant="fade-up"
      staggerChildren
    >
      <h2 className="text-display text-2xl font-bold text-white md:text-3xl">
        30-Day War Room
      </h2>
      <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
        A structured journey from gap exposure to interview readiness.
      </p>

      <div className="relative z-10 mt-8 w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </Section>
  );
}
