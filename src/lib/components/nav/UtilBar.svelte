<script lang="ts">
	import RetractableSidebar from "$lib/components/nav/RetractableSidebar.svelte";
	let widthInRem = 12;

	function extendWidth() {
		if (widthInRem < 32) {
			widthInRem += 2;
		}
	}
	function reduceWidth() {
		if (widthInRem > 12) {
			widthInRem -= 2;
		}
	}
</script>

<RetractableSidebar side="right" width={`${widthInRem}rem`}>
	<div
		role="navigation"
		class="nav-sidebar flex flex-col float-right shadow-2xl rounded-l-2xl justify-between"
		style={`animation: bgRight 100s linear infinite; width: ${widthInRem}rem`}
	>
		<slot />
		<div class="grid grid-cols-2">
			<button on:click={extendWidth} class="util-bar-size-button rounded-l-2xl m-4 mr-0 hover:text-black">⬅️</button>
			<button on:click={reduceWidth} class="util-bar-size-button m-4 ml-0 hover:text-black">➡️</button>
		</div>
	</div>
</RetractableSidebar>

<style>
	.util-bar-size-button {
		@apply shadow-xl bg-transparent p-4 text-3xl;
	}
</style>
