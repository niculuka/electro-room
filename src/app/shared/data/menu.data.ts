import { CATEGORY } from "../enums/electro.enum";

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
        name: CATEGORY.SPECIAL_OFFER,
        category: CATEGORY.SPECIAL_OFFER_PATH,
        link: "/" + CATEGORY.SPECIAL_OFFER_PATH,
        subMenus: [],
    },
    {
        name: CATEGORY.CUSTOMER_SUPORT,
        category: CATEGORY.CUSTOMER_SUPORT_PATH,
        link: "/" + CATEGORY.CUSTOMER_SUPORT_PATH,
        subMenus: [
            {
                name: CATEGORY.STORES,
                category: CATEGORY.STORES_PATH,
                link: "/" + CATEGORY.CUSTOMER_SUPORT_PATH + "/" + CATEGORY.STORES_PATH,
            }
        ],
    },
]