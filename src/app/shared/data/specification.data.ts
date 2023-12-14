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
    specifications: [];
}

export const SPECIFICATION: Specification[] = [
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
    // {
    //     id: 5,
    //     title: "Hard",
    //     subtitle: [
    //         {
    //             subtitle: "Tip",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Capacitate",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Slot",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Tip",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Capacitate",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Slot",
    //             check: false,
    //         },
    //     ]
    // },
    // {
    //     id: 6,
    //     title: "Conectivitate",
    //     subtitle: [
    //         {
    //             subtitle: "Bluetooth",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Wireless",
    //             check: false,
    //         },            
    //     ]
    // },
    // {
    //     id: 7,
    //     title: "Caracteristici generale",
    //     subtitle: [
    //         {
    //             subtitle: "Tip",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Model",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Capacitate",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Conectare",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Iesire",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Compatibilitate",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Diagonala",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Frecventa",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Putere",
    //             check: false,
    //         },
    //     ]
    // },
    // {
    //     id: 8,
    //     title: "Altele",
    //     subtitle: [
    //         {
    //             subtitle: "Material",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Culoare",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Greutate",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Viteza",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Viteza de citire",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Viteza de scriere",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Hdmi",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Difuzor",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Radiator",
    //             check: false,
    //         },
    //         {
    //             subtitle: "Tensiune",
    //             check: false,
    //         },
    //     ]
    // },
]