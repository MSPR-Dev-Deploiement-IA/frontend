<script lang="ts">
	import { register } from '$lib/api/auth/register'; // Replace with the actual path to your register function

	let name: string = '';
	let password: string = '';
	let password_confirm: string = '';
	let email: string = '';
	let registrationSuccess: boolean = false;
	let registrationError: boolean = false;

	async function handleSubmit() {
		try {
			const isSuccess: boolean = await register(name, email, password);
			if (isSuccess) {
				registrationSuccess = true;
				registrationError = false;
			} else {
				registrationSuccess = false;
				registrationError = true;
			}
		} catch (error: any) {
			console.error(error);
			registrationSuccess = false;
			registrationError = true;
		}
	}
</script>

<main class="flex h-screen items-center justify-center">
	<div class="w-1/3 rounded-lg bg-white p-8 shadow-lg">
		<h1 class="mb-4 text-2xl font-bold">Register</h1>

		{#if registrationSuccess}
			<p class="text-green-500">Registration successful!</p>
		{:else if registrationError}
			<p class="text-red-500">Registration failed. Please try again later.</p>
		{/if}

		<form on:submit|preventDefault={handleSubmit}>
			<div class="mb-4">
				<label for="name" class="block">Name:</label>
				<input
					type="text"
					id="name"
					class="w-full rounded border border-gray-300 px-4 py-2"
					bind:value={name}
					required
				/>
			</div>

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

			<div class="mb-4">
				<label for="password-confirmation" class="block">Password Confirmation:</label>
				<input
					type="password"
					id="password-confirmation"
					class="w-full rounded border border-gray-300 px-4 py-2"
					bind:value={password_confirm}
					required
				/>
			</div>

			<button type="submit" class="rounded bg-blue-500 px-4 py-2 text-white">Register</button>
		</form>
	</div>
</main>
