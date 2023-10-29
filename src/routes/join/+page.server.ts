import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	signup: async ({ request }) => {
		const body = Object.fromEntries(await request.formData());
	},

	login: async ({ request }) => {}
} satisfies Actions;
