// Typed data access for the user_preferences table.

import type { SupabaseClient } from "@supabase/supabase-js";

import type { Database, TablesInsert, UserPreferences } from "@/lib/supabase/database.types";
import { AppError } from "@/server/errors";

export async function getUserPreferences(
  client: SupabaseClient<Database>,
  userId: string,
): Promise<UserPreferences | null> {
  const { data, error } = await client
    .from("user_preferences")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw new AppError("INTERNAL", "Failed to load preferences.", { cause: error });
  return data;
}

export async function upsertUserPreferences(
  client: SupabaseClient<Database>,
  preferences: TablesInsert<"user_preferences">,
): Promise<UserPreferences> {
  const { data, error } = await client
    .from("user_preferences")
    .upsert(preferences, { onConflict: "user_id" })
    .select()
    .single();

  if (error) throw new AppError("INTERNAL", "Failed to save preferences.", { cause: error });
  return data;
}
