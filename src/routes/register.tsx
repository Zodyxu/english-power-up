import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/englify/password-input";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create account — Englify" }] }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <AuthLayout title="Begin your ascent" subtitle="Create an account to start your journey.">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" autoComplete="name" placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <PasswordInput id="password" autoComplete="new-password" placeholder="At least 8 characters" />
        </div>
        <Button type="submit" className="w-full">Create account</Button>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account? <Link to="/login" className="font-medium text-foreground hover:underline">Sign in</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
