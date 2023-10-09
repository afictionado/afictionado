<div class="texture-overlay" />

<style>
	.texture-overlay {
		position: absolute;
		background-image: url("/assets/cow-print.svg");
		background-repeat: repeat;
		width: 100%;
		height: 100%;
		animation: moveRight 10s linear infinite;
	}

	@keyframes moveRight {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -100% 0;
		}
	}
</style>
