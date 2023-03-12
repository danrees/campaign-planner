import type { LayoutServerLoad } from './$types';
import type { Page, SubPage } from '$lib/pages';

export const load = (async ({ locals, params }) => {
	// TODO: from here we don't want to actually load the content from the database
	// for now we can at least exclude sending it to the page
	const { page_id } = params;
	console.log(page_id);
	const [campaignPage, subPages] = await Promise.all([
		await locals.pb?.collection('pages').getOne<Page>(page_id),
		await locals.pb
			?.collection('pages')
			.getFullList<SubPage>(10, { filter: `parent_page = '${page_id || ''}'` })
	]);
	//const campaignPage = structuredClone(campaignPage);
	const pages = subPages?.map((page) => {
		const sp: SubPage = structuredClone({ ...page });
		return sp;
	});
	console.log(pages);
	return {
		campaignPage: structuredClone(campaignPage),
		pages
	};
}) satisfies LayoutServerLoad;
