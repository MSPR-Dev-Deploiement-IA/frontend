<script lang="ts">
	import { userStore } from '$lib/stores/user';

	const logout = () => {
		userStore.set(null);
		// delete cookies
		document.cookie = '';
	};
</script>

<header class="flex h-16 items-center justify-between bg-gray-100 px-6 py-4 shadow">
	<a href="/">
		<h1 class="text-xl font-bold text-gray-800">A'Rosa'je</h1>
	</a>
	<nav class="flex w-full items-center justify-center">
		<div class="flex flex-grow items-center justify-center">
			{#if $userStore}
				<a href="/profile" class="mx-4 text-blue-500">Profile</a>
				<a href="/upload" class="mx-4 text-blue-500">Annonces</a>
				<a href="/map" class="mx-4 text-blue-500">Carte</a>
				<a href="/conseil" class="mx-4 text-blue-500">Conseil</a>
				<a href="/botaniste" class="mx-4 text-blue-500">Devenir Botaniste ?</a>
				<a href="/chat" class="mx-4 text-blue-500">Message</a>
				<a href="/mobile" class="mx-4 text-blue-500">Application Mobile</a>
			{/if}
		</div>
		<div class="ml-auto">
			{#if $userStore}
				<button on:click={logout} class="text-blue-500">Logout</button>
			{:else}
				<a href="/auth/login" class="text-blue-500">Login</a>
				<a href="/auth/register" class="text-blue-500">Register</a>
			{/if}
		</div>
	</nav>
</header>
