import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

export const get_all_species = async () => {
	const response = await fetch(`${PUBLIC_BACKEND}/api/species/`, {
		method: 'GET',
		credentials: 'include'
	});

	const json = await response.json();

	return json.species ? json.species : [];
};
