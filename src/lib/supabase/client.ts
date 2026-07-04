// Browser/shared Supabase client (anon key, RLS enforced). Created lazily so
// importing this module never throws; callers should check
// isSupabaseConfigured() before calling getSupabaseClient() when Supabase env
// vars may be absent.

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { getSupabaseConfig } from "./config";
import type { Database } from "./database.types";

let client: SupabaseClient<Database> | undefined;

export function getSupabaseClient(): SupabaseClient<Database> {
  if (!client) {
    const { url, anonKey } = getSupabaseConfig();
    client = createClient<Database>(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }
  return client;
}
