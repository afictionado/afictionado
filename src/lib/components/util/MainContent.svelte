<script lang="ts">
	import { leftBarWidthOnScreen, rightBarWidthOnScreen } from "$lib/stores/sidebarWidthOnScreen";

	let leftMargin: unknown;
	let rightMargin: unknown;

	leftBarWidthOnScreen.subscribe((value) => {
		leftMargin = value;
	});
	rightBarWidthOnScreen.subscribe((value) => {
		rightMargin = value;
	});
</script>

<div class="flex flex-1 p-8 w-full" style="margin-left: {leftMargin}; margin-right: {rightMargin}">
	<slot />
</div>
