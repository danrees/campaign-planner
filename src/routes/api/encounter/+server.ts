import type { Encounter } from '$lib/encounters';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ locals }) => {
	const encounters = await locals.pb?.collection('encounters').getFullList(10);
	const mapped = encounters?.map((e) => ({
		...e,
		participants: JSON.parse(e.participants)
	}));

	return json(structuredClone(mapped));
}) satisfies RequestHandler;

export const POST = (async ({ request, locals }) => {
	const encounter: Encounter = await request.json();
	//console.log(encounter);
	await locals.pb?.collection('encounters').create({
		name: encounter.name,
		participants: JSON.stringify(encounter.participants)
	});

	return json({ success: true });
}) satisfies RequestHandler;
