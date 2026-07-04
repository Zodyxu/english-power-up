// Shared structured JSON responses for all Edge Functions.

import { corsHeaders } from "./cors.ts";

export function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

export function errorResponse(code: string, message: string, status: number): Response {
  return jsonResponse({ error: { code, message } }, status);
}

export function notImplemented(functionName: string): Response {
  return errorResponse(
    "NOT_IMPLEMENTED",
    `${functionName} is scaffolded but not implemented yet.`,
    501,
  );
}
