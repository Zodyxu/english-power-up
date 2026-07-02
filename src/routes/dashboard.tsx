import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Mic, PenLine, Ear } from "lucide-react";
import { AppLayout } from "@/components/layouts/app-layout";
import { XPBar } from "@/components/englify/xp-bar";
import { LevelBadge } from "@/components/englify/level-badge";
import { RankCard } from "@/components/englify/rank-card";
import { DailyStreakCard } from "@/components/englify/streak-card";
import { QuestCard } from "@/components/englify/quest-card";
import { SkillProgressCard } from "@/components/englify/skill-progress-card";
import { BossChallengeCard } from "@/components/englify/boss-challenge-card";
import { AchievementBadge } from "@/components/englify/achievement-badge";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Englify" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <AppLayout title="Dashboard">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="surface-elev-1 flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center">
          <div className="flex min-w-0 items-center gap-4">
            <LevelBadge level={12} />
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Hunter</p>
              <p className="truncate font-display text-xl font-semibold">Welcome back, Learner</p>
            </div>
          </div>
          <div className="min-w-0 flex-1 sm:pl-4">
            <XPBar value={1240} max={2000} level={12} />
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-3">
          <RankCard rank="C" cefr="B1 Intermediate" title="Rank C" />
          <DailyStreakCard days={5} />
          <div className="surface-elev-1 rounded-2xl p-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Today's Goal</p>
            <p className="mt-1 font-display text-xl font-semibold">3 / 5 quests</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-3/5 rounded-full bg-primary" />
            </div>
          </div>
        </div>

        <section>
          <h2 className="mb-3 font-display text-lg font-semibold">Active Quests</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <QuestCard title="Past Simple Mastery" description="Complete 3 grammar drills." xp={80} progress={2} total={3} />
            <QuestCard title="Coffee Shop Roleplay" description="Speak with the AI barista." xp={120} progress={0} total={1} />
          </div>
        </section>

        <section>
          <h2 className="mb-3 font-display text-lg font-semibold">Skills</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <SkillProgressCard skill="Reading" level={4} value={620} max={1000} icon={BookOpen} />
            <SkillProgressCard skill="Listening" level={3} value={410} max={800} icon={Ear} />
            <SkillProgressCard skill="Writing" level={2} value={240} max={600} icon={PenLine} />
            <SkillProgressCard skill="Speaking" level={3} value={510} max={800} icon={Mic} />
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-3 font-display text-lg font-semibold">Boss Challenge</h2>
            <BossChallengeCard name="The Grammar Warden" cefr="B1" difficulty="Medium" reward={500} />
          </div>
          <div>
            <h2 className="mb-3 font-display text-lg font-semibold">Achievements</h2>
            <div className="grid grid-cols-2 gap-3">
              <AchievementBadge title="First Quest" unlocked />
              <AchievementBadge title="Week Warrior" description="7-day streak" />
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
