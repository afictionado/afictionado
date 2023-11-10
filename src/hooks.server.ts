import { createServerClient } from "@supabase/ssr";
import { redirect } from "@sveltejs/kit";

const protectedRoutes = ["/home", "/logout", "/profile"];

export async function handle({ event, resolve }) {
	event.locals.supabase = createServerClient(
		import.meta.env.VITE_SUPABASE_URL,
		import.meta.env.VITE_SUPABASE_ANON_KEY,
		{
			cookies: {
				get: (key) => event.cookies.get(key),
				set: (key, value, options) => {
					event.cookies.set(key, value, options);
				},
				remove: (key, options) => {
					event.cookies.delete(key, options);
				}
			}
		}
	);
	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	const route = event.route.id || "";
	if (
		protectedRoutes.some((protectedRoute) => {
			return route.startsWith(protectedRoute);
		})
	) {
		if (!route.startsWith("/logout") && !(await event.locals.getSession())) {
			throw redirect(303, `/login?backTo=${route}`);
		}
	}

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === "content-range";
		}
	});
}
