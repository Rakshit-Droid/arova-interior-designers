"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";
import { TESTIMONIALS } from "@/lib/content";
import { cn } from "@/lib/cn";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section className="relative bg-ink text-bone">
      <div className="mx-auto max-w-screen px-6 py-28 md:px-12 md:py-40 lg:px-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Reveal>
              <Eyebrow>Clients</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display font-light fluid-display text-bone">
                Words from the<br />
                <em className="italic">families</em> and<br />
                founders we serve
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-[34ch] text-[14px] leading-relaxed text-bone/55">
                Every Arova project is privately delivered. The voices below
                are a few who chose to speak on the record.
              </p>
            </Reveal>
          </div>

          <div className="relative md:col-span-8 md:pl-12">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={idx}
                initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -28, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="font-display font-light leading-none text-bone/15 absolute -left-4 -top-10 text-[10rem] md:-left-8 md:-top-16 md:text-[16rem]"
                >
                  &ldquo;
                </span>
                <p className="relative font-display font-light leading-[1.1] tracking-tight text-[clamp(1.5rem,2.8vw,2.6rem)] text-bone">
                  {t.quote}
                </p>
                <footer className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div>
                    <div className="text-[13px] font-medium text-bone">
                      {t.author}
                    </div>
                    <div className="text-[12px] text-bone/55">{t.role}</div>
                  </div>
                  <div className="h-6 w-px bg-bone/20" />
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
                    {t.project}
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-16 flex items-center gap-6 border-t border-bone/10 pt-6">
              <div className="font-mono text-[11px] tracking-widest text-bone/55">
                {String(idx + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
              </div>
              <div className="flex-1 flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setIdx(i)}
                    className={cn(
                      "h-px flex-1 overflow-hidden rounded-full transition-colors",
                      i === idx ? "bg-bone" : "bg-bone/15 hover:bg-bone/35"
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <IconBtn
                  aria-label="Previous"
                  onClick={() =>
                    setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
                  }
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                    <polyline points="15 6 9 12 15 18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </IconBtn>
                <IconBtn
                  aria-label="Next"
                  onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                    <polyline points="9 6 15 12 9 18" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </IconBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconBtn(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/20 text-bone transition-transform duration-500 ease-editorial hover:bg-bone hover:text-ink active:scale-[0.95]"
    />
  );
}
