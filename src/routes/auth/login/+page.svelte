<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { login } from '$lib/api/auth/login'; // Replace with the actual path to your register function

	let password: string = '';
	let email: string = '';
	let loginSuccess: boolean = false;
	let loginError: boolean = false;

	async function handleSubmit() {
		try {
			const isSuccess: boolean = await login(email, password);
			if (isSuccess) {
				loginSuccess = true;
				loginError = false;
				invalidateAll();
				// Redirect to home page
				goto('/');
			} else {
				loginSuccess = false;
				loginError = true;
			}
		} catch (error: any) {
			console.error(error);
			loginSuccess = false;
			loginError = true;
		}
	}
</script>

<main class="flex items-center justify-center h-screen">
	<div class="w-1/3 bg-white rounded-lg shadow-lg p-8">
		<h1 class="text-2xl font-bold mb-4">Login</h1>

		{#if loginSuccess}
			<p class="text-green-500">Login successful!</p>
		{:else if loginError}
			<p class="text-red-500">Login failed. Please try again later.</p>
		{/if}

		<form on:submit|preventDefault={handleSubmit}>
			<div class="mb-4">
				<label for="email" class="block">Email:</label>
				<input
					type="email"
					id="email"
					class="border border-gray-300 rounded px-4 py-2 w-full"
					bind:value={email}
					required
				/>
			</div>

			<div class="mb-4">
				<label for="password" class="block">Password:</label>
				<input
					type="password"
					id="password"
					class="border border-gray-300 rounded px-4 py-2 w-full"
					bind:value={password}
					required
				/>
			</div>

			<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
		</form>
	</div>
</main>
