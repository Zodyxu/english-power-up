import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillProgressCardProps {
  skill: string;
  level: number;
  value: number;
  max: number;
  icon?: LucideIcon;
  className?: string;
}

export function SkillProgressCard({ skill, level, value, max, icon: Icon, className }: SkillProgressCardProps) {
  const pct = Math.min(100, (value / Math.max(1, max)) * 100);
  return (
    <div className={cn("surface-elev-1 rounded-2xl p-4", className)}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-2">
          {Icon && <Icon className="h-4 w-4 text-primary shrink-0" />}
          <p className="truncate text-sm font-semibold">{skill}</p>
        </div>
        <span className="shrink-0 text-xs font-mono tabular-nums text-muted-foreground">Lv {level}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div className="h-full rounded-full bg-gradient-to-r from-primary to-rune" style={{ width: `${pct}%` }} />
      </div>
      <p className="mt-2 text-xs tabular-nums text-muted-foreground">{value} / {max} XP</p>
    </div>
  );
}
