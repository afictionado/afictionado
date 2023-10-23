<script lang="ts">
	import JoinMethodButton from "$lib/components/auth/JoinMethodButton.svelte";
</script>

<svelte:head>
	<title>Join the Tavern! 🍷| Afictionado</title>
</svelte:head>

<div class="flex flex-col justify-center items-center w-full h-screen pb-[4.5rem]">
	<h1 class="font-extrabold text-7xl">Come join us! 💁</h1>
	<h2 class="font-bold text-2xl">
		First drink is <span class="underline italic">always on Joey.</span>
	</h2>
	<h3 class="text-xs mb-4">Is that why the tavern keeps losing money? No idea. Gotta ask Joey.</h3>

	<JoinMethodButton method="signup" />
	<JoinMethodButton method="login" />
</div>
