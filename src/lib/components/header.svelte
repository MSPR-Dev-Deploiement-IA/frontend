<script lang="ts">
	export let isLoggedIn: boolean;
</script>

<header class="flex items-center justify-between bg-gray-100 py-4 px-6 shadow">
	<a href="/">
		<h1 class="text-xl font-bold text-gray-800">A'Rosa'je</h1>
	</a>
	<nav>
		{#if isLoggedIn}
			<a href="/profile" class="text-blue-500 ml-4">Profile</a>
			<a href="/logout" class="text-blue-500 ml-4">Logout</a>
		{:else}
			<a href="/auth/login" class="text-blue-500 ml-4">Login</a>
			<a href="/auth/register" class="text-blue-500 ml-4">Register</a>
		{/if}
	</nav>
</header>
