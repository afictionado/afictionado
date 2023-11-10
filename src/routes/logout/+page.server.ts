import { fail, redirect } from "@sveltejs/kit";

export async function load({ locals }) {
	let error: string | undefined;
	if (await locals.getSession()) {
		const { error: signOutError } = await locals.supabase.auth.signOut();
		if (signOutError) {
			error = `Sorry... looks like the secretary returned with a message: ${signOutError.message}`;
		}
	} else {
		error = "You're not in our phonebook right now! How did you even get here anyways?";
	}
	if (error) {
		return fail(500, { error });
	}
	throw redirect(303, "/");
}
