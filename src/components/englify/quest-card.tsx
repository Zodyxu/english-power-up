import { ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuestCardProps {
  title: string;
  description: string;
  xp: number;
  progress?: number;
  total?: number;
  onStart?: () => void;
  className?: string;
}

export function QuestCard({ title, description, xp, progress = 0, total = 1, onStart, className }: QuestCardProps) {
  const pct = Math.min(100, (progress / Math.max(1, total)) * 100);
  const done = progress >= total;
  return (
    <div className={cn("surface-elev-1 flex flex-col gap-3 rounded-2xl p-4", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <h3 className="truncate font-display text-base font-semibold">{title}</h3>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
          +{xp} XP
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-primary transition-[width] duration-500" style={{ width: `${pct}%` }} />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs tabular-nums text-muted-foreground">{progress} / {total}</span>
        <Button size="sm" variant={done ? "secondary" : "default"} onClick={onStart}>
          {done ? "Claim" : "Continue"} <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
