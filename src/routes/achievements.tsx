import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { AppLayout } from "@/components/layouts/app-layout";
import { PagePlaceholder } from "@/components/englify/page-placeholder";

export const Route = createFileRoute("/achievements")({
  head: () => ({ meta: [{ title: "Achievements — Englify" }] }),
  component: () => (
    <AppLayout title="Achievements">
      <PagePlaceholder icon={Trophy} title="Achievements" description="Badges, milestones, and rare titles you've earned." />
    </AppLayout>
  ),
});
