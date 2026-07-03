// Retry helper for transient failures (network blips, brief DB unavailability).
// Only wrap idempotent operations (reads, upserts with stable keys).

import { logger } from "./logger";

export type RetryOptions = {
  attempts?: number;
  baseDelayMs?: number;
  label?: string;
};

export async function withRetry<T>(fn: () => Promise<T>, options?: RetryOptions): Promise<T> {
  const attempts = options?.attempts ?? 3;
  const baseDelayMs = options?.baseDelayMs ?? 200;

  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        const delay = baseDelayMs * 2 ** (attempt - 1);
        logger.warn("Retrying operation after failure", {
          label: options?.label,
          attempt,
          delayMs: delay,
        });
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  throw lastError;
}
