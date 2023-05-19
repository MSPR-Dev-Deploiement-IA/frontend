import { PUBLIC_BACKEND } from '$env/static/public';

export const login = async (email: string, password: string) => {
	const body = JSON.stringify({
		email,
		password,
	});

	const response = await fetch(`${PUBLIC_BACKEND}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body,
		credentials: 'include'   
	});

	// print cookies
	console.log(response.headers);

	if (response.status === 200) {
		return true;
	} else {
		return false;
	}
};
