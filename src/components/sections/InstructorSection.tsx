import { Section } from "@/components/Section"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { INSTRUCTOR } from "@/config/site"
import { Users } from "lucide-react"

export function InstructorSection() {
  const instructor = INSTRUCTOR as typeof INSTRUCTOR & {
    imageUrl?: string;
    skills?: readonly string[];
    victories?: readonly string[];
  };
  const skills = instructor.skills ?? [];
  const victories = instructor.victories ?? [];

  return (
    <Section
      id="instructor"
      label="Who runs the War Room"
      backgroundClassName="bg-slate-900/80"
      ambientOrbs={[{ position: "right" }]}
      motionVariant="fade-up"
    >
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-slate-700/80 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={60}
          glow
          disabled={false}
          proximity={48}
          inactiveZone={0.02}
          variant="indigo"
        />
        <div className="relative flex flex-col gap-6 rounded-xl bg-slate-800/95 p-6 shadow-[0px_0px_27px_0px_rgba(15,23,42,0.35)] md:flex-row md:items-start md:gap-8 md:p-8">
          <div className="flex shrink-0 justify-center md:justify-start">
            {instructor.imageUrl ? (
              <img
                src={instructor.imageUrl}
                alt={INSTRUCTOR.name}
                className="h-24 w-24 rounded-full object-cover ring-4 ring-amber-500/40 md:h-28 md:w-28"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-500/20 ring-4 ring-amber-500/40 md:h-28 md:w-28">
                <Users className="h-12 w-12 text-indigo-400 md:h-14 md:w-14" />
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-bold text-white md:text-2xl">
              {INSTRUCTOR.name}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-slate-300">
              {INSTRUCTOR.tagline}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {INSTRUCTOR.stats.map((stat) => (
                <li
                  key={stat}
                  className="rounded-full bg-slate-700/80 px-3 py-1 text-sm font-medium text-slate-300"
                >
                  {stat}
                </li>
              ))}
            </ul>
            {(skills.length > 0 || victories.length > 0) && (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {skills.length > 0 && (
                  <div className="rounded-lg border border-slate-700/80 bg-slate-800/60 p-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Technical mastery
                    </h3>
                    <ul className="mt-3 space-y-1">
                      {skills.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-slate-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {victories.length > 0 && (
                  <div className="rounded-lg border border-slate-700/80 bg-slate-800/60 p-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      War room victories
                    </h3>
                    <ul className="mt-3 space-y-1">
                      {victories.map((v, i) => (
                        <li key={v} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-semibold text-amber-400">
                            {i + 1}
                          </span>
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
