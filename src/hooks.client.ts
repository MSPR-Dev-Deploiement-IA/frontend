import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

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
