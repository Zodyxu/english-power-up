import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/englify/theme-toggle";
import { brand, publicNavItems } from "@/lib/nav-items";

export function PublicLayout({ children }: { children: ReactNode }) {
  const Brand = brand.icon;
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-rune text-primary-foreground">
              <Brand className="h-4 w-4" />
            </div>
            <span className="font-display text-lg font-semibold">{brand.name}</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {publicNavItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: true }}
              >
                {i.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">Get started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 motion-safe:animate-fade-in">{children}</main>
      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted-foreground md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} {brand.name}. {brand.tagline}.</p>
          <div className="flex gap-4">
            <Link to="/pricing" className="hover:text-foreground">Pricing</Link>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
