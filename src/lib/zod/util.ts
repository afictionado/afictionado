import type { ZodError } from "zod";

/**
 * Returns the first issue's error message in a ZodError object/undefined if none exist.
 *
 * @param error The error to retrieve the first message from.
 */
export function getFirstIssueMessage(error: ZodError): string | undefined {
	return error.issues.at(0)?.message;
}
