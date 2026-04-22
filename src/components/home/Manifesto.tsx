"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";

const PHRASES = [
  { bold: "We don't decorate rooms.", soft: "We read them." },
  { bold: "We build one house a year.", soft: "Sometimes two." },
  { bold: "The first thing we draw", soft: "is always the light." },
];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="relative bg-bone">
      <div className="mx-auto max-w-screen px-6 py-28 md:px-12 md:py-40 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow>Manifesto</Eyebrow>
            </Reveal>
            <motion.div
              style={{ y }}
              className="mt-8 hidden md:block"
            >
              <div className="eyebrow text-ink/40">Studio No.</div>
              <div className="mt-2 font-mono text-[11px] text-ink/55">
                0014 · Hyderabad
              </div>
              <div className="mt-12 h-px w-12 bg-ink/15" />
              <div className="mt-12 font-display italic text-[20px] leading-snug text-ink/65">
                &ldquo;A room that listens<br />speaks for decades.&rdquo;
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                — Aakriti Vemuri, Principal
              </div>
            </motion.div>
          </div>

          <div className="md:col-span-8 space-y-12 md:space-y-16">
            {PHRASES.map((p, i) => (
              <Reveal key={i} delay={i * 0.1} y={36}>
                <p className="font-display font-light tracking-tight text-[clamp(2.25rem,5.4vw,4.75rem)] leading-[0.98]">
                  <span className="text-ink">{p.bold}</span>{" "}
                  <span className="italic text-midnight">{p.soft}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
