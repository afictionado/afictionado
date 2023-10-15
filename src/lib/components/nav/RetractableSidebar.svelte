<script lang="ts">
	import RetractSidebarButton from "$lib/components/nav/RetractButton.svelte";
	export let side: "left" | "right";
	export let width: string;
	let sidebarOpen = true;
	$: slotRetract = `transform: translateX(${sidebarOpen
		? (side === "left" ? 0 : `-${width}`)
		: (side === "left" ? `-${width}` : 0)});`;
</script>

<div
	class="fixed w-[{width}] transition-transform transform translate-x-0 duration-500"
	style={slotRetract}
>
	<slot />
	<RetractSidebarButton {side} bind:sidebarOpen />
</div>
