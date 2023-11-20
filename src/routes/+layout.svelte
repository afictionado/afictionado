<script lang="ts">
	import '../app.postcss';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav">
			<ul>
				<li><a href="/"><img
					src="/assets/afictionado-icon.svg"
					alt="app icon" /></a></li>
				<li><a href="/home">Home</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
	</svelte:fragment>
</AppShell>
<slot />
