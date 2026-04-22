"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { PROJECTS, img } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Navigation";
import { cn } from "@/lib/cn";

const FILTERS = ["All", "Penthouse", "Private Villa", "Hospitality", "Corporate"] as const;

export default function ProjectsIndex() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const visible = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.typology === filter),
    [filter]
  );

  return (
    <>
      {/* Page head */}
      <section className="relative pt-36 md:pt-44">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <Reveal><Eyebrow>The Archive</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display font-light fluid-hero tracking-tighter2">
              Rooms we&apos;ve built,<br />
              <em className="italic text-midnight">quietly</em>, since 2014
              <span className="font-script text-midnight">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-10 max-w-[48ch] text-[15px] leading-relaxed text-ink/65">
              Ninety-four rooms across Hyderabad, Secunderabad, Warangal, and
              farther afield. Most remain private; the ones below are cleared
              for public record.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter + view toolbar */}
      <section className="sticky top-24 z-40 mt-20 border-y border-ink/10 bg-bone/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen flex-wrap items-center justify-between gap-3 px-6 py-4 md:px-12 lg:px-20">
          <div className="flex flex-wrap items-center gap-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-colors duration-500 ease-editorial",
                  filter === f
                    ? "text-bone"
                    : "text-ink/55 hover:text-ink"
                )}
                data-cursor={filter === f ? "" : "Filter"}
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-bubble"
                    className="absolute inset-0 rounded-full bg-midnight"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-full border border-ink/10 p-1">
            <ViewBtn active={view === "grid"} onClick={() => setView("grid")} label="Grid">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-3.5 w-3.5">
                <rect x="1.5" y="1.5" width="5" height="5" /><rect x="9.5" y="1.5" width="5" height="5" />
                <rect x="1.5" y="9.5" width="5" height="5" /><rect x="9.5" y="9.5" width="5" height="5" />
              </svg>
            </ViewBtn>
            <ViewBtn active={view === "list"} onClick={() => setView("list")} label="List">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-3.5 w-3.5">
                <line x1="2" y1="4" x2="14" y2="4" /><line x1="2" y1="8" x2="14" y2="8" /><line x1="2" y1="12" x2="14" y2="12" />
              </svg>
            </ViewBtn>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative">
        {view === "grid" ? (
          <GridView projects={visible} />
        ) : (
          <ListView projects={visible} />
        )}
      </section>
    </>
  );
}

function ViewBtn({
  active,
  onClick,
  label,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
        active ? "bg-ink text-bone" : "text-ink/60 hover:text-ink"
      )}
    >
      {children}
    </button>
  );
}

function GridView({ projects }: { projects: typeof PROJECTS | readonly (typeof PROJECTS)[number][] }) {
  return (
    <div className="mx-auto grid max-w-screen grid-cols-12 gap-4 px-6 py-20 md:gap-6 md:px-12 md:py-28 lg:px-20">
      {projects.map((p, i) => (
        <GridCard key={p.slug} p={p} i={i} />
      ))}
    </div>
  );
}

function GridCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  // Alternate: 7/5, 5/7, 8/4, 4/8 asymmetry
  const pattern = [
    "col-span-12 md:col-span-7",
    "col-span-12 md:col-span-5 md:mt-20",
    "col-span-12 md:col-span-5",
    "col-span-12 md:col-span-7 md:mt-20",
  ];
  const cls = pattern[i % pattern.length];
  const aspect = i % 4 === 1 || i % 4 === 2 ? "aspect-[4/5]" : "aspect-[16/11]";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={cls}
    >
      <Link
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
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/55 via-transparent to-transparent"
          />
          <div className="absolute inset-x-5 top-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/85">
              {String(i + 1).padStart(3, "0")}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/85">
              {p.typology} · {p.year}
            </span>
          </div>
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
            <h3 className="font-display font-light text-bone leading-tight tracking-tight text-[clamp(1.25rem,2.2vw,2rem)]">
              {p.title}
            </h3>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bone text-midnight transition-transform duration-500 ease-editorial group-hover:scale-110 group-hover:rotate-[-8deg]">
              <ArrowIcon className="h-4 w-4 -rotate-45" />
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-6">
          <div>
            <p className="font-display italic text-[15px] leading-snug text-ink/65 max-w-[40ch]">
              {p.lead}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
              {p.city} · {p.area}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ListView({ projects }: { projects: typeof PROJECTS | readonly (typeof PROJECTS)[number][] }) {
  return (
    <div className="mx-auto max-w-screen px-6 py-12 md:px-12 md:py-20 lg:px-20">
      <ul className="divide-y divide-ink/10 border-y border-ink/10">
        {projects.map((p, i) => (
          <ListRow key={p.slug} p={p} i={i} />
        ))}
      </ul>
    </div>
  );
}

function ListRow({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  const [hover, setHover] = useState(false);
  return (
    <li onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="relative">
      <Link
        href={`/projects/${p.slug}`}
        className="group grid grid-cols-12 items-center gap-4 py-6 md:py-8"
        data-cursor="Enter"
      >
        <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40 md:col-span-1">
          {String(i + 1).padStart(3, "0")}
        </span>
        <span className="col-span-10 font-display font-light tracking-tight text-[clamp(1.4rem,3vw,2.5rem)] leading-[1.05] transition-[transform,color] duration-700 ease-editorial group-hover:translate-x-2 group-hover:text-midnight md:col-span-5">
          {p.title}
        </span>
        <span className="col-span-6 col-start-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55 md:col-span-3 md:col-start-auto">
          {p.typology}
        </span>
        <span className="col-span-6 text-[13px] text-ink/55 md:col-span-2 md:text-right">
          {p.city.split(" · ")[0]}
        </span>
        <span className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55 md:col-span-1 md:text-right">
          {p.year}
        </span>
      </Link>
      {/* Floating preview */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute right-4 top-1/2 z-20 hidden w-[22vw] max-w-[280px] -translate-y-1/2 overflow-hidden rounded-[1rem] transition-all duration-700 ease-editorial md:block",
          hover ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-3"
        )}
      >
        <div className="aspect-[4/5] w-full bg-alabaster-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img(p.seed, 800, 1000)} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </li>
  );
}
