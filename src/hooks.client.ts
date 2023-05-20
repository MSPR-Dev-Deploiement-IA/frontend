import { PUBLIC_BACKEND } from '$env/static/public';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	await fetch(`${PUBLIC_BACKEND}/auth/refresh`, {
		method: 'POST',
		credentials: 'include'
	});

    console.log('refreshed');   

	const response = await resolve(event);
	return response;
}) satisfies Handle;
