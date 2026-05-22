import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { GlassCard, Label, Pill } from "@/components/GlassCard";
import { PROJECTS } from "@/lib/content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects - Afiq" },
      {
        name: "description",
        content:
          "Selected GitHub repositories, project notes, and technical outcomes from Afiq.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <GlassCard className="p-8 sm:p-10">
        <Label>PROJECTS</Label>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Code I've <span className="highlight-amber font-bold">worked</span> on.
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          A place to collect GitHub repositories, describe the work behind them, and show what each
          project was built to achieve.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <a
              key={project.repo}
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-border/50 bg-background/40 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill variant="amber">{project.status}</Pill>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold leading-snug group-hover:text-primary">
                    {project.title}
                  </h2>
                </div>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-foreground/[0.02] text-foreground/70 transition-all group-hover:border-amber/50 group-hover:text-amber">
                  <Github className="h-4 w-4" />
                </span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-1.5 pt-5 text-xs font-medium text-amber">
                View repository
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
