"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROCESS, img } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";

const TEAM = [
  { name: "Aakriti Vemuri", role: "Principal · Founder", since: "2014", seed: "team-01" },
  { name: "Ishaan Mahajan", role: "Head of Interior Architecture", since: "2017", seed: "team-02" },
  { name: "Meera Kondapalli", role: "Head of Atelier", since: "2018", seed: "team-03" },
  { name: "Rudra Yellapragada", role: "Senior Project Director", since: "2019", seed: "team-04" },
  { name: "Tara Saldanha", role: "Curator · Art & Object", since: "2020", seed: "team-05" },
  { name: "Ahsan Syed", role: "Head of Site", since: "2021", seed: "team-06" },
];

const VALUES = [
  {
    n: "I",
    t: "Listen before you draw",
    b: "We spend the first three weeks refusing to sketch. We walk the site. We cook in the kitchen. We sit in the place the sofa will go.",
  },
  {
    n: "II",
    t: "One idea, drawn once",
    b: "Every room has a single governing idea. If we can&rsquo;t say it in eight words, we&rsquo;re not ready to build it.",
  },
  {
    n: "III",
    t: "Pay the craftspeople",
    b: "The difference between a good and great room is the person sanding the oak. We pay them what the work is worth.",
  },
  {
    n: "IV",
    t: "Deliver the date",
    b: "Ninety-eight percent of Arova projects are delivered on the day we promised at contract. The two percent that aren&rsquo;t, we explain before they find out.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroP } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroTitleY = useTransform(heroP, [0, 1], ["0%", "-10%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-36 md:pt-44">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <Reveal><Eyebrow>The Studio · Est. 2014</Eyebrow></Reveal>
          <motion.div style={{ y: heroTitleY }}>
            <Reveal delay={0.06}>
              <h1 className="mt-6 font-display font-light fluid-hero tracking-tighter2 max-w-[14ch]">
                A studio of<br />
                <em className="italic text-midnight">eleven</em>
                <span className="font-script text-midnight">,</span> in a
                <br /> villa on Road No. 12
                <span className="font-script text-midnight">.</span>
              </h1>
            </Reveal>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
            <Reveal delay={0.12} className="md:col-span-6">
              <p className="max-w-[50ch] text-[15px] leading-relaxed text-ink/65">
                Arova was founded by Aakriti Vemuri in 2014, in a borrowed
                office above a tailor&rsquo;s shop in Secunderabad. Twelve
                years later we are still a small studio — eleven
                craftspeople in a restored 1952 villa, designing
                deliberately, rarely, and without shortcuts.
              </p>
            </Reveal>
            <Reveal delay={0.18} className="md:col-span-4 md:col-start-9">
              <div className="rounded-[1.25rem] border border-ink/10 bg-bone p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                  Principal in residence
                </div>
                <div className="mt-3 font-display italic text-[20px]">
                  Aakriti Vemuri
                </div>
                <div className="mt-1 text-[13px] text-ink/55">
                  AA Dip · RIBA · AD100 2024
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portrait panel */}
      <section className="relative mt-24 md:mt-36">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-7">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] bg-alabaster-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img("about-studio-01", 1800, 1100)}
                  alt="The Arova atelier, Hyderabad"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:mt-24">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-alabaster-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img("about-studio-02", 1000, 1300)}
                  alt="Principal Aakriti Vemuri in studio"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-bone">
        <div className="mx-auto max-w-screen px-6 py-28 md:px-12 md:py-40 lg:px-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal><Eyebrow>What we believe</Eyebrow></Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-6 font-display font-light fluid-display leading-none">
                  Four principles<br />
                  <em className="italic text-midnight">we don&rsquo;t break</em>
                  <span className="font-script text-midnight">.</span>
                </h2>
              </Reveal>
            </div>
            <ul className="md:col-span-8 md:col-start-5 divide-y divide-ink/10 border-y border-ink/10">
              {VALUES.map((v, i) => (
                <Reveal key={v.n} delay={i * 0.06}>
                  <li className="grid grid-cols-12 gap-4 py-8">
                    <span className="col-span-12 font-display italic font-light text-[clamp(2.25rem,3.4vw,2.75rem)] leading-none text-midnight md:col-span-2">
                      {v.n}
                    </span>
                    <div className="col-span-12 md:col-span-10">
                      <h3 className="font-display font-light tracking-tight text-[clamp(1.5rem,2.4vw,1.9rem)]">
                        {v.t}
                      </h3>
                      <p
                        className="mt-3 max-w-[55ch] text-[14px] leading-relaxed text-ink/65"
                        dangerouslySetInnerHTML={{ __html: v.b }}
                      />
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Full process timeline — five sticky acts */}
      <section className="relative bg-midnight text-bone">
        <div className="mx-auto max-w-screen px-6 pt-28 md:px-12 md:pt-40 lg:px-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal><Eyebrow>Method · In Full</Eyebrow></Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-6 font-display font-light fluid-display">
                  Every house passes<br />
                  <em className="italic">through five acts</em>
                  <span className="font-script text-bone/80">.</span>
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <Reveal delay={0.12}>
                <p className="max-w-[38ch] text-[14px] leading-relaxed text-bone/60">
                  Five acts, one reason: we&rsquo;d rather be late
                  to a decision than wrong about it.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="relative mt-20">
          {PROCESS.map((p, i) => (
            <ProcessAct key={p.step} p={p} i={i} total={PROCESS.length} />
          ))}
        </div>

        <div className="mx-auto max-w-screen px-6 pb-28 pt-20 md:px-12 md:pb-40 lg:px-20">
          <div className="grid grid-cols-2 gap-6 border-t border-bone/15 pt-8 text-[12px] text-bone/60 md:grid-cols-4">
            {[
              ["Median timeline", "38 weeks"],
              ["Site visits / project", "124 avg"],
              ["Drawings / project", "680 avg"],
              ["On-time handovers", "98.1%"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-mono uppercase tracking-[0.22em] text-bone/40">
                  {k}
                </div>
                <div className="mt-2 font-display italic text-[20px] text-bone">
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative bg-bone">
        <div className="mx-auto max-w-screen px-6 py-28 md:px-12 md:py-40 lg:px-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal><Eyebrow>The Eleven</Eyebrow></Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-6 font-display font-light fluid-display">
                  The people<br />
                  <em className="italic text-midnight">in the villa</em>
                  <span className="font-script text-midnight">.</span>
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <Reveal delay={0.1}>
                <p className="max-w-[38ch] text-[14px] leading-relaxed text-ink/60">
                  Six here, five across our ateliers in Jaipur, Jodhpur and a
                  stone yard outside Udaipur.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.04}>
                <figure className="group">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1rem] bg-alabaster-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img(t.seed, 600, 800)}
                      alt={t.name}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.05]"
                    />
                    <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
                  </div>
                  <figcaption className="mt-4">
                    <div className="font-display italic text-[17px] text-ink">
                      {t.name}
                    </div>
                    <div className="mt-1 text-[12px] text-ink/55">{t.role}</div>
                    <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                      Since {t.since}
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProcessAct({
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
      className="sticky top-0 flex min-h-[90vh] items-center px-6 md:px-12 lg:px-20"
      style={{ zIndex: 10 + i }}
    >
      <div className="mx-auto grid w-full max-w-screen grid-cols-12 items-center gap-6">
        <div className="col-span-12 md:col-span-2">
          <div className="font-display italic font-light leading-none text-[clamp(3rem,8vw,7rem)] text-bone/85">
            {p.step}
          </div>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
            Act {String(i + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <h3 className="font-display font-light leading-[0.95] tracking-tighter2 text-[clamp(2.5rem,7vw,6rem)] text-bone">
            {p.name}
            <span className="font-script text-bone/80">.</span>
          </h3>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-bone/65">
            {p.body}
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 md:col-start-10">
          <div className="rounded-[1rem] bg-bone/5 p-5 ring-1 ring-bone/10 backdrop-blur-xl">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
              Timeline
            </div>
            <div className="mt-2 font-display italic text-[20px] text-bone">
              {p.weeks}
            </div>
            <div className="mt-6 h-px w-10 bg-bone/25" />
            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/45">
              Deliverable
            </div>
            <div className="mt-1 text-[13px] text-bone/75">
              {["Site report", "Concept deck", "Technical set", "Weekly report", "Aftercare log"][i]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
