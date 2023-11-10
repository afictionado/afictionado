<script lang="ts">
	import AlreadyAuthed from "$lib/components/auth/AlreadyLoggedIn.svelte";
	import AuthSignupForm from "$lib/components/auth/AuthSignupForm.svelte";
	import type { ActionData, PageData } from "./$types";

	export let form: ActionData;
	export let data: PageData;
</script>

{#if data.session}
	<AlreadyAuthed />
{:else}
	<AuthSignupForm error={form?.error} email={form?.email} />
{/if}
