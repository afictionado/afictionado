import { signupDataSchema } from "$lib/zod/auth.js";
import { getFirstIssueMessage } from "$lib/zod/util.js";
import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const signupData = {
			email: formData.get("email") as string,
			password: formData.get("password") as string,
			confirmPassword: formData.get("confirm-password") as string
		};

		const signupValidity = signupDataSchema.safeParse(signupData);
		if (!signupValidity.success) {
			return fail(400, {
				email: signupData.email,
				error: getFirstIssueMessage(signupValidity.error)
			});
		}

		const { error: signupError } = await locals.supabase.auth.signUp(signupData);
		if (signupError instanceof AuthApiError) {
			if (signupError.status === 400) {
				return fail(400, {
					email: signupData.email,
					error: `Woah, something happened: ${signupError.message}`
				});
			}
			return fail(500);
		}
		throw redirect(303, "/login?justSignedUp=true");
	}
};
