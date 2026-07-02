import { createFileRoute } from "@tanstack/react-router";
import { Swords } from "lucide-react";
import { AppLayout } from "@/components/layouts/app-layout";
import { PagePlaceholder } from "@/components/englify/page-placeholder";

export const Route = createFileRoute("/boss-exams")({
  head: () => ({ meta: [{ title: "Boss Exams — Englify" }] }),
  component: () => (
    <AppLayout title="Boss Exams">
      <PagePlaceholder icon={Swords} title="Boss Exams" description="Rank up by defeating the boss of each CEFR tier." />
    </AppLayout>
  ),
});
