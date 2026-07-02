import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export type Rank = "E" | "D" | "C" | "B" | "A" | "S";
const rankColor: Record<Rank, string> = {
  E: "text-rank-e", D: "text-rank-d", C: "text-rank-c",
  B: "text-rank-b", A: "text-rank-a", S: "text-rank-s",
};

interface RankCardProps {
  rank: Rank;
  cefr: string;
  title?: string;
  className?: string;
}

export function RankCard({ rank, cefr, title, className }: RankCardProps) {
  return (
    <div className={cn("surface-elev-1 flex items-center gap-4 rounded-2xl p-4", className)}>
      <div className={cn("relative grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-muted", rankColor[rank])}>
        <Shield className="absolute inset-0 m-auto h-14 w-14 opacity-15" />
        <span className="relative font-display text-2xl font-bold">{rank}</span>
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Current Rank</p>
        <p className="truncate font-display text-lg font-semibold">
          {title ?? `Rank ${rank}`} <span className="text-muted-foreground">· {cefr}</span>
        </p>
      </div>
    </div>
  );
}
