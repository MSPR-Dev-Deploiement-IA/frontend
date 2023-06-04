<script lang="ts">
	import { add_plant } from '$lib/api/plants/add_plant';
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';
	import type { PageData } from './$types';
	import { add_photo } from '$lib/api/plants/add_photo';
	import { invalidateAll } from '$app/navigation';

	import { onMount, onDestroy } from 'svelte';
	import flatpickr from 'flatpickr';
	import { French } from 'flatpickr/dist/l10n/fr.js';

	export let data: PageData;

	const species = data.species_names;
	const addresses = data.addresses;

	// Species
	let selectedSpecies: string;
	let description: string;
	let newSpecies: string = '';
	let addNewSpecies: boolean = false;

	// Address
	let selectedAddress: string = '';
	let addNewAddress: boolean = false;
	let addressOptions: string[] = addresses;
	let address: string = '';
	let zipCode: string = '';
	let city: string = '';
	let country: string = '';
	let addressName: string = '';
	let startDate: Date;
	let endDate: Date;

	let datepicker: flatpickr.Instance | null = null;
	let dateInput: HTMLInputElement;

	// Name
	let name: string;

	// Dropdown options
	const dropdownOptions: string[] = species;

	// File handling
	let uploadedFiles: File[] = [];
	const handleFileChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		if (target.files && uploadedFiles.length + target.files.length <= 5) {
			uploadedFiles = [...uploadedFiles, ...Array.from(target.files)];
		} else {
			notifier.danger('You can only upload up to 5 files', 7000);
		}
	};

	const handleClick = async () => {
		if (!datepicker) {
			datepicker = flatpickr(dateInput, {
				mode: 'range',
				inline: true,
				dateFormat: 'j F Y',
				minDate: 'today',
				locale: French,
				onChange: async function (selectedDates, dateStr, instance) {
					if (selectedDates.length == 2) {
						startDate = selectedDates[0];
						endDate = selectedDates[1];
						instance.close();
						instance.calendarContainer.style.display = 'none';

						console.log(startDate);
						console.log(endDate);
					}
				}
			});
		}
		datepicker.calendarContainer.style.display = 'block';
		datepicker.open(); // Assurez-vous que le calendrier est ouvert.
	};

	// Form submission
	const handleSubmit = async () => {
		// Handle the form submission here
		let body = <any>{};
		body.name = name;
		body.description = description;
		body.start_date = startDate;
		body.end_date = endDate;

		if (addNewSpecies) {
			body.newSpecies = newSpecies;
		} else {
			body.species = selectedSpecies;
		}

		if (addNewAddress) {
			let fullAddress = {
				address: address,
				zipCode: zipCode,
				city: city,
				country: country,
				name: addressName
			};
			body.newAddress = fullAddress;
		} else {
			body.address = selectedAddress;
		}

		console.log(body);

		const res = await add_plant(body);

		console.log(res);

		if (res.plant_id !== 0) {
			console.log('Plante ajoutée');
			notifier.success('Plante ajoutée avec succès', 7000);
			const plant_id = res.plant_id;

			// Télécharger les fichiers
			const uploadResponse = await add_photo(plant_id, uploadedFiles);
			if (uploadResponse.status === 201) {
				console.log('Fichiers téléchargés');
				notifier.success('Fichiers téléchargés avec succès', 7000);
				// Réinitialiser le formulaire
				invalidateAll();
			} else {
				console.log('Fichiers non téléchargés');
				notifier.danger(uploadResponse.message, 7000);
			}
		} else {
			console.log('Plante non ajoutée');
			notifier.danger(res.message, 7000);
		}
	};
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr@4.6.9/dist/flatpickr.min.css">
</svelte:head>


<NotificationDisplay />
<main class="flex h-screen items-center justify-center">
	<div class="w-1/3 rounded-lg bg-white p-8 shadow-lg">
		<h1 class="mb-4 text-2xl font-bold">Formulaire</h1>

		<div>
			<div class="mb-4">
				<label class="block" for="name">Nom:</label>
				<div class="flex flex-row items-center">
					<input
						type="text"
						id="name"
						class="mr-2 w-11/12 rounded border border-gray-300 px-4 py-2"
						bind:value={name}
					/>
					<span
						class="cursor-help text-sm text-gray-500"
						title="Donner ici un nom à votre plante"
					>
						❔
					</span>
				</div>
			</div>

			<div class="mb-4" class:disable={addNewSpecies === false}>
				<label class="block" for="dropdown">Choisissez une espèce:</label>
				<div class="flex flex-row">
					<select
						id="dropdown"
						class:hide={addNewSpecies}
						class="w-11/12 rounded border border-gray-300 px-4 py-2"
						bind:value={selectedSpecies}
					>
						{#each dropdownOptions as speciesOption}
							<option>{speciesOption}</option>
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
						class="mt-2 w-full rounded border border-gray-300 px-4 py-2"
						bind:value={newSpecies}
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
						class="w-11/12 rounded border border-gray-300 px-4 py-2"
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
							<label class="block" for="address">Nom de l'Adresse :</label>
							<input
								type="text"
								id="address"
								class="w-full rounded border border-gray-300 px-4 py-2"
								bind:value={addressName}
							/>
						</div>
						<div>
							<label class="block" for="address">Adresse :</label>
							<input
								type="text"
								id="address"
								class="w-full rounded border border-gray-300 px-4 py-2"
								bind:value={address}
							/>
						</div>
						<div>
							<label class="block" for="zipCode">Code Postal :</label>
							<input
								type="text"
								id="zipCode"
								class="w-full rounded border border-gray-300 px-4 py-2"
								bind:value={zipCode}
							/>
						</div>
						<div>
							<label class="block" for="city">Ville :</label>
							<input
								type="text"
								id="city"
								class="w-full rounded border border-gray-300 px-4 py-2"
								bind:value={city}
							/>
						</div>
						<div>
							<label class="block" for="country">Pays :</label>
							<input
								type="text"
								id="country"
								class="w-full rounded border border-gray-300 px-4 py-2"
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
					class="w-full rounded border border-gray-300 px-4 py-2"
					bind:value={description}
				/>
			</div>

			<div class="mb-4">
				<label class="block" for="file">Télécharger un fichier:</label>
				<input
					type="file"
					id="file"
					multiple
					class="w-full rounded border border-gray-300 px-4 py-2"
					on:change={handleFileChange}
				/>
				<div class="mt-2 flex flex-wrap">
					{#each uploadedFiles as file, i}
						<div class="relative m-2">
							<img src={URL.createObjectURL(file)} alt="Preview" class="h-24 w-24 object-cover" />
							<button
								class="absolute right-0 top-0 rounded-full bg-red-500 p-1 text-white"
								on:click={() => {
									uploadedFiles.splice(i, 1);
									uploadedFiles = [...uploadedFiles];
								}}
							>
								✖
							</button>
						</div>
					{/each}
				</div>
				<button
					class="mt-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
					on:click={handleClick}
				>
					Sélectionner une date de gardiennage
				</button>

				<input
					type="date"
					class="datepicker"
					bind:this={dateInput}
					placeholder="Aucune date sélectionnée"
					readonly
				/>
			</div>

			<button
				type="submit"
				class="mt-5 rounded bg-blue-500 px-4 py-2 text-white"
				on:click={handleSubmit}>Soumettre</button
			>
		</div>
	</div>
</main>

<style>
	.hide {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
