"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { BRAND } from "@/lib/content";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Index" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Studio" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating glass pill */}
      <div className="fixed inset-x-0 top-0 z-[70] flex justify-center pt-4 md:pt-6">
        <motion.nav
          initial={false}
          animate={{
            width: scrolled ? "min(92vw, 880px)" : "min(96vw, 1400px)",
          }}
          transition={{ type: "spring", stiffness: 140, damping: 22 }}
          className={cn(
            "relative flex h-14 items-center justify-between rounded-full px-2 pl-5 md:h-16 md:px-3 md:pl-6",
            "border border-ink/10 bg-bone/70 backdrop-blur-xl shadow-[0_20px_60px_-24px_rgba(28,5,18,0.18)]"
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2"
            data-cursor="Home"
          >
            <Logo className="h-7 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-500 ease-editorial",
                    active ? "text-midnight" : "text-ink/65 hover:text-ink"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-midnight"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="group relative hidden md:flex items-center gap-1.5 rounded-full bg-midnight pl-5 pr-1 py-1 text-[13px] font-medium text-bone transition-transform duration-500 ease-editorial active:scale-[0.97]"
              data-cursor="Begin"
            >
              <span>Commission</span>
              <span className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-bone/10 ring-1 ring-bone/15 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5">
                <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
              </span>
            </Link>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-bone/70 text-ink md:h-12 md:w-12 md:hidden"
            >
              <HamburgerMorph open={open} />
            </button>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative hidden h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-bone/70 text-ink md:flex"
            >
              <HamburgerMorph open={open} />
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && <FullscreenMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function HamburgerMorph({ open }: { open: boolean }) {
  return (
    <div className="relative h-4 w-5">
      <motion.span
        aria-hidden
        initial={false}
        animate={{
          top: open ? 7 : 3,
          rotate: open ? 45 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 right-0 h-[1.5px] rounded-full bg-current"
      />
      <motion.span
        aria-hidden
        initial={false}
        animate={{
          top: open ? 7 : 11,
          rotate: open ? -45 : 0,
        }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 right-0 h-[1.5px] rounded-full bg-current"
      />
    </div>
  );
}

function FullscreenMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      key="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[65] flex flex-col"
    >
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-midnight text-bone"
      />
      <div className="relative z-10 flex min-h-[100dvh] flex-col px-6 pt-28 pb-12 md:px-16">
        <div className="eyebrow text-bone/50">Menu</div>
        <div className="mt-10 flex flex-1 flex-col gap-2 md:gap-4">
          {NAV_LINKS.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ y: 56, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 56, opacity: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25 + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={item.href}
                onClick={onClose}
                className="group flex items-end justify-between gap-6 border-b border-bone/15 py-3 md:py-5"
              >
                <span className="font-display font-light tracking-tight text-[clamp(2.5rem,9vw,7rem)] leading-none">
                  {item.label}
                </span>
                <span className="eyebrow hidden text-bone/40 md:block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-2 gap-8 text-[13px] text-bone/70 md:grid-cols-4"
        >
          <div>
            <div className="eyebrow text-bone/40">Studio</div>
            <div className="mt-2">{BRAND.address}</div>
          </div>
          <div>
            <div className="eyebrow text-bone/40">Contact</div>
            <div className="mt-2">{BRAND.email}</div>
            <div>{BRAND.phone}</div>
          </div>
          <div>
            <div className="eyebrow text-bone/40">Follow</div>
            <div className="mt-2">Instagram · @{BRAND.social.instagram}</div>
            <div>LinkedIn · {BRAND.social.linkedin}</div>
          </div>
          <div>
            <div className="eyebrow text-bone/40">Hours</div>
            <div className="mt-2">Mon — Fri · 10:00 — 19:00</div>
            <div>Site visits by appointment</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}
