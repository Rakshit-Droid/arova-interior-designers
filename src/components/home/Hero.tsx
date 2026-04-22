"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BRAND, img } from "@/lib/content";
import { ArrowIcon } from "../Navigation";
import MagneticButton from "../MagneticButton";

/**
 * Cinematic asymmetric hero.
 * - Massive editorial serif split across two stanzas
 * - Hero image fades stylistically into the cream background (no text over image)
 * - Scroll parallax on the image and headline
 * - Foreground ticker of meta data
 */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const bgDarken = useTransform(scrollYProgress, [0, 1], [0, 0.25]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden bg-bone pt-32 md:pt-40"
    >
      {/* Top meta ribbon */}
      <div className="mx-auto flex max-w-screen items-center justify-between px-6 md:px-12 lg:px-20">
        <div className="hidden items-center gap-2 md:flex">
          <span className="relative flex h-1.5 w-1.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-midnight/40" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-midnight" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60">
            Est. 2014 · {BRAND.city}
          </span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60">
          <span className="hidden md:inline">Currently accepting </span>
          <span>04 commissions / 2026</span>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-screen px-6 md:mt-24 md:px-12 lg:px-20">
        {/* Asymmetric layout: title takes 7 cols on left, image anchors right */}
        <div className="grid grid-cols-12 items-start gap-6">
          <motion.div
            style={{ y: titleY, opacity: titleOpacity }}
            className="col-span-12 md:col-span-8 relative z-10"
          >
            <h1 className="font-display font-light fluid-hero">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                style={{ display: "block", overflow: "hidden" }}
              >
                <span className="block tracking-tighter2">Architects of</span>
              </motion.span>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                style={{ display: "block", overflow: "hidden" }}
              >
                <span className="block italic tracking-tighter2 text-midnight">
                  stillness
                </span>
              </motion.span>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.26 }}
                style={{ display: "block", overflow: "hidden" }}
              >
                <span className="block tracking-tighter2">
                  &amp; light<span className="font-script text-midnight">.</span>
                </span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 max-w-[42ch] text-[15px] leading-relaxed text-ink/65"
            >
              A Hyderabad studio designing turnkey penthouses, private villas,
              hospitality rooms, and corporate floors for the families and
              founders of Telangana. Twelve years · ninety-four rooms ·
              one way of listening.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <MagneticButton>
                <Link
                  href="/projects"
                  data-cursor="View"
                  className="group inline-flex items-center gap-2 rounded-full bg-midnight pl-6 pr-1 py-1 text-[13px] font-medium text-bone transition-transform duration-500 ease-editorial active:scale-[0.97]"
                >
                  <span>Explore the archive</span>
                  <span className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-bone/10 ring-1 ring-bone/15 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5">
                    <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
                  </span>
                </Link>
              </MagneticButton>
              <Link
                href="/contact"
                className="u-reveal text-[13px] text-ink/70"
                data-cursor="Begin"
              >
                Commission a room
              </Link>
            </motion.div>
          </motion.div>

          {/* Anchor image on the right — fades into the bone background */}
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="col-span-12 md:col-span-4 md:-mr-4 md:mt-4"
          >
            <div className="relative aspect-[3/4.2] w-full overflow-hidden rounded-[1.5rem] bg-alabaster-100 md:aspect-[3/4.6]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img("hero-arova-01", 900, 1300)}
                alt="A Meridian Residence corner at dusk"
                className="h-full w-full object-cover"
              />
              {/* Fade into background */}
              <motion.div
                style={{ opacity: bgDarken }}
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-midnight mix-blend-multiply"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bone via-transparent to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bone/80 via-transparent to-transparent md:from-bone/40"
              />
              <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/90">
                Meridian Residence · 06:14 pm
              </div>
            </div>
          </motion.div>
        </div>

        {/* Oversized background word */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute -bottom-[3vw] left-0 right-0 -z-0 overflow-hidden"
        >
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
            className="mx-auto w-full text-center"
          >
            <span className="block font-display font-light italic leading-[0.8] tracking-tighter2 text-[rgba(49,8,31,0.06)] text-[clamp(7rem,22vw,22rem)]">
              arova
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom meta row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-24 grid max-w-screen grid-cols-2 gap-y-6 border-t border-ink/10 px-6 py-8 text-[11px] text-ink/60 md:mt-32 md:grid-cols-4 md:px-12 lg:px-20"
      >
        {[
          ["94", "rooms delivered"],
          ["47,200", "sq ft in build"],
          ["22", "countries sourced"],
          ["11", "in-house craftspeople"],
        ].map(([n, l]) => (
          <div key={l} className="flex flex-col gap-2">
            <div className="font-display font-light leading-none text-ink text-[clamp(1.75rem,2.5vw,2.5rem)]">
              {n}
            </div>
            <div className="font-mono uppercase tracking-[0.2em] text-ink/50">
              {l}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="pointer-events-none absolute bottom-6 right-6 hidden md:right-12 md:flex items-center gap-3 text-ink/50 lg:right-20"
      >
        <div className="h-px w-10 bg-current" />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
