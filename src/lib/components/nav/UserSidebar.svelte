<script lang="ts">
	import RetractableSidebar from "$lib/components/nav/RetractableSidebar.svelte";
</script>

<RetractableSidebar side="right">
	<div
		class="nav-sidebar float-right shadow-2xl rounded-l-2xl"
		style="animation: bgRight 100s linear infinite;"
	>
		<div class="grid grid-rows-8" />
	</div>
</RetractableSidebar>
