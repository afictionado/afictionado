/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	const methodParam = url.searchParams.get("method") ?? "";
	const loginMethod: string | null = ["signup", "login"].includes(methodParam) ? methodParam : null;
	return { loginMethod };
}
