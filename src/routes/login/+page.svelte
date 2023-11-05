<script lang="ts">
	import AuthLoginForm from "$lib/components/auth/AuthLoginForm.svelte";
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<AuthLoginForm error={form?.error} email={form?.email} />
