import type { PageServerLoad } from './$types';
import type { SubPage } from '$lib/pages';

export const load = (async ({ locals }) => {
	const pages = (
		await locals.pb?.collection('pages').getFullList<SubPage>(20, { filter: "parent_page = ''" })
	)?.map((p) => {
		return structuredClone(p);
	});
	return {
		campaigns: pages
	};
}) satisfies PageServerLoad;
