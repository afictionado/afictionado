<script lang="ts">
	export let method: "signup" | "login";
	const subMessage =
		method === "signup"
			? "Heard rumors of Joey's bartending magic? 🪄"
			: "Back for some more stories behind the stick? 🗣️";
	const mainButtonText = method === "signup" ? "sign up! 🆙" : "log in! 📥";
</script>

<button class="p-4 m-4 px-2 rounded-2xl w-[30rem]">
	<h3 class="text-sm font-semibold">{subMessage}</h3>
	<h2 class="text-6xl font-bold">{mainButtonText}</h2>
</button>
