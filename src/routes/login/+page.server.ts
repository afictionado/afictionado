import { loginDataSchema } from "$lib/zod/auth.js";
import { getFirstIssueMessage } from "$lib/zod/util.js";
import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const loginData = {
			email: formData.get("email") as string,
			password: formData.get("password") as string
		};

		const loginValidity = loginDataSchema.safeParse(loginData);
		if (!loginValidity.success) {
			return fail(400, {
				email: loginData.email,
				error: getFirstIssueMessage(loginValidity.error)
			});
		}

		const { error: loginError } = await locals.supabase.auth.signInWithPassword(loginData);
		if (loginError instanceof AuthApiError) {
			if (loginError.status === 400) {
				return fail(400, {
					email: loginData.email,
					error: `Woah, something happened: "${loginError.message}"`
				});
			}
			return fail(500);
		}
		throw redirect(303, "/home");
	}
};
