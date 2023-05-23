import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

export const add_plant = async (body: object) => {
	const response = await fetch(`${PUBLIC_BACKEND}/api/plants/add`, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(body)
	});

	return response.json();
};
