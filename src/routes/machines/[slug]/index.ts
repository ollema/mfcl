import type { RequestHandler } from '@sveltejs/kit';
import { machines } from '$lib/data/machines';
import type { MachineType } from '$lib/models/machine';

export const get: RequestHandler = async ({ params }) => {
	let currentMachine: MachineType | undefined;

	machines.forEach((machine) => {
		if (machine.slug === params.slug) {
			currentMachine = machine;
		}
	});

	if (typeof currentMachine === 'undefined') {
		return { status: 404 };
	}

	return {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
		body: { currentMachine }
	};
};
