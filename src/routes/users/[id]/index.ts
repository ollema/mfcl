import type { RequestHandler } from '@sveltejs/kit';
import { getAllUsers } from '$lib/database';

export const get: RequestHandler = async ({ params }) => {
	const users = await getAllUsers();
	console.log(params.id);
	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { users }
	};
};
