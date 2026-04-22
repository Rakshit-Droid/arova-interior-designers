"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { JOURNAL, img } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Navigation";

export default function JournalIndex() {
  const featured = JOURNAL[0];
  const rest = JOURNAL.slice(1);

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 md:pt-44">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <Reveal><Eyebrow>The Journal</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display font-light fluid-hero tracking-tighter2 max-w-[16ch]">
              Field notes<span className="font-script text-midnight">,</span><br />
              <em className="italic text-midnight">from a studio</em> that<br />
              talks more than it posts
              <span className="font-script text-midnight">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-10 max-w-[52ch] text-[15px] leading-relaxed text-ink/65">
              Essays, travel notes, material studies, long interviews with
              people who make things with their hands. One new piece every
              other Tuesday, for the last eight years.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured article */}
      <section className="relative mt-20 md:mt-28">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <Link
            href={`/journal/${featured.slug}`}
            className="group grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10"
            data-cursor="Read"
          >
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10.5] w-full overflow-hidden rounded-[1.5rem] bg-alabaster-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(featured.seed, 1800, 1200)}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.035]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
                />
                <div className="absolute left-5 top-5 flex gap-2">
                  <span className="rounded-full bg-bone/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-midnight">
                    Featured
                  </span>
                  <span className="rounded-full border border-bone/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-bone">
                    {featured.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 md:flex md:flex-col md:justify-end">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-5 font-display font-light tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02]">
                {featured.title}
                <span className="font-script text-midnight">.</span>
              </h2>
              <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-ink/65">
                {featured.dek}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium">
                <span className="u-reveal">Read the essay</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                  <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
                </span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Rest as editorial list */}
      <section className="relative mt-24 md:mt-36">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <div className="flex items-end justify-between border-t border-ink/10 pb-8 pt-6">
            <div className="eyebrow text-ink/50">All essays</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
              {JOURNAL.length.toString().padStart(3, "0")} total
            </div>
          </div>

          <ul className="divide-y divide-ink/10 border-t border-ink/10">
            {rest.map((j, i) => (
              <motion.li
                key={j.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/journal/${j.slug}`}
                  className="group grid grid-cols-12 items-center gap-4 py-7 md:py-10"
                  data-cursor="Read"
                >
                  <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45 md:col-span-1">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <div className="col-span-10 md:col-span-6">
                    <div className="font-display font-light tracking-tight text-[clamp(1.5rem,2.8vw,2.25rem)] leading-[1.05] transition-[transform,color] duration-700 ease-editorial group-hover:translate-x-2 group-hover:text-midnight">
                      {j.title}
                    </div>
                    <div className="mt-2 max-w-[50ch] text-[13px] text-ink/55">
                      {j.dek}
                    </div>
                  </div>
                  <span className="col-span-6 col-start-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50 md:col-span-2 md:col-start-auto">
                    {j.category}
                  </span>
                  <span className="col-span-4 text-right font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50 md:col-span-2">
                    {j.readTime}
                  </span>
                  <span className="col-span-2 text-right font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50 md:col-span-1">
                    {j.date.split(",")[0].split(" ").slice(0, 2).join(" ")}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative mt-28 md:mt-40">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-midnight p-1.5 ring-1 ring-midnight/30">
            <div className="relative rounded-[calc(2rem-0.375rem)] bg-midnight px-8 py-14 text-bone shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:px-14 md:py-20">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                  <Eyebrow>Dispatch</Eyebrow>
                  <h3 className="mt-5 font-display font-light tracking-tight text-[clamp(2rem,4vw,3rem)] leading-[1.05]">
                    A quiet letter,<br />
                    <em className="italic">every other Tuesday</em>
                    <span className="font-script">.</span>
                  </h3>
                  <p className="mt-5 max-w-[42ch] text-[14px] leading-relaxed text-bone/60">
                    One essay, one project in progress, one material we&rsquo;re
                    newly obsessed with. Nothing else, ever.
                  </p>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="md:col-span-5"
                >
                  <label className="eyebrow block text-bone/45">Email</label>
                  <div className="mt-3 flex items-center gap-1 rounded-full bg-bone/5 p-1 ring-1 ring-bone/10 backdrop-blur-xl">
                    <input
                      required
                      type="email"
                      placeholder="you@somewhere.world"
                      className="flex-1 bg-transparent px-5 py-2 text-[14px] text-bone placeholder:text-bone/40 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="group flex items-center gap-1 rounded-full bg-bone px-5 py-2 text-[13px] font-medium text-midnight transition-transform duration-500 ease-editorial active:scale-[0.96]"
                    >
                      Subscribe
                      <ArrowIcon className="h-3.5 w-3.5 -rotate-45 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5" />
                    </button>
                  </div>
                  <p className="mt-3 text-[11px] text-bone/45">
                    No noise. Unsubscribe in a single tap.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
