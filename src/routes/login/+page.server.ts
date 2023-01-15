import { error } from '@sveltejs/kit';
import type { Actions } from './$types';

type Login = {
	username: string;
	password: string;
};

function isLogin(input: unknown): input is Login {
	return (input as Login).username !== undefined && (input as Login).password !== undefined;
}

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const userData = Object.fromEntries(await request.formData());
		if (!isLogin(userData)) {
			throw error(400, { message: 'incorrect login format' });
		}
		await locals.pb?.collection('users').authWithPassword(userData.username, userData.password);
		return {
			success: true
		};
	}
};
