"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROJECTS, img } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Navigation";

export default function ProjectDetail({
  project,
  next,
}: {
  project: (typeof PROJECTS)[number];
  next: (typeof PROJECTS)[number];
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  return (
    <>
      {/* Hero cover */}
      <section ref={heroRef} className="relative min-h-[100dvh] overflow-hidden bg-ink">
        <motion.div style={{ scale, y }} className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img(project.seed, 2000, 1200)}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60"
        />

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-screen flex-col justify-between px-6 pb-10 pt-36 text-bone md:px-12 md:pb-14 md:pt-44 lg:px-20">
          <div>
            <Eyebrow>
              {project.typology} · {project.year}
            </Eyebrow>
            <motion.h1
              initial={{ y: 40, opacity: 0, filter: "blur(12px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-[18ch] font-display font-light fluid-hero tracking-tighter2"
            >
              {project.title}
              <span className="font-script text-bone/80">.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-6 text-[11px] md:grid-cols-4"
          >
            {[
              ["Location", project.city],
              ["Typology", project.typology],
              ["Area", project.area],
              ["Delivered", project.year],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-mono uppercase tracking-[0.22em] text-bone/45">{k}</div>
                <div className="mt-2 font-display italic text-[18px] text-bone/95">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lead copy */}
      <section className="relative bg-bone">
        <div className="mx-auto max-w-screen px-6 py-28 md:px-12 md:py-40 lg:px-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal><Eyebrow>Brief</Eyebrow></Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-[36ch] font-display italic text-[22px] leading-snug text-ink/70">
                  &ldquo;{project.lead}&rdquo;
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <Reveal>
                <p className="font-display font-light tracking-tight text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.1]">
                  The family had lived in the same house for twenty-one years
                  before asking for a single new room.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 grid grid-cols-1 gap-6 text-[15px] leading-relaxed text-ink/65 md:grid-cols-2">
                  <p>
                    What they wanted was simple and quietly impossible — a place
                    that felt like the rest of the house, but a little more
                    honest. A place where their grandchildren would later
                    return to argue and sulk and make tea.
                  </p>
                  <p>
                    We started by removing a wall nobody had questioned since
                    1998. The rest followed. Eleven months later, the family
                    moved into a home they had already been living in — only
                    now the light arrived in the right places.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial gallery — mixed asymmetric */}
      <section className="relative">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <GalleryTile seed={`${project.seed}-a`} alt="" className="col-span-12 md:col-span-8" aspect="aspect-[16/10.5]" />
            <GalleryTile seed={`${project.seed}-b`} alt="" className="col-span-12 md:col-span-4 md:mt-20" aspect="aspect-[3/4.2]" />
            <GalleryTile seed={`${project.seed}-c`} alt="" className="col-span-6 md:col-span-4" aspect="aspect-[4/5]" />
            <GalleryTile seed={`${project.seed}-d`} alt="" className="col-span-6 md:col-span-4 md:mt-24" aspect="aspect-[4/5]" />
            <GalleryTile seed={`${project.seed}-e`} alt="" className="col-span-12 md:col-span-4" aspect="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Specification table */}
      <section className="relative bg-bone">
        <div className="mx-auto max-w-screen px-6 py-28 md:px-12 md:py-40 lg:px-20">
          <Reveal><Eyebrow>Specification</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 font-display font-light fluid-display max-w-[18ch]">
              A list of <em className="italic text-midnight">what it took</em>
              <span className="font-script text-midnight">.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 divide-y divide-ink/10 border-y border-ink/10 md:grid-cols-2 md:divide-x md:divide-y-0">
            {[
              { k: "Principal Material", v: "Charcoal oak · hammered brass · Dholpur sandstone" },
              { k: "Lighting Fixtures", v: "87 custom · 43 sourced" },
              { k: "Custom Furniture", v: "22 pieces, signed & numbered" },
              { k: "Art Acquisitions", v: "14 works · Mumbai, Paris, NY galleries" },
              { k: "Design Period", v: "Weeks 01 – 42 · 2023 – 2024" },
              { k: "On-site Days", v: "294 · single phase" },
            ].map((r, i) => (
              <Reveal key={r.k} delay={i * 0.05} className="grid grid-cols-3 gap-4 px-0 py-6 md:px-10">
                <div className="col-span-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                  {r.k}
                </div>
                <div className="col-span-2 font-display italic text-[17px] leading-snug text-ink/85">
                  {r.v}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Up next */}
      <section className="relative bg-midnight text-bone">
        <Link
          href={`/projects/${next.slug}`}
          className="group block"
          data-cursor="Next"
        >
          <div className="mx-auto grid max-w-screen grid-cols-1 gap-10 px-6 py-24 md:grid-cols-12 md:px-12 md:py-32 lg:px-20">
            <div className="md:col-span-5">
              <Eyebrow>Up Next</Eyebrow>
              <h3 className="mt-6 font-display font-light fluid-display text-bone">
                {next.title}
                <span className="font-script text-bone/80">.</span>
              </h3>
              <p className="mt-6 max-w-[40ch] text-[14px] text-bone/65">
                {next.lead}
              </p>
              <span className="mt-10 inline-flex items-center gap-3 text-[13px] font-medium">
                <span className="u-reveal">Continue the archive</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/25 transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                  <ArrowIcon className="h-4 w-4 -rotate-45" />
                </span>
              </span>
            </div>
            <div className="relative md:col-span-7">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[1.25rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(next.seed, 1600, 1000)}
                  alt={next.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.035]"
                />
              </div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}

function GalleryTile({
  seed,
  alt,
  className,
  aspect,
}: {
  seed: string;
  alt: string;
  className?: string;
  aspect: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <div className={`relative w-full overflow-hidden rounded-[1.25rem] bg-alabaster-100 ${aspect}`}>
        <motion.div style={{ y }} className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img(seed, 1600, 1200)} alt={alt} className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </motion.div>
  );
}
