import { createFileRoute } from "@tanstack/react-router";
import { ScrollText } from "lucide-react";
import { AppLayout } from "@/components/layouts/app-layout";
import { PagePlaceholder } from "@/components/englify/page-placeholder";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [{ title: "Portfolio — Englify" }] }),
  component: () => (
    <AppLayout title="Portfolio">
      <PagePlaceholder icon={ScrollText} title="Your Portfolio" description="Timeline, recordings, writing, and certificates." />
    </AppLayout>
  ),
});
