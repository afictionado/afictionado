<script lang="ts">
	import "../app.pcss";
	import MainContent from "$lib/components/util/MainContent.svelte";
	import NavBar from "$lib/components/nav/NavBar.svelte";
	import UtilBar from "$lib/components/nav/UtilBar.svelte";
	import TextureOverlay from "$lib/components/util/TextureOverlay.svelte";
</script>

<div class="flex">
	<div><NavBar /></div>
	<MainContent><slot /></MainContent>
	<div><UtilBar /></div>
	<TextureOverlay />
</div>
