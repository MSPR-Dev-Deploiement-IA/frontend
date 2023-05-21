import { get_all_plants } from '$lib/api/plants/get_all';
import type { PageLoad } from './$types';

export const load = (async ({fetch}) => {

    const plants = await get_all_plants();

    console.log(plants);

    return { plants };
}) satisfies PageLoad;