<script lang="ts">
	import { userStore } from '$lib/stores/user';
</script>

{#if $userStore}
	<p>Hello {$userStore.email} !</p>
{:else}
	<p>Hello guest !</p>
{/if}
