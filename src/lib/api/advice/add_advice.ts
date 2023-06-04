import { PUBLIC_BACKEND } from '$env/dynamic/public';

export const add_advice = async (species_id: number, advice: string) => {
	const response = await fetch(`${PUBLIC_BACKEND}/api/advice/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
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
