import { isEmailSignedUp } from "$lib/db/users";
import { errorMessages } from "$lib/errorMessages";

export type SignupFormData = {
	email: string;
	password: string;
	confirmPassword: string;
};

export type AuthValidity = {
	valid: boolean;
	errorMessage?: string;
};

/**
 * Validates a user's signup data.
 *
 * @param signupData The user-submitted signup data to be validated.
 */
export async function validateSignup(signupData: SignupFormData): Promise<AuthValidity> {
	if (signupData.confirmPassword !== signupData.password) {
		return {
			valid: false,
			errorMessage: errorMessages.auth.passwordsDiffer
		};
	} else if (await isEmailSignedUp(signupData.email)) {
		return {
			valid: false,
			errorMessage: errorMessages.auth.alreadySignedUpEmail
		};
	}
	return {
		valid: true
	};
}
