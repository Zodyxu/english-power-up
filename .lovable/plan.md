
# Englify — Product Blueprint

**Tagline:** Level Up Your English Like a Solo Leveler
**Positioning:** Serious CEFR-aligned English learning platform, wrapped in an RPG progression shell. Duolingo simplicity + Notion polish + RPG depth + AI tutor.

---

## 1. Product Vision & Principles

- **Serious learning first, RPG second.** Every XP point maps to a real linguistic gain (CEFR can-do statement).
- **Progression = mastery, not grinding.** Bosses = real assessments. Rank-ups require demonstrated competency, not just XP.
- **AI as a private tutor, not a chatbot toy.** Every AI touchpoint tied to a measurable skill (grammar accuracy, pronunciation score, lexical range, fluency).
- **Modern + Professional English side-by-side.** Gen Z Decoder is opt-in and clearly labeled by register.
- **Delight in restraint.** Minimal UI, cinematic moments only at rank-ups and boss defeats.

---

## 2. Personas

| Persona | Primary goal | Core loop |
|---|---|---|
| School student (13–17) | Grades + confidence | Daily quests, streaks, guild play |
| College student | Fluency + exams | Skill trees + IELTS/TOEFL track |
| Working professional | Business English + email/meetings | Business path, writing review |
| Job seeker | Interview + resume English | Interview boss, portfolio artifacts |
| IELTS/TOEFL learner | Band score | Exam English mode, mock bosses |
| Developer / remote worker | Meetings, docs, Slack English | Conversation coach + Gen Z Decoder |
| Global non-native speaker | General proficiency A1→C2 | Full progression |

---

## 3. Learning Framework (CEFR-anchored)

```text
Rank Hierarchy (visible to user)     CEFR (internal + shown)
------------------------------------ ----------------------
E-Rank Awakened          →  A1
D-Rank Hunter            →  A2
C-Rank Hunter            →  B1
B-Rank Hunter            →  B2
A-Rank Hunter            →  C1
S-Rank / Shadow Monarch  →  C2
```

Per rank:
- **6–10 Units** (themed: Daily Life, Work, Travel, Academic, etc.)
- Each Unit → **5–8 Lessons** → each Lesson → **4–8 Exercises**
- **Mini Boss** per unit (skill-focused: e.g. Past Tense Boss)
- **Major Boss** per rank half (integrated skills)
- **Final Rank Exam** = gated, adaptive, 4-skill; pass to promote rank

Skill coverage per lesson tagged with CEFR can-do descriptors + skill(s): Grammar, Vocabulary, Listening, Speaking, Reading, Writing, Pronunciation, Conversation, Business, Travel, Exam.

---

## 4. Progression System

**XP formula (level within a rank):**
```
xp_to_next(level) = round(80 * level^1.35)
power_score = 0.4*avg_skill_mastery + 0.25*streak_score + 0.2*boss_score + 0.15*consistency
```

- **Levels 1–50 per rank**, rank-up gated by Final Rank Exam pass (not just XP).
- **Daily Quests (3):** 1 core skill, 1 review (SRS), 1 wildcard (speaking/Gen Z/writing).
- **Weekly Quests (5):** span all skills; big XP + cosmetic reward.
- **Achievements & Titles:** e.g. "Grammar Sentinel," "Silent Assassin (30-day streak)," "Shadow Speaker."
- **Skill Trees:** 8 trees (one per skill) with unlockable perks (e.g., +10% listening XP, unlock C1 idioms node). Points earned at level-ups.
- **Streak System:** freezes (2/mo free, more premium), streak insurance, weekend "shadow rest."
- **Energy (optional, off by default):** if on, 5 hearts regen 1/30min; premium = unlimited. Ship OFF by default to avoid Duolingo friction complaints.
- **Rewards:** daily login (7-day cycle), XP multipliers (2x weekend events), seasonal events ("Dungeon Break" — 2-week themed campaign), cosmetic auras/badges for avatar.

---

## 5. AI Features (mapped to concrete models)

