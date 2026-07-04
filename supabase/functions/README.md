# Edge Functions

Architecture scaffold only — business logic arrives in later phases.

| Function              | Future purpose                                    |
| --------------------- | ------------------------------------------------- |
| `xp-engine`           | Award XP, level-ups, streaks, essence (Phase 3)   |
| `ai-chat`             | Conversational AI practice partner                |
| `ai-writing-feedback` | AI feedback on writing submissions                |
| `speaking-evaluation` | Pronunciation / fluency scoring of recordings     |
| `boss-exams`          | Boss exam generation and grading                  |
| `lesson-grading`      | Server-side grading of lesson exercises           |

Each function lives in its own directory with an `index.ts` entrypoint and
imports shared helpers from `_shared/`. Deploy with:

```sh
supabase functions deploy <name>
```

Secrets (e.g. AI provider keys) are set per-project, never committed:

```sh
supabase secrets set OPENAI_API_KEY=...
```
