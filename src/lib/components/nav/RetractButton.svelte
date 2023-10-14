<script lang="ts">
	export let side: "left" | "right";
	export let sidebarOpen: boolean;
	let buttonText = side === "right" ? "→" : "←";
	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
		setTimeout(() => {
			buttonText = buttonText === "→" ? "←" : "→";
		}, 150);
	}
</script>

<button class="retract-sidebar-button {side}-rb active-text-fade" on:click={toggleSidebar}>
	{buttonText}
</button>

<style>
	.retract-sidebar-button {
		@apply fixed h-1/3 top-1/3 bg-light-beige-500 p-4 -z-20 text-4xl shadow-xl items-center;
		color: rgba(0, 0, 0, 50%);
		transition: all 0.5s;
	}

	.left-rb {
		@apply rounded-r-2xl;
		transform: translateX(-3rem);
		&:hover {
			transform: translateX(0rem);
		}
	}

	.right-rb {
		@apply rounded-l-2xl;
		transform: translateX(-1rem);
		&:hover {
			transform: translateX(-4rem);
		}
	}
</style>
