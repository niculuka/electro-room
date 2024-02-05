import { CATEGORY, GENERAL, ORDER, ORDER_URL_KEY, TYPE, TYPE_URL_KEY, USER, USER_URL_KEY } from "../enums/electro.enum";

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
        name: GENERAL.PRODUCTS,
        icon: "library_books",
        isOpened: true,
        subtitles: [
            {
                name: TYPE.LAPTOP,
                urlKey: TYPE_URL_KEY.LAPTOP_URL_KEY,
            },
            {
                name: TYPE.LAPTOP_ACCESSORY,
                urlKey: TYPE_URL_KEY.LAPTOP_ACCESSORY_URL_KEY,
            },
            {
                name: TYPE.PC,
                urlKey: TYPE_URL_KEY.PC_URL_KEY,
            },
            {
                name: TYPE.MONITOR,
                urlKey: TYPE_URL_KEY.MONITOR_URL_KEY,
            },
        ]
    },
    {
        name: GENERAL.ORDERS,
        icon: "add_shopping_cart",
        isOpened: true,
        subtitles: [
            {
                name: ORDER.ORDERS_LIST,
                urlKey: ORDER_URL_KEY.ORDERS_LIST_URL_KEY,
            },
            {
                name: ORDER.ORDED_PRODUCTS,
                urlKey: ORDER_URL_KEY.ORDED_PRODUCTS_URL_KEY,
            },
        ]
    },
    {
        name: GENERAL.USERS,
        icon: "supervisor_account",
        isOpened: true,
        subtitles: [
            {
                name: USER.USERS_LIST,
                urlKey: USER_URL_KEY.USERS_LIST_URL_KEY,
            },
            {
                name: USER.TOKENS,
                urlKey: USER_URL_KEY.TOKENS_URL_KEY,
            },
        ]
    },
]