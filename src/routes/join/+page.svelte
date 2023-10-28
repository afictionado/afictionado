<script lang="ts">
	import { page } from "$app/stores";
	import AuthMethodPrompt from "$lib/components/auth/JoinMethodPrompt.svelte";
	import AuthSigninForm from "$lib/components/auth/AuthSignupForm.svelte";
	import AuthLoginForm from "$lib/components/auth/AuthLoginForm.svelte";

	const joinMethod = $page.data.loginMethod as "signup" | "login" | null;
</script>

<svelte:head>
	<title>Join the Tavern! 🍷| Afictionado</title>
</svelte:head>

{#if joinMethod === null}
	<AuthMethodPrompt />
{:else if joinMethod === "signup"}
	<AuthSigninForm />
{:else}
	<AuthLoginForm />
{/if}
