"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  /** Optional. Renders above the timeline. */
  heading?: React.ReactNode;
  /** Optional. Renders below heading. */
  subheading?: React.ReactNode;
  /** Optional. Override container class. */
  className?: string;
}

export function Timeline({
  data,
  heading,
  subheading,
  className,
}: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data, ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className={className}>
      {(heading || subheading) && (
        <div className="mb-8 md:mb-12">
          {heading}
          {subheading}
        </div>
      )}

      <div ref={ref} className="relative pb-12 md:pb-20">
        {data.map((item, index) => (
          <div
            key={item.title}
            className="flex justify-start pt-8 md:pt-24 md:gap-10 first:pt-0"
          >
            <div className="sticky z-40 flex max-w-xs flex-col self-start md:top-32 md:w-full md:flex-row md:items-center lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center md:left-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 ring-2 ring-slate-700">
                  <div className="h-3 w-3 rounded-full bg-slate-600 ring-1 ring-slate-500" />
                </div>
              </div>
              <h3 className="hidden pl-20 text-xl font-bold text-slate-400 md:block md:pl-20 md:text-3xl lg:text-4xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-lg font-bold text-slate-400 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-linear-to-b from-transparent from-0% via-slate-600 to-transparent to-99% md:left-8 mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-linear-to-t from-indigo-500 via-violet-500 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
