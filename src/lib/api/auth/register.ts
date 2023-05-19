import { PUBLIC_BACKEND } from '$env/static/public';

export const register = async (name: string, email: string, password: string) => {
	const body = JSON.stringify({
		email,
		name,
		password,
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
