<script lang="ts">
	import JoinMethodButton from "./JoinMethodButton.svelte";
</script>

<div class="vertically-centered-content">
	<h1 class="font-extrabold text-7xl pb-1">Come join us! 💁</h1>
	<h2 class="font-bold text-2xl pb-1">
		First drink is <span class="underline italic">always on Joey.</span>
	</h2>
	<h3 class="text-sm mb-4">Is that why the tavern keeps losing money? No idea. Gotta ask Joey.</h3>

	<JoinMethodButton method="signup" />
	<JoinMethodButton method="login" />
</div>
