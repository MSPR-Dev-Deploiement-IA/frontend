import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

export const post_message = async (message_text: string) => {
	// timestamp
	const timestamp = new Date().toISOString();

	const body = JSON.stringify({ message_text, timestamp });

	console.log(body);

	const access_token = window.localStorage.getItem('access_token');

	const res = await fetch(`${PUBLIC_BACKEND}/api/messages/add`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${access_token}`
		},
		body: body
	});

	console.log(res);

	if (res.status === 201) {
		return true;
	}

	return false;
};
