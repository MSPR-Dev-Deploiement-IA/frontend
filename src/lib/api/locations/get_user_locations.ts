import { env } from '$env/dynamic/public';

export const get_user_locations = async () => {
	const access_token = localStorage.getItem('access_token');

	const response = await fetch(`${env.PUBLIC_BACKEND}/api/locations/`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${access_token}`
		}
	});

	const json = await response.json();

	if (json.locations) {
		console.log(json.locations);
	}

	return json.locations ? json.locations : [];
};
