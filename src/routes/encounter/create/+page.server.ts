import { Load } from '$lib/characters';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	const names = url.searchParams.getAll('name');
	const characters = names.map((name) => {
		return Load(name);
	});
	return {
		characters: characters
	};
}) satisfies PageServerLoad;

export const actions = {
	save: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
	}
} satisfies Actions;
