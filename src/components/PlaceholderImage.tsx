"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { img } from "@/lib/content";

export default function PlaceholderImage({
  seed,
  alt,
  className,
  width = 1200,
  height = 1500,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, (min-width: 640px) 70vw, 92vw",
}: {
  seed: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-alabaster-100",
        !loaded && "ph-shimmer",
        className
      )}
    >
      <Image
        src={img(seed, width, height)}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-cover transition-all duration-1000 ease-editorial will-change-[transform,filter,opacity]",
          loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-[1.04]"
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_rgba(49,8,31,0.22)_100%)]"
      />
    </div>
  );
}
