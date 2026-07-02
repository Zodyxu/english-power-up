import { EmptyState } from "./empty-state";
import type { LucideIcon } from "lucide-react";

export function PagePlaceholder({
  icon, title, description,
}: { icon?: LucideIcon; title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-4xl">
      <EmptyState icon={icon} title={title} description={description ?? "This section will be implemented in an upcoming prompt."} />
    </div>
  );
}
