"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import Eyebrow from "./Eyebrow";
import { Reveal } from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  tagline,
  align = "start",
  className,
  tone = "ink",
}: {
  eyebrow?: string;
  title: ReactNode;
  tagline?: ReactNode;
  align?: "start" | "center" | "split";
  className?: string;
  tone?: "ink" | "bone";
}) {
  const txt = tone === "bone" ? "text-bone" : "text-ink";
  if (align === "split") {
    return (
      <div
        className={cn(
          "grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end",
          txt,
          className
        )}
      >
        <div className="md:col-span-7">
          {eyebrow && (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h2
              className={cn(
                "mt-5 font-display font-light fluid-display",
                tone === "bone" ? "text-bone" : "text-ink"
              )}
            >
              {title}
            </h2>
          </Reveal>
        </div>
        {tagline && (
          <Reveal delay={0.15} className="md:col-span-4 md:col-start-9">
            <p
              className={cn(
                "max-w-[38ch] text-[15px] leading-relaxed",
                tone === "bone" ? "text-bone/65" : "text-ink/60"
              )}
            >
              {tagline}
            </p>
          </Reveal>
        )}
      </div>
    );
  }
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "",
        txt,
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow className="mx-auto">{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "mt-5 font-display font-light fluid-display",
            align === "center" && "mx-auto max-w-[16ch]"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {tagline && (
        <Reveal delay={0.15}>
          <p
            className={cn(
              "mt-6 text-[15px] leading-relaxed",
              align === "center" && "mx-auto max-w-[48ch]",
              tone === "bone" ? "text-bone/65" : "text-ink/60"
            )}
          >
            {tagline}
          </p>
        </Reveal>
      )}
    </div>
  );
}
