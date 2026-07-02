import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck } from "lucide-react";
import { AppLayout } from "@/components/layouts/app-layout";
import { PagePlaceholder } from "@/components/englify/page-placeholder";

export const Route = createFileRoute("/placement-test")({
  head: () => ({ meta: [{ title: "Placement Test — Englify" }] }),
  component: () => (
    <AppLayout title="Placement Test">
      <PagePlaceholder icon={ClipboardCheck} title="Placement Test" description="Discover your CEFR rank in ~15 minutes." />
    </AppLayout>
  ),
});
