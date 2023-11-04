import { supabase } from "$lib/client";

export async function isEmailSignedUp(email: string): Promise<boolean | null> {
	const { data, error } = await supabase.from("auth.users").select("*").eq("email", email);
	if (error) {
		return null;
	} else {
		return data.length >= 1;
	}
}
