// Centralized backend error model. Server code throws AppError subtypes;
// boundaries convert them into structured JSON responses without leaking
// internals.

export type ErrorCode =
  | "BAD_REQUEST"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "RATE_LIMITED"
  | "INTERNAL";

const ERROR_STATUS: Record<ErrorCode, number> = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  RATE_LIMITED: 429,
  INTERNAL: 500,
};

export class AppError extends Error {
  readonly code: ErrorCode;
  readonly status: number;
  /** Safe to show to end users. Internal details stay in `cause`/logs. */
  readonly publicMessage: string;

  constructor(code: ErrorCode, publicMessage: string, options?: { cause?: unknown }) {
    super(publicMessage, options);
    this.name = "AppError";
    this.code = code;
    this.status = ERROR_STATUS[code];
    this.publicMessage = publicMessage;
  }
}

export function toAppError(error: unknown): AppError {
  if (error instanceof AppError) return error;
  return new AppError("INTERNAL", "Something went wrong. Please try again.", { cause: error });
}

export function errorResponse(error: unknown): Response {
  const appError = toAppError(error);
  return Response.json(
    { error: { code: appError.code, message: appError.publicMessage } },
    { status: appError.status },
  );
}
