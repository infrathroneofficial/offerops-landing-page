import { CountdownTimer } from "@/components/CountdownTimer"
import { Section } from "@/components/Section"
import { WaitlistForm } from "@/components/WaitlistForm"
import { SITE_CONFIG } from "@/config/site"
import { Button } from "../ui/button";

export function FooterCta() {
  return (
    <Section
      id="cta"
      noBorder
      backgroundClassName="relative overflow-hidden bg-gradient-to-b from-transparent via-slate-900/30 to-slate-950 text-white"
      className="border-none"
      motionVariant="scale-in"
      spacing="large"
    >
      <div
        aria-hidden
        className="ambient-orb absolute -left-16 -top-16 h-48 w-48 rounded-full bg-amber-400/15 blur-3xl"
      />
      <div
        aria-hidden
        className="ambient-orb ambient-orb-delay absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-indigo-400/20 blur-3xl"
      />

      <footer className="relative z-10">
        <h2 className="text-display text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
          Knowledge gets interviews. Production stories get offers.
        </h2>
        <p className="mt-4 text-lg md:text-base leading-relaxed text-slate-300">
          {SITE_CONFIG.footerCtaSubtext}
        </p>
        <p className="mt-2 text-sm text-slate-400">
          {SITE_CONFIG.footerCtaOptionalLine}
        </p>

        <div className="mt-6 flex flex-col items-start gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Early Bird Discount ends in
          </p>
          <CountdownTimer targetDate={SITE_CONFIG.cohortStartDate} />
        </div>

        <div className="mt-6 w-full max-w-xl">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="h-14 min-h-[56px] w-full rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 text-base font-semibold text-white shadow-lg shadow-indigo-500/25 hover:from-indigo-500 hover:to-violet-500"
          >
            <a
              href={SITE_CONFIG.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE_CONFIG.ctaText}
            </a>
          </Button>
        </div>
      </footer>
    </Section>
  );
}
