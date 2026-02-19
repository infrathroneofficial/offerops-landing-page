"use client";

/**
 * Animated diagonal aurora streaks for the Hero background.
 * Pure CSS – no canvas, no extra deps. Uses multiple gradient layers
 * with staggered translate animations for a continuously flowing feel.
 * Respects prefers-reduced-motion via the .hero-aurora-streak class.
 */
export function HeroAurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* streak 1 – indigo */}
      <div className="hero-aurora-streak hero-aurora-streak-1" />
      {/* streak 2 – violet */}
      <div className="hero-aurora-streak hero-aurora-streak-2" />
      {/* streak 3 – amber / orange */}
      <div className="hero-aurora-streak hero-aurora-streak-3" />
      {/* streak 4 – faint indigo overlay */}
      <div className="hero-aurora-streak hero-aurora-streak-4" />
    </div>
  );
}
