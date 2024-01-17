import { CATEGORY, ORDER, USER } from "../enums/electro.enum";

export interface SidenavSubtitle {
    name: string;
    subtitle: CATEGORY | USER | ORDER;
}

export interface SidenavTitle {
    name: string;
    icon: string;
    isOpened: boolean;
    title: CATEGORY | USER | ORDER;
    subtitles: Array<SidenavSubtitle>
}

export const SIDENAV_ITEMS: Array<SidenavTitle> = [
    {
        name: "Produse",
        icon: "library_books",
        isOpened: true,
        title: CATEGORY.PRODUCTS,
        subtitles: [
            {
                name: "Laptopuri",
                subtitle: CATEGORY.LAPTOPS,
            },
            {
                name: "Accesorii laptop",
                subtitle: CATEGORY.LAPTOP_ACCESSORY,
            },
            {
                name: "Sisteme Pc",
                subtitle: CATEGORY.PC,
            },
            {
                name: "Monitoare",
                subtitle: CATEGORY.MONITOR,
            },
        ]
    },
    {
        name: "Comenzi",
        icon: "add_shopping_cart",
        isOpened: true,
        title: ORDER.ORDERS,
        subtitles: [
            {
                name: "Comenzi",
                subtitle: ORDER.ORDERS,
            },
            {
                name: "Produse comandate",
                subtitle: ORDER.ITEMS,
            },
        ]
    },
    {
        name: "Utilizatori",
        icon: "supervisor_account",
        isOpened: true,
        title: USER.USERS,
        subtitles: [
            {
                name: "Utilizatori",
                subtitle: USER.USERS,
            },
            {
                name: "Activari",
                subtitle: USER.TOKENS,
            },
        ]
    },
]