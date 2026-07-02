import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell } from "lucide-react";
import { AppLayout } from "@/components/layouts/app-layout";
import { PagePlaceholder } from "@/components/englify/page-placeholder";

export const Route = createFileRoute("/practice")({
  head: () => ({ meta: [{ title: "Practice — Englify" }] }),
  component: () => (
    <AppLayout title="Practice">
      <PagePlaceholder icon={Dumbbell} title="Practice Arena" description="Drills for grammar, vocab, listening, and speaking." />
    </AppLayout>
  ),
});
