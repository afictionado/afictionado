<script lang="ts">
	import { page } from "$app/stores";
</script>

<div class="grid grid-cols-2 h-screen" style="transform: translateY(-4rem)">
	<div class="flex-col flex-centered">
		<div class="text-center items-center">
			<h1 class="text-[12rem] font-bold -mb-[4.5rem]">{$page.status}</h1>
			<br />
			<h3 class="text-6xl mb-4">😱</h3>
		</div>
		<p>
			{#if $page.status === 404}
				Got lost? I get it, tis' a big place. Or maybe you made a
				<em>tybo. Typi. Tupo.</em> Whatever, you get the point.
			{/if}
			<a href="/home">Care to return?</a>
		</p>
	</div>
</div>
