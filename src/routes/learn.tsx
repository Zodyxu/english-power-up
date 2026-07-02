import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { AppLayout } from "@/components/layouts/app-layout";
import { PagePlaceholder } from "@/components/englify/page-placeholder";

export const Route = createFileRoute("/learn")({
  head: () => ({ meta: [{ title: "Learn — Englify" }] }),
  component: () => (
    <AppLayout title="Learn">
      <PagePlaceholder icon={BookOpen} title="Learning Path" description="CEFR-aligned lessons from A1 to C2." />
    </AppLayout>
  ),
});
