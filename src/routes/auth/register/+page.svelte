<script lang="ts">
	import { register } from '$lib/api/auth/register'; // Replace with the actual path to your register function

	let name: string = '';
	let password: string = '';
	let password_confirm: string = '';
	let email: string = '';
	let registrationSuccess: boolean = false;
	let registrationError: boolean = false;

	let accepted = false;

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
				<label for="name" class="block">Nom :</label>
				<input
					type="text"
					id="name"
					class="w-full rounded border border-gray-300 px-4 py-2"
					bind:value={name}
					required
				/>
			</div>

			<div class="mb-4">
				<label for="email" class="block">Email :</label>
				<input
					type="email"
					id="email"
					class="w-full rounded border border-gray-300 px-4 py-2"
					bind:value={email}
					required
				/>
			</div>

			<div class="mb-4">
				<label for="password" class="block">Mot de passe :</label>
				<input
					type="password"
					id="password"
					class="w-full rounded border border-gray-300 px-4 py-2"
					bind:value={password}
					required
				/>
			</div>

			<div class="mb-4">
				<label for="password-confirmation" class="block">Confirmation de mot de passe :</label>
				<input
					type="password"
					id="password-confirmation"
					class="w-full rounded border border-gray-300 px-4 py-2"
					bind:value={password_confirm}
					required
				/>
			</div>

			<div class="flex items-center mb-4">
				<input
					id="default-checkbox"
					type="checkbox"
					bind:checked={accepted}
					class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
				<label
					for="default-checkbox"
					class="ml-2 text-sm font-medium">
					En cochant cette case, vous confirmez avoir lu, compris et accepté notre <a href="/legal" class="text-blue-600">politique de confidentialité</a>.
				</label>
			</div>

			<button type="submit" disabled={!accepted} class="rounded bg-blue-500 px-4 py-2 text-white disabled:bg-slate-200 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none">S'enregistrer</button>
		</form>
	</div>
</main>
