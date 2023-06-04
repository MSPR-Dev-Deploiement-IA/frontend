import { PUBLIC_BACKEND } from '$env/dynamic/public';

export const get_specie_by_scientific_name = async (scientific_name: string) => {
	const res = await fetch(`${PUBLIC_BACKEND}/api/species/scientific/${scientific_name}`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (res.status === 200) {
		const data = await res.json();
		return data.species;
	}

	return null;
};
