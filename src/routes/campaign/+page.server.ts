import type { Page } from '$lib/pages';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const campaigns = await locals.pb
		?.collection('pages')
		.getList<Page>(1, 10, { filter: 'parent_page = null' });

	return {
		campaigns: structuredClone(campaigns?.items)
	};
}) satisfies PageServerLoad;
