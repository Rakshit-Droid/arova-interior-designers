"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROJECTS, img } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Navigation";

/**
 * Asymmetric editorial grid — four featured projects in a bento-esque layout.
 * Each tile is a shared-element candidate (layoutId) for project pages.
 */
export default function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 4);
  return (
    <section className="relative bg-bone">
      <div className="mx-auto max-w-screen px-6 py-28 md:px-12 md:py-40 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>Selected Work</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display font-light fluid-display tracking-tight">
                Four rooms from<br />
                the <em className="italic text-midnight">last twelve months</em>
                <span className="font-script text-midnight">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.16}>
              <p className="max-w-[38ch] text-[14px] leading-relaxed text-ink/60">
                We publish fewer projects than we deliver. Those shown here are
                cleared for the archive — the rest remain with their families.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-4 md:gap-6">
          <TileCard p={featured[0]} className="col-span-12 md:col-span-8" aspect="aspect-[16/11]" />
          <TileCard p={featured[1]} className="col-span-12 md:col-span-4" aspect="aspect-[3/4.2]" />
          <TileCard p={featured[2]} className="col-span-12 md:col-span-5" aspect="aspect-[5/6.2]" />
          <TileCard p={featured[3]} className="col-span-12 md:col-span-7 md:mt-16" aspect="aspect-[16/10.5]" />
        </div>

        <Reveal delay={0.1} className="mt-16 flex justify-start">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-ink"
            data-cursor="Archive"
          >
            <span className="u-reveal">Open the full archive</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 transition-transform duration-500 ease-editorial group-hover:translate-x-1">
              <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function TileCard({
  p,
  className,
  aspect,
}: {
  p: (typeof PROJECTS)[number];
  className?: string;
  aspect: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <motion.div className={className} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <Link
        ref={ref}
        href={`/projects/${p.slug}`}
        className="group relative block"
        data-cursor="Enter"
      >
        <div className={`relative ${aspect} w-full overflow-hidden rounded-[1.25rem] bg-alabaster-100`}>
          <motion.div style={{ y }} className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img(p.seed, 1600, 1200)}
              alt={p.title}
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.045]"
            />
          </motion.div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/55 via-midnight/5 to-transparent opacity-85"
          />
          <div className="absolute left-5 top-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/85">
              {p.typology} · {p.year}
            </span>
          </div>
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display font-light text-bone leading-tight tracking-tight text-[clamp(1.25rem,2.2vw,2rem)]">
                {p.title}
              </h3>
              <p className="mt-1 text-[12px] text-bone/70">{p.city} · {p.area}</p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bone text-midnight transition-transform duration-500 ease-editorial group-hover:scale-110 group-hover:rotate-[-8deg]">
              <ArrowIcon className="h-4 w-4 -rotate-45" />
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-6">
          <p className="font-display italic text-[15px] leading-snug text-ink/65 max-w-[44ch]">
            {p.lead}
          </p>
          <span className="hidden md:block font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
            {p.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
