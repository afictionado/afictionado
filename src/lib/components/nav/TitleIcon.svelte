<script lang="ts">
	import AfictionadoIcon from "$lib/util/AfictionadoIcon.svelte";
</script>

<button
	class="justify-center items-center rounded-r-2xl w-[12rem] h-[12rem] m-4 mb-1 p-4 transition-all duration-200 shadow-md hover:shadow-2xl transform"
	on:click={() => {
		window.location.href = "/";
	}}
>
	<AfictionadoIcon />
</button>
