import { Section } from "@/components/Section"
import { WaitlistForm } from "@/components/WaitlistForm"
import { SITE_CONFIG } from "@/config/site"

export function FooterCta() {
  return (
    <Section
      id="cta"
      noBorder
      backgroundClassName="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white"
      className="border-none"
      motionVariant="scale-in"
    >
      <div
        aria-hidden
        className="ambient-orb absolute -left-16 -top-16 h-48 w-48 rounded-full bg-indigo-400/20 blur-3xl"
      />
      <div
        aria-hidden
        className="ambient-orb ambient-orb-delay absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl"
      />

      <footer className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
          Knowledge gets interviews. Production stories get offers.
        </h2>
        <p className="mt-4 text-lg md:text-base leading-relaxed text-slate-300">
          {SITE_CONFIG.footerCtaSubtext}
        </p>
        <p className="mt-2 text-sm text-slate-400">{SITE_CONFIG.footerCtaOptionalLine}</p>
        <div className="mt-8 w-full max-w-xl">
          <WaitlistForm
            buttonLabel={SITE_CONFIG.ctaText}
            variant="footer"
            className="space-y-4 [&_label]:text-white [&_input]:bg-slate-800 [&_input]:border-slate-600 [&_input]:text-white [&_input]:placeholder:text-slate-400 [&_p]:text-slate-300"
          />
          <p className="mt-3 text-xs leading-relaxed text-slate-400">{SITE_CONFIG.formReassurance}</p>
        </div>
      </footer>
    </Section>
  )
}
