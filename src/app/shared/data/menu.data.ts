import { CATEGORY, MENU } from "../enums/electro.enum";

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
        category: CATEGORY.SPECIAL_OFFER,
        link: "/" + CATEGORY.SPECIAL_OFFER,
        subMenus: [],
    },
    {
        name: MENU.CUSTOMER_SUPORT,
        category: CATEGORY.CUSTOMER_SUPORT,
        link: "/" + CATEGORY.CUSTOMER_SUPORT,
        subMenus: [
            {
                name: MENU.STORES,
                category: CATEGORY.STORES,
                link: "/" + CATEGORY.CUSTOMER_SUPORT + "/" + CATEGORY.STORES,
            }
        ],
    },
]