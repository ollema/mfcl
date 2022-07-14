import type { RequestHandler } from '@sveltejs/kit'
import { machines } from '$lib/data/machines';
import type { MachineType } from '$lib/types/machine.type';


export const get: RequestHandler = async ({ params }) => {
    let currentMachine: MachineType | undefined

    machines.forEach(machine => {
        if (machine.slug === params.slug) {
            currentMachine = machine;
        }
    });

    if (typeof currentMachine === 'undefined') {
        return { status: 404 }
    }

    let currentStep: number
    if (0 <= +params.id && +params.id < currentMachine.setupTasks.length) {
        currentStep = +params.id
    } else {
        return { status: 404 }
    }

    return {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
        body: { currentMachine, currentStep }
    }
}
