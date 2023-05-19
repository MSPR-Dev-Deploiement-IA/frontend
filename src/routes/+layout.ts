import { PUBLIC_BACKEND } from '$env/static/public';
import type { LayoutLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`${PUBLIC_BACKEND}/api/users/me`);

	if (!response.ok) {
		return { user: null };
	}

	const user = await response.json();
	console.log(user);

	return { user };
}) satisfies LayoutLoad;
