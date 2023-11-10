<script lang="ts">
	import { onMount } from "svelte";
	import type { PageData } from "./$types";

	export let data: PageData;
	$: email = data.session?.user.email;

	onMount(() => {
		email = data.session?.user.email;
	});
</script>

<h1>
	{#if email}
		Howdy, {email}!
	{:else}
		Hang on a second while I look for your name in the phonebook...
	{/if}
</h1>
