"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROJECTS, img } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";

/**
 * Scroll-hijacked horizontal strip. Desktop only — mobile renders a regular
 * vertical stack for accessibility and performance.
 */
export default function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-74%"]);

  return (
    <section className="relative bg-ink text-bone">
      <div className="mx-auto max-w-screen px-6 pt-28 md:px-12 md:pt-40 lg:px-20">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>Archive · Cinematic</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display font-light fluid-display text-bone">
                A long look<br />
                <em className="italic">through the studio</em>
                <span className="font-script text-bone/80">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.16}>
              <p className="max-w-[38ch] text-[14px] leading-relaxed text-bone/60">
                A scroll-paced tour through eight rooms. Each image represents
                a different material language we&rsquo;ve learned to speak.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Desktop: hijacked horizontal scroll */}
      <div ref={targetRef} className="relative hidden h-[380vh] md:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 pl-12 lg:pl-20">
            {PROJECTS.map((p, i) => (
              <HStripCard key={p.slug} p={p} idx={i} />
            ))}
            {/* Trailing note slide */}
            <div className="flex w-[42vw] shrink-0 flex-col justify-between py-8 pr-16">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bone/45">
                End of reel
              </div>
              <div>
                <p className="max-w-[32ch] font-display font-light italic leading-snug text-[clamp(1.5rem,2.6vw,2.25rem)] text-bone/90">
                  There are sixty-two more rooms in the private archive.
                </p>
                <p className="mt-4 text-[13px] text-bone/50">
                  Viewings by appointment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile fallback: vertical stack */}
      <div className="block md:hidden">
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-20">
          {PROJECTS.map((p, i) => (
            <div key={p.slug} className="w-[80vw] shrink-0 snap-center">
              <HStripCard p={p} idx={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HStripCard({
  p,
  idx,
}: {
  p: (typeof PROJECTS)[number];
  idx: number;
}) {
  const isPortrait = p.orient === "portrait";
  const w = isPortrait ? "w-[32vw]" : "w-[48vw]";
  return (
    <div className={`relative shrink-0 ${w}`}>
      <div
        className={`relative overflow-hidden rounded-[1.25rem] ${
          isPortrait ? "aspect-[3/4]" : "aspect-[16/10.5]"
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img(p.seed, 1600, 1200)}
          alt={p.title}
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
        />
        <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/85">
          {String(idx + 1).padStart(2, "0")} / {String(8).padStart(2, "0")}
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-display font-light text-bone leading-tight text-[clamp(1.1rem,1.8vw,1.75rem)]">
              {p.title}
            </h3>
            <p className="mt-1 text-[11px] text-bone/70">{p.typology}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
