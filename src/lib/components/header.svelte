<script lang="ts">
	import { userStore } from '$lib/stores/user';
</script>

<header class="flex items-center justify-between bg-gray-100 px-6 py-4 shadow h-16">
	<a href="/">
		<h1 class="text-xl font-bold text-gray-800">A'Rosa'je</h1>
	</a>
	<nav>
		{#if $userStore}
			<a href="/profile" class="ml-4 text-blue-500">Profile</a>
			<a href="/upload" class="ml-4 text-blue-500">Upload</a>
			<a href="/logout" class="ml-4 text-blue-500">Logout</a>
			<a href="/map" class="ml-4 text-blue-500">Carte</a>
			<a href="/advise" class="ml-4 text-blue-500">Conseil</a>
			<a href="/chat" class="ml-4 text-blue-500">Message</a>
			<a href="/mobile" class="ml-4 text-blue-500">Application Mobile</a>
		{:else}
			<a href="/auth/login" class="ml-4 text-blue-500">Login</a>
			<a href="/auth/register" class="ml-4 text-blue-500">Register</a>
		{/if}
	</nav>
</header>