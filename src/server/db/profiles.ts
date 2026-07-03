// Typed data access for the profiles table. Business logic (XP, streaks,
// ranks) arrives in later phases — this module stays a thin, typed layer.

import type { SupabaseClient } from "@supabase/supabase-js";

import type { Database, Profile, TablesUpdate } from "@/lib/supabase/database.types";
import { AppError } from "@/server/errors";

export async function getProfileByUserId(
  client: SupabaseClient<Database>,
  userId: string,
): Promise<Profile | null> {
  const { data, error } = await client
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();

  if (error) throw new AppError("INTERNAL", "Failed to load profile.", { cause: error });
  return data;
}

export async function updateProfile(
  client: SupabaseClient<Database>,
  userId: string,
  updates: TablesUpdate<"profiles">,
): Promise<Profile> {
  const { data, error } = await client
    .from("profiles")
    .update(updates)
    .eq("user_id", userId)
    .select()
    .single();

  if (error) throw new AppError("INTERNAL", "Failed to update profile.", { cause: error });
  return data;
}
