import { cn } from "@/lib/cn";

/**
 * Arova wordmark — a compressed editorial serif with a single accent
 * swash in Rustic Roadway on the 'a', giving the brand a signature tick.
 */
export default function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "bone";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-[0.15em] font-display font-light leading-none tracking-tight",
        tone === "bone" ? "text-bone" : "text-ink",
        className ?? "text-[22px]"
      )}
      aria-label="Arova"
    >
      <span className="italic tracking-[-0.04em]">A</span>
      <span className="tracking-[-0.03em]">rova</span>
      <span
        aria-hidden
        className="font-script translate-y-[0.1em] text-[1.15em] leading-none text-midnight"
        style={{ marginLeft: "-0.15em" }}
      >
        .
      </span>
    </span>
  );
}
