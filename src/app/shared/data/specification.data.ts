import { SPECIFICATIONS } from "../enums/electro.enum";

export interface Specification {
    id: number;
    title: string;
    title_chk: boolean;
    subtitles: Array<SubSpecification>;
}

export interface SubSpecification {
    subtitle: string;
    subtitle_chk: boolean;
    specifications: Array<any>;
}

export const SPECIFICATION: Array<Specification> = [
    {
        id: 1,
        title: SPECIFICATIONS.TITLE_DISPLAY,
        title_chk: false,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.DISPLAY_DIAGONAL,
                subtitle_chk: false,
                specifications: [],
            },
            // {
            //     subtitle: SPECIFICATIONS.RESOLUTION,
            //     subtitle_chk: false,
            //     specifications: [],
            // },
            {
                subtitle: SPECIFICATIONS.DISPLAY_FREQUENCY,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.DISPLAY_TOUCH,
                subtitle_chk: false,
                specifications: [],
            },
        ]
    },
    {
        id: 2,
        title: SPECIFICATIONS.TITLE_MOTHERBOARD,
        title_chk: false,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.MOTHERBOARD_BRAND,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MOTHERBOARD_CHIPSET,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MOTHERBOARD_SLOT,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MOTHERBOARD_AUDIO,
                subtitle_chk: false,
                specifications: [],
            },
        ]
    },
    {
        id: 3,
        title: SPECIFICATIONS.TITLE_PROCESSOR,
        title_chk: false,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.PROCESSOR_BRAND,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.PROCESSOR_TYPE,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.PROCESSOR_MODEL,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.PROCESSOR_FREQUENCY,
                subtitle_chk: false,
                specifications: [],
            },
        ]
    },
    {
        id: 4,
        title: SPECIFICATIONS.TITLE_MEMORY,
        title_chk: false,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.MEMORY_TYPE,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MEMORY_CAPACITY,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MEMORY_FREQUENCY,
                subtitle_chk: false,
                specifications: [],
            },
        ]
    },
    {
        id: 5,
        title: SPECIFICATIONS.TITLE_HARD,
        title_chk: false,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.HARD_TYPE_1,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HARD_CAPACITY_1,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HARD_SLOT_1,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HARD_TYPE_2,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HARD_CAPACITY_2,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HARD_SLOT_2,
                subtitle_chk: false,
                specifications: [],
            },
        ]
    },
    {
        id: 6,
        title: SPECIFICATIONS.TITLE_CONNECTIVITY,
        title_chk: false,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.CONNECTIVITY_BLUETOOTH,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.CONNECTIVITY_WIRELESS,
                subtitle_chk: false,
                specifications: [],
            },
        ]
    },
    {
        id: 7,
        title: SPECIFICATIONS.TITLE_GENERAL,
        title_chk: false,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.TYPE,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.MODEL,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.CAPACITY,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.CONNECTION,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.OUTPUT,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.COMPATIBILITY,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.SCREEN_SIZE,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.FREQUENCY,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.POWER,
                subtitle_chk: false,
                specifications: [],
            },
        ]
    },
    {
        id: 8,
        title: SPECIFICATIONS.TITLE_OTHER,
        title_chk: false,
        subtitles: [
            {
                subtitle: SPECIFICATIONS.MATERIAL,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.COLOR,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.WEIGHT,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.SPEED,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.READ_SPEED,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.WRITE_SPEED,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.HDMI,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.SPEAKER,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.RADIATOR,
                subtitle_chk: false,
                specifications: [],
            },
            {
                subtitle: SPECIFICATIONS.VOLTAGE,
                subtitle_chk: false,
                specifications: [],
            },
        ]
    },
]