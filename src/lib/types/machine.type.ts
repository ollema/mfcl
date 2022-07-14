export type SetupTaskStep = {
    id: string,
    title: string,
    order: number,
    done: boolean,
    desc: string | null,
}

export type SetupTask = {
    id: string,
    title: string,
    order: number,
    done: boolean,
    desc: string | null,

    setupTaskSteps: SetupTaskStep[],
}

export type MachineType = {
    id: string,
    slug: string,
    title: string,

    setupTasks: SetupTask[],
}
