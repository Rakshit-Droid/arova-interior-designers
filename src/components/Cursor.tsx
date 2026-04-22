"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A soft editorial cursor — a ringed inkblot that magnifies over interactive
 * elements and re-labels itself on data-cursor targets.
 * Active only on hover-capable devices.
 */
export default function Cursor() {
  const [hoverable, setHoverable] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 42, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 420, damping: 42, mass: 0.6 });

  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!media.matches) return;
    setHoverable(true);
    document.documentElement.classList.add("custom-cursor-on");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const inter = el.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]"
      ) as HTMLElement | null;
      if (inter) {
        const txt = inter.getAttribute("data-cursor");
        setLabel(txt);
        setScale(txt ? 3.4 : 2.2);
      } else {
        setLabel(null);
        setScale(1);
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("custom-cursor-on");
    };
  }, [visible, x, y]);

  if (!hoverable) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ translateX: springX, translateY: springY }}
        className="pointer-events-none fixed left-0 top-0 z-[80] mix-blend-difference"
      >
        <motion.div
          animate={{ scale, opacity: visible ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="relative -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className="flex items-center justify-center rounded-full border border-bone/60"
            style={{
              width: 14,
              height: 14,
              background: "rgba(244,242,237,0.0)",
            }}
          >
            {label && (
              <div
                ref={labelRef}
                className="font-mono text-[7px] uppercase tracking-[0.2em] text-bone whitespace-nowrap"
                style={{ transform: "scale(0.5)" }}
              >
                {label}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
