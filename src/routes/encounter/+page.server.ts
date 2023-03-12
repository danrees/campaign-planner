import { List } from '$lib/characters';
import type { Encounter } from '$lib/encounters';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const encounters = await locals.pb?.collection('encounters').getList<Encounter>(1, 10);
	//console.log(characters);
	const characters = List();
	return {
		encounters: structuredClone(encounters?.items),
		characters: characters
	};
}) satisfies PageServerLoad;
