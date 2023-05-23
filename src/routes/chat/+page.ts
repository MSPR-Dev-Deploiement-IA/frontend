import { get_all_messages } from '$lib/api/chat/get_all_messages';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const messages = await get_all_messages();

	return {};
}) satisfies PageLoad;
