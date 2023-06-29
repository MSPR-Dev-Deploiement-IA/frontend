import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

export const add_advice = async (species_id: number, advice: string) => {
	// get access token from local storage
	const access_token = localStorage.getItem('access_token');

	const response = await fetch(`${PUBLIC_BACKEND}/api/advice/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${access_token}`
		},
		body: JSON.stringify({
			species_id: species_id,
			text: advice
		}),
		credentials: 'include'
	});

	if (!response.ok) {
		console.error('Failed to send advice', response);
		return;
	}

	return true;
};
