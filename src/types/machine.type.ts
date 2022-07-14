import type { Prisma } from '@prisma/client';

export type MachineType = Prisma.MachineGetPayload<{
    include: {
        setupSteps: {
            include: {
                setupActions: true;
            };
        };
    };
}>;
