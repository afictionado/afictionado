<script lang="ts">
	import "../app.pcss";
	import MainContent from "$lib/components/util/MainContent.svelte";
	import NavBar from "$lib/components/nav/NavBar.svelte";
	import UtilBar from "$lib/components/nav/UtilBar.svelte";
	import TextureOverlay from "$lib/components/util/TextureOverlay.svelte";
	import { invalidate } from "$app/navigation";
	import { onMount } from "svelte";

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);
	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_event, userSession) => {
			if (userSession?.expires_at !== session?.expires_at) {
				invalidate("supabase:auth");
			}
		});
		return () => data.subscription.unsubscribe();
	});
</script>

<div class="flex">
	<div><NavBar /></div>
	<MainContent><slot /></MainContent>
	<div><UtilBar /></div>
	<TextureOverlay />
</div>
