import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

export const get_specie_by_scientific_name = async (scientific_name: string) => {
	const access_token = window.localStorage.getItem('access_token');
	const res = await fetch(`${PUBLIC_BACKEND}/api/species/scientific/${scientific_name}`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${access_token}`
		}
	});

	if (res.status === 200) {
		const data = await res.json();
		return data.species;
	}

	return null;
};
