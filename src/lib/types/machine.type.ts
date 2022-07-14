export type SetupStepTasks = {
    id: string,
    title: string,
    order: number,
    done: boolean,
    desc: string | null,
}

export type SetupStep = {
    id: string,
    title: string,
    order: number,
    done: boolean,
    desc: string | null,

    setupStepTasks: SetupStepTasks[],
}

export type MachineType = {
    id: string,
    slug: string,
    title: string,

    setupSteps: SetupStep[],
}
