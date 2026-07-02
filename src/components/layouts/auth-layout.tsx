import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { brand } from "@/lib/nav-items";
import { ThemeToggle } from "@/components/englify/theme-toggle";

export function AuthLayout({
  children, title, subtitle,
}: { children: ReactNode; title: string; subtitle?: string }) {
  const Brand = brand.icon;
  return (
    <div className="grid min-h-dvh bg-background text-foreground md:grid-cols-2">
      <aside className="relative hidden overflow-hidden bg-gradient-to-br from-primary/20 via-background to-rune/20 md:block">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_20%,var(--color-primary)/25,transparent_60%),radial-gradient(circle_at_70%_80%,var(--color-rune)/25,transparent_60%)]" />
        <div className="relative flex h-full flex-col justify-between p-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-rune text-primary-foreground">
              <Brand className="h-4 w-4" />
            </div>
            <span className="font-display text-lg font-semibold">{brand.name}</span>
          </Link>
          <div>
            <p className="font-display text-3xl font-semibold leading-tight text-foreground">
              Awaken your <span className="text-gradient-rune">English</span>.
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              A CEFR-aligned journey with AI feedback, boss exams, and a portfolio you'll actually keep.
            </p>
          </div>
        </div>
      </aside>
      <section className="flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 md:justify-end">
          <Link to="/" className="flex items-center gap-2 md:hidden">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-rune text-primary-foreground">
              <Brand className="h-4 w-4" />
            </div>
            <span className="font-display text-lg font-semibold">{brand.name}</span>
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center px-6 pb-10">
          <div className="w-full max-w-sm motion-safe:animate-slide-up">
            <h1 className="font-display text-2xl font-semibold">{title}</h1>
            {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
            <div className="mt-6">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
