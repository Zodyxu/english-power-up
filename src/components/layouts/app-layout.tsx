import type { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";
import { AppTopbar } from "./app-topbar";
import { MobileBottomNav } from "./mobile-bottom-nav";

export function AppLayout({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="flex min-h-dvh bg-background text-foreground">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <AppTopbar title={title} />
        <main className="flex-1 px-4 pb-24 pt-6 md:px-8 md:pb-10 motion-safe:animate-fade-in">
          {children}
        </main>
      </div>
      <MobileBottomNav />
    </div>
  );
}
