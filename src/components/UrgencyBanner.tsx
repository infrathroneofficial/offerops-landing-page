"use client";

import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { SITE_CONFIG } from "@/config/site";

export function UrgencyBanner() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 w-full border-b border-slate-700/80 bg-slate-900/95 backdrop-blur supports-backdrop-filter:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-3 py-2 sm:flex-row sm:flex-nowrap sm:items-center sm:justify-between sm:gap-4 sm:px-4 sm:py-2.5 md:px-6 md:py-3">
        {/* Mobile: first line — countdown spread */}
        <div className="flex w-full justify-center sm:hidden">
          <CountdownTimer targetDate={SITE_CONFIG.cohortStartDate} compact />
        </div>
        {/* Second line on mobile; inline on sm+ */}
        <div className="flex w-full items-center justify-between sm:contents">
          <div className="flex min-w-0 flex-1 items-center gap-1.5 sm:order-1 sm:flex-initial sm:gap-2">
            <Calendar
              className="h-3.5 w-3.5 shrink-0 text-amber-400/90 sm:h-4 sm:w-4"
              aria-hidden
            />
            <span className="truncate text-xs font-medium text-amber-400/90 sm:text-sm">
              {SITE_CONFIG.urgencyBadge}
            </span>
          </div>
          <div className="flex shrink-0 sm:order-3">
            <Button
              asChild
              variant="primary"
              size="sm"
              className="cta-primary h-8 rounded-lg px-3 text-xs font-semibold sm:h-9 sm:px-4 sm:py-2 sm:text-sm"
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
        </div>
        {/* Tablet/desktop: countdown in middle; hidden on lg */}
        <div className="hidden min-w-0 shrink-0 sm:order-2 sm:block lg:hidden">
          <CountdownTimer targetDate={SITE_CONFIG.cohortStartDate} compact />
        </div>
      </div>
    </div>
  );
}
