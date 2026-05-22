import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GlassCard, Pill, Label } from "@/components/GlassCard";
import { CAREER, TOOLS, STRENGTHS } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Afiq" },
      {
        name: "description",
        content: "Career chapters, the tools I rely on, and what I bring to a team.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <GlassCard className="p-8 sm:p-10">
        <Label>CAREER</Label>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          A few chapters of my <span className="highlight-amber font-bold">journey</span> so far.
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Different teams, different problems, same curiosity to make things work right at scale.
        </p>

        <div className="mt-8 space-y-4">
          {CAREER.map((c) => (
            <div
              key={c.company + c.range}
              className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-background/40 p-5 sm:flex-row"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-amber/30 bg-amber-soft font-display text-lg font-bold accent-amber">
                {c.initial}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {c.range}
                  </span>
                  <Pill variant={c.badge === "Current" ? "filled" : "outline"}>{c.badge}</Pill>
                </div>
                <h3 className="text-lg font-semibold">{c.role}</h3>
                <div className="text-sm text-muted-foreground">{c.company}</div>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-foreground/100">
                  {c.description.map((desc) => (
                    <li key={desc}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {c.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="p-8 sm:p-10">
        <Label>TOOLSTACK</Label>
        <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Tools I focused on mainly now..</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {TOOLS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border/50 bg-background/40 p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-2xl">{t.emoji}</div>
              <div className="mt-2 font-semibold">{t.name}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {t.tag}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="p-8 sm:p-10">
        <Label>STRENGTHS</Label>
        <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          What I bring to a team
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {STRENGTHS.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border/50 bg-background/40 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-2xl">{s.icon}</div>
              <div className="mt-3 font-semibold">{s.title}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
