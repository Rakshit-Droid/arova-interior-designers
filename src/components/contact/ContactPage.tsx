"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/content";
import Eyebrow from "../Eyebrow";
import { Reveal } from "../Reveal";
import { ArrowIcon } from "../Navigation";
import { cn } from "@/lib/cn";

type FormState = {
  name: string;
  email: string;
  phone: string;
  typology: string;
  budget: string;
  message: string;
  timeline: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  typology: "",
  budget: "",
  message: "",
  timeline: "",
};

const TYPOLOGIES = ["Penthouse", "Private Villa", "Hospitality", "Corporate", "Other"];
const BUDGETS = ["Under 1 Cr", "1 – 3 Cr", "3 – 7 Cr", "7 – 15 Cr", "15 Cr+"];
const TIMELINES = ["Within 6 months", "6 – 12 months", "12 – 24 months", "Still deciding"];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const upd = (k: keyof FormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  function validate() {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please share a name";
    if (!form.email.trim()) e.email = "An email, to reply to";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "That email looks incomplete";
    if (!form.message.trim() || form.message.trim().length < 20) e.message = "A few sentences will help us reply well";
    if (!form.typology) e.typology = "Which kind of room?";
    return e;
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
    setTimeout(() => {
      setForm(INITIAL);
      setStatus("idle");
    }, 4200);
  }

  return (
    <>
      {/* Header */}
      <section className="relative pt-36 md:pt-44">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <Reveal><Eyebrow>Commission</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display font-light fluid-hero tracking-tighter2 max-w-[15ch]">
              Tell us about<br />
              <em className="italic text-midnight">the room</em><br />
              you&rsquo;re after
              <span className="font-script text-midnight">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-10 max-w-[52ch] text-[15px] leading-relaxed text-ink/65">
              A senior member of the studio reads every note that arrives.
              Replies come within two working days, usually with three or
              four questions of our own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="relative mt-16 md:mt-24">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            {/* Form */}
            <div className="md:col-span-7">
              <div className="rounded-[2rem] bg-ink/5 p-1.5 ring-1 ring-ink/5">
                <div className="relative rounded-[calc(2rem-0.375rem)] bg-bone p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] md:p-10">
                  <AnimatePresence mode="wait">
                    {status === "sent" ? (
                      <motion.div
                        key="sent"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex min-h-[420px] flex-col items-start justify-center gap-6"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-midnight text-bone">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-6 w-6">
                            <polyline points="5 12 10 17 20 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <Eyebrow>Letter received</Eyebrow>
                          <h3 className="mt-4 font-display font-light text-[clamp(1.75rem,3vw,2.5rem)] leading-none">
                            Thank you, {form.name.split(" ")[0] || "friend"}
                            <span className="font-script text-midnight">.</span>
                          </h3>
                          <p className="mt-5 max-w-[46ch] text-[14px] leading-relaxed text-ink/65">
                            We&rsquo;ve logged your note in our studio journal.
                            A reply will arrive from a senior member of the team
                            within two working days — usually with a few
                            questions of our own.
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={submit}
                        className="space-y-7"
                      >
                        <Field
                          label="Your name"
                          hint="Required"
                          error={errors.name}
                          value={form.name}
                          onChange={(v) => upd("name", v)}
                          placeholder="Rohini Achanta"
                        />
                        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                          <Field
                            label="Email"
                            type="email"
                            error={errors.email}
                            value={form.email}
                            onChange={(v) => upd("email", v)}
                            placeholder="you@somewhere.world"
                          />
                          <Field
                            label="Phone"
                            type="tel"
                            value={form.phone}
                            onChange={(v) => upd("phone", v)}
                            placeholder="+91 98495 31207"
                            hint="Optional"
                          />
                        </div>

                        <ChipGroup
                          label="Kind of project"
                          error={errors.typology}
                          options={TYPOLOGIES}
                          value={form.typology}
                          onSelect={(v) => upd("typology", v)}
                        />
                        <ChipGroup
                          label="Budget range · INR"
                          options={BUDGETS}
                          value={form.budget}
                          onSelect={(v) => upd("budget", v)}
                          hint="Useful but optional"
                        />
                        <ChipGroup
                          label="Desired timeline"
                          options={TIMELINES}
                          value={form.timeline}
                          onSelect={(v) => upd("timeline", v)}
                        />

                        <TextArea
                          label="Tell us about the space"
                          hint="A paragraph will do"
                          error={errors.message}
                          value={form.message}
                          onChange={(v) => upd("message", v)}
                          placeholder="We&rsquo;re renovating a 4,200 sq ft apartment in Jubilee Hills. Two adults, a studio, a dog. We collect ceramics. We&rsquo;d love to start by autumn."
                        />

                        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6">
                          <p className="text-[12px] text-ink/50">
                            By sending this, you agree we&rsquo;ll use your
                            details only to reply. Nothing is shared.
                          </p>
                          <button
                            type="submit"
                            disabled={status === "loading"}
                            data-cursor="Send"
                            className="group inline-flex items-center gap-2 rounded-full bg-midnight pl-6 pr-1 py-1 text-[13px] font-medium text-bone transition-transform duration-500 ease-editorial disabled:opacity-60 active:scale-[0.97]"
                          >
                            <span>{status === "loading" ? "Sending" : "Send the letter"}</span>
                            <span className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-bone/10 ring-1 ring-bone/15">
                              {status === "loading" ? (
                                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 animate-spin text-bone">
                                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2" />
                                  <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                                </svg>
                              ) : (
                                <ArrowIcon className="h-3.5 w-3.5 -rotate-45 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5" />
                              )}
                            </span>
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-10 md:col-span-4 md:col-start-9">
              <SidebarCard
                label="Studio"
                title={BRAND.address}
                lines={["Mon — Fri · 10:00 — 19:00", "Site visits by appointment"]}
              />
              <SidebarCard
                label="Write to"
                title={BRAND.email}
                href={`mailto:${BRAND.email}`}
                lines={["For commissions, press & careers"]}
              />
              <SidebarCard
                label="Telephone"
                title={BRAND.phone}
                href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                lines={["Ask for Aakriti or Rudra"]}
              />
              <SidebarCard
                label="Social"
                title={`@${BRAND.social.instagram}`}
                href={`https://instagram.com/${BRAND.social.instagram}`}
                external
                lines={["Field notes · studio days · work in progress"]}
              />

              {/* Studio hours chip */}
              <div className="rounded-[1.25rem] border border-ink/10 bg-alabaster/30 p-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/50" />
                    <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70">
                    Studio is open
                  </span>
                </div>
                <p className="mt-3 font-display italic text-[16px] text-ink/75">
                  Currently accepting four commissions for 2026.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map band */}
      <section className="relative mt-28 md:mt-40">
        <div className="mx-auto max-w-screen px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Reveal><Eyebrow>Find us</Eyebrow></Reveal>
              <Reveal delay={0.06}>
                <h2 className="mt-6 font-display font-light fluid-display">
                  A 1952 villa on<br />
                  <em className="italic text-midnight">Road No. 12</em>
                  <span className="font-script text-midnight">.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
              <p className="max-w-[40ch] text-[14px] leading-relaxed text-ink/60">
                Walk through the tamarind courtyard, past the atelier. Tea is at eleven, coffee at four.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <div className="mt-14 overflow-hidden rounded-[1.5rem] bg-alabaster-100">
              <iframe
                title="Arova studio — Banjara Hills"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.427%2C17.409%2C78.447%2C17.425&layer=mapnik&marker=17.4168%2C78.4365"
                className="h-[420px] w-full grayscale contrast-[0.9] md:h-[560px]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  hint?: string;
  error?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="eyebrow text-ink/50">{label}</label>
        {hint && !error && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
            {hint}
          </span>
        )}
        {error && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-midnight">
            {error}
          </span>
        )}
      </div>
      <div
        className={cn(
          "field-focus mt-2 flex items-center rounded-[0.75rem] border bg-bone px-4 transition-all duration-500 ease-editorial",
          error ? "border-midnight" : "border-ink/15 hover:border-ink/30"
        )}
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent py-3 font-display text-[17px] text-ink placeholder:text-ink/30 focus:outline-none"
        />
      </div>
    </div>
  );
}

