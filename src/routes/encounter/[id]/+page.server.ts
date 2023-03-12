import type { Encounter } from '$lib/encounters';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const { id } = params;
	const encounter = await locals.pb?.collection('encounters').getOne<Encounter>(id);
	return {
		encounter: structuredClone(encounter)
	};
}) satisfies PageServerLoad;
