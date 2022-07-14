import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const get: RequestHandler = async ({ params }) => {
    const machine = await prisma.machine.findFirst({
        where: { slug: params.slug }, include: { setupSteps: { include: { setupActions: true } } }
    })

    if (!machine) {
        return { status: 404 }
    }

    return {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
        body: { machine }
    }
}