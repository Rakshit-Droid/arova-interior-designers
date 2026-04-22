"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * A magnetic button that pulls slightly toward the cursor. Uses motion values
 * exclusively — no setState on move, so it stays at 60fps on mobile.
 */
export default function MagneticButton({
  children,
  className,
  strength = 22,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.5 });
  const y = useSpring(my, { stiffness: 220, damping: 18, mass: 0.5 });
  const rotate = useTransform(x, (v) => v * 0.06);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set(((e.clientX - cx) / rect.width) * strength);
    my.set(((e.clientY - cy) / rect.height) * strength);
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  const Comp = as === "span" ? motion.span : motion.div;

  return (
    <Comp
      ref={ref as never}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y, rotate }}
      className={cn("inline-block", className)}
    >
      {children}
    </Comp>
  );
}
