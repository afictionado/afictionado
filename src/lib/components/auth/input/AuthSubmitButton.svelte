<script lang="ts">
	export let submitted: boolean = false;
</script>

<button
	type="submit"
	class="m-4 text-center text-2xl font-bold bg-light-beige-500"
	disabled={submitted}
>
	{#if submitted}
		Hang on a second...
	{:else}
		<slot />
	{/if}
</button>
