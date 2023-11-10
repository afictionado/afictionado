export async function load({ url }) {
	return {
		backTo: url.searchParams.get("backTo")
	};
}
