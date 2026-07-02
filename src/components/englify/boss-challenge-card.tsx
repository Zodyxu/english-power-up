import { Swords } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BossChallengeCardProps {
  name: string;
  cefr: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Elite";
  reward: number;
  onEngage?: () => void;
  className?: string;
}

const diffColor: Record<BossChallengeCardProps["difficulty"], string> = {
  Easy: "text-success",
  Medium: "text-warning",
  Hard: "text-destructive",
  Elite: "text-rank-s",
};

export function BossChallengeCard({ name, cefr, difficulty, reward, onEngage, className }: BossChallengeCardProps) {
  return (
    <div className={cn("surface-elev-2 relative overflow-hidden rounded-2xl p-5", className)}>
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl motion-safe:animate-rune-pulse" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
            <Swords className="h-3.5 w-3.5" /> Boss Exam · {cefr}
          </div>
          <h3 className="mt-1 truncate font-display text-xl font-semibold">{name}</h3>
          <p className={cn("mt-1 text-sm font-medium", diffColor[difficulty])}>{difficulty}</p>
        </div>
        <div className="shrink-0 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
          +{reward} XP
        </div>
      </div>
      <div className="relative mt-4">
        <Button onClick={onEngage} className="w-full">Engage</Button>
      </div>
    </div>
  );
}
