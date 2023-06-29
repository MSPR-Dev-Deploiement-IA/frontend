import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

import { userStore } from '$lib/stores/user';

export const login = async (email: string, password: string) => {
	const body = JSON.stringify({
		email,
		password
	});

	const response = await fetch(`${PUBLIC_BACKEND}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body,
		credentials: 'include'
	});

	// store access token and refresh token in local storage
	const json = await response.json();
	const access_token = json.access_token;
	const refresh_token = json.refresh_token;

	localStorage.setItem('access_token', access_token);
	localStorage.setItem('refresh_token', refresh_token);

	if (response.status === 200) {
		const userResponse = await fetch(`${PUBLIC_BACKEND}/api/users/me`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${access_token}`
			},
			credentials: 'include'
		});

		if (!userResponse.ok) {
			return false;
		}

		const json = await userResponse.json();
		const user = json.user;

		userStore.set(user);

		return true;
	} else {
		return false;
	}
};
