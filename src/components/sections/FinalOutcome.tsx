"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { FINAL_OUTCOME, SECTION_COPY, SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  FileText,
  Linkedin,
  MessageSquare,
  Share2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const OUTCOME_ITEMS: {
  icon: typeof MessageSquare;
  title: string;
  description: string;
}[] = [
  { icon: MessageSquare, title: "12 Mocks", description: FINAL_OUTCOME[0] },
  { icon: Sparkles, title: "Stories", description: FINAL_OUTCOME[1] },
  { icon: Users, title: "Client exposure", description: FINAL_OUTCOME[2] },
  { icon: FileText, title: "Resume", description: FINAL_OUTCOME[3] },
  { icon: Linkedin, title: "LinkedIn", description: FINAL_OUTCOME[4] },
  { icon: Target, title: "Confidence", description: FINAL_OUTCOME[5] },
  { icon: Share2, title: "Referrals", description: FINAL_OUTCOME[6] },
];

function OutcomeCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: typeof MessageSquare;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col px-6 py-8 transition-colors md:px-8 md:py-10",
        "border-slate-700/80",
        index < 4 && "md:border-b",
        index % 4 !== 3 && "md:border-r",
        (index === 0 || index === 4) && "md:border-l",
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-linear-to-t from-indigo-950/50 to-transparent opacity-0 transition-opacity duration-200 group-hover/feature:opacity-100" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-linear-to-b from-indigo-950/50 to-transparent opacity-0 transition-opacity duration-200 group-hover/feature:opacity-100" />
      )}
      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-600/80 bg-slate-800/80 text-slate-400 transition-colors group-hover/feature:text-indigo-400">
        <Icon className="h-5 w-5" />
      </div>
      <div className="relative z-10 mt-4">
        <div className="absolute left-0 inset-y-0 h-5 w-1 rounded-tr-full rounded-br-full bg-slate-600 transition-all duration-200 group-hover/feature:h-7 group-hover/feature:bg-indigo-500 origin-center" />
        <span className="inline-block pl-4 font-semibold text-white transition-transform duration-200 group-hover/feature:translate-x-1 group-hover/feature:text-indigo-200">
          {title}
        </span>
      </div>
      <p className="relative z-10 mt-2 max-w-xs text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
}

export function FinalOutcome() {
  return (
    <Section
      id="outcome"
      label="Outcome"
      backgroundClassName="bg-linear-to-b from-slate-900/90 to-slate-800"
      ambientOrbs={[{ position: "top-right" }]}
      motionVariant="fade-up"
      staggerChildren
    >
      <h2 className="text-display text-2xl font-bold text-white md:text-3xl">
        {SECTION_COPY.outcomeHeadline.split("30 days").map((part, i) => (
          <span key={i}>
            {part}
            {i === 0 && <span className="text-amber-400">30 days</span>}
          </span>
        ))}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-slate-400 md:text-lg">
        {SECTION_COPY.outcomeEmotionalLine}
      </p>

      <div className="mt-8 overflow-hidden rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {OUTCOME_ITEMS.map((item, index) => (
            <OutcomeCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>

      <Button
        asChild
        variant="primary"
        size="lg"
        className="cta-primary mt-8 min-h-[48px] rounded-xl px-8 py-4 text-lg font-semibold"
      >
        <a href="#cta">{SITE_CONFIG.ctaText}</a>
      </Button>
    </Section>
  );
}
