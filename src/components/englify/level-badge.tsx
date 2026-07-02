import { cn } from "@/lib/utils";

export function LevelBadge({ level, className }: { level: number; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full",
        "bg-gradient-to-br from-primary to-rune text-primary-foreground",
        "shadow-[var(--shadow-glow-rune)] font-display font-semibold tabular-nums",
        className,
      )}
      aria-label={`Level ${level}`}
    >
      {level}
    </div>
  );
}
