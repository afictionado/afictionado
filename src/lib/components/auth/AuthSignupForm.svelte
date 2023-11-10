<script lang="ts">
	import { passwordVisiblity } from "$lib/stores/passwordVisibility";
	import ShowPasswordButton from "./PasswordVisibilityButton.svelte";
	import EmailField from "./input/EmailField.svelte";
	import PasswordField from "./input/PasswordField.svelte";
	import ConfirmPasswordField from "./input/ConfirmPasswordField.svelte";
	import { applyAction, enhance } from "$app/forms";
	import AuthSubmitButton from "./input/AuthSubmitButton.svelte";
	import { goto } from "$app/navigation";

	let inputPasswordVisibility: "show" | "hide" = "hide";
	passwordVisiblity.subscribe((visibility) => {
		inputPasswordVisibility = visibility;
	});

	export let error: string | undefined;
	export let email: string | undefined;
	let submitted = false;
</script>

<div class="vertically-centered-content">
	<h1 class="text-6xl font-bold">Become a patron! 🍻</h1>
	<p class="mt-2 mb-4">
		Come in! Our dogs don't bite, are super nuzzly and are fully vaccinated. Joey loves them lots.<br
		/>
		Oh? The dogs recognize you? Great! How about I
		<a href="/login">log you in</a> then?
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
				}
			};
		}}
	>
		<ShowPasswordButton />
		<EmailField email={email ?? ""} />
		<PasswordField joinMethod="signup" bind:visibility={inputPasswordVisibility} />
		<ConfirmPasswordField bind:visibility={inputPasswordVisibility} />

		{#if error}
			<p class="error-text">{error}</p>
		{/if}
		<AuthSubmitButton bind:submitted>Sign up! 🆙</AuthSubmitButton>
	</form>
</div>
