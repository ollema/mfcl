import type { RequestHandler } from '@sveltejs/kit';
import { getAllUsers, createUser } from '$lib/database';

export const get: RequestHandler = async () => {
	const users = await getAllUsers();

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { users }
	};
};

export const post: RequestHandler = async ({ request }) => {
	const body = await request.formData();
	const name = <string | null>body.get('name');
	if (!name) {
		return { status: 400 };
	}

	await createUser(name);

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200
	};
};
