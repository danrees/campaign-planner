import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const content = data.get('content')?.toString();
		if (content === undefined) {
			return fail(400, { missing: true });
		}

		const id = data.get('id')?.toString();
		if (id === undefined) {
			return fail(400, { missing: true });
		}

		const parent_id = data.get('parent_page_id')?.toString();

		const regexp = /^#\s?(.*)/m;

		const match = content.match(regexp);
		const title = content?.match(regexp)?.at(1);
		console.log(match);
		if (!title) {
			return fail(400, { missing: true });
		}
		console.log('saving page');

		const page = {
			content,
			id,
			title,
			parent_page: parent_id
		};
		try {
			await locals.pb?.collection('pages').update(id, page);
		} catch (e) {
			console.log(e);
			return fail(500, { error: "Couldn't save", success: false });
		}
		return { success: true };
	}
} satisfies Actions;
