import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layouts/public-layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Englify" },
      { name: "description", content: "Simple plans for learners, students, families, and teams." },
      { property: "og:title", content: "Pricing — Englify" },
    ],
  }),
  component: PricingPage,
});

const plans = [
  { name: "Free", price: "$0", features: ["Daily quests", "Basic AI feedback", "Placement test"] },
  { name: "Premium", price: "$9/mo", features: ["Unlimited AI feedback", "Pronunciation coach", "Boss exams", "Portfolio"], highlight: true },
  { name: "Lifetime", price: "$199", features: ["Everything in Premium", "One-time payment", "Priority support"] },
];

function PricingPage() {
  return (
    <PublicLayout>
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="text-center">
          <h1 className="font-display text-3xl font-semibold md:text-4xl">Pricing</h1>
          <p className="mt-2 text-muted-foreground">Start free. Upgrade when you're ready to level up.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`surface-elev-1 flex flex-col gap-4 rounded-2xl p-6 ${p.highlight ? "ring-2 ring-primary" : ""}`}
            >
              <div>
                <p className="font-display text-lg font-semibold">{p.name}</p>
                <p className="mt-1 font-display text-3xl font-bold">{p.price}</p>
              </div>
              <ul className="flex-1 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant={p.highlight ? "default" : "outline"}>Choose {p.name}</Button>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
