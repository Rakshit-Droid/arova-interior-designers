"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/content";
import Logo from "./Logo";
import { ArrowIcon } from "./Navigation";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 bg-midnight text-bone md:mt-40">
      {/* Curtain divider */}
      <div aria-hidden className="h-20 w-full bg-bone">
        <div className="h-full w-full rounded-b-[4rem] bg-midnight md:rounded-b-[6rem]" />
      </div>

      <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-16 pb-20 pt-4 md:grid-cols-12 md:pb-28">
          {/* Left: enormous CTA */}
          <div className="md:col-span-8">
            <div className="eyebrow text-bone/40">Commission</div>
            <motion.h2
              initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display font-light leading-[0.92] tracking-tighter2 text-[clamp(3rem,8vw,8rem)]"
            >
              Let&rsquo;s design the<br />
              <em className="font-normal italic text-bone/90">
                room you&rsquo;ll never leave
              </em>
              <span className="font-script text-bone/80"> .</span>
            </motion.h2>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-bone pl-6 pr-1 py-1 text-[14px] font-medium text-midnight transition-transform duration-500 ease-editorial active:scale-[0.97]"
                data-cursor="Begin"
              >
                <span>Start a conversation</span>
                <span className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-midnight text-bone ring-1 ring-midnight/40 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5">
                  <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
                </span>
              </Link>

              <a
                href={`mailto:${BRAND.email}`}
                className="u-reveal text-[14px] text-bone/70"
              >
                {BRAND.email}
              </a>
            </div>
          </div>

          {/* Right: address + social */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4 md:grid-cols-1 md:gap-10">
            <div>
              <div className="eyebrow text-bone/40">Studio</div>
              <address className="mt-3 not-italic text-[14px] leading-relaxed text-bone/75">
                {BRAND.address.split(" · ").map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </address>
            </div>
            <div>
              <div className="eyebrow text-bone/40">Index</div>
              <ul className="mt-3 space-y-1.5 text-[14px] text-bone/75">
                {[
                  ["/projects", "Projects"],
                  ["/services", "Services"],
                  ["/about", "Studio"],
                  ["/journal", "Journal"],
                  ["/contact", "Contact"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="u-reveal">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-bone/15 py-8 md:flex-row md:items-end md:justify-between">
          <Logo tone="bone" className="text-[56px] md:text-[92px]" />
          <div className="grid grid-cols-2 gap-8 text-[12px] text-bone/55 md:grid-cols-3">
            <div>
              <div className="eyebrow text-bone/35">Colophon</div>
              <div className="mt-2">Fraunces, Geist, Rustic Roadway</div>
            </div>
            <div>
              <div className="eyebrow text-bone/35">Follow</div>
              <div className="mt-2">@{BRAND.social.instagram}</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="eyebrow text-bone/35">© 2026</div>
              <div className="mt-2">
                Arova Design LLP · All rooms reserved
              </div>
            </div>
          </div>
        </div>

        {/* Oversized wordmark at the hem */}
        <motion.div
          aria-hidden
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="-mx-6 mt-10 overflow-hidden md:-mx-12 lg:-mx-20"
        >
          <div className="font-display font-light text-bone/10 leading-[0.8] tracking-tighter2 text-[clamp(7rem,26vw,26rem)] text-center">
            Arova
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
