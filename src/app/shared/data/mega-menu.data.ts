import { CATEGORY } from "../enums/electro.enum";

export interface Departament {
    id: number;
    icon: string;
    name: string;
    chevron: string;
    showTitle: boolean;
    titles: Array<Title>;
}

export interface Title {
    name: string;
    link: string;
    type: CATEGORY;
    showSubtitle: boolean;
    isReady: string;
    subtitles: Array<Subtitle>;
}

export interface Subtitle {
    name: string;
    link: string;
    type: CATEGORY;
    isReady: string;
}


export const DEPARTAMENTS: Departament[] = [
    {   // ================================================================= Laptop, Telefoane, Tablete
        id: 1,
        icon: "assets/svgs/phone.svg",
        name: "Laptopuri, Telefoane, Tablete",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Laptopuri si accesorii",
                link: "/lpt",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#df0265",
                subtitles: [
                    {
                        name: "Laptopuri",
                        link: "/lpt/laptops",
                        type: CATEGORY.LAPTOPS,
                        isReady: "#ff4196",
                    },
                    {
                        name: "Gaming",
                        link: "/lpt/laptops/gaming",
                        type: CATEGORY.GAMING,
                        isReady: "#ff4196",
                    },
                    {
                        name: "Business",
                        link: "/lpt/laptops/business",
                        type: CATEGORY.BUSINESS,
                        isReady: "#ff4196",
                    },
                    {
                        name: "Ultraportabile",
                        link: "/lpt/laptops/ultra",
                        type: CATEGORY.ULTRA,
                        isReady: "#ff4196",
                    },
                    {
                        name: "Home",
                        link: "/lpt/laptops/home",
                        type: CATEGORY.HOME,
                        isReady: "#ff4196",
                    },
                ]
            },
            {
                name: "Accesorii Laptop",
                link: "/lpt/laptops-accessories",
                type: CATEGORY.LAPTOP_ACCESSORY,
                showSubtitle: false,
                isReady: "#df0265",
                subtitles: [
                    {
                        name: "Genti laptop",
                        link: "/lpt/laptop-bags",
                        type: CATEGORY.LAPTOP_BAGS,
                        isReady: "#ff4196",
                    },
                    {
                        name: "Incarcatoare priza/auto",
                        link: "/lpt/laptop-chargers",
                        type: CATEGORY.LAPTOP_CHARGERS,
                        isReady: "#ff4196",
                    },
                    {
                        name: "HARD externe",
                        link: "/lpt/laptop-hards",
                        type: CATEGORY.LAPTOP_HARDS,
                        isReady: "#ff4196",
                    },
                    {
                        name: "Baterii externe",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Memorii RAM Laptop",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Suport mobil cu racire",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Stickere pentru ecran",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Telefoane",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: []
            },
            {
                name: "Tablete",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: []
            },
            {
                name: "Accesorii telefoane",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Huse telefon",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Baterii externe",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Incarcatoare casa/auto",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Suporturi auto",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Cabluri, adaptoare, Reductii",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Folii de protectie pentru ecrane",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Carduri de memorie",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Bratari si ceasuri electronice",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Bratari smart",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Ceasuri smart",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Bratari si ceasuri fitness",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Accesorii Wearables",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },

                ]
            },
            {
                name: "Casti pentru telefon",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Casti wireless",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Casti in-ear",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Casti over-ear",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Ochelari audio",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Accesorii pentru casti",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Accesorii tablete",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Huse tablete",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Folii de protectie tablete",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Incarcatoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Accesorii diverse",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Cartele si pachete cu telefon",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Cartele prepaid",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Pachete cu telefon",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Telefoane fixe",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: []
            },
        ],
    },
    {   // ===================================================================== Desktop, Periferice, Software
        id: 2,
        icon: "assets/svgs/laptop.svg",
        name: "Desktop, Periferice, Software",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Sisteme PC",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Calculator Gaming",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Desktop Home",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Mini PC",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "All-in-one",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Monitoare",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Monitoare Gaming",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Monitoare Home",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Monitoare profesionale",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Monitoare portabile",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Suport pentru monitor",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Suport monitor",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Mac-uri",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Mac",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Componente calculator",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Hard Disk Drive, HDD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Solid State Drive, HARD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Placi de baza",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Placi video",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Procesoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Memorii RAM",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Surse de alimentare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Coolere, Ventilatoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Carcase si Rack-uri",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Retelistica calculatoare",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Routere wireless",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Adaptoare wireless",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Adaptoare priza",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Switch / Modem",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Imprimante si multifunctionale",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Imprimante",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Plottere",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Scannere",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Imprimante termice",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Consumabile",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Imprimante 3D",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Accesorii si consumabile 3D",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Birotica",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Hartie si produse din hartie",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Organizare, Arhivare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Accesorii de birou",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Tehnica de birou",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Sisteme de prezentare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Periferice si accesorii   ",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "HDD si HARD externe",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Mouse",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Tastaturi",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Casti pentru calculator",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Memorii USB",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Boxe audio pentru calculator",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Camere Web",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Unitati optice externe",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Card reader",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Mouse PAD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Produse intretinere calculator",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "UPS-uri si surse externe ",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "UPS cu/fara management",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Acumulatori pentru UPS",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
        ]
    },
    {   // ===================================================================== TV, Audio-Video, Foto
        id: 3,
        icon: "assets/svgs/tv.svg",
        name: "TV, Audio-Video, Foto",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Televizoare si accesorii",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
            {
                name: "Audio-Video",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Sisteme audio",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Soundbar",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Boxe portabile",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Radio",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
        ]
    },
    {   // ===================================================================== Electrocasnice mari
        id: 4,
        icon: "assets/svgs/washing-machine.svg",
        name: "Electrocasnice mari",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Televizoare si accesorii",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
        ]
    },
    {   // ===================================================================== Electrocasnice mici, Climatizare
        id: 5,
        icon: "assets/svgs/iron.svg",
        name: "Electrocasnice mici, Climatizare",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Televizoare si accesorii",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
        ]
    },
    {   // ===================================================================== Bacanie
        id: 6,
        icon: "assets/svgs/bag.svg",
        name: "Bacanie",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Televizoare si accesorii",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
        ]
    },
    {   // ===================================================================== Ingrijire personala
        id: 7,
        icon: "assets/svgs/mirror.svg",
        name: "Ingrijire personala",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Televizoare si accesorii",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
        ]
    },
    {   // ===================================================================== Sport, Alte activitati
        id: 8,
        icon: "assets/svgs/running.svg",
        name: "Sport, Alte activitati",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Televizoare si accesorii",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
        ]
    },
    {   // ===================================================================== Casa, Gradina, Brico
        id: 9,
        icon: "assets/svgs/house.svg",
        name: "Casa, Gradina, Brico",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Televizoare si accesorii",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
        ]
    },
    {   // ===================================================================== Moda si Cadouri
        id: 10,
        icon: "assets/svgs/t-shirt.svg",
        name: "Moda si Cadouri",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Televizoare si accesorii",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
        ]
    },
    {   // ===================================================================== Auto, Moto, Velo, RCA
        id: 11,
        icon: "assets/svgs/car.svg",
        name: "Auto, Moto, Velo, RCA",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Televizoare si accesorii",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
        ]
    },
    {   // ===================================================================== Jucarii, Copii
        id: 12,
        icon: "assets/svgs/toys.svg",
        name: "Jucarii, Copii",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Televizoare si accesorii",
                link: "/under-construction",
                type: CATEGORY.CATEGORY,
                showSubtitle: false,
                isReady: "#262626",
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        type: CATEGORY.CATEGORY,
                        isReady: "#676767",
                    },
                ]
            },
        ]
    },
]