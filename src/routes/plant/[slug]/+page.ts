import type { PageLoad } from './$types';
import { get_plant_by_id } from '$lib/api/plants/get_id';

export const load = (async ({ params }) => {
	const id = params.slug;

	const plant = await get_plant_by_id(id);

	return plant;
}) satisfies PageLoad;
