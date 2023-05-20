import { PUBLIC_BACKEND } from '$env/static/public';
import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({}) => {
	return {};
}) satisfies PageLoad;
