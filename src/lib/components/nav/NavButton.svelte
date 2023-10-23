<script lang="ts">
	export let href: string;
	export let kanji: string;
	export let emoji: string;

	let secondaryText = kanji;
</script>

<button
	class="rounded-r-2xl p-4 m-1 relative flex-centered"
	on:click={() => {
		window.location.href = href;
	}}
	on:mouseenter={() => {
		setTimeout(() => {
			secondaryText = emoji;
		}, 150);
	}}
	on:mouseleave={() => {
		setTimeout(() => {
			secondaryText = kanji;
		}, 150);
	}}
>
	<span class="hover-text-fade absolute flex items-center bottom-2 text-5xl opacity-20"
		>{secondaryText}</span
	>
	<span class="relative opacity-80 font-semibold text-4xl">{href}</span>
</button>

<!-- IF IT WORKS, DO NOT FIX IT. -->
<style>
	.hover-text-fade {
		animation: textFade 0.3s ease;
		&:hover {
			animation: textFade 0.3s ease;
		}
	}

	.hover-text-fade:hover {
		animation: textFadeClone 0.3s ease;
	}

	@keyframes textFade {
		0%,
		100% {
			opacity: 20%;
		}
		50% {
			opacity: 0;
		}
	}

	@keyframes textFadeClone {
		0%,
		100% {
			opacity: 20%;
		}
		50% {
			opacity: 0;
		}
	}
</style>