| Feature | Model class | Signal produced |
|---|---|---|
| Placement Test | Adaptive CAT + LLM scoring | Initial CEFR + skill vector |
| Weakness Detection | Analytics + LLM diagnosis | Ranked weakness list |
| Adaptive Learning | Bandit over lesson pool | Next-best lesson |
| Conversation Coach | Realtime speech-to-speech LLM | Fluency, turn-taking, errors |
| Pronunciation Analysis | Phoneme-level ASR (Azure Speech / Deepgram) | Per-phoneme score |
| Accent Detection | Classifier + prosody features | Accent + intelligibility score |
| Writing Review | LLM with rubric | CEFR band, error map, rewrite |
| Grammar Correction | LLM + rule layer | Diff + explanation |
| Vocabulary Suggestions | Lexical range analyzer | Upgrade suggestions |
| Shadow Speaking | TTS + ASR alignment | Timing + pronunciation delta |
| Weekly AI Coach | Batch LLM over week logs | Plan for next week |
| Monthly AI Report | Batch LLM + charts | PDF portfolio artifact |
| Personal Learning Path | Planner over skill graph | Ordered unit queue |

All AI routed through **Lovable AI Gateway** (chat, TTS, STT, embeddings) with per-user rate limits and cost caps by plan.

---

## 6. Gen Z Decoder (opt-in mode)

Sits alongside main path; clearly labeled register: **Formal / Neutral / Informal / Slang / Meme**.

- **Word of the Day** (curated + trending): meaning, origin, example, "safe to use in" matrix (DMs / group chat / classroom / workplace / interview = ✅/⚠️/❌).
- **Slang ↔ Professional translator** (bidirectional).
- **Register quizzes:** "Would you send this to your manager?"
- **Weekly trending slang** refreshed by editorial + LLM curation, human-reviewed before publish.
- **Internet culture lessons:** meme formats, platform norms (LinkedIn vs TikTok vs Slack).
- Locked out of Business track exercises to avoid register bleed.

---

## 7. Dashboard (Home)

Above the fold:
- Rank sigil + current level + XP bar to next level
- Today's 3 quests (one-tap start)
- Streak flame + freeze count
- Power Score (single number, 0–9999)

Below:
- Skill Radar (8 axes)
- Weekly progress sparkline
- Boss Progress card (next boss + readiness %)
- Learning Calendar heatmap (GitHub-style)
- Recent Achievements (last 3)
- Daily Motivation (rotating CEFR can-do statement, not generic quote)

---

## 8. Portfolio

User-owned, exportable, shareable via public link:
- Writing pieces (with AI rubric scores)
- Speaking recordings (waveform + transcript + score)
- Certificates (rank-up, boss defeats, monthly reports)
- Best scores per skill
- Timeline (activity log)
- Progress graph (CEFR estimate over time)
- Export as PDF + shareable public profile (`englify.app/u/handle`)

---

## 9. Social

- **Friends** (username / invite link)
- **Leaderboards:** weekly XP, weekly power gain, league system (Bronze→Monarch), 30 users/league
- **Study Guilds:** 20–50 members, guild quests, guild chat (moderated), guild raid bosses
- **Weekly Challenges:** global themed challenge
- **Share Achievements:** OG-image generated per achievement
- **Referral:** invite gives both users 7 days premium + cosmetic

---

## 10. Monetization

| Plan | Price idea | Key entitlements |
|---|---|---|
| Free | $0 | Full A1–A2, limited AI (20 msgs/day), ads-free, 2 streak freezes/mo |
| Premium | $9.99/mo, $69/yr | All ranks, unlimited AI, unlimited freezes, offline, monthly report |
| Lifetime | $199 one-time | Premium forever, founder badge |
| Student | $4.99/mo (verified) | Premium at 50% |
| Family | $14.99/mo | 6 seats |
| Corporate | Custom | Admin dashboard, SSO, seat mgmt, team leaderboards, usage reports |

Payments: Stripe (global) + Paddle (VAT-friendly) as fallback.

---

## 11. Technical Architecture

