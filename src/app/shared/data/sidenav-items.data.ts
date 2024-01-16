export interface AdminSubtitle {
    name: string;
    link: string;
}

export interface AdminTitle {
    name: string;
    icon: string;
    isOpened: boolean;
    subtitles: Array<AdminSubtitle>
}

export const ADMIN_SIDENAV: Array<AdminTitle> = [
    {
        name: "Produse",
        icon: "library_books",
        isOpened: true,
        subtitles: [
            {
                name: "Laptopuri",
                link: "admin/products/laptops",
            },
            {
                name: "Accesorii laptop",
                link: "admin/products/laptop_accessory",
            },
            {
                name: "Sisteme Pc",
                link: "admin/products/pc",
            },
            {
                name: "Monitoare",
                link: "admin/products/monitor",
            },
        ]
    },
    {
        name: "Comenzi",
        icon: "add_shopping_cart",
        isOpened: false,
        subtitles: [
            {
                name: "Comenzi",
                link: "admin/products/electro-orders",
            },
            {
                name: "Produse comandate",
                link: "admin/products/electro-items",
            },
        ]
    },
    {
        name: "Utilizatori",
        icon: "supervisor_account",
        isOpened: false,
        subtitles: [
            {
                name: "Utilizatori",
                link: "admin/products/users",
            },
            {
                name: "Activari",
                link: "admin/products/tokens",
            },
        ]
    },
]