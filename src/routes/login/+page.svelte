<script lang="ts">
	import AlreadyAuthed from "$lib/components/auth/AlreadyLoggedIn.svelte";
	import AuthLoginForm from "$lib/components/auth/AuthLoginForm.svelte";
	import type { ActionData, PageData } from "./$types";

	export let form: ActionData;
	export let data: PageData;
</script>

{#if data.session}
	<AlreadyAuthed />
{:else}
	<AuthLoginForm error={form?.error} email={form?.email} backTo={data.backTo} />
{/if}
