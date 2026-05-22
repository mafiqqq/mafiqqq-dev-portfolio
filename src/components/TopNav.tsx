import { Link, useRouterState } from "@tanstack/react-router";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
] as const;

export function TopNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { theme, toggle } = useTheme();
  const Icon = theme === "dark" ? Moon : Sun;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-display text-base font-bold tracking-tight">
          afiq<span className="accent-amber">.dev</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="flex items-center">
            {NAV.map(({ to, label }) => {
              const active = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "relative px-3 py-2 text-[11px] font-mono uppercase tracking-wider transition-colors",
                    active
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground",
                  )}
                >
                  {label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-amber" />
                  )}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-foreground/[0.02] text-foreground/70 transition-colors hover:border-amber/50 hover:text-amber"
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
