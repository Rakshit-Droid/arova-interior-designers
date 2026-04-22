import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ArrowIcon } from "./Navigation";

/**
 * Nested CTA with Button-in-Button trailing icon pattern. The arrow sits in
 * its own circular wrapper flush with the right inner padding.
 */
export default function PillButton({
  href,
  children,
  variant = "midnight",
  size = "md",
  className,
  dataCursor = "Open",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "midnight" | "bone" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  dataCursor?: string;
  external?: boolean;
}) {
  const variants = {
    midnight:
      "bg-midnight text-bone ring-1 ring-midnight/20",
    bone:
      "bg-bone text-midnight ring-1 ring-ink/10",
    ghost:
      "bg-transparent text-ink ring-1 ring-ink/15 hover:bg-ink/5",
  }[variant];

  const iconVariants = {
    midnight: "bg-bone/10 ring-1 ring-bone/15 text-bone",
    bone: "bg-midnight text-bone ring-1 ring-midnight/30",
    ghost: "bg-ink/10 text-ink ring-1 ring-ink/10",
  }[variant];

  const sizing = {
    sm: "pl-4 pr-1 py-1 text-[12px] [&_.btn-icon]:h-7 [&_.btn-icon]:w-7",
    md: "pl-6 pr-1 py-1 text-[13px] [&_.btn-icon]:h-9 [&_.btn-icon]:w-9",
    lg: "pl-8 pr-1.5 py-1.5 text-[14px] [&_.btn-icon]:h-11 [&_.btn-icon]:w-11",
  }[size];

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      {...props}
      data-cursor={dataCursor}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full font-medium transition-transform duration-500 ease-editorial active:scale-[0.97]",
        variants,
        sizing,
        className
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "btn-icon ml-1 flex items-center justify-center rounded-full transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
          iconVariants
        )}
      >
        <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
      </span>
    </Link>
  );
}
