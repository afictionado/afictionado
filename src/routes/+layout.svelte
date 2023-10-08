<script lang="ts">
	import NavBar from "$lib/components/nav/NavSidebar.svelte";
	import UserBar from "$lib/components/nav/UserSidebar.svelte";
</script>

<div class="flex">
	<div><NavBar /></div>
	<!--
		Negative margins since the sidebars don't fully cover their rectangular
		areas at the rounded corners, so the margins compensate
	-->
	<div class="flex-1 p-8 -m-4"><slot /></div>
	<div><UserBar /></div>
</div>
