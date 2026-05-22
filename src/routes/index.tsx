import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Copy,
  Check,
} from "lucide-react";
import { GlassCard, Pill, Label } from "@/components/GlassCard";
import { PROFILE, SKILL_GROUPS, CAREER } from "@/lib/content";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Afiq — Software Engineer · Backend & AI" },
      {
        name: "description",
        content:
          "Afiq is a software engineer at Siemens building backend systems and AI-powered tools that are clean, scalable, and production-ready.",
      },
    ],
  }),
  component: Index,
});

const tile = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};
const grid = {
  show: { transition: { staggerChildren: 0.05 } },
};

function Tile({
  className,
  children,
  delay = 0,
  hover = true,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  hover?: boolean;
}) {
  return (
    <motion.div
      variants={tile}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      <GlassCard hover={hover} className="h-full">
        {children}
      </GlassCard>
    </motion.div>
  );
}

function Index() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  return (
    <motion.div
      variants={grid}
      initial="hidden"
      animate="show"
      className="grid gap-4"
    >
      {/* Rows 1 + 2 — 60/40 split with tall Experience on the right */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div className="grid gap-4 lg:col-span-3 lg:[grid-template-rows:1fr_auto]">
          <Tile>
        <div className="relative flex h-full flex-col p-7 sm:p-9">
          <h1 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            I am Afiq. I build{" "}
            <span className="highlight-amber font-bold">backend systems</span> and{" "}
            <span className="highlight-amber font-bold">AI-powered tools</span> that are clean,
            scalable, and production-ready.
          </h1>

          <div className="mt-6">
            <div className="flex items-center gap-2.5 border-l-2 border-amber/60 pl-3 text-[14px] text-foreground/70">
              <span className="label-mono accent-amber">Exploring</span>
              <span>AI agents, prompt engineering, and production LLM tooling</span>
            </div>
          </div>

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-8">
            <Pill>Software Engineer @ Siemens</Pill>
            <Pill variant="amber">6 years of coffee, code &amp; console logs</Pill>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-amber/70 px-3 py-1.5 text-xs font-medium text-amber transition-all hover:-translate-y-0.5 hover:border-amber hover:bg-amber-soft"
            >
              Read my writing <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
          </Tile>

          {/* Skills */}
          <Tile>
        <div className="p-7">
          <div className="flex items-center justify-between">
            <Label>SKILLS &amp; STACK</Label>
            <Link
              to="/about"
              className="inline-flex items-center gap-1 label-mono hover:text-foreground"
            >
              See all <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="mt-5 space-y-4">
            {SKILL_GROUPS.map((g) => (
              <div key={g.label}>
                <div className="label-mono accent-amber">{g.label}</div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {g.items.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
          </Tile>
        </div>

        {/* Right column — Experience + Say Hello */}
        <div className="grid gap-4 lg:col-span-2 lg:[grid-template-rows:auto_1fr]">
          <Tile>
            <div className="flex h-full flex-col p-7">
              <div className="flex items-center justify-between">
                <Label>EXPERIENCE</Label>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1 label-mono hover:text-foreground"
                >
                  View all <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
              <ul className="mt-4 divide-y divide-border">
                {CAREER.map((c) => (
                  <li
                    key={c.company + c.range}
                    className="flex flex-col gap-1 py-2.5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div>
                      <div className="font-semibold">{c.role}</div>
                      <div className="text-xs text-muted-foreground">{c.company}</div>
                    </div>
                    <div className="label-mono">{c.range}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Tile>

          <Tile>
            <div className="flex h-full flex-col p-7">
              <Label>SAY HELLO</Label>
              <h3 className="font-display mt-3 text-2xl font-semibold leading-tight">
                Let's work <span className="highlight-amber font-bold">together.</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Open to interesting problems and collaborations.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <SocialTile href={PROFILE.github} label="GitHub">
                  <Github className="h-6 w-6" />
                </SocialTile>
                <SocialTile href={PROFILE.linkedin} label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </SocialTile>
                <SocialTile href={`mailto:${PROFILE.email}`} label="Email">
                  <Mail className="h-6 w-6" />
                </SocialTile>
              </div>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="group flex w-full items-center justify-between gap-3 rounded-full border border-amber/40 bg-amber-soft px-4 py-2.5 text-sm font-medium text-amber transition-all hover:-translate-y-0.5 hover:border-amber/70"
                >
                  <span className="font-mono">{PROFILE.email}</span>
                  {copied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  )}
                </button>
                <a
                  href="https://drive.google.com/file/d/1UGmFDaDFQB7PIptccMMXPsq0O4dZ0v9o/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-foreground/[0.02] px-4 py-2 text-xs font-medium transition-all hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download Resume
                </a>
              </div>
            </div>
          </Tile>
        </div>
      </div>
    </motion.div>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-foreground/[0.02] text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-amber/50 hover:text-amber"
    >
      {children}
    </a>
  );
}

function SocialTile({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-foreground/[0.02] text-foreground/75 transition-all hover:-translate-y-0.5 hover:border-amber/60 hover:text-amber hover:bg-amber-soft hover:shadow-[0_6px_18px_-8px_var(--amber)]"
    >
      {children}
    </a>
  );
}

