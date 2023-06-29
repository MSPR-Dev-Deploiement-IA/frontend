import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

export const add_plant = async (body: object) => {
	const access_token = localStorage.getItem('access_token');

	const response = await fetch(`${PUBLIC_BACKEND}/api/plants/add`, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${access_token}`
		},
	});

	return response.json();
};
