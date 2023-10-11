<script lang="ts">
	import RetractableSidebar from "$lib/components/nav/RetractableSidebar.svelte";
	let widthInPx = 14 * 16;
</script>

<RetractableSidebar side="right" width={`${widthInPx}px`}>
	<div
		role="navigation"
		class="nav-sidebar float-right shadow-2xl rounded-l-2xl"
		style={`animation: bgRight 100s linear infinite; width: ${widthInPx}px`}
	>
		<div class="grid grid-rows-8" />
	</div>
</RetractableSidebar>