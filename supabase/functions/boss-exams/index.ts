// boss-exams Edge Function — scaffold only. Business logic arrives in a later phase.

import { handleCorsPreflight } from "../_shared/cors.ts";
import { notImplemented } from "../_shared/response.ts";

Deno.serve((req) => {
  const preflight = handleCorsPreflight(req);
  if (preflight) return preflight;
  return notImplemented("boss-exams");
});
