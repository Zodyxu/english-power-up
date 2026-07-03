# Englify — Backend Foundation Report (Phase 2.1)

## Infrastructure

**What was configured**

- **Supabase** as the backend platform: PostgreSQL, Auth (config only), Storage,
  Edge Functions scaffold, Realtime (enabled in `supabase/config.toml`).
- **Supabase CLI project** (`supabase/config.toml`) so schema changes flow
  through versioned migrations (`supabase db push` / local `supabase start`).
- **`@supabase/supabase-js`** typed client integrated into the app.

**Why**

- Supabase pairs well with the Cloudflare Workers deployment target (HTTP-based
  Postgres access, no TCP pooling issues), gives managed auth/storage/realtime
  out of the box, and scales past 100k users without infrastructure work.
- Migration-first workflow keeps dev/prod schemas reproducible and reviewable.

## Database

**Tables**

| Table              | Purpose                                                | Key relationships                          |
| ------------------ | ------------------------------------------------------ | ------------------------------------------ |
| `profiles`         | Public learning profile: CEFR level, level/XP/rank, streak, essence, goals | `user_id` → `auth.users` (unique, cascade) |
| `user_preferences` | Per-user settings: theme, accent, learning style, language, notifications  | `user_id` → `auth.users` (PK, cascade)     |
| `user_roles`       | Role assignments (`student`, `admin`, `moderator`, `teacher`)              | `user_id` → `auth.users` (cascade), unique `(user_id, role)` |

**Enums**: `cefr_level` (A1–C2), `app_role`, `app_theme`.

**Indexes**: `profiles(user_id)`, `profiles(username)`, `profiles(current_rank)`,
`profiles(current_cefr_level)` (future leaderboards/filtering),
`user_roles(user_id)`.

**Triggers**: `set_updated_at()` keeps `updated_at` accurate on both
`profiles` and `user_preferences`.

**RLS policies** (least privilege, enabled on every table)

- `profiles`: authenticated users can select/insert/update **only their own
  row** (`auth.uid() = user_id`). No delete policy — deletion happens via the
  `auth.users` cascade.
- `user_preferences`: same owner-only select/insert/update.
- `user_roles`: users can only **read** their own roles. No write policies —
  roles are assigned via the service role key, so privilege escalation through
  the client is impossible. Roles live in a separate table (never on
  `profiles`) for the same reason.
- `has_role(user_id, role)` security-definer function is ready for future
  admin-gated policies without recursive RLS evaluation.

## Storage

| Bucket                | Visibility | Limit  | Purpose                                  |
| --------------------- | ---------- | ------ | ---------------------------------------- |
| `avatars`             | public     | 2 MB   | Profile pictures (images only)           |
| `portfolio`           | private    | 10 MB  | Learner portfolio artifacts              |
| `speaking-recordings` | private    | 25 MB  | Audio for speaking evaluation (audio MIME only) |
| `certificates`        | private    | 5 MB   | Generated certificates (PDF/image)       |

Object paths are namespaced by user id (`<bucket>/<user_id>/...`); RLS on
`storage.objects` restricts reads/writes to the owning user (avatars are
world-readable). Upload UI is not built yet.

## Project Structure

```
supabase/
  config.toml                     # Supabase CLI project config
  migrations/
    20260703000001_initial_schema.sql   # tables, enums, indexes, RLS
    20260703000002_storage_buckets.sql  # buckets + storage RLS
  functions/
    README.md                     # edge function architecture
    _shared/{cors.ts,response.ts} # shared helpers
    xp-engine/ ai-chat/ ai-writing-feedback/
    speaking-evaluation/ boss-exams/ lesson-grading/   # 501 stubs

src/lib/supabase/                 # shared (client + server) — importable anywhere
  config.ts                       # env validation, no hardcoded secrets
  client.ts                       # lazy anon-key client (RLS enforced)
  database.types.ts               # generated-style DB types + shared aliases

src/server/                       # server-only modules (TanStack Start server fns)
  supabase-admin.ts               # service-role client (bypasses RLS)
  errors.ts                       # AppError + structured error responses
  logger.ts                       # structured JSON logging
  retry.ts                        # exponential-backoff retry for idempotent ops
  db/{profiles,user-preferences,user-roles}.ts   # thin typed data access
```

Frontend and backend share one source of truth for types
(`src/lib/supabase/database.types.ts` — `Profile`, `UserPreferences`,
`UserRole`, `CefrLevel`, `AppRole`, `AppTheme`). No duplicate interfaces.

## Environment Variables

| Variable                    | Scope                        | Purpose                     |
| --------------------------- | ---------------------------- | --------------------------- |
| `VITE_SUPABASE_URL`         | client + server (bundled)    | Supabase project URL        |
| `VITE_SUPABASE_ANON_KEY`    | client + server (bundled)    | Public anon key (RLS-bound) |
| `SUPABASE_URL`              | server only                  | Supabase URL for admin ops  |
| `SUPABASE_SERVICE_ROLE_KEY` | server only — **never** VITE | Bypasses RLS; admin tasks   |

Local dev: copy `.env.example` → `.env` (gitignored). Production: Cloudflare
Workers secrets (`wrangler secret put`). No secrets are hardcoded anywhere.

## Files Changed

Created: `supabase/config.toml`, 2 migration files, `supabase/functions/**`
(README, `_shared/cors.ts`, `_shared/response.ts`, 6 function stubs),
`src/lib/supabase/{config,client,database.types}.ts`,
`src/server/{supabase-admin,errors,logger,retry}.ts`, `src/server/db/*.ts`
(3 files), `.env.example`, this report.

Modified: `package.json` / `bun.lock` (added `@supabase/supabase-js`),
`.gitignore` (env + supabase temp files), `eslint.config.js` (ignore Deno edge
functions).

No frontend components, routes, or styles were touched.

## Remaining Work

**Before Phase 2.2 (Authentication & User Management)**

- Create the actual Supabase project and set env vars; run
  `supabase db push` to apply migrations.
- Sign-up/sign-in/sign-out flows wired to the existing login/register UI,
  session handling in TanStack Start (SSR-aware auth), route guards,
  email templates/redirect URLs, `handle_new_user` trigger to auto-create
  `profiles` + `user_preferences` + default `student` role on signup.

**Before Phase 2.3 (User Profiles & Personalization)**

- Profile editing UI wired to `src/server/db/profiles.ts`, avatar upload to the
  `avatars` bucket, preferences UI (theme/accent/language) wired to
  `user_preferences`, username availability checks.

**Before Phase 2.4 (Real User Data Integration)**

- Replace hardcoded dashboard data with React Query hooks reading from
  Supabase, loading/error states, realtime subscriptions where useful, and the
  first learning-domain tables (lessons, XP events) in new migrations.

## Verification

- `bun run build` — succeeds
- `tsc --noEmit` — zero errors
- `bun run lint` — no new errors introduced (pre-existing formatting issues on `main` remain untouched)
