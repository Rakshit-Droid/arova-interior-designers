"use client";

import Marquee from "../Marquee";
import { RECOGNITIONS } from "@/lib/content";

export default function ClientMarquee() {
  return (
    <section className="relative border-y border-ink/10 bg-bone">
      <Marquee speed={60}>
        {RECOGNITIONS.concat(RECOGNITIONS).map((r, i) => (
          <div
            key={i}
            className="flex items-center gap-4 whitespace-nowrap py-7"
          >
            <span className="font-display italic font-light text-[clamp(1.5rem,2.6vw,2.25rem)] leading-none text-ink/75">
              {r.name}
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 md:inline">
              {r.label}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
              {r.year}
            </span>
            <span className="h-1 w-1 rounded-full bg-ink/30" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
