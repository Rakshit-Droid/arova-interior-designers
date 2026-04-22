"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROCESS } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Navigation";

/**
 * Sticky stack of process cards — each pins and layers over the next.
 */
export default function ProcessPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const bgHue = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#f4f2ed", "#dce0d9", "#31081f"]
  );
  const textHue = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8, 1],
    ["#0e0a0c", "#0e0a0c", "#f4f2ed", "#f4f2ed"]
  );

  return (
    <motion.section
      ref={ref}
      style={{ backgroundColor: bgHue, color: textHue as never }}
      className="relative"
    >
      <div className="mx-auto max-w-screen px-6 pt-28 md:px-12 md:pt-40 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal><Eyebrow>Method</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display font-light fluid-display">
                Five acts. <em className="italic">One way</em> of working
                <span className="font-script">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.16}>
              <p className="max-w-[38ch] text-[14px] leading-relaxed opacity-60">
                No project is delivered without passing through each of the
                five. The timeline varies; the ritual does not.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Sticky stack — each step pins in turn */}
      <div className="relative mt-20">
        {PROCESS.map((p, i) => (
          <StickyStep key={p.step} p={p} i={i} total={PROCESS.length} />
        ))}
      </div>

      <div className="mx-auto flex max-w-screen items-center justify-between px-6 pb-28 pt-20 md:px-12 md:pb-40 lg:px-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-60">
          Method · 2026 edition
        </div>
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 text-[13px] font-medium"
          data-cursor="Read"
        >
          <span className="u-reveal">Read the full method</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-current/25 transition-transform duration-500 ease-editorial group-hover:translate-x-1">
            <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
          </span>
        </Link>
      </div>
    </motion.section>
  );
}

function StickyStep({
  p,
  i,
  total,
}: {
  p: (typeof PROCESS)[number];
  i: number;
  total: number;
}) {
  return (
    <div
      className="sticky top-0 flex min-h-[85vh] items-center px-6 md:px-12 lg:px-20"
      style={{ zIndex: 10 + i }}
    >
      <div className="mx-auto grid w-full max-w-screen grid-cols-12 items-center gap-6">
        <div className="col-span-12 md:col-span-2">
          <div className="font-display italic font-light leading-none text-[clamp(3rem,8vw,7rem)] opacity-80">
            {p.step}
          </div>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] opacity-55">
            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <h3 className="font-display font-light leading-[0.95] tracking-tighter2 text-[clamp(2.25rem,6vw,5.5rem)]">
            {p.name}<span className="font-script">.</span>
          </h3>
          <p className="mt-6 max-w-[50ch] text-[15px] leading-relaxed opacity-70">
            {p.body}
          </p>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-55">
            Timeline
          </div>
          <div className="mt-2 font-display italic text-[20px] opacity-85">
            {p.weeks}
          </div>
          <div className="mt-6 h-px w-12 bg-current opacity-30" />
        </div>
      </div>
    </div>
  );
}
