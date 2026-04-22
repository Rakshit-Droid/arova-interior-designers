"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Rises a block with a soft blur-fade. Defaults are calibrated for editorial
 * pacing — 900ms + 16px travel + 8px blur.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.9,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Splits text into words and reveals each with a stagger — for headlines.
 */
export function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.045,
  duration = 0.9,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    shown: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  const child: Variants = {
    hidden: { y: "110%", opacity: 0 },
    shown: {
      y: "0%",
      opacity: 1,
      transition: { duration, ease },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ marginRight: "0.22em" }}
        >
          <motion.span
            variants={child}
            className={wordClassName}
            style={{ display: "inline-block", willChange: "transform" }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
