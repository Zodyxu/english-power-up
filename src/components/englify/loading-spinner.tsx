import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoadingSpinner({ className, label = "Loading" }: { className?: string; label?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-2 text-muted-foreground", className)} role="status" aria-live="polite">
      <Loader2 className="h-4 w-4 animate-spin" />
      <span className="sr-only">{label}</span>
    </div>
  );
}
