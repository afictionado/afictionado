<div class="texture-overlay" />

<style>
	.texture-overlay {
		position: fixed;
		background-image: url("/assets/background-textures/blobs.svg");
		background-size: cover;
		background-position: center;
		pointer-events: none;
		width: 100vw;
		height: 100vh;
		animation: zoomBg 60s linear infinite;
	}

	@keyframes zoomBg {
		0%,
		100% {
			background-size: 100% 100%;
		}
		50% {
			background-size: 150% 150%;
		}
	}
</style>
