<script lang="ts">
	import { passwordVisiblity } from "$lib/stores/passwordVisibility";
	import ShowPasswordButton from "./PasswordVisibilityButton.svelte";
	import EmailField from "./input/EmailField.svelte";
	import PasswordField from "./input/PasswordField.svelte";
	import ConfirmPasswordField from "./input/ConfirmPasswordField.svelte";

	let inputPasswordVisibility: "show" | "hide" = "hide";
	passwordVisiblity.subscribe((visibility) => {
		inputPasswordVisibility = visibility;
	});

	let email: string;
	let password: string;
	let confirmPassword: string;
</script>

<div class="vertically-centered-content">
	<h1 class="text-6xl font-bold">Become a patron! 🍻</h1>
	<p class="mt-2 mb-4">
		Come in! Our dogs don't bite, are super nuzzly and are fully vaccinated. Joey loves them lots.<br
		/>
		Oh? The dogs recognize you? Great! How about I
		<a
			href="/join?method=login"
			on:click={() => {
				window.location.href = "/join?method=login";
			}}>log you in</a
		> then?
	</p>
	<form class="auth-form flex-centered flex-col">
		<ShowPasswordButton />
		<EmailField bind:email />
		<PasswordField bind:password bind:visibility={inputPasswordVisibility} />
		<ConfirmPasswordField bind:confirmPassword bind:visibility={inputPasswordVisibility} />
		<button type="submit" class="m-4 text-center text-2xl font-bold bg-light-beige-500">
			Sign up! 🆙
		</button>
	</form>
</div>
