<script lang="ts">
	import { passwordVisiblity } from "$lib/stores/passwordVisibility";

	let displayText = "Show password 👀";
	let visibility: "show" | "hide" = "hide";
	passwordVisiblity.set(visibility);

	function toggleButton() {
		displayText = displayText === "Show password 👀" ? "Hide password 🙈" : "Show password 👀";
		visibility = visibility === "show" ? "hide" : "show";
		passwordVisiblity.set(visibility);
	}
</script>

<button
	on:click={toggleButton}
	class="text-center text-sm p-2 mb-4 font-bold bg-light-beige-500"
	type="button"
>
	{displayText}
</button>
