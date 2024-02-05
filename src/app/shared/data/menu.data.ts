import { CATEGORY, MENU, MENU_URL_KEY } from "../enums/electro.enum";

export interface IMenu {
    name: string;
    category: string;
    link: string;
    subMenus: Array<ISubMenu>;
}

export interface ISubMenu {
    name: string;
    category: string;
    link: string;
}

export const NAV_ITEMS: Array<IMenu> = [
    {
        name: MENU.SPECIAL_OFFER,
        category: MENU_URL_KEY.SPECIAL_OFFER_URL_KEY,
        link: "/" + MENU_URL_KEY.SPECIAL_OFFER_URL_KEY,
        subMenus: [],
    },
    {
        name: MENU.CUSTOMER_SUPORT,
        category: MENU_URL_KEY.CUSTOMER_SUPORT_URL_KEY,
        link: "/" + MENU_URL_KEY.CUSTOMER_SUPORT_URL_KEY,
        subMenus: [
            {
                name: MENU.STORES,
                category: MENU_URL_KEY.STORES_URL_KEY,
                link: "/" + MENU_URL_KEY.CUSTOMER_SUPORT_URL_KEY + "/" + MENU_URL_KEY.STORES_URL_KEY,
            }
        ],
    },
]