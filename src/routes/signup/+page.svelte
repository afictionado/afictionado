<script lang="ts">
	import AuthSignupForm from "$lib/components/auth/AuthSignupForm.svelte";
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<AuthSignupForm error={form?.error} email={form?.email} />
