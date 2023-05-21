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
        if(browser) {
            const leaflet = await import('leaflet');

            map = leaflet.map(mapElement).setView([51.505, -0.09], 13);

            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Retrieve the user's current location and add a marker
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    leaflet.marker([latitude, longitude]).addTo(map)
                        // make it red
                        .setIcon(leaflet.icon({
                            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            shadowSize: [41, 41]
                        }))
                        .bindPopup('You are here.')
                        .openPopup();
                });
            }

            // Add markers for each of the locations
            const plants = data.plants;
            for(let i = 0; i < plants.length; i++) {
                const plant = plants[i];
                leaflet.marker([plant.location.latitude, plant.location.longitude]).addTo(map)
                    .bindPopup(plant.name)
                    .openPopup();
            }
        }
    });

    onDestroy(async () => {
        if(map) {
            console.log('Unloading Leaflet map.');
            map.remove();
        }
    });
</script>


<main>
    <div bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: calc(100vh - 4rem);
    }
</style>
