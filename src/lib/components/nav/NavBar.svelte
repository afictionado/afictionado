<script lang="ts">
	import TitleIcon from "$lib/components/nav/TitleIcon.svelte";
	import NavButton from "$lib/components/nav/NavButton.svelte";
	import RetractableSidebar from "$lib/components/nav/RetractableSidebar.svelte";
	
	const navLinks = [
		["home", "家", "🏡"],
		["explore", "探", "🌎"],
		["search", "捜", "🔎"],
		["news", "報", "📰"],
		["login", "通", "📲"]
	];
</script>

<RetractableSidebar side="left" width="12rem">
	<nav
		class="nav-sidebar float-left rounded-r-2xl shadow-2xl flex-col"
		style="animation: bgLeft 100s linear infinite;"
	>
		<TitleIcon />
		<ul class="grid grid-rows-5">
			{#each navLinks as navLink}
				<li class="mx-auto">
					<NavButton href={navLink[0]} kanji={navLink[1]} emoji={navLink[2]} />
				</li>
			{/each}
		</ul>
	</nav>
</RetractableSidebar>

<style>
	@keyframes bgLeft {
		0%,
		100% {
			background-position: 0 0;
		}
		50% {
			background-position: 100% 0;
		}
	}
</style>
