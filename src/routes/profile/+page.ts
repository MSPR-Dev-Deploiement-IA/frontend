import { env } from '$env/dynamic/public';

const PUBLIC_BACKEND = env.PUBLIC_BACKEND;

import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({}) => {
	return {};
}) satisfies PageLoad;
