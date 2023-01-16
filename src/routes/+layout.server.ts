import type { LayoutServerLoad } from './$types';
import type { Page } from '$lib/pages';

type SubPage = Omit<Page, 'content'>;

export const load = (async ({ locals }) => {
	// TODO: from here we don't want to actually load the content from the database
	// for now we can at least exclude sending it to the page
	const pages = await locals.pb?.collection('pages').getFullList<Page>(10);
	const subPages = pages?.map((page) => {
		const sp: SubPage = { ...page };
		return sp;
	});
	return {
		pages: subPages
	};
}) satisfies LayoutServerLoad;
