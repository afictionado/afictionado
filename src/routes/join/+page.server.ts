import { validateSignup } from "$lib/core/util/auth.js";
import { errorMessages } from "$lib/errorMessages.js";
import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
	signup: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const confirmPassword = formData.get("confirm-password") as string;

		const signupValidity = await validateSignup({ email, password, confirmPassword });
		if (!signupValidity.valid) {
			return fail(400, {
				email,
				error: signupValidity.errorMessage
			});
		}

		const { error: signupError } = await locals.supabase.auth.signUp({ email, password });
		if (signupError instanceof AuthApiError) {
			if (signupError.status === 400) {
				return fail(400, {
					email,
					error: errorMessages.auth.invalidEmailOrPassword
				});
			}
			return fail(500, {
				email,
				error: errorMessages.serverError
			});
		}
		throw redirect(303, "/home");
	},

	login: async () => {}
};
