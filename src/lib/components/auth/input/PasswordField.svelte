<script lang="ts">
	export let password: string = "";
	export let visibility: "show" | "hide" = "hide";
</script>

<label for="password">
	Password 🔐 <span class="text-xs">(psst, Joey's password is- Ow!)</span>
</label>
{#if visibility === "hide"}
	<input
		type="password"
		autocomplete="new-password"
		id="signup-password"
		placeholder="BestTavernOwnerEver123"
		class="auth-form-input"
		required
		bind:value={password}
	/>
{:else}
	<input
		type="text"
		autocomplete="new-password"
		id="signup-password"
		placeholder="BestTavernOwnerEver123"
		class="auth-form-input"
		required
		bind:value={password}
	/>
{/if}
