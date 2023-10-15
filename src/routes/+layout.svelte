<script lang="ts">
	import NavBar from "$lib/components/nav/NavBar.svelte";
	import UtilBar from "$lib/components/nav/UtilBar.svelte";
	import {
		leftBarWidthOnScreen,
		rightBarWidthOnScreen
	} from "$lib/components/nav/widthOnScreenStore";
	import TextureLayer from "$lib/util/TextureOverlay.svelte";

	let leftMargin: unknown;
	let rightMargin: unknown;
	leftBarWidthOnScreen.subscribe((value) => {
		leftMargin = value;
	});
	rightBarWidthOnScreen.subscribe((value) => {
		rightMargin = value;
	});
</script>

<div class="flex">
	<div><NavBar /></div>
	<div class="flex flex-1" style="margin-left: {leftMargin}; margin-right: {rightMargin}">
		<div class="p-8 w-full">
			<slot name="main-content">
				<div class="text-center">
					<h1 class="text-7xl font-bold">This part of the tavern is barren... 📭</h1>
					<h2 class="font-semibold">*cricket noises* 🦗</h2>
					<h3 class="text-xl">
						Joey might put something cool here sometime. I dunno. Shall we <a href="/"
							>head back to the front?</a
						>
					</h3>
				</div>
			</slot>
		</div>
	</div>
	<div><UtilBar><slot name="utility-bar" /></UtilBar></div>
	<TextureLayer />
</div>
