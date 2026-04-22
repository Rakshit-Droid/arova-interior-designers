import { cn } from "@/lib/cn";
import { ReactNode } from "react";

export default function Eyebrow({
  children,
  className,
  dot = true,
}: {
  children: ReactNode;
  className?: string;
  dot?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-current/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-current/70",
        className
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current/30" />
          <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}
