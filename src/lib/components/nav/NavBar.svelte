<script lang="ts">
	import type { Session } from "@supabase/supabase-js";
	import TitleIcon from "$lib/components/nav/TitleIcon.svelte";
	import NavButton from "$lib/components/nav/NavButton.svelte";
	import RetractableSidebar from "$lib/components/nav/RetractableSidebar.svelte";

	export let session: Session | null;

	const stayingNavLinks = [
		["home", "家", "🏡"],
		["explore", "探", "🌎"],
		["search", "捜", "🔎"],
		["news", "報", "📰"]
	];
	let navLinks = stayingNavLinks;
	$: updateNavLinksFromAuth(session);

	function updateNavLinksFromAuth(session: Session | null) {
		navLinks = stayingNavLinks.concat(
			session
				? [["logout", "出", "📤"]]
				: [
						["signup", "上", "🆙"],
						["login", "内", "📲"]
				  ]
		);
	}
</script>

<RetractableSidebar side="left" width="12rem">
	<nav
		class="nav-sidebar float-left rounded-r-2xl shadow-2xl flex-col"
		style="animation: bgLeft 100s linear infinite;"
	>
		<div class="flex justify-center items-center"><TitleIcon /></div>
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
