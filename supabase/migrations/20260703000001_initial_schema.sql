-- Englify — Phase 2.1: Backend Foundation
-- Initial schema: profiles, user_preferences, user_roles.
-- All tables are RLS-enabled with least-privilege, owner-only policies.

-- ---------------------------------------------------------------------------
-- Enums
-- ---------------------------------------------------------------------------

create type public.cefr_level as enum ('A1', 'A2', 'B1', 'B2', 'C1', 'C2');

create type public.app_role as enum ('student', 'admin', 'moderator', 'teacher');

create type public.app_theme as enum ('system', 'light', 'dark');

-- ---------------------------------------------------------------------------
-- Shared trigger: keep updated_at fresh
-- ---------------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- profiles
-- ---------------------------------------------------------------------------

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users (id) on delete cascade,
  username text unique check (username ~ '^[a-z0-9_]{3,30}$'),
  display_name text check (char_length(display_name) between 1 and 60),
  avatar_url text,
  current_cefr_level public.cefr_level not null default 'A1',
  current_level integer not null default 1 check (current_level >= 1),
  current_xp integer not null default 0 check (current_xp >= 0),
  current_rank text not null default 'E',
  streak_count integer not null default 0 check (streak_count >= 0),
  essence_balance integer not null default 0 check (essence_balance >= 0),
  learning_goal text,
  daily_goal_minutes integer not null default 15
    check (daily_goal_minutes between 5 and 240),
  timezone text not null default 'UTC',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index profiles_user_id_idx on public.profiles (user_id);
create index profiles_username_idx on public.profiles (username);
create index profiles_current_rank_idx on public.profiles (current_rank);
create index profiles_current_cefr_level_idx on public.profiles (current_cefr_level);

create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can insert their own profile"
  on public.profiles for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own profile"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- No delete policy: profiles are removed via auth.users cascade only.

-- ---------------------------------------------------------------------------
-- user_preferences
-- ---------------------------------------------------------------------------

create table public.user_preferences (
  user_id uuid primary key references auth.users (id) on delete cascade,
  theme public.app_theme not null default 'system',
  preferred_accent text not null default 'american',
  preferred_learning_style text,
  notifications_enabled boolean not null default true,
  preferred_language text not null default 'en',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger user_preferences_set_updated_at
  before update on public.user_preferences
  for each row execute function public.set_updated_at();

alter table public.user_preferences enable row level security;

create policy "Users can view their own preferences"
  on public.user_preferences for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can insert their own preferences"
  on public.user_preferences for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own preferences"
  on public.user_preferences for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

-- ---------------------------------------------------------------------------
-- user_roles
-- ---------------------------------------------------------------------------
-- Roles live in a dedicated table (never on profiles) so privileges cannot be
-- self-escalated through profile updates. Permission logic arrives in a later
-- phase; for now users may only read their own roles. Role assignment is done
-- with the service role key (bypasses RLS) — no insert/update/delete policies.

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  role public.app_role not null default 'student',
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

create index user_roles_user_id_idx on public.user_roles (user_id);

alter table public.user_roles enable row level security;

create policy "Users can view their own roles"
  on public.user_roles for select
  to authenticated
  using ((select auth.uid()) = user_id);

-- Security-definer helper for future RLS policies (e.g. admin-only tables)
-- to check roles without recursive policy evaluation.
create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = _user_id and role = _role
  );
$$;
