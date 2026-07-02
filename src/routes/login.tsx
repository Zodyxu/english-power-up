import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/englify/password-input";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Englify" }] }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to continue your quest.">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Forgot?</a>
          </div>
          <PasswordInput id="password" autoComplete="current-password" placeholder="••••••••" />
        </div>
        <Button type="submit" className="w-full">Sign in</Button>
        <div className="relative py-2 text-center text-xs uppercase text-muted-foreground">
          <span className="relative bg-background px-2">or continue with</span>
          <span className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button type="button" variant="outline">Google</Button>
          <Button type="button" variant="outline">GitHub</Button>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          New here? <Link to="/register" className="font-medium text-foreground hover:underline">Create account</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
