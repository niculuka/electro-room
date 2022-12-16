export interface Departament {
    id: number;
    icon: string;
    name: string;
    chevron: string;
    showTitle: boolean
    titles: Array<Title>;
}

export interface Title {
    name: string;
    link: string;
    showSubtitle: boolean;
    subtitles: Array<Subtitle>;    
}

export interface Subtitle {
    name: string;
    link: string;
}


export const DEPARTAMENTS: Departament[] = [
    {   // ================================================================= Laptop, Telefoane, Tablete
        id: 1,
        icon: "assets/svgs/phone.svg",
        name: "Laptop, Telefoane, Tablete (OK)",
        chevron: "assets/svgs/chevron-right.svg",
        showTitle: false,
        titles: [
            {
                name: "Laptopuri - (OK)",
                link: "/laptops",             
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Gaming - (OK)",
                        link: "/laptops/gaming",
                    },
                    {
                        name: "Business - (OK)",
                        link: "/laptops/business",
                    },
                    {
                        name: "Ultraportabile - (OK)",
                        link: "/laptops/ultra",
                    },                    
                    {
                        name: "Home - (OK)",
                        link: "/laptops/home",
                    },
                ]
            },
            {
                name: "Accesorii Laptop - (OK)",
                link: "/laptop-auxs",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Genti laptop - (OK)",
                        link: "/laptop-auxs/bags",
                    },
                    {
                        name: "Incarcatoare priza/auto - (OK)",
                        link: "/laptop-auxs/chargers",
                    },
                    {
                        name: "SSD externe - (OK)",
                        link: "/laptop-auxs/ssds",
                    },                    
                    {
                        name: "Baterii externe",
                        link: "/under-construction",
                    },
                    {
                        name: "Memorii RAM Laptop",
                        link: "/under-construction",
                    },
                    {
                        name: "Suport mobil cu racire",
                        link: "/under-construction",
                    },
                    {
                        name: "Stickere pentru ecran",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Telefoane",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: []
            },
            {
                name: "Tablete", 
                link: "/under-construction", 
                showSubtitle: false,
                subtitles: []
            },            
            {
                name: "Accesorii telefoane",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Huse telefon",
                        link: "/under-construction",
                    },
                    {
                        name: "Baterii externe",
                        link: "/under-construction",
                    },
                    {
                        name: "Incarcatoare casa/auto",
                        link: "/under-construction",
                    },
                    {
                        name: "Suporturi auto",
                        link: "/under-construction",
                    },
                    {
                        name: "Cabluri, adaptoare, Reductii",
                        link: "/under-construction",
                    },
                    {
                        name: "Folii de protectie pentru ecrane",
                        link: "/under-construction",
                    },
                    {
                        name: "Carduri de memorie",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Bratari si ceasuri electronice",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Bratari smart",
                        link: "/under-construction",
                    },
                    {
                        name: "Ceasuri smart",
                        link: "/under-construction",
                    },
                    {
                        name: "Bratari si ceasuri fitness",
                        link: "/under-construction",
                    },
                    {
                        name: "Accesorii Wearables",
                        link: "/under-construction",
                    },

                ]
            },
            {
                name: "Casti pentru telefon",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Casti wireless",
                        link: "/under-construction",
                    },
                    {
                        name: "Casti in-ear",
                        link: "/under-construction",
                    },
                    {
                        name: "Casti over-ear",
                        link: "/under-construction",
                    },
                    {
                        name: "Ochelari audio",
                        link: "/under-construction",
                    },
                    {
                        name: "Accesorii pentru casti",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Accesorii tablete",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Huse tablete",
                        link: "/under-construction",
                    },
                    {
                        name: "Folii de protectie tablete",
                        link: "/under-construction",
                    },
                    {
                        name: "Incarcatoare",
                        link: "/under-construction",
                    },
                    {
                        name: "Accesorii diverse",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Cartele si pachete cu telefon",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Cartele prepaid",
                        link: "/under-construction",
                    },
                    {
                        name: "Pachete cu telefon",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Telefoane fixe", 
                link: "/under-construction", 
                showSubtitle: false,
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
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Calculator Gaming",
                        link: "/under-construction",
                    },
                    {
                        name: "Desktop Home",
                        link: "/under-construction",
                    },
                    {
                        name: "Mini PC",
                        link: "/under-construction",
                    },
                    {
                        name: "All-in-one",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Monitoare",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Monitoare Gaming",
                        link: "/under-construction",
                    },
                    {
                        name: "Monitoare Home",
                        link: "/under-construction",
                    },
                    {
                        name: "Monitoare profesionale",
                        link: "/under-construction",
                    },
                    {
                        name: "Monitoare portabile",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Suport pentru monitor",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Suport monitor",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Mac-uri",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Mac",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Componente calculator",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Hard Disk Drive, HDD",
                        link: "/under-construction",
                    },
                    {
                        name: "Solid State Drive, SSD",
                        link: "/under-construction",
                    },
                    {
                        name: "Placi de baza",
                        link: "/under-construction",
                    },
                    {
                        name: "Placi video",
                        link: "/under-construction",
                    },
                    {
                        name: "Procesoare",
                        link: "/under-construction",
                    },
                    {
                        name: "Memorii RAM",
                        link: "/under-construction",
                    },
                    {
                        name: "Surse de alimentare",
                        link: "/under-construction",
                    },
                    {
                        name: "Coolere, Ventilatoare",
                        link: "/under-construction",
                    },
                    {
                        name: "Carcase si Rack-uri",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Retelistica calculatoare",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Routere wireless",
                        link: "/under-construction",
                    },
                    {
                        name: "Adaptoare wireless",
                        link: "/under-construction",
                    },
                    {
                        name: "Adaptoare priza",
                        link: "/under-construction",
                    },
                    {
                        name: "Switch / Modem",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Imprimante si multifunctionale",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Imprimante",
                        link: "/under-construction",
                    },
                    {
                        name: "Plottere",
                        link: "/under-construction",
                    },
                    {
                        name: "Scannere",
                        link: "/under-construction",
                    },
                    {
                        name: "Imprimante termice",
                        link: "/under-construction",
                    },
                    {
                        name: "Consumabile",
                        link: "/under-construction",
                    },
                    {
                        name: "Imprimante 3D",
                        link: "/under-construction",
                    },
                    {
                        name: "Accesorii si consumabile 3D",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Birotica",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Hartie si produse din hartie",
                        link: "/under-construction",
                    },
                    {
                        name: "Organizare, Arhivare",
                        link: "/under-construction",
                    },
                    {
                        name: "Accesorii de birou",
                        link: "/under-construction",
                    },
                    {
                        name: "Tehnica de birou",
                        link: "/under-construction",
                    },
                    {
                        name: "Sisteme de prezentare",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Periferice si accesorii   ",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "HDD si SSD externe",
                        link: "/under-construction",
                    },
                    {
                        name: "Mouse",
                        link: "/under-construction",
                    },
                    {
                        name: "Tastaturi",
                        link: "/under-construction",
                    },
                    {
                        name: "Casti pentru calculator",
                        link: "/under-construction",
                    },
                    {
                        name: "Memorii USB",
                        link: "/under-construction",
                    },
                    {
                        name: "Boxe audio pentru calculator",
                        link: "/under-construction",
                    },
                    {
                        name: "Camere Web",
                        link: "/under-construction",
                    },
                    {
                        name: "Unitati optice externe",
                        link: "/under-construction",
                    },
                    {
                        name: "Card reader",
                        link: "/under-construction",
                    },
                    {
                        name: "Mouse PAD",
                        link: "/under-construction",
                    },
                    {
                        name: "Produse intretinere calculator",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "UPS-uri si surse externe ",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "UPS cu/fara management",
                        link: "/under-construction",
                    },
                    {
                        name: "Acumulatori pentru UPS",
                        link: "/under-construction",
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
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                    },
                ]
            },
            {
                name: "Audio-Video",
                link: "/under-construction",
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Sisteme audio",
                        link: "/under-construction",
                    },
                    {
                        name: "Soundbar",
                        link: "/under-construction",
                    },
                    {
                        name: "Boxe portabile",
                        link: "/under-construction",
                    },
                    {
                        name: "Radio",
                        link: "/under-construction",
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
                showSubtitle: false,
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
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
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
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
                showSubtitle: false,
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
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
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
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
                showSubtitle: false,
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
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
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
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
                showSubtitle: false,
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
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
                showSubtitle: false,
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
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
                showSubtitle: false,
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                    },
                ]
            },
        ]
    },
]