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

<button
	class="inline-block fixed h-1/3 top-1/3 p-4 -z-20 text-4xl transition-all duration-500 {side}-rb active-text-fade"
	on:click={toggleSidebar}
>
	{buttonText}
</button>

<style>
	.left-rb {
		transform: translateX(-3rem);
		&:hover {
			transform: translateX(0rem);
		}
	}

	.right-rb {
		transform: translateX(-1rem);
		&:hover {
			transform: translateX(-4rem);
		}
	}
</style>