function TextArea({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  hint?: string;
  error?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="eyebrow text-ink/50">{label}</label>
        {hint && !error && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
            {hint}
          </span>
        )}
        {error && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-midnight">
            {error}
          </span>
        )}
      </div>
      <div
        className={cn(
          "field-focus mt-2 rounded-[0.75rem] border bg-bone px-4 transition-all duration-500 ease-editorial",
          error ? "border-midnight" : "border-ink/15 hover:border-ink/30"
        )}
      >
        <textarea
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full resize-none bg-transparent py-3 font-display text-[17px] leading-snug text-ink placeholder:text-ink/30 focus:outline-none"
        />
      </div>
    </div>
  );
}

function ChipGroup({
  label,
  hint,
  error,
  options,
  value,
  onSelect,
}: {
  label: string;
  hint?: string;
  error?: string;
  options: string[];
  value: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="eyebrow text-ink/50">{label}</label>
        {hint && !error && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
            {hint}
          </span>
        )}
        {error && (
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-midnight">
            {error}
          </span>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = value === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onSelect(o)}
              className={cn(
                "relative rounded-full border px-4 py-2 text-[12px] font-medium transition-colors duration-500 ease-editorial",
                active
                  ? "border-midnight bg-midnight text-bone"
                  : "border-ink/15 text-ink/70 hover:border-ink/40 hover:text-ink"
              )}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SidebarCard({
  label,
  title,
  lines,
  href,
  external,
}: {
  label: string;
  title: string;
  lines: string[];
  href?: string;
  external?: boolean;
}) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href ? (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group block"
        data-cursor="Open"
      >
        {children}
      </a>
    ) : (
      <div>{children}</div>
    );

  return (
    <Wrapper>
      <div className="border-t border-ink/10 pt-5">
        <div className="eyebrow text-ink/45">{label}</div>
        <div className="mt-3 font-display italic text-[19px] text-ink group-[a]:u-reveal">
          {title}
        </div>
        <div className="mt-2 text-[13px] text-ink/55">
          {lines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
