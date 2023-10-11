<script lang="ts">
	const things = [
		"fanfiction",
		"stories",
		"original works",
		"tales",
		"any and all kinds of writing",
		"writers",
		"these: 📖✍️📝🧑‍💻‍📚"
	];
	let currentThing = things[0];
</script>

<div class="home-for-banner">
	<h2 class="home-for-text">A cozy home for <span>{currentThing}</span></h2>
</div>

<style>
	.home-for-banner {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		margin: -1rem -2rem 1rem -2rem;
		height: 30rem;
		font-size: 4rem;
		font-weight: bold;
		color: rgba(0, 0, 0, 65%);
	}
</style>
