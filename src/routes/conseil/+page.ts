import { get_all_species } from '$lib/api/species/get_all';
import type { PageLoad } from './$types';

export const load = (async () => {
    const species = await get_all_species();
    return { species };
}) satisfies PageLoad;