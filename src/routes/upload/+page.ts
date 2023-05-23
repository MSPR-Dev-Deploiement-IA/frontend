import { get_user_locations } from '$lib/api/locations/get_user_locations';
import { get_all_species } from '$lib/api/species/get_all';
import type { PageLoad } from './$types';

export const load = (async () => {
	const species = await get_all_species();
	const locations = await get_user_locations();

	const species_names = species.map((species: { common_name: any }) => species.common_name);
	const addresses = locations.map((location: { name: any }) => location.name);

	return { species_names, addresses };
}) satisfies PageLoad;
