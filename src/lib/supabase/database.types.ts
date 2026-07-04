// Database types for the Englify Supabase schema.
// Mirrors supabase/migrations. Regenerate after schema changes with:
//   bunx supabase gen types typescript --project-id <project-ref> --schema public > src/lib/supabase/database.types.ts

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          user_id: string;
          username: string | null;
          display_name: string | null;
          avatar_url: string | null;
          current_cefr_level: Database["public"]["Enums"]["cefr_level"];
          current_level: number;
          current_xp: number;
          current_rank: string;
          streak_count: number;
          essence_balance: number;
          learning_goal: string | null;
          daily_goal_minutes: number;
          timezone: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          username?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          current_cefr_level?: Database["public"]["Enums"]["cefr_level"];
          current_level?: number;
          current_xp?: number;
          current_rank?: string;
          streak_count?: number;
          essence_balance?: number;
          learning_goal?: string | null;
          daily_goal_minutes?: number;
          timezone?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          username?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          current_cefr_level?: Database["public"]["Enums"]["cefr_level"];
          current_level?: number;
          current_xp?: number;
          current_rank?: string;
          streak_count?: number;
          essence_balance?: number;
          learning_goal?: string | null;
          daily_goal_minutes?: number;
          timezone?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      user_preferences: {
        Row: {
          user_id: string;
          theme: Database["public"]["Enums"]["app_theme"];
          preferred_accent: string;
          preferred_learning_style: string | null;
          notifications_enabled: boolean;
          preferred_language: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          theme?: Database["public"]["Enums"]["app_theme"];
          preferred_accent?: string;
          preferred_learning_style?: string | null;
          notifications_enabled?: boolean;
          preferred_language?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          theme?: Database["public"]["Enums"]["app_theme"];
          preferred_accent?: string;
          preferred_learning_style?: string | null;
          notifications_enabled?: boolean;
          preferred_language?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      user_roles: {
        Row: {
          id: string;
          user_id: string;
          role: Database["public"]["Enums"]["app_role"];
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          role?: Database["public"]["Enums"]["app_role"];
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          role?: Database["public"]["Enums"]["app_role"];
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      has_role: {
        Args: { _user_id: string; _role: Database["public"]["Enums"]["app_role"] };
        Returns: boolean;
      };
    };
    Enums: {
      cefr_level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
      app_role: "student" | "admin" | "moderator" | "teacher";
      app_theme: "system" | "light" | "dark";
    };
    CompositeTypes: Record<string, never>;
  };
};

type PublicSchema = Database["public"];

export type Tables<T extends keyof PublicSchema["Tables"]> = PublicSchema["Tables"][T]["Row"];
export type TablesInsert<T extends keyof PublicSchema["Tables"]> =
  PublicSchema["Tables"][T]["Insert"];
export type TablesUpdate<T extends keyof PublicSchema["Tables"]> =
  PublicSchema["Tables"][T]["Update"];
export type Enums<T extends keyof PublicSchema["Enums"]> = PublicSchema["Enums"][T];

// Convenience aliases shared by frontend and backend.
export type Profile = Tables<"profiles">;
export type UserPreferences = Tables<"user_preferences">;
export type UserRole = Tables<"user_roles">;
export type CefrLevel = Enums<"cefr_level">;
export type AppRole = Enums<"app_role">;
export type AppTheme = Enums<"app_theme">;
