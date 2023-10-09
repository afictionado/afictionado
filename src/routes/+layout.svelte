<script lang="ts">
	import NavBar from "$lib/components/nav/NavSidebar.svelte";
	import UserBar from "$lib/components/nav/UserSidebar.svelte";
	import TextureLayer from "$lib/util/TextureOverlay.svelte";
</script>

<div class="flex">
	<div><NavBar /></div>
	<div class="flex-1 p-8 -m-4"><slot /></div>
	<div><UserBar /></div>
	<TextureLayer />
</div>
