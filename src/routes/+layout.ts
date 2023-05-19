import { PUBLIC_BACKEND } from '$env/static/public';
import { userStore } from '$lib/stores/user';
import type { LayoutLoad } from './$types';

export const load = (async ({ fetch }) => {
	// log "Relaoding user + current time"
	console.log('Reloading user' + new Date());
	
	
	const response = await fetch(`${PUBLIC_BACKEND}/api/users/me`);

	if (!response.ok) {
		return { user: null };
	}

	const json = await response.json();
	const user = json.user;	
	
	userStore.set(user);

	return { };
}) satisfies LayoutLoad;
