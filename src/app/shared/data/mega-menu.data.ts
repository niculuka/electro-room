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
    showSubtitle: boolean;
    isReady: string;
    subtitles: Array<Subtitle>;    
}

export interface Subtitle {
    name: string;
    link: string;
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
                name: "Laptopuri",
                link: "/laptops-phones-tablets/laptops",             
                showSubtitle: false,
                isReady: "#df0265",
                subtitles: [
                    {
                        name: "Gaming",
                        link: "/laptops-phones-tablets/laptops/gaming",
                        isReady: "#ff4196",
                    },
                    {
                        name: "Business",
                        link: "/laptops-phones-tablets/laptops/business",
                        isReady: "#ff4196",
                    },
                    {
                        name: "Ultraportabile",
                        link: "/laptops-phones-tablets/laptops/ultra",
                        isReady: "#ff4196",
                    },                    
                    {
                        name: "Home",
                        link: "/laptops-phones-tablets/laptops/home",
                        isReady:  "#ff4196",
                    },
                ]
            },
            {
                name: "Accesorii Laptop",
                link: "/laptops-phones-tablets/laptop-auxs",
                showSubtitle: false,
                isReady: "#df0265",
                subtitles: [
                    {
                        name: "Genti laptop",
                        link: "/laptops-phones-tablets/laptop-auxs/bags",
                        isReady: "#ff4196",
                    },
                    {
                        name: "Incarcatoare priza/auto",
                        link: "/laptops-phones-tablets/laptop-auxs/chargers",
                        isReady: "#ff4196",
                    },
                    {
                        name: "SSD externe",
                        link: "/laptops-phones-tablets/laptop-auxs/ssds",
                        isReady: "#ff4196",
                    },                    
                    {
                        name: "Baterii externe",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Memorii RAM Laptop",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Suport mobil cu racire",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Stickere pentru ecran",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Telefoane",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: []
            },
            {
                name: "Tablete", 
                link: "/under-construction", 
                showSubtitle: false,
                isReady: "#747474",
                subtitles: []
            },            
            {
                name: "Accesorii telefoane",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Huse telefon",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Baterii externe",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Incarcatoare casa/auto",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Suporturi auto",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Cabluri, adaptoare, Reductii",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Folii de protectie pentru ecrane",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Carduri de memorie",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Bratari si ceasuri electronice",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Bratari smart",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Ceasuri smart",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Bratari si ceasuri fitness",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Accesorii Wearables",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },

                ]
            },
            {
                name: "Casti pentru telefon",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Casti wireless",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Casti in-ear",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Casti over-ear",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Ochelari audio",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Accesorii pentru casti",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Accesorii tablete",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Huse tablete",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Folii de protectie tablete",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Incarcatoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Accesorii diverse",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Cartele si pachete cu telefon",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Cartele prepaid",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Pachete cu telefon",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Telefoane fixe", 
                link: "/under-construction", 
                showSubtitle: false,
                isReady: "#747474",
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
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Calculator Gaming",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Desktop Home",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Mini PC",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "All-in-one",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Monitoare",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Monitoare Gaming",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Monitoare Home",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Monitoare profesionale",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Monitoare portabile",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Suport pentru monitor",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Suport monitor",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Mac-uri",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Mac",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Componente calculator",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Hard Disk Drive, HDD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Solid State Drive, SSD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Placi de baza",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Placi video",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Procesoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Memorii RAM",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Surse de alimentare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Coolere, Ventilatoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Carcase si Rack-uri",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Retelistica calculatoare",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Routere wireless",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Adaptoare wireless",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Adaptoare priza",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Switch / Modem",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Imprimante si multifunctionale",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Imprimante",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Plottere",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Scannere",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Imprimante termice",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Consumabile",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Imprimante 3D",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Accesorii si consumabile 3D",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Birotica",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Hartie si produse din hartie",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Organizare, Arhivare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Accesorii de birou",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Tehnica de birou",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Sisteme de prezentare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Periferice si accesorii   ",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "HDD si SSD externe",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Mouse",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Tastaturi",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Casti pentru calculator",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Memorii USB",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Boxe audio pentru calculator",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Camere Web",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Unitati optice externe",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Card reader",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Mouse PAD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Produse intretinere calculator",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "UPS-uri si surse externe ",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "UPS cu/fara management",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Acumulatori pentru UPS",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
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
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
            {
                name: "Audio-Video",
                link: "/under-construction",
                showSubtitle: false,
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Sisteme audio",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Soundbar",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Boxe portabile",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Radio",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
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
                isReady: "#747474",
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
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
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
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
                isReady: "#747474",
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
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
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
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
                isReady: "#747474",
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
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
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
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
                isReady: "#747474",
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
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
                isReady: "#747474",
                subtitles: [
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
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
                isReady: "#747474",
                subtitles: [
                    {
                        name: "HD & FullHD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "4K LAPTOP_ULTRA HD",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare OLED",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                    {
                        name: "Televizoare",
                        link: "/under-construction",
                        isReady: "#9c9c9c",
                    },
                ]
            },
        ]
    },
]