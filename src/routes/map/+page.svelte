<script>
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	/**
	 * @type {string | HTMLElement}
	 */
	let mapElement;
	/**
	 * @type {import("leaflet").Map | import("leaflet").LayerGroup<any>}
	 */
	let map;

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			map = leaflet.map(mapElement).setView([51.505, -0.09], 13);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			// Add markers for each of the locations
			const plants = data.plants;
			for (let i = 0; i < plants.length; i++) {
				const plant = plants[i];
				const html = `
                    <h2>${plant.name}</h2>
                    <p>${plant.species.common_name}</p>
                    <a href="/plant/${plant.ID}">View plant</a>
                `;
				leaflet
					.marker([plant.location.latitude, plant.location.longitude])
					.addTo(map)
					.bindPopup(html)
					.openPopup();
			}
		}
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<main>
	<div bind:this={mapElement} />
</main>

<style>
	@import 'leaflet/dist/leaflet.css';
	main div {
		height: calc(100vh - 4rem);
	}
</style>
