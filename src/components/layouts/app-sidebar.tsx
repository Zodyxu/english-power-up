import { Link, useRouterState } from "@tanstack/react-router";
import { appNavItems, brand } from "@/lib/nav-items";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const Brand = brand.icon;
  return (
    <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:flex md:flex-col">
      <Link to="/dashboard" className="flex items-center gap-2 px-6 py-5">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-rune text-primary-foreground">
          <Brand className="h-4 w-4" />
        </div>
        <span className="font-display text-lg font-semibold">{brand.name}</span>
      </Link>
      <nav className="flex-1 overflow-y-auto px-3 pb-6">
        <ul className="space-y-0.5">
          {appNavItems.map((item) => {
            const active = pathname === item.to || pathname.startsWith(item.to + "/");
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
