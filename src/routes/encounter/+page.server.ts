import { Load } from '$lib/characters';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	const characters = url.searchParams.getAll('name').map((name) => {
		return Load(name);
	});
	//console.log(characters);
	return {
		characters: characters
	};
}) satisfies PageServerLoad;
