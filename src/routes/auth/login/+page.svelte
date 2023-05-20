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

<main class="flex h-screen items-center justify-center">
	<div class="w-1/3 rounded-lg bg-white p-8 shadow-lg">
		<h1 class="mb-4 text-2xl font-bold">Login</h1>

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
					class="w-full rounded border border-gray-300 px-4 py-2"
					bind:value={email}
					required
				/>
			</div>

			<div class="mb-4">
				<label for="password" class="block">Password:</label>
				<input
					type="password"
					id="password"
					class="w-full rounded border border-gray-300 px-4 py-2"
					bind:value={password}
					required
				/>
			</div>

			<button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white">Login</button>
		</form>
	</div>
</main>
