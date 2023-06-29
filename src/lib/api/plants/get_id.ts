import { env } from '$env/dynamic/public';
export const get_plant_by_id = async (id: string) => {
	const access_token = window.localStorage.getItem('access_token');
	const url = `${env.PUBLIC_BACKEND}/api/plants/${id}`;
	console.log(url);
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

	return json.plant ? json.plant : null;
};