**Frontend:** TanStack Start (React 19, Vite 7, SSR on Cloudflare Workers), Tailwind v4, shadcn/ui, Motion for React (used sparingly for rank-ups), TanStack Query, TanStack Router.

**Backend:** TanStack Start server functions for app logic. Server routes under `src/routes/api/public/*` for webhooks (Stripe, cron). Heavy AI calls streamed from server functions via Lovable AI Gateway.

**Auth:** Lovable Cloud auth (email + Google + Apple). Roles in a dedicated `user_roles` table with `has_role()` SECURITY DEFINER function.

**Database:** Lovable Cloud (Postgres). Row-Level Security on every user-owned table. Migrations include explicit GRANTs.

**Storage:** Lovable Cloud storage buckets: `audio-submissions` (private), `portfolio-public` (public, signed writes), `certificates` (private + signed URL sharing).

**AI:** Lovable AI Gateway for chat/completions, TTS, STT, embeddings. Azure Speech (or Deepgram) via connector for phoneme-level pronunciation scoring when Gateway insufficient.

**Caching:** TanStack Query on client; edge cache for public content (lessons, slang dictionary) via Cloudflare; per-user derived stats cached in `user_stats` materialized rows updated on write.

**Notifications:** Web Push (streak reminder, quest ready, guild events), transactional email via Resend connector.

**Offline mode (Premium):** Service worker precache of next 5 lessons + queued submissions synced on reconnect.

**Security:** RLS everywhere, signed URLs for media, webhook signature verification (Stripe HMAC), rate limiting per user on AI endpoints, content moderation on guild chat + shared portfolio.

**Scalability:** Stateless server functions on Workers; DB read replicas for leaderboards; leaderboards computed hourly into a `leaderboard_snapshot` table; SRS scheduler as pg_cron hitting `/api/public/cron/*` with shared secret.

**Analytics:** PostHog (product) + built-in `analytics_events` table for learning-specific events.

---

## 12. Folder Structure

```text
src/
  routes/
    __root.tsx
    index.tsx                     # marketing landing
    app/                          # authenticated shell (dashboard, learn, portfolio, social, settings)
    learn/$rank/$unit/$lesson.tsx
    boss/$bossId.tsx
    genz/                         # Gen Z Decoder
    portfolio/$handle.tsx         # public profile
    api/public/
      stripe.webhook.ts
      cron.daily-quests.ts
      cron.leaderboards.ts
  components/{ui, learn, rpg, dashboard, social, portfolio, genz}
  lib/
    learning/                     # xp, srs, ranks, power-score
    ai/                           # gateway clients, prompt templates
    *.functions.ts                # server fns (client-safe module path)
  server/                         # *.server.ts helpers (never imported by client)
  hooks/
  styles.css
supabase/migrations/
```

---

## 13. Database Schema (core tables)

```text
profiles(user_id pk, handle unique, display_name, avatar_url, cefr_estimate, created_at)
user_roles(user_id, role app_role)
ranks(code pk, cefr, order_idx)
units(id, rank_code, order_idx, title, theme)
lessons(id, unit_id, order_idx, title, skills text[], cefr_descriptors text[])
exercises(id, lesson_id, kind, payload jsonb, difficulty)
user_progress(user_id, lesson_id, status, mastery, last_seen_at)
user_xp(user_id, rank_code, level, xp_in_level, total_xp)
srs_items(user_id, item_id, kind, ease, interval, due_at)
attempts(id, user_id, exercise_id, score, ai_feedback jsonb, created_at)
bosses(id, rank_code, kind, spec jsonb)
boss_attempts(id, user_id, boss_id, passed, band, artifacts jsonb)
quests(id, kind daily|weekly, spec jsonb, valid_from, valid_to)
user_quests(user_id, quest_id, progress, completed_at)
achievements(id, code, name, criteria jsonb)
user_achievements(user_id, achievement_id, unlocked_at)
skill_tree_nodes(id, skill, cost, effect jsonb, prereq_ids)
user_skill_nodes(user_id, node_id, unlocked_at)
streaks(user_id, current, longest, freezes_left, last_active_date)
portfolio_items(id, user_id, kind, storage_path, meta jsonb, is_public)
guilds(id, name, tag, tier), guild_members(guild_id, user_id, role)
leaderboard_snapshot(period, scope, user_id, score, rank)
subscriptions(user_id, plan, status, current_period_end, provider, provider_ref)
genz_terms(id, term, register, meanings jsonb, origin, examples jsonb, safe_in jsonb, trending_score)
analytics_events(id, user_id, name, props jsonb, at)
```

