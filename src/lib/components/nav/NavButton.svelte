<script lang="ts">
	export let href: string;
	export let kanji: string;
	export let emoji: string;

	let secondaryText = kanji;
</script>

<button
	class="rounded-r-2xl p-4 m-1 shadow-md relative flex justify-center text-center hover:shadow-xl transform transition-all ease-in duration-200"
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
	<span class="hover-text-fade absolute flex items-center bottom-1 text-6xl opacity-20 z-10"
		>{secondaryText}</span
	>
	<span class="relative opacity-60 font-semibold text-4xl">{href}</span>
</button>

<!-- IF IT WORKS, DO NOT FIX IT. -->
<style>
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

	.hover-text-fade {
		animation: textFade 0.3s ease;
		&:hover {
			animation: textFade 0.3s ease;
		}
	}

	.hover-text-fade:hover {
		animation: textFadeClone 0.3s ease;
	}
</style>
