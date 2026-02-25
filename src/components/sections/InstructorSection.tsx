import Image from "next/image"
import { Section } from "@/components/Section"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { INSTRUCTOR } from "@/config/site"
import { Linkedin, Link as LinkIcon, Twitter } from "lucide-react"

function validateUrl(url: string): string {
  try {
    const parsed = new URL(url)
    return parsed.protocol === "https:" ? url : "#"
  } catch {
    return "#"
  }
}

export function InstructorSection() {
  const { skills, victories, socials } = INSTRUCTOR

  return (
    <Section
      id="instructor"
      label="Who runs the War Room"
      ambientOrbs={[{ position: "right" }]}
      motionVariant="fade-up"
      spacing="default"
    >
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-amber-700/40 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={60}
          glow
          disabled={false}
          proximity={48}
          inactiveZone={0.02}
          variant="amber"
        />
        <div className="relative rounded-xl bg-slate-800/95 p-6 text-center shadow-[0px_0px_27px_0px_rgba(15,23,42,0.35)] md:p-10">
          <div className="mx-auto h-28 w-28 overflow-hidden rounded-full ring-4 ring-amber-500/60 md:h-32 md:w-32">
            <Image
              src={INSTRUCTOR.imageUrl}
              alt={INSTRUCTOR.name}
              width={128}
              height={128}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-white md:text-3xl">
            {INSTRUCTOR.name}
          </h2>
          {INSTRUCTOR.title && (
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-amber-400/90">
              {INSTRUCTOR.title}
            </p>
          )}

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            {INSTRUCTOR.tagline}
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href={validateUrl(socials.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-amber-500/50 hover:text-white"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={validateUrl(socials.topmate)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-amber-500/50 hover:text-white"
            >
              <LinkIcon className="h-4 w-4" />
              Topmate
            </a>
            <a
              href={validateUrl(socials.twitter)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-amber-500/50 hover:text-white"
            >
              <Twitter className="h-4 w-4" />
              X
            </a>
          </div>

          {(skills.length > 0 || victories.length > 0) && (
            <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
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
    </Section>
  )
}
