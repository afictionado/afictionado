<script lang="ts">
	export let confirmPassword: string = "";
	export let visibility: "show" | "hide" = "hide";
</script>

<label for="confirm-password">
	Confirm password 📋 <span class="text-xs">(again, Joey's pass- okay, I'll stop.)</span>
</label>
{#if visibility === "hide"}
	<input
		type="password"
		id="confirm-password"
		placeholder="ILoveBreakingThe4thWall"
		class="auth-form-input"
		required
		bind:value={confirmPassword}
	/>
{:else}
	<input
		type="text"
		id="confirm-password"
		name="confirm-password"
		placeholder="ILoveBreakingThe4thWall"
		class="auth-form-input"
		required
		bind:value={confirmPassword}
	/>
{/if}
