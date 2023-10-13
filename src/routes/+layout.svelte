<script lang="ts">
	import NavBar from "$lib/components/nav/NavSidebar.svelte";
	import UserBar from "$lib/components/nav/MultipurposeSidebar.svelte";
	import TextureLayer from "$lib/util/TextureOverlay.svelte";
</script>

<div class="flex">
	<div><NavBar /></div>
	<div class="flex flex-1 justify-center"><slot /></div>
	<div><UserBar /></div>
	<TextureLayer />
</div>
