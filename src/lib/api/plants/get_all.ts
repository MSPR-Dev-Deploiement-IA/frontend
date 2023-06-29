import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

export const get_all_plants = async () => {
	const access_token = localStorage.getItem('access_token');
	const res = await fetch(`${PUBLIC_BACKEND}/api/plants/`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${access_token}`
		},
		credentials: 'include'
	});

	const json = await res.json();

	const plants = json.plants;

	return plants;
};
