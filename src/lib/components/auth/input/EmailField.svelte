<script lang="ts">
	export let email: string = "";
</script>

<label for="signup-email">
	Email 📧 <span class="text-xs">(to protect the town from sentient robots!)</span>
</label>
<input
	type="email"
	autocomplete="email"
	id="signup-email"
	placeholder="joey@the-local-tavern.com"
	class="auth-form-input"
	required
	bind:value={email}
/>
