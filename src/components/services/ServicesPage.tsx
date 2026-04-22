"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { SERVICES, img } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Navigation";
import Link from "next/link";
import { cn } from "@/lib/cn";

export default function ServicesPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  const parY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <>
      {/* Header */}
      <section ref={headerRef} className="relative pt-36 md:pt-44">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <Reveal><Eyebrow>Practice</Eyebrow></Reveal>
          <motion.div style={{ y: parY }}>
            <Reveal delay={0.06}>
              <h1 className="mt-6 font-display font-light fluid-hero tracking-tighter2">
                Six ways of<br />
                <em className="italic text-midnight">entering a room</em>
                <span className="font-script text-midnight">.</span>
              </h1>
            </Reveal>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-12">
            <Reveal delay={0.12} className="md:col-span-6">
              <p className="max-w-[50ch] text-[15px] leading-relaxed text-ink/65">
                We don&rsquo;t sell one thing. We sell a way of looking. Which
                means every commission draws on the six disciplines below — in
                different amounts, at different speeds, for different reasons.
              </p>
            </Reveal>
            <Reveal delay={0.18} className="md:col-span-4 md:col-start-9">
              <div className="grid grid-cols-2 gap-4 rounded-[1.25rem] border border-ink/10 p-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                    Engagement
                  </div>
                  <div className="mt-2 font-display italic text-[17px]">
                    INR 4.2 Cr+
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                    Lead time
                  </div>
                  <div className="mt-2 font-display italic text-[17px]">
                    22–64 weeks
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service detail rows — zig-zag editorial */}
      <section className="relative mt-28 md:mt-40">
        {SERVICES.map((s, i) => (
          <ServiceRow key={s.index} s={s} i={i} />
        ))}
      </section>

      {/* Engagement models */}
      <section className="relative bg-alabaster/40">
        <div className="mx-auto max-w-screen px-6 py-28 md:px-12 md:py-40 lg:px-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal><Eyebrow>Engagement</Eyebrow></Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-6 font-display font-light fluid-display">
                  Three ways to <em className="italic text-midnight">work with us</em>
                  <span className="font-script text-midnight">.</span>
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ENGAGEMENT.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.06}>
                <DoubleBezel featured={i === 1}>
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div
                        className={cn(
                          "flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em]",
                          i === 1 ? "text-bone/60" : "text-ink/50"
                        )}
                      >
                        <span className="h-1 w-1 rounded-full bg-current" />
                        {e.tier}
                      </div>
                      <h3
                        className={cn(
                          "mt-4 font-display font-light tracking-tight text-[clamp(1.75rem,2.6vw,2.25rem)] leading-none",
                          i === 1 ? "text-bone" : "text-ink"
                        )}
                      >
                        {e.name}
                      </h3>
                      <p
                        className={cn(
                          "mt-3 font-display italic text-[17px]",
                          i === 1 ? "text-bone/70" : "text-ink/55"
                        )}
                      >
                        {e.from}
                      </p>
                      <div
                        className={cn(
                          "mt-6 h-px w-10",
                          i === 1 ? "bg-bone/30" : "bg-ink/15"
                        )}
                      />
                      <ul
                        className={cn(
                          "mt-6 space-y-3 text-[13px] leading-relaxed",
                          i === 1 ? "text-bone/80" : "text-ink/70"
                        )}
                      >
                        {e.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span
                              className={cn(
                                "mt-[0.4em] h-1 w-1 shrink-0 rounded-full",
                                i === 1 ? "bg-bone/60" : "bg-midnight"
                              )}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      data-cursor="Begin"
                      className={cn(
                        "group mt-8 inline-flex items-center gap-2 rounded-full pl-5 pr-1 py-1 text-[13px] font-medium transition-transform duration-500 ease-editorial active:scale-[0.97]",
                        i === 1
                          ? "bg-bone text-midnight"
                          : "bg-ink text-bone"
                      )}
                    >
                      Begin this tier
                      <span
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 ease-editorial group-hover:translate-x-0.5",
                          i === 1 ? "bg-midnight text-bone" : "bg-bone/10 text-bone"
                        )}
                      >
                        <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
                      </span>
                    </Link>
                  </div>
                </DoubleBezel>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-bone">
        <div className="mx-auto max-w-screen px-6 py-28 md:px-12 md:py-40 lg:px-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal><Eyebrow>Frequent Questions</Eyebrow></Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-6 font-display font-light fluid-display leading-none">
                  Before you<br />write to us
                  <span className="font-script text-midnight">.</span>
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <FAQList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceRow({ s, i }: { s: (typeof SERVICES)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const flip = i % 2 === 1;

  return (
    <div ref={ref} className="relative">
      <div className="mx-auto max-w-screen px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div
          className={cn(
            "grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center",
            flip && "md:[&>*:first-child]:order-2"
          )}
        >
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-alabaster-100">
              <motion.div style={{ y }} className="absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(`service-${s.index}`, 1000, 1300)}
                  alt={s.title}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/25 via-transparent to-transparent"
              />
              <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/85">
                {s.index} / 06
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <div className="eyebrow text-ink/50">Practice {s.index}</div>
            </Reveal>
            <Reveal delay={0.06}>
              <h3 className="mt-5 font-display font-light tracking-tight text-[clamp(2.25rem,5vw,4.25rem)] leading-[0.96]">
                {s.title}
                <span className="font-script text-midnight">.</span>
              </h3>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-[48ch] text-[15px] leading-relaxed text-ink/70">
                {s.body}
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {s.bullets.map((b, k) => (
                <Reveal key={b} delay={0.14 + k * 0.04}>
                  <div className="flex items-start gap-3 border-t border-ink/10 pt-3 text-[13px] text-ink/70">
                    <span className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-midnight" />
                    <span>{b}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DoubleBezel({
  children,
  featured,
}: {
  children: React.ReactNode;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[2rem] p-1.5 ring-1",
        featured
          ? "bg-midnight/10 ring-midnight/20"
          : "bg-ink/5 ring-ink/10"
      )}
    >
      <div
        className={cn(
          "h-full rounded-[calc(2rem-0.375rem)] p-8 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
          featured ? "bg-midnight text-bone" : "bg-bone"
        )}
      >
        {children}
      </div>
    </div>
  );
}

const ENGAGEMENT = [
  {
    tier: "I",
    name: "Design Only",
    from: "From INR 85 L",
    bullets: [
      "Concept, development & documentation",
      "Bi-weekly reviews for 16 weeks",
      "FF&E drawings & specs",
      "Handover to contractor of your choice",
    ],
  },
  {
    tier: "II",
    name: "Design & Oversight",
    from: "From INR 1.8 Cr",
    bullets: [
      "Everything in Design Only",
      "Weekly site attendance",
      "Vendor management by Arova",
      "Snag list & punch through to handover",
    ],
  },
  {
    tier: "III",
    name: "Turnkey",
    from: "From INR 4.2 Cr",
    bullets: [
      "End-to-end delivery, single contract",
      "Procurement across 22 countries",
      "6-month aftercare & concierge",
      "Signed & numbered custom pieces",
    ],
  },
] as const;

const FAQS = [
  {
    q: "How long does a typical project take?",
    a: "A penthouse averages 32–42 weeks from first sketch to handover. A villa, 46–64. A café, 18–24. We quote timelines against your brief, not against an average.",
  },
  {
    q: "Do you work outside Telangana?",
    a: "Yes. Forty-one percent of our delivered projects are outside Hyderabad — most recently in Bengaluru, Mumbai, Goa, Colombo and Dubai.",
  },
  {
    q: "Can we use our own architect / contractor?",
    a: "On Design Only engagements, yes — we hand off documentation to your chosen team. On Turnkey, no; we deliver with our own. On Oversight, we coordinate with yours.",
  },
  {
    q: "Is there a minimum project size?",
    a: "Our floor is approximately INR 85 L in design fees. Below that, we recommend excellent studios we trust and respect.",
  },
  {
    q: "Do you renovate, or only new-build?",
    a: "Both. About a third of every year is renovation work — often the most interesting rooms we build.",
  },
];

function FAQList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-ink/10 border-y border-ink/10">
      {FAQS.map((f, i) => (
        <li key={f.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="group flex w-full items-start justify-between gap-8 py-6 text-left md:py-8"
            data-cursor={open === i ? "Close" : "Open"}
          >
            <div className="flex-1">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-light tracking-tight text-[clamp(1.25rem,2.2vw,1.75rem)] leading-tight">
                  {f.q}
                </span>
              </div>
              <motion.div
                initial={false}
                animate={{
                  height: open === i ? "auto" : 0,
                  opacity: open === i ? 1 : 0,
                }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: "hidden" }}
              >
                <p className="mt-4 max-w-[60ch] pl-12 text-[14px] leading-relaxed text-ink/65">
                  {f.a}
                </p>
              </motion.div>
            </div>
            <motion.span
              animate={{ rotate: open === i ? 45 : 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 flex h-10 w-10 items-center justify-center rounded-full border border-ink/15"
            >
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-3.5 w-3.5">
                <line x1="7" y1="1" x2="7" y2="13" />
                <line x1="1" y1="7" x2="13" y2="7" />
              </svg>
            </motion.span>
          </button>
        </li>
      ))}
    </ul>
  );
}
