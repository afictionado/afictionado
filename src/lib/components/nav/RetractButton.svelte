<script lang="ts">
	export let side: "left" | "right";
	export let sidebarOpen: boolean;
	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
	}
</script>

{#if side === "left"}
	<button class="retract-sidebar-button left-rb" on:click={toggleSidebar}
		><span class="opacity-[65%]">&lt;</span></button
	>
{:else}
	<button class="retract-sidebar-button right-rb" on:click={toggleSidebar}
		><span class="opacity-[65%]">&gt;</span>
	</button>
{/if}

<style>
	.retract-sidebar-button {
		@apply fixed h-1/3 top-1/3 bg-light-beige p-4 -z-20 text-black font-bold text-4xl shadow-xl text-center;
	}

	.left-rb {
		@apply rounded-r-2xl;
		transform: translateX(-2.5rem);
		&:hover {
			transform: translateX(0rem);
		}
	}

	.right-rb {
		@apply rounded-l-2xl;
		transform: translateX(-1rem);
		&:hover {
			transform: translateX(-3.5rem);
		}
	}
</style>
