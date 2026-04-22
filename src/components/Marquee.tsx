"use client";

import { cn } from "@/lib/cn";
import { ReactNode } from "react";

/**
 * CSS-only infinite marquee. Children are rendered twice for a seamless loop.
 * Memo-safe — pure transform, no JS per frame.
 */
export default function Marquee({
  children,
  reverse = false,
  speed = 40,
  pauseOnHover = false,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("group relative w-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-[4vw] will-change-transform",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        <div className="flex shrink-0 items-center gap-[4vw]">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-[4vw]">
          {children}
        </div>
      </div>
    </div>
  );
}
