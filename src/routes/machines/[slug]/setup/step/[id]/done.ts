import type { RequestHandler } from '@sveltejs/kit'
import prisma from '$lib/prisma'

export const post: RequestHandler = async ({ params }) => {
    let machine = await prisma.machine.findFirst({
        where: { slug: params.slug }, include: { setupSteps: { include: { setupActions: true } } }
    })
    if (!machine) {
        return { status: 404 }
    }

    await prisma.machine.update({
        where: {
            slug: machine.slug
        },
        include: {
            setupSteps: {
                include: {
                    setupActions: true
                }
            }
        },
        data: {
            setupSteps: {
                update: {
                    where: {
                        setupStepId: machine.setupSteps[+params.id].setupStepId
                    },
                    data: {
                        done: !machine.setupSteps[+params.id].done
                    }
                }
            }
        }
    });

    machine = await prisma.machine.findFirst({
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
