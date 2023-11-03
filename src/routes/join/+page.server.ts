import { errorMessages } from "$lib/errorMessages.js";
import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";

export const actions = {
	signup: async ({ request, locals }) => {
		const formData = await request.formData();
		const { error: signupError } = await locals.supabase.auth.signUp({
			email: formData.get("email") as string,
			password: formData.get("password") as string
		});
		if (signupError instanceof AuthApiError) {
			console.log(signupError.message);
			if (signupError.status === 400) {
				return fail(400, {
					error: errorMessages.invalidEmailOrPassword
				});
			}
			return fail(500, {
				error: errorMessages.serverError
			});
		}
		throw redirect(303, "/home");
	},

	login: async () => {}
};
