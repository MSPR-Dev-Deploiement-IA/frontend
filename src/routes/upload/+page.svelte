<script lang="ts">
	let selectedOption: string;
	let description: string;
	let file: File | null = null;

	let newOption: string = '';

	let addNewSpecies: boolean = false;

	let selectedAddress: string = '';
	let addNewAddress: boolean = false;
	let newAddress: string = '';
	let addressOptions: string[] = ['Adresse 1', 'Adresse 2', 'Adresse 3'];

	let address: string = '';
	let zipCode: string = '';
	let city: string = '';
	let country: string = '';

	let name: string;

	const dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3']; // Please replace with your actual options

	const handleFileChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		file = target.files ? target.files[0] : null;
	};

	const handleSubmit = () => {
		// Handle the form submission here
	};
</script>

<main class="flex items-center justify-center h-screen">
	<div class="w-1/3 bg-white rounded-lg shadow-lg p-8">
		<h1 class="text-2xl font-bold mb-4">Formulaire</h1>

		<form on:submit|preventDefault={handleSubmit}>
			<div class="mb-4">
				<label class="block" for="name">Nom:</label>
				<div class="flex flex-row">
					<input
						type="text"
						id="name"
						class="border border-gray-300 rounded px-4 py-2 mr-2 w-11/12"
						bind:value={name}
					/>
					<span
						class="text-sm text-gray-500 cursor-help w-1/12"
						title="Donner ici un nom à votre plante"
					>
						<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v2m0 12a9 9 0 110-18 9 9 0 010 18z"></path>
            </svg> -->
						<div
							class="border border-1 border-gray-500 bg- rounded-full w-full h-full flex flex-row items-center justify-center"
						>
							❔
						</div>
					</span>
				</div>
			</div>

			<div class="mb-4" class:disable={addNewSpecies === false}>
				<label class="block" for="dropdown">Choisissez une espèce:</label>
				<div class="flex flex-row">
					<select
						id="dropdown"
						class:hide={addNewSpecies}
						class="border border-gray-300 rounded px-4 py-2 w-11/12"
						bind:value={selectedOption}
					>
						{#each dropdownOptions as option}
							<option>{option}</option>
						{/each}
					</select>
					<button on:click={() => (addNewSpecies = !addNewSpecies)} class="w-1/12">
						{#if addNewSpecies}
							➖
						{:else}
							➕
						{/if}
					</button>
				</div>

				{#if addNewSpecies}
					<input
						id="newOption"
						class="border border-gray-300 rounded px-4 py-2 w-full mt-2"
						bind:value={newOption}
						placeholder="Entrez une nouvelle espèce"
					/>
				{/if}
			</div>

			<div class="mb-4" class:disable={addNewAddress === false}>
				<label class="block" for="dropdown">Choisissez une adresse:</label>
				<div class="flex flex-row">
					<select
						id="dropdown"
						class:hide={addNewAddress}
						class="border border-gray-300 rounded px-4 py-2 w-11/12"
						bind:value={selectedAddress}
					>
						{#each addressOptions as address}
							<option>{address}</option>
						{/each}
					</select>
					<button on:click={() => (addNewAddress = !addNewAddress)} class="w-1/12">
						{#if addNewAddress}
							➖
						{:else}
							➕
						{/if}
					</button>
				</div>

				{#if addNewAddress}
					<div class="grid grid-cols-2 gap-4">
						<div>
							<label class="block" for="address">Adresse :</label>
							<input
								type="text"
								id="address"
								class="border border-gray-300 rounded px-4 py-2 w-full"
								bind:value={address}
							/>
						</div>
						<div>
							<label class="block" for="zipCode">Code Postal :</label>
							<input
								type="text"
								id="zipCode"
								class="border border-gray-300 rounded px-4 py-2 w-full"
								bind:value={zipCode}
							/>
						</div>
						<div>
							<label class="block" for="city">Ville :</label>
							<input
								type="text"
								id="city"
								class="border border-gray-300 rounded px-4 py-2 w-full"
								bind:value={city}
							/>
						</div>
						<div>
							<label class="block" for="country">Pays :</label>
							<input
								type="text"
								id="country"
								class="border border-gray-300 rounded px-4 py-2 w-full"
								bind:value={country}
							/>
						</div>
					</div>
				{/if}
			</div>

			<div class="mb-4">
				<label class="block" for="description">Description:</label>
				<textarea
					id="description"
					class="border border-gray-300 rounded px-4 py-2 w-full"
					bind:value={description}
				/>
			</div>

			<div class="mb-4">
				<label class="block" for="file">Télécharger un fichier:</label>
				<input
					type="file"
					id="file"
					multiple
					class="border border-gray-300 rounded px-4 py-2 w-full"
					on:change={handleFileChange}
				/>
			</div>

			<button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Soumettre</button>
		</form>
	</div>
</main>

<style>
	.hide {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
