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
        name: CATEGORY.SPECIAL_OFFER_RO,
        category: CATEGORY.SPECIAL_OFFER,
        link: "/" + CATEGORY.SPECIAL_OFFER,
        subMenus: [],
    },
    {
        name: CATEGORY.CUSTOMER_SUPORT_RO,
        category: CATEGORY.CUSTOMER_SUPORT,
        link: "/" + CATEGORY.CUSTOMER_SUPORT,
        subMenus: [
            {
                name: CATEGORY.STORES_RO,
                category: CATEGORY.STORES,
                link: "/" + CATEGORY.CUSTOMER_SUPORT + "/" + CATEGORY.STORES,
            }
        ],
    },
]