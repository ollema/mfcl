import PrismaClientPkg from '@prisma/client'

// Prisma doesn't support ES Modules so we have to do this
const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient()


function getMachines() {
    return [
        {
            name: "Laser cutter",
            slug: "laser",
            setupSteps: {
                create: [
                    {
                        name: "Do this step first",
                        description: "Do this step first of all",
                        setupActions: {
                            create: [
                                {
                                    name: "First action of the first step step is this"
                                },
                                {
                                    name: "Second action of the first step is this"
                                }
                            ]
                        }
                    },
                    {
                        name: "Then do this step",
                        description: "Then do this step after",
                        setupActions: {
                            create: [
                                {
                                    name: "First action of the second step step is this"
                                },
                                {
                                    name: "Second action of the second step is this"
                                }
                            ]
                        }
                    },
                    {
                        name: "Finally this step",
                        description: "Finally do this step last",
                        setupActions: {
                            create: [
                                {
                                    name: "First action of the last step step is this"
                                },
                                {
                                    name: "Second action of the last step is this"
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
}

async function seed() {
    const machines = getMachines()

    for (const machine of machines) {
        await prisma.machine.create({ data: machine })
    }
}

seed()