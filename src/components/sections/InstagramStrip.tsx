"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BRAND, INSTAGRAM, img } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Navigation";

export default function InstagramStrip() {
  return (
    <section className="relative overflow-hidden bg-bone">
      <div className="mx-auto max-w-screen px-6 pt-28 md:px-12 md:pt-40 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <Reveal>
              <Eyebrow>@{BRAND.social.instagram}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display font-light fluid-display tracking-tight">
                Notes from the<br />
                atelier, weekly<span className="font-script text-midnight"> .</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.16}>
              <a
                href={`https://instagram.com/${BRAND.social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-bone pl-5 pr-1 py-1 text-[13px] font-medium text-ink transition-transform duration-500 ease-editorial active:scale-[0.97]"
                data-cursor="Follow"
              >
                <span>Follow the studio</span>
                <span className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-midnight text-bone transition-transform duration-500 ease-editorial group-hover:translate-x-0.5">
                  <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mt-14 overflow-hidden pb-20 md:pb-28">
        <div className="flex gap-4 px-6 md:gap-6 md:px-12 lg:px-20">
          {INSTAGRAM.map((post, i) => (
            <motion.figure
              key={post.id}
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative w-[70vw] shrink-0 overflow-hidden rounded-[1.25rem] bg-alabaster-100 sm:w-[44vw] md:w-[22vw] lg:w-[18vw]"
              style={{
                aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/5" : "1/1",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img(post.seed, 800, 1000)}
                alt={post.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/55 via-transparent to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p className="line-clamp-2 text-[12px] text-bone/85">
                  {post.caption}
                </p>
              </figcaption>
              <Link
                href={`https://instagram.com/${BRAND.social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Instagram"
                className="absolute inset-0"
                data-cursor="View"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
