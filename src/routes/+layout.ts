import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

import { userStore } from '$lib/stores/user';
import type { LayoutLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`${PUBLIC_BACKEND}/api/users/me`);

	if (!response.ok) {
		return { user: null };
	}

	const json = await response.json();
	const user = json.user;

	userStore.set(user);

	return {};
}) satisfies LayoutLoad;
