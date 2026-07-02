import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { AppLayout } from "@/components/layouts/app-layout";
import { PagePlaceholder } from "@/components/englify/page-placeholder";

export const Route = createFileRoute("/profile")({
  head: () => ({ meta: [{ title: "Profile — Englify" }] }),
  component: () => (
    <AppLayout title="Profile">
      <PagePlaceholder icon={User} title="Your Profile" description="Stats, rank history, and identity." />
    </AppLayout>
  ),
});
