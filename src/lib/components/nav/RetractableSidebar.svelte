<script lang="ts">
	import RetractSidebarButton from "$lib/components/nav/RetractButton.svelte";

	export let side: "left" | "right";
	let sidebarOpen = side === "left";
	$: slotRetract = `transform: translateX(${sidebarOpen ? "0" : "-14rem"});`;
</script>

<div class="fixed transition-transform transform translate-x-0 duration-500" style={slotRetract}>
	<slot />
	<RetractSidebarButton {side} bind:sidebarOpen />
</div>
