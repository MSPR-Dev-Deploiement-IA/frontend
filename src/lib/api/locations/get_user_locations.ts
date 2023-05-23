import { env } from '$env/dynamic/public';

export const get_user_locations = async () => {
	const response = await fetch(`${env.PUBLIC_BACKEND}/api/locations/`, {
		method: 'GET',
		credentials: 'include'
	});

	const json = await response.json();

	if (json.locations) {
	}

	return json.locations ? json.locations : [];
};
