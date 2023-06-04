import { env } from '$env/dynamic/public';

export const get_plant_history_by_id = async (id: string) => {
	const url = `${env.PUBLIC_BACKEND}/api/history/${id}`;

	const response = await fetch(url, {
		method: 'GET',
		credentials: 'include'
	});

	const json = await response.json();

	return json.history ? json.history : null;
};
