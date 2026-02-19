import { StickyCta } from "@/components/StickyCta"
import { UrgencyBanner } from "@/components/UrgencyBanner"
import { CoreProblem } from "@/components/sections/CoreProblem"
import { FAQSection } from "@/components/sections/FAQSection"
import { FinalOutcome } from "@/components/sections/FinalOutcome"
import { FooterCta } from "@/components/sections/FooterCta"
import { Hero } from "@/components/sections/Hero"
import { InstructorSection } from "@/components/sections/InstructorSection"
import { ProofBlock } from "@/components/sections/ProofBlock"
import { StandoutQuote } from "@/components/sections/StandoutQuote"
import { ThirtyDayBreakdown } from "@/components/sections/ThirtyDayBreakdown"
import { WhatMakesDifferent } from "@/components/sections/WhatMakesDifferent"
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor"
import { SITE_CONFIG } from "@/config/site"

export default function HomePage() {
  return (
    <main className="min-h-screen text-slate-100 overflow-x-hidden">
      <UrgencyBanner />
      <Hero />
      <StickyCta label={SITE_CONFIG.ctaText} />
      <WhoThisIsFor />
      <CoreProblem />
      <ThirtyDayBreakdown />
      <WhatMakesDifferent />
      <ProofBlock />
      <StandoutQuote />
      <FinalOutcome />
      <InstructorSection />
      <FAQSection />
      <FooterCta />
    </main>
  )
}
