import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GlassCard, Pill, Label } from "@/components/GlassCard";
import { PROFILE } from "@/lib/content";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Afiq" },
      {
        name: "description",
        content: "Articles I've published on Dev.to about frontend, engineering, and building products.",
      },
    ],
  }),
  component: Blog,
});

type Article = {
  id: number;
  title: string;
  url: string;
  cover_image: string | null;
  social_image: string | null;
  readable_publish_date: string;
  reading_time_minutes: number;
  tag_list: string[];
  description: string;
};

async function fetchArticles(): Promise<Article[]> {
  const res = await fetch(
    `https://dev.to/api/articles?username=${PROFILE.devto}&per_page=10`,
  );
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

function Blog() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["devto-articles"],
    queryFn: fetchArticles,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <GlassCard className="p-8 sm:p-10">
        <Label>WRITING</Label>
        <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Thoughts I've <span className="highlight-amber font-bold">written</span> down.
        </h1>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
          Writing on Dev.to to document my learning journey in backend, prompt engineering and software development along the way.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {isLoading &&
            Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-64 animate-pulse rounded-2xl border border-border/50 bg-background/30"
              />
            ))}

          {isError && (
            <div className="sm:col-span-2 rounded-2xl border border-border/50 bg-background/40 p-6 text-sm text-muted-foreground">
              Could not load articles.{" "}
              <a
                href={`https://dev.to/${PROFILE.devto}`}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-foreground"
              >
                Visit my Dev.to profile directly
              </a>
              .
            </div>
          )}

          {data && data.length === 0 && (
            <div className="sm:col-span-2 rounded-2xl border border-border/50 bg-background/40 p-6 text-sm text-muted-foreground">
              No articles found. Check back soon.
            </div>
          )}

          {data?.map((a) => (
            <a
              key={a.id}
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-background/40 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              {(a.cover_image || a.social_image) && (
                <img
                  src={a.cover_image ?? a.social_image ?? ""}
                  alt={a.title}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="text-base font-semibold leading-snug group-hover:text-primary">
                  {a.title}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span>{a.readable_publish_date}</span>
                  <span>·</span>
                  <span>{a.reading_time_minutes} min read</span>
                </div>
                <p className="line-clamp-2 text-xs text-muted-foreground">{a.description}</p>
                <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-2">
                  {a.tag_list.slice(0, 4).map((t) => (
                    <Pill key={t}>#{t}</Pill>
                  ))}
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
