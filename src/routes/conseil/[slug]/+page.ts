import { get_specie_by_scientific_name } from '$lib/api/species/get_specie_by_scientific_name';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
    const { slug } = params;
    const specie = await get_specie_by_scientific_name(slug);
    if (!specie) return { status: 404 };

    console.log(specie);
    return { specie }
}) satisfies PageLoad;