import { CATEGORY, ORDER, USER } from "../enums/electro.enum";

export interface SidenavTitle {
    name: string;
    icon: string;
    isOpened: boolean;
    subtitles: Array<SidenavSubtitle>
}

export interface SidenavSubtitle {
    name: string;
    urlKey: string;
}

export const SIDENAV_ITEMS: Array<SidenavTitle> = [
    {
        name: CATEGORY.PRODUCTS,
        icon: "library_books",
        isOpened: true,
        subtitles: [
            {
                name: CATEGORY.LAPTOP,
                urlKey: CATEGORY.LAPTOP_URL_KEY,
            },
            {
                name: CATEGORY.LAPTOP_ACCESSORY,
                urlKey: CATEGORY.LAPTOP_ACCESSORY_URL_KEY,
            },
            {
                name: CATEGORY.PC,
                urlKey: CATEGORY.PC_URL_KEY,
            },
            {
                name: CATEGORY.MONITOR,
                urlKey: CATEGORY.MONITOR_URL_KEY,
            },
        ]
    },
    {
        name: ORDER.ORDERS,
        icon: "add_shopping_cart",
        isOpened: true,
        subtitles: [
            {
                name: ORDER.ORDERS_LIST,
                urlKey: ORDER.ORDERS_LIST_URL_KEY,
            },
            {
                name: ORDER.ORDED_PRODUCTS,
                urlKey: ORDER.ORDED_PRODUCTS_URL_KEY,
            },
        ]
    },
    {
        name: USER.USERS,
        icon: "supervisor_account",
        isOpened: true,
        subtitles: [
            {
                name: USER.USERS_LIST,
                urlKey: USER.USERS_LIST_URL_KEY,
            },
            {
                name: USER.TOKENS,
                urlKey: USER.TOKENS_URL_KEY,
            },
        ]
    },
]