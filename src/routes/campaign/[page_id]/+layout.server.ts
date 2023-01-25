import type { LayoutServerLoad } from './$types';
import type { SubPage } from '$lib/pages';
import { page } from '$app/stores';

export const load = (async ({ locals, route, params }) => {
	// TODO: from here we don't want to actually load the content from the database
	// for now we can at least exclude sending it to the page
	const { page_id } = params;
	console.log(page_id);
	const [campaignPage, subPages] = await Promise.all([
		await locals.pb?.collection('pages').getOne<SubPage>(page_id),
		await locals.pb
			?.collection('pages')
			.getFullList<SubPage>(10, { filter: `parent_page = '${page_id || ''}'` })
	]);
	//const campaignPage = structuredClone(campaignPage);
	const pages = subPages?.map((page) => {
		const sp: SubPage = structuredClone({ ...page });
		return sp;
	});
	return {
		campaignPage: structuredClone(campaignPage),
		pages
	};
}) satisfies LayoutServerLoad;
