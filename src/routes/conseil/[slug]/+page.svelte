<script lang="ts">
	import { add_advice } from '$lib/api/advice/add_advice';
	import type { PageData } from './$types';

	export let data: PageData;
	const specie = data.specie;
	let advice = '';

	async function submitForm() {
		const result = await add_advice(specie.id, advice);
		if (result) {
			advice = ''; // Reset the form input
			// Refresh the species data or show a success message here
		}
	}
</script>

<main class="flex h-screen items-center justify-center">
	<div class="w-1/2 rounded-lg bg-white p-8 shadow-lg">
		<h1 class="mb-4 text-2xl font-bold">{specie.common_name}</h1>
		<h2 class="mb-4 text-xl">{specie.scientific}</h2>

		{#if specie.species_advice}
			<ul>
				{#each specie.species_advice as advice}
					<li class="mb-2">
						<div class="flex items-center justify-between">
							<span>{advice.text}</span>
						</div>
					</li>
				{/each}
			</ul>
		{:else}
			<p>No advice available for this species.</p>
		{/if}
	</div>

	<div class="ml-4 w-1/2 rounded-lg bg-white p-8 shadow-lg">
		<h2 class="mb-4 text-xl">Submit new advice</h2>

		<form on:submit|preventDefault={submitForm}>
			<div>
				<label for="advice" class="block text-sm font-medium text-gray-700">Advice</label>
				<textarea
					id="advice"
					name="advice"
					rows="3"
					class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					bind:value={advice}
				/>
			</div>

			<div class="mt-4">
				<button
					type="submit"
					class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</main>
