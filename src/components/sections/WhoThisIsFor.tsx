import { Section } from "@/components/Section";
import { SECTION_COPY, WHO_THIS_IS_FOR } from "@/config/site";

const BENTO_LAYOUT = [
  "md:col-span-2 md:row-span-1", // 0: wide
  "md:col-span-1",               // 1
  "md:col-span-1",               // 2
  "md:col-span-1",               // 3
  "md:col-span-1",               // 4
  "md:col-span-3",               // 5: full width
] as const;

function PointCard({
  index,
  children,
  className,
}: {
  index: number;
  children: React.ReactNode;
  className?: string;
}) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article
      className={`group card-hover relative overflow-hidden rounded-xl border border-slate-700/80 bg-slate-800/90 p-5 shadow-sm transition-all duration-200 hover:border-slate-600 hover:bg-slate-800 ${className ?? ""}`}
    >
      <div
        className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-indigo-500/80 to-violet-500/50 opacity-80"
        aria-hidden
      />
      <div className="flex items-start gap-4 pl-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-sm font-bold tabular-nums text-indigo-300 ring-1 ring-indigo-500/30 transition-colors group-hover:bg-indigo-500/30 group-hover:text-indigo-200"
          aria-hidden
        >
          {num}
        </span>
        <p className="text-base leading-relaxed text-slate-200 md:text-lg">
          {children}
        </p>
      </div>
    </article>
  );
}

export function WhoThisIsFor() {
  return (
    <Section
      id="who"
      label="Who it's for"
      backgroundClassName="bg-slate-900"
      ambientOrbs={[{ position: "top-right" }]}
      motionVariant="slide-in"
      staggerChildren
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        {SECTION_COPY.whoTitle}
      </h2>
      <p className="mt-3 text-lg md:text-base leading-relaxed text-slate-400">
        {SECTION_COPY.whoTagline}
      </p>
      <ul
        className="mt-8 grid list-none grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-5"
        aria-label="Audience segments"
      >
        {WHO_THIS_IS_FOR.map((item, index) => (
          <li key={item} className={BENTO_LAYOUT[index]}>
            <PointCard index={index}>{item}</PointCard>
          </li>
        ))}
      </ul>
    </Section>
  );
}