All `public.*` tables: RLS ON, GRANTs to `authenticated` + `service_role`; `anon` only on public marketing / public profile reads.

---

## 14. API Structure

- **Server functions (typed RPC, client-called):** `getDashboard`, `startLesson`, `submitAttempt`, `gradeWriting`, `scorePronunciation`, `startConversation` (streaming), `nextInSRS`, `attemptBoss`, `claimQuest`, `unlockSkillNode`, `translateRegister`, `getGenZWordOfDay`.
- **Server routes (external):** `/api/public/stripe.webhook`, `/api/public/cron.daily-quests`, `/api/public/cron.leaderboards`, `/api/public/cron.srs-notifications`.
- All authenticated fns use `requireSupabaseAuth` middleware. Public fns validate input with Zod and never leak PII.

---

## 15. State Management

- Server state: **TanStack Query** with loader-prefetch (`ensureQueryData`) + `useSuspenseQuery`.
- Router state: TanStack Router search params for filters (leaderboard scope, portfolio filter).
- Ephemeral UI state: local `useState`/`useReducer`. No global store needed at v1.
- Realtime (guild chat, live leaderboard tick): Supabase Realtime channel per guild/league.

---

## 16. Deployment

- **Preview:** every change auto-deploys to `project--<id>-dev.lovable.app`.
- **Production:** Cloudflare Workers via Lovable publish; custom domain `englify.app`.
- **Cron:** pg_cron hitting `/api/public/cron.*` with HMAC-signed shared secret.
- **Feature flags:** simple `feature_flags` table + server fn; used to gate Gen Z Decoder, Energy System, seasonal events.
- **Observability:** server-function logs + PostHog + Sentry (via connector) for client errors.

---

## 17. Analytics (learning-first KPIs)

North-star: **Weekly CEFR-mastered can-do statements per active user.**
Supporting: D1/D7/D30 retention, streak median, lesson completion rate, boss pass rate per attempt, AI-cost per active user, free→premium conversion, referral k-factor, guild participation rate, Gen Z Decoder adoption.

---

## 18. Build Order (v1 → v3)

**v1 (MVP, ~4–6 wks):** Auth, onboarding + placement test, dashboard, A1 + A2 content, 8 exercise types, XP/level/streak, daily quests, writing review, pronunciation scoring, portfolio (writing + audio), Stripe premium, base RPG shell.

**v2:** B1/B2 content, Conversation Coach (realtime), skill trees, guilds + leaderboards, Gen Z Decoder, weekly AI coach, offline mode, referral.

**v3:** C1/C2, corporate/family plans, seasonal events, monthly AI report PDF, public portfolio pages, mobile PWA polish.

---

## 19. Open Decisions to Confirm Before Build

1. Ship **Energy/Hearts** system ON or OFF at launch? (Recommend OFF.)
2. Pronunciation stack: **Lovable AI Gateway STT only** vs **+ Azure Speech connector** for phoneme scores? (Recommend Azure for accuracy.)
3. Payments provider at launch: **Stripe only** vs Stripe + Paddle? (Recommend Stripe first.)
4. Gen Z Decoder visibility: **default-on** for under-25 age bracket vs **opt-in for all**? (Recommend opt-in.)
5. Visual direction for the RPG shell: cinematic dark (Solo-Leveler-esque) vs light editorial with RPG accents. Needs a design-directions round before building UI.

Approve this blueprint (and answer the 5 decisions) and I'll move to Prompt 2 — design directions + implementation.
