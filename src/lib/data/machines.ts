import type { MachineType } from '$lib/types/machine.type';

export const machines: MachineType[] = [{
    id: "0",
    slug: "laser",
    title: "Laser cutter",

    setupSteps: [
        {
            id: "0",
            title: "First setup task",
            order: 0,
            done: false,
            desc: "First setup task for this machine",

            setupStepTasks: [
                {
                    id: "0",
                    title: "First setup task step for the first task",
                    order: 0,
                    done: false,
                    desc: "First setup task step for the first task for this machine",
                },
                {
                    id: "1",
                    title: "Second setup task step for the first task",
                    order: 1,
                    done: false,
                    desc: "Second setup task step for the first task for this machine",
                },
                {
                    id: "2",
                    title: "Third setup task step for the first task",
                    order: 2,
                    done: false,
                    desc: "Third setup task step for the first task for this machine",
                },
                {
                    id: "3",
                    title: "Fourth setup task step for the first task",
                    order: 3,
                    done: false,
                    desc: "Fourth setup task step for the first task for this machine",
                },
            ]
        },
        {
            id: "1",
            title: "Second setup task",
            order: 1,
            done: false,
            desc: "Second setup task for this machine",

            setupStepTasks: [
                {
                    id: "4",
                    title: "First setup task step for the second task",
                    order: 0,
                    done: false,
                    desc: "First setup task step for the second task for this machine",
                },
                {
                    id: "5",
                    title: "Second setup task step for the second task",
                    order: 1,
                    done: false,
                    desc: "Second setup task step for the second task for this machine",
                },
                {
                    id: "6",
                    title: "Third setup task step for the second task",
                    order: 2,
                    done: false,
                    desc: "Third setup task step for the second task for this machine",
                },
                {
                    id: "7",
                    title: "Fourth setup task step for the second task",
                    order: 3,
                    done: false,
                    desc: "Fourth setup task step for the second task for this machine",
                },
            ]
        },
        {
            id: "2",
            title: "Third setup task",
            order: 2,
            done: false,
            desc: "Third setup task for this machine",

            setupStepTasks: [
                {
                    id: "8",
                    title: "First setup task step for the third task",
                    order: 0,
                    done: false,
                    desc: "First setup task step for the third task for this machine",
                },
                {
                    id: "9",
                    title: "Second setup task step for the third task",
                    order: 1,
                    done: false,
                    desc: "Second setup task step for the third task for this machine",
                },
                {
                    id: "10",
                    title: "Third setup task step for the third task",
                    order: 2,
                    done: false,
                    desc: "Third setup task step for the third task for this machine",
                },
                {
                    id: "11",
                    title: "Fourth setup task step for the third task",
                    order: 3,
                    done: false,
                    desc: "Fourth setup task step for the third task for this machine",
                },
            ]
        },
        {
            id: "3",
            title: "Fourth setup task",
            order: 3,
            done: false,
            desc: "Fourth setup task for this machine",

            setupStepTasks: [
                {
                    id: "12",
                    title: "First setup task step for the fourth task",
                    order: 0,
                    done: false,
                    desc: "First setup task step for the fourth task for this machine",
                },
                {
                    id: "13",
                    title: "Second setup task step for the fourth task",
                    order: 1,
                    done: false,
                    desc: "Second setup task step for the fourth task for this machine",
                },
                {
                    id: "14",
                    title: "Third setup task step for the fourth task",
                    order: 2,
                    done: false,
                    desc: "Third setup task step for the fourth task for this machine",
                },
            ]
        },
        {
            id: "4",
            title: "Fifth setup task",
            order: 4,
            done: false,
            desc: "Fifth setup task for this machine",

            setupStepTasks: [
                {
                    id: "15",
                    title: "First setup task step for the fifth task",
                    order: 0,
                    done: false,
                    desc: "First setup task step for the fifth task for this machine",
                },
                {
                    id: "16",
                    title: "Second setup task step for the fifth task",
                    order: 1,
                    done: false,
                    desc: "Second setup task step for the fifth task for this machine",
                },
                {
                    id: "17",
                    title: "Third setup task step for the fifth task",
                    order: 2,
                    done: false,
                    desc: "Third setup task step for the fifth task for this machine",
                },
                {
                    id: "18",
                    title: "Fourth setup task step for the fifth task",
                    order: 3,
                    done: false,
                    desc: "Fourth setup task step for the fifth task for this machine",
                },
            ]
        },
        {
            id: "5",
            title: "Sixth setup task",
            order: 5,
            done: false,
            desc: "Sixth setup task for this machine",

            setupStepTasks: [
                {
                    id: "19",
                    title: "First setup task step for the sixth task",
                    order: 0,
                    done: false,
                    desc: "First setup task step for the sixth task for this machine",
                },
                {
                    id: "20",
                    title: "Second setup task step for the sixth task",
                    order: 1,
                    done: false,
                    desc: "Second setup task step for the sixth task for this machine",
                },
                {
                    id: "21",
                    title: "Third setup task step for the sixth task",
                    order: 2,
                    done: false,
                    desc: "Third setup task step for the sixth task for this machine",
                },
            ]
        }
    ]
}];