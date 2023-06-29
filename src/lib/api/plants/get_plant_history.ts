import { env } from '$env/dynamic/public';

export const get_plant_history_by_id = async (id: string) => {
	const url = `${env.PUBLIC_BACKEND}/api/history/${id}`;
	const access_token = localStorage.getItem('access_token');

	const response = await fetch(url, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${access_token}`
		},
	});

	const json = await response.json();
	console.log(json);

	return json ? json : [];
};
