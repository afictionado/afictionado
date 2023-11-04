<script lang="ts">
	import { enhance } from "$app/forms";
	import { passwordVisiblity } from "$lib/stores/passwordVisibility";
	import ShowPasswordButton from "./PasswordVisibilityButton.svelte";
	import EmailField from "./input/EmailField.svelte";
	import PasswordField from "./input/PasswordField.svelte";
	import type { PageData, ActionData } from "./$types";

	let inputPasswordVisibility: "show" | "hide" = "hide";
	passwordVisiblity.subscribe((visibility) => {
		inputPasswordVisibility = visibility;
	});

	export let data: PageData;
	export let form: ActionData;
</script>

<div class="vertically-centered-content">
	<h1 class="text-6xl font-bold">Welcome back! 👋</h1>
	<p class="mt-2 mb-4">
		Good to see ya again! I told you the dogs were the best marketing strategy ever.<br />
		Oh? The dogs don't recognize you? How about I
		<a
			href="/join?method=signup"
			on:click={() => {
				window.location.href = "/join?method=signup";
			}}>sign you up</a
		> first?
	</p>
	<form method="POST" action="/join/?/signup" class="auth-form flex-centered flex-col" use:enhance>
		<ShowPasswordButton />
		<EmailField email={form?.email ?? ""} />
		<PasswordField joinMethod="login" bind:visibility={inputPasswordVisibility} />
		<button type="submit" class="m-4 text-center text-2xl font-bold bg-light-beige-500">
			Log in! 📲
		</button>
	</form>
</div>
