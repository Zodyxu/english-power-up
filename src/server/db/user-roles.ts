// Typed data access for the user_roles table. Permission logic (guards,
// admin checks) arrives in a later phase.

import type { SupabaseClient } from "@supabase/supabase-js";

import type { AppRole, Database, UserRole } from "@/lib/supabase/database.types";
import { AppError } from "@/server/errors";

export async function getUserRoles(
  client: SupabaseClient<Database>,
  userId: string,
): Promise<UserRole[]> {
  const { data, error } = await client.from("user_roles").select("*").eq("user_id", userId);

  if (error) throw new AppError("INTERNAL", "Failed to load roles.", { cause: error });
  return data;
}

export async function userHasRole(
  client: SupabaseClient<Database>,
  userId: string,
  role: AppRole,
): Promise<boolean> {
  const { data, error } = await client.rpc("has_role", { _user_id: userId, _role: role });

  if (error) throw new AppError("INTERNAL", "Failed to check role.", { cause: error });
  return data;
}
