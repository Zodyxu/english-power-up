import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Swords, Trophy, BookOpen, Mic } from "lucide-react";
import { PublicLayout } from "@/components/layouts/public-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <PublicLayout>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_20%_10%,var(--color-primary)/20,transparent_55%),radial-gradient(circle_at_80%_20%,var(--color-rune)/20,transparent_55%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-28 md:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" /> AI-powered · CEFR-aligned
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Level up your English like a{" "}
            <span className="text-gradient-rune">solo learner</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Quests, boss exams, pronunciation coaching, and a portfolio you'll be proud to keep — from A1 to C2.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/register">Start free <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-24 md:grid-cols-4 md:px-6">
        {[
          { icon: BookOpen, title: "Guided Learn", desc: "Structured CEFR path from A1 to C2." },
          { icon: Swords, title: "Boss Exams", desc: "Prove your rank with adaptive tests." },
          { icon: Mic, title: "Pronunciation", desc: "Real-time Azure Speech feedback." },
          { icon: Trophy, title: "Portfolio", desc: "Writing archive & speaking recordings." },
        ].map((f) => (
          <div key={f.title} className="surface-elev-1 rounded-2xl p-5">
            <f.icon className="h-5 w-5 text-primary" />
            <p className="mt-3 font-display text-base font-semibold">{f.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </section>
    </PublicLayout>
  );
}
