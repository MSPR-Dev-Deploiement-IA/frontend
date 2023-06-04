<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { add_history } from '$lib/api/plants/add_history';

	const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

	import type { PageData } from './$types';

	import { onMount, onDestroy } from 'svelte';
	import flatpickr from 'flatpickr';
	import { French } from 'flatpickr/dist/l10n/fr.js';

	export let data: PageData;

	let datepicker: flatpickr.Instance | null = null;
	let dateInput: HTMLInputElement;

	let startDate: Date;
	let endDate: Date;

	onDestroy(() => {
		if (datepicker) datepicker.destroy();
	});

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

						await add_history(startDate, endDate, data.id);
					}
				}
			});
		}
		datepicker.calendarContainer.style.display = 'block';
		datepicker.open(); // Assurez-vous que le calendrier est ouvert.
	};

	const generate_image_url = (photo_url: string) => {
		return `${PUBLIC_BACKEND}/api/static/${photo_url}`;
	};

	let activeIndex = 0;
	const next = () => (activeIndex = (activeIndex + 1) % data.photos.length);
	const prev = () => (activeIndex = (activeIndex - 1 + data.photos.length) % data.photos.length);
</script>

{#if data}
	<div class="flex flex-col items-center justify-center">
		<div class="w-full p-4 md:w-1/2">
			<div
				class="flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center shadow-lg"
			>
				<h1 class="mb-4 text-2xl font-bold">Nom: {data.name}</h1>
				<p class="mb-4 text-lg">Espèce: {data.species.common_name}</p>
				<p class="mb-4 text-lg">Adresse: {data.location.address}</p>
				<p class="mb-4 text-lg">Description: {data.description}</p>
			</div>
		</div>

		<div class="relative h-96 w-full max-w-md overflow-hidden rounded-lg shadow-lg">
			{#each data.photos as photo_url, index}
				<img
					src={`${PUBLIC_BACKEND}/api/static/${photo_url.photo_file_url}`}
					alt={photo_url.photo_file_url}
					class="absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-200 {index ===
					activeIndex
						? 'opacity-100'
						: 'opacity-0'}"
				/>
			{/each}
			<button
				class="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2 shadow-md"
				on:click={prev}
			>
				&#10094;
			</button>
			<button
				class="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2 shadow-md"
				on:click={next}
			>
				&#10095;
			</button>
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
{/if}

<style>
	@import 'flatpickr/dist/flatpickr.min.css';
	.flatpickr-calendar {
		display: none;
	}
</style>
