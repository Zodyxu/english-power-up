import { Award, Lock, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AchievementBadgeProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  unlocked?: boolean;
  className?: string;
}

export function AchievementBadge({
  title, description, icon: Icon = Award, unlocked = false, className,
}: AchievementBadgeProps) {
  return (
    <div
      className={cn(
        "surface-elev-1 flex flex-col items-center gap-2 rounded-2xl p-4 text-center transition-transform",
        "motion-safe:hover:-translate-y-0.5",
        !unlocked && "opacity-60",
        className,
      )}
    >
      <div
        className={cn(
          "grid h-14 w-14 place-items-center rounded-full",
          unlocked
            ? "bg-gradient-to-br from-gold to-accent text-accent-foreground shadow-elev-2"
            : "bg-muted text-muted-foreground",
        )}
      >
        {unlocked ? <Icon className="h-6 w-6" /> : <Lock className="h-5 w-5" />}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold">{title}</p>
        {description && <p className="text-xs text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
}
