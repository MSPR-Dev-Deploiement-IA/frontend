import { PUBLIC_BACKEND } from '$env/static/public';

export const add_history = async (startDate: Date, endDate: Date, token: string): Promise<void> => {
	if (!startDate || !endDate) {
		console.error('Start date or end date is not set');
		return;
	}

	const response = await fetch(`${PUBLIC_BACKEND}/api/history/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			// Include your authorization header with token here
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({
			start_date: startDate.toISOString(),
			end_date: endDate.toISOString()
		})
	});

	if (!response.ok) {
		console.error('Failed to send date range', response);
		return;
	}

	return response.json();
};
