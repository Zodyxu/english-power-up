import { createFileRoute } from "@tanstack/react-router";
import { AppLayout } from "@/components/layouts/app-layout";
import { ThemeToggle } from "@/components/englify/theme-toggle";
import { useTheme } from "@/lib/theme";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Englify" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  const { theme } = useTheme();
  return (
    <AppLayout title="Settings">
      <div className="mx-auto max-w-3xl space-y-4">
        <section className="surface-elev-1 flex items-center justify-between gap-4 rounded-2xl p-5">
          <div>
            <p className="font-display text-base font-semibold">Appearance</p>
            <p className="text-sm text-muted-foreground">Current theme: {theme}</p>
          </div>
          <ThemeToggle />
        </section>
        <section className="surface-elev-1 rounded-2xl p-5">
          <p className="font-display text-base font-semibold">Accessibility · Notifications · Privacy · Account</p>
          <p className="mt-1 text-sm text-muted-foreground">Detailed controls arrive in Section 16.</p>
        </section>
      </div>
    </AppLayout>
  );
}
