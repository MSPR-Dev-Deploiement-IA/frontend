<script>

import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

	let text = '';

	function handleSubmit() {
		alert(`Votre demande a bien été prise en compte`);
		text = '';
	}
</script>


<main class="flex items-center justify-center h-3/4">
	<div class="bg-white p-8 rounded-lg shadow-lg w-1/2">
		<h1 class="mb-8 text-3xl font-bold text-center">Vous voulez devenir botaniste sur notre site et pouvoir donner des conseils aux autres utilisateurs</h1>

		<form on:submit|preventDefault={handleSubmit} class="text-center">
			<label for="textarea" class="block mb-2">
				Expliquez-nous pourquoi vous voulez devenir botaniste :
			</label>
			<textarea id="textarea" class="w-full mb-8 p-2 border rounded" bind:value={text}></textarea>

			<button type="submit" class="w-1/2 mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Soumettre
			</button>
		</form>
	</div>
</main>

<style>
	main {
		background: #f8f9fa;
	}
</style>
