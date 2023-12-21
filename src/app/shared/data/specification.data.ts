import { SPECIFICATIONS } from "../enums/electro.enum";

export interface Specification {
    title: string;
    subtitles: Array<SubSpecification>;
}

export interface SubSpecification {
    subtitle: string;
    specifications: Array<any>;
}

export const SPECIFICATION: Array<Specification> = [
    {
        title: SPECIFICATIONS.TITLE_DISPLAY,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.DISPLAY_SIZE,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.DISPLAY_RESOLUTION,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.DISPLAY_FREQUENCY,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.DISPLAY_TOUCH,
                specifications: [],
            },
        ]
    },
    {
        title: SPECIFICATIONS.TITLE_MOTHERBOARD,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.MOTHERBOARD_BRAND,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MOTHERBOARD_CHIPSET,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MOTHERBOARD_SLOT,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MOTHERBOARD_AUDIO,
                specifications: [],
            },
        ]
    },
    {
        title: SPECIFICATIONS.TITLE_PROCESSOR,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.PROCESSOR_BRAND,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.PROCESSOR_TYPE,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.PROCESSOR_MODEL,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.PROCESSOR_FREQUENCY,
                specifications: [],
            },
        ]
    },
    {
        title: SPECIFICATIONS.TITLE_MEMORY,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.MEMORY_TYPE,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MEMORY_CAPACITY,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MEMORY_FREQUENCY,
                specifications: [],
            },
        ]
    },
    {
        title: SPECIFICATIONS.TITLE_HARD,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.HARD_TYPE_1,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HARD_CAPACITY_1,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HARD_SLOT_1,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HARD_TYPE_2,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HARD_CAPACITY_2,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HARD_SLOT_2,
                specifications: [],
            },
        ]
    },
    {
        title: SPECIFICATIONS.TITLE_CONNECTIVITY,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.CONNECTIVITY_BLUETOOTH,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.CONNECTIVITY_WIRELESS,
                specifications: [],
            },
        ]
    },
    {
        title: SPECIFICATIONS.TITLE_GENERAL,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.BRAND,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.TYPE,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MODEL,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.CAPACITY,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.CONNECTION,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.OUTPUT,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.COMPATIBILITY,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.SCREEN_SIZE,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.FREQUENCY,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.POWER,
                specifications: [],
            },
        ]
    },
    {
        title: SPECIFICATIONS.TITLE_OTHER,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.MATERIAL,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.COLOR,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.WEIGHT,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.SPEED,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.READ_SPEED,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.WRITE_SPEED,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HDMI,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.SPEAKER,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.RADIATOR,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.VOLTAGE,
                specifications: [],
            },
        ]
    },
]