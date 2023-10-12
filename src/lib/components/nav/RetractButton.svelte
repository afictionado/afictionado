<script lang="ts">
	export let side: "left" | "right";
	export let sidebarOpen: boolean;
	let buttonEmoji = side === "right" ? "➡️" : "⬅️";
	function toggleSidebar() {
		sidebarOpen = !sidebarOpen;
		setTimeout(() => {
			buttonEmoji = buttonEmoji === "➡️" ? "⬅️" : "➡️";
		}, 150);
	}
</script>

<button class="retract-sidebar-button {side}-rb active-text-fade" on:click={toggleSidebar}>
	{buttonEmoji}
</button>

<style>
	.retract-sidebar-button {
		@apply fixed h-1/3 top-1/3 bg-light-beige p-4 -z-20 text-4xl shadow-xl items-center;
		color: rgba(0, 0, 0, 50%);
		transition: all 0.5s;
	}

	.left-rb {
		@apply rounded-r-2xl;
		transform: translateX(-3.25rem);
		&:hover {
			transform: translateX(0rem);
		}
	}

	.right-rb {
		@apply rounded-l-2xl;
		transform: translateX(-1rem);
		&:hover {
			transform: translateX(-4.25rem);
		}
	}
</style>
