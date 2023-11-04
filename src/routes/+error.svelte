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
				Drunks wander to the weirdest places possible... Oh? You're not intoxicated? Sorry.
			{:else if $page.status === 500}
				Our bartender Joey passed out again... Someone get the surgeon! Oh, and while we're trying
				to wake him up...
			{/if}
			<a href="/home">Care to return?</a>
		</p>
	</div>
</div>
