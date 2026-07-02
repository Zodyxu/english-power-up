import { cn } from "@/lib/utils";

interface XPBarProps {
  value: number;
  max: number;
  level?: number;
  className?: string;
  showLabel?: boolean;
}

export function XPBar({ value, max, level, className, showLabel = true }: XPBarProps) {
  const pct = Math.max(0, Math.min(100, (value / Math.max(1, max)) * 100));
  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="font-medium text-muted-foreground">
            {level != null ? `Level ${level}` : "XP"}
          </span>
          <span className="font-mono tabular-nums text-muted-foreground">
            {value.toLocaleString()} / {max.toLocaleString()} XP
          </span>
        </div>
      )}
      <div
        className="relative h-2 w-full overflow-hidden rounded-full bg-muted"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label="Experience progress"
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-rune motion-safe:animate-xp-fill"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
