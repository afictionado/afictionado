import type { PageLoad } from "./$types";

export const load = (async ({ url }) => {
	const methodParam = url.searchParams.get("method") ?? "";
	const loginMethod: string | null = ["signup", "login"].includes(methodParam) ? methodParam : null;
	return { loginMethod };
}) satisfies PageLoad;
