<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import { passwordVisiblity } from "$lib/stores/passwordVisibility";
	import ShowPasswordButton from "./PasswordVisibilityButton.svelte";
	import EmailField from "./input/EmailField.svelte";
	import PasswordField from "./input/PasswordField.svelte";
	import AuthSubmitButton from "./input/AuthSubmitButton.svelte";
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";

	let inputPasswordVisibility: "show" | "hide" = "hide";
	passwordVisiblity.subscribe((visibility) => {
		inputPasswordVisibility = visibility;
	});

	export let error: string | undefined;
	export let email: string | undefined;
	let submitted = false;

	let justSignedUp = $page.url.searchParams.get("justSignedUp") === "true";
</script>

<div class="vertically-centered-content">
	<h1 class="text-6xl font-bold">
		{#if justSignedUp}
			Let's wrap this up! 🎁
		{:else}
			Welcome back! 👋
		{/if}
	</h1>
	<p class="mt-2 mb-4">
		{#if justSignedUp}
			Great! I just got you down on our phonebook (yes we use one, don't ask).<br />The local
			psychic sent you <span class="font-bold underline">a confirmation email</span>, and after
			that, you're all good to log in!
		{:else}
			Good to see ya again! I told you the dogs were the best marketing strategy ever.<br />
			Oh? The dogs don't recognize you? How about I
			<a href="/signup">sign you up</a> first?
		{/if}
	</p>

	<form
		method="POST"
		class="auth-form flex-centered flex-col"
		use:enhance={() => {
			submitted = true;
			return async ({ result }) => {
				if (result.type === "redirect") {
					goto(result.location);
				} else {
					await applyAction(result);
					setTimeout(() => {
						submitted = false;
					}, 1000);
				}
			};
		}}
	>
		<ShowPasswordButton />
		<EmailField email={email ?? ""} />
		<PasswordField joinMethod="login" bind:visibility={inputPasswordVisibility} />

		{#if error}
			<p class="error-text">{error}</p>
		{/if}
		<AuthSubmitButton bind:submitted>Log in! 📲</AuthSubmitButton>
	</form>
</div>
