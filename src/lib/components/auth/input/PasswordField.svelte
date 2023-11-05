<script lang="ts">
	let password: string = "";
	export let visibility: "show" | "hide" = "hide";
	export let joinMethod: "signup" | "login";
	const autocomplete = joinMethod === "signup" ? "new-password" : "off";
</script>

<label for="password">
	Password 🔐 <span class="text-xs">(psst, Joey's password is- Ow!)</span>
</label>
{#if visibility === "hide"}
	<input
		type="password"
		{autocomplete}
		id="password"
		name="password"
		placeholder="BestTavernOwnerEver123"
		class="auth-form-input"
		required
		bind:value={password}
	/>
{:else}
	<input
		type="text"
		{autocomplete}
		id="password"
		name="password"
		placeholder="BestTavernOwnerEver123"
		class="auth-form-input"
		required
		bind:value={password}
	/>
{/if}
