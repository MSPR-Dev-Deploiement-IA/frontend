import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

export const get_all_species = async () => {
	const access_token = window.localStorage.getItem('access_token');
	const response = await fetch(`${PUBLIC_BACKEND}/api/species/`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${access_token}`
		},
	});

	const json = await response.json();

	return json.species ? json.species : [];
};
