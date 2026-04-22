"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { JOURNAL, img } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Navigation";

export default function JournalArticle({
  article,
  next,
}: {
  article: (typeof JOURNAL)[number];
  next: (typeof JOURNAL)[number];
}) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 160, damping: 28 });

  return (
    <>
      {/* Reading progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-[75] h-[2px] origin-left bg-midnight"
      />

      {/* Header */}
      <section className="relative pt-36 md:pt-44">
        <div className="mx-auto max-w-[900px] px-6 md:px-12">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-[12px] text-ink/55 transition-colors hover:text-ink"
            data-cursor="Back"
          >
            <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
            <span>All essays</span>
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <Eyebrow>{article.category}</Eyebrow>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
              {article.date} · {article.readTime}
            </span>
          </div>
          <Reveal delay={0.04}>
            <h1 className="mt-6 font-display font-light fluid-hero tracking-tighter2">
              {article.title}
              <span className="font-script text-midnight">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-[52ch] font-display italic text-[22px] leading-snug text-ink/65">
              {article.dek}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-alabaster-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img("author-ak", 80, 80)} alt="Author" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-[13px] font-medium">Aakriti Vemuri</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/50">
                  Principal · Arova
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hero image */}
      <section className="relative mt-16 md:mt-24">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] bg-alabaster-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img(article.seed, 2000, 1125)}
                alt={article.title}
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/80">
                Field note · {article.date}
              </figcaption>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="relative mt-16 md:mt-24">
        <article className="mx-auto max-w-[760px] px-6 md:px-0">
          <Reveal>
            <p className="font-display font-light leading-[1.35] text-[clamp(1.25rem,1.8vw,1.6rem)] text-ink/90">
              <span className="float-left mr-3 mt-2 font-display font-light leading-none text-midnight text-[clamp(3.5rem,6.5vw,6rem)]">
                T
              </span>
              he first thing you touch in a house is almost always the door
              handle. It&rsquo;s the house&rsquo;s handshake, its first word
              out loud. And yet almost no client we&rsquo;ve worked with, in
              twelve years of practice, has wanted to talk about it.
            </p>
          </Reveal>

          <div className="mt-10 space-y-8 text-[17px] leading-[1.75] text-ink/78">
            <Reveal>
              <p>
                In the atelier we weigh every door handle before it&rsquo;s
                fitted. It&rsquo;s a small ritual — a Jodhpur brass sample, a
                jeweller&rsquo;s scale, a notebook. The target is a gram or two
                over what the visitor expects. Not enough to be heavy. Just
                enough that the hand pauses, and the house has a moment to say
                hello.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display font-light text-[clamp(1.5rem,2.4vw,2rem)] leading-tight">
                A grammar of weight
              </h2>
            </Reveal>
            <Reveal>
              <p>
                A doorknob has a grammar, even if nobody writes it down. A
                pantry handle weighs less than a front door. A wardrobe pull
                weighs less than a pantry handle. A bathroom lock weighs least
                of all — because it is touched most often, and because its job
                is to reassure, not to impress.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Get the grammar wrong, and the house stutters. A monumental
                brass pull on a pantry cupboard makes you flinch every morning.
                A paper-light handle on a nine-foot front door makes the house
                feel like a hotel.
              </p>
            </Reveal>

            <Reveal>
              <blockquote className="border-l-2 border-midnight pl-6 font-display italic text-[clamp(1.5rem,2.4vw,2rem)] leading-tight text-ink">
                The best door handle is the one you don&rsquo;t think about —
                and then, one evening, you do.
              </blockquote>
            </Reveal>

            <Reveal>
              <p>
                The best handles we&rsquo;ve ever fit were made by a father and
                son in Jaipur whose workshop is behind a leather shop that only
                opens on Tuesdays. The father was trained as a silver engraver
                and has been bending brass for forty-one years. The son has
                been doing it for thirteen. The handles take eleven days each
                and cost about the same as a good pair of shoes.
              </p>
            </Reveal>
            <Reveal>
              <p>
                When we handed the first one over to a client, she held it
                for a minute without saying anything. Then she walked into her
                new living room, came back, and asked if we could change the
                one on her bedroom door too.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-16 border-t border-ink/10 pt-8 text-[13px] text-ink/55">
              Filed under <em>{article.category}</em> · {article.readTime} read · {article.date}
            </div>
          </Reveal>
        </article>
      </section>

      {/* Up next */}
      <section className="relative mt-24 md:mt-36">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <Link
            href={`/journal/${next.slug}`}
            className="group grid grid-cols-1 gap-8 border-t border-ink/10 pt-12 md:grid-cols-12 md:gap-10 md:pt-16"
            data-cursor="Next"
          >
            <div className="md:col-span-4">
              <Eyebrow>Up Next</Eyebrow>
              <h3 className="mt-5 font-display font-light tracking-tight text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.05]">
                {next.title}
                <span className="font-script text-midnight">.</span>
              </h3>
              <p className="mt-4 max-w-[40ch] text-[14px] text-ink/60">
                {next.dek}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium">
                <span className="u-reveal">Read next</span>
                <ArrowIcon className="h-4 w-4 -rotate-45" />
              </span>
            </div>
            <div className="md:col-span-8">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] bg-alabaster-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(next.seed, 1600, 900)}
                  alt={next.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.035]"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
