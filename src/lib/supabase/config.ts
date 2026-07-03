// Supabase environment configuration. Values come from environment variables
// only — never hardcode keys. See .env.example.

export type SupabaseConfig = {
  url: string;
  anonKey: string;
};

export function getSupabaseConfig(): SupabaseConfig {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

  if (!url || !anonKey) {
    throw new Error(
      "Missing Supabase configuration: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (see .env.example).",
    );
  }

  return { url, anonKey };
}

export function isSupabaseConfigured(): boolean {
  return Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);
}
