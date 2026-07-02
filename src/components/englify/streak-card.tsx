import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export function DailyStreakCard({ days, goal = 7, className }: { days: number; goal?: number; className?: string }) {
  return (
    <div className={cn("surface-elev-1 rounded-2xl p-4", className)}>
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-warning/15 text-warning">
          <Flame className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Daily Streak</p>
          <p className="font-display text-xl font-semibold">
            {days} <span className="text-sm font-normal text-muted-foreground">days</span>
          </p>
        </div>
      </div>
      <div className="mt-3 flex gap-1.5">
        {Array.from({ length: goal }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full",
              i < days ? "bg-warning" : "bg-muted",
            )}
          />
        ))}
      </div>
    </div>
  );
}
