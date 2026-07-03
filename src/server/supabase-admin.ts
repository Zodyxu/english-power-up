// Server-only Supabase admin client (service role key — bypasses RLS).
// NEVER import this from client-side code. Use only inside TanStack Start
// server functions / server routes.

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "@/lib/supabase/database.types";

let adminClient: SupabaseClient<Database> | undefined;

export function getSupabaseAdminClient(): SupabaseClient<Database> {
  if (!adminClient) {
    const url =
      process.env.SUPABASE_URL ?? (import.meta.env.VITE_SUPABASE_URL as string | undefined);
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !serviceRoleKey) {
      throw new Error(
        "Missing server Supabase configuration: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (see .env.example).",
      );
    }

    adminClient = createClient<Database>(url, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return adminClient;
}
