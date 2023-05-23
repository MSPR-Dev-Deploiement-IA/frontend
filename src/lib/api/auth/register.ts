import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

export const register = async (name: string, email: string, password: string) => {
	const body = JSON.stringify({
		email,
		name,
		password
	});

	console.log(body);

	const response = await fetch(`${PUBLIC_BACKEND}/auth/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body
	});

	console.log(response);

	if (response.status === 201) {
		return true;
	} else {
		return false;
	}
};
