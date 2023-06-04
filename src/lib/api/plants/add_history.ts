import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

export const add_history = async (startDate: Date, endDate: Date, plant_id: number) => {
	if (!startDate || !endDate || !plant_id) {
		console.error('Start date, end date, or plant id is not set');
		return;
	}

	const response = await fetch(`${PUBLIC_BACKEND}/api/history/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			start_date: startDate.toISOString(),
			end_date: endDate.toISOString(),
			plant_id: plant_id
		}),
		credentials: 'include'
	});

	if (!response.ok) {
		console.error('Failed to send date range', response);
		return;
	}

	return true;
};
