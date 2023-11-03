<script lang="ts">
	export let error: string | undefined;
</script>

{#if error}
	<p class="error-text">
		<span class="font-semibold">Sorry, the secretary sent you this:</span>{error}
	</p>
{/if}
