import { env } from '$env/dynamic/public';

export const get_advices = async () => {
	const access_token = localStorage.getItem('access_token');
	const response = await fetch(`${env.PUBLIC_BACKEND}/api/advice/`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${access_token}`
		},
		credentials: 'include'
	});

	const json = await response.json();

	// Return the advices if they exist, otherwise return an empty array.
	return json.advices ? json.advices : [];
};
