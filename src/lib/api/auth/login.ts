import { PUBLIC_BACKEND } from '$env/static/public';

export const login = async (password: string, email: string) => {
	const body = JSON.stringify({
		password,
		email
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
