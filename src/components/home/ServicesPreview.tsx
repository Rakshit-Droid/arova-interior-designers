"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { SERVICES, img } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Navigation";

/**
 * Divider-list of services — no cards (VISUAL_DENSITY ~ 7). Hovering a row
 * reveals a pinned preview image on the right, as per editorial studios.
 */
export default function ServicesPreview() {
  const [idx, setIdx] = useState<number | null>(null);
  return (
    <section className="relative bg-alabaster/40">
      <div className="mx-auto max-w-screen px-6 py-28 md:px-12 md:py-40 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal><Eyebrow>Practice</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display font-light fluid-display tracking-tight">
                Six ways we<br />
                <em className="italic text-midnight">enter a room</em>
                <span className="font-script text-midnight">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.16}>
              <p className="max-w-[38ch] text-[14px] leading-relaxed text-ink/60">
                From interior architecture to art curation, the practice runs
                on six interlocking disciplines. Most commissions begin with
                one and end with all six.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-0 md:mt-24 md:grid-cols-12 md:gap-10">
          {/* Left: list */}
          <div className="md:col-span-7">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {SERVICES.map((s, i) => (
                <li
                  key={s.index}
                  onMouseEnter={() => setIdx(i)}
                  onMouseLeave={() => setIdx(null)}
                  className="group relative"
                >
                  <Link
                    href="/services"
                    className="grid grid-cols-12 items-center gap-4 py-6 md:py-8"
                    data-cursor="Study"
                  >
                    <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 md:col-span-1">
                      {s.index}
                    </span>
                    <span className="col-span-10 font-display font-light tracking-tight text-[clamp(1.5rem,3.3vw,2.75rem)] leading-[1.05] transition-[transform,color] duration-700 ease-editorial group-hover:translate-x-2 group-hover:text-midnight md:col-span-7">
                      {s.title}
                    </span>
                    <span className="col-span-10 col-start-3 text-[13px] text-ink/55 md:col-span-4 md:col-start-auto">
                      {s.short}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: pinned preview */}
          <div className="hidden md:col-span-5 md:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] bg-alabaster-100">
                {SERVICES.map((s, i) => (
                  <motion.div
                    key={s.index}
                    initial={false}
                    animate={{
                      opacity: idx === i ? 1 : 0,
                      scale: idx === i ? 1.02 : 1.08,
                    }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img(`service-${s.index}`, 900, 1200)}
                      alt={s.title}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={false}
                  animate={{ opacity: idx === null ? 1 : 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img("service-default", 900, 1200)}
                    alt="Arova atelier"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/85">
                    {idx !== null ? SERVICES[idx].title : "The Practice"}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-bone text-midnight">
                    <ArrowIcon className="h-4 w-4 -rotate-45" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
