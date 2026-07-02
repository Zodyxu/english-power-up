import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/englify/theme-toggle";
import { SearchInput } from "@/components/englify/search-input";

interface AppTopbarProps {
  title?: string;
}

export function AppTopbar({ title }: AppTopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur md:px-6">
      <h1 className="hidden font-display text-lg font-semibold md:block">{title}</h1>
      <div className="ml-auto flex flex-1 items-center gap-2 md:flex-none">
        <SearchInput placeholder="Search lessons, quests…" className="w-full md:w-72" />
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell />
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
