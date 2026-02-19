"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/config/site";

export function UrgencyBanner() {
  const urgencyBadge = SITE_CONFIG.urgencyBadge ?? "Limited seats";

  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-700/80 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 md:px-6 md:py-3">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4 shrink-0 text-amber-400/90" aria-hidden />
          <span className="text-slate-200">
            New batch {SITE_CONFIG.cohortDate}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-amber-400/90">{urgencyBadge}</span>
          <span className="hidden text-slate-400 sm:inline">·</span>
          <span className="text-slate-300">
            Next cohort {SITE_CONFIG.cohortDate}
          </span>
        </div>
        <div className="flex items-center justify-end">
          <Button
            asChild
            variant="primary"
            size="sm"
            className="cta-primary rounded-lg px-4 py-2 text-sm font-semibold"
          >
            <a href="#cta">{SITE_CONFIG.ctaText}</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
