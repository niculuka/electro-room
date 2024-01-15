export interface AdminSubtitle {
    name: string;
    link: string;
}

export interface AdminTitle {
    name: string;
    icon: string;
    subtitles: Array<AdminSubtitle>
}

export const ADMIN_SIDENAV: Array<AdminTitle> = [
    {
        name: "Produse",
        icon: "library_books",
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
        subtitles: [
            {
                name: "Toate comenzile",
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
        subtitles: [
            {
                name: "Toti utilizatorii",
                link: "admin/products/users",
            },
            {
                name: "Activari",
                link: "admin/products/tokens",
            },
        ]
    },
]