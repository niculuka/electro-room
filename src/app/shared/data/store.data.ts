import { CATEGORY, MENU_URL_KEY } from "../enums/electro.enum";

export interface StoreDetail {
    id: number;
    name: string;
    category: string;
    urlKey: string;
    address: string;
    day1: string;
    hour1: string;
    day2: string;
    hour2: string;
    day3: string;
    hour3: string;
    link: string;

}

export const STORES_DETAILS: StoreDetail[] = [
    {
        id: 1,
        name: "Electro-Room Galati Billa",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-galati-billa",
        address: "Str. Otelarilor, Nr. 13, Cartier Dunarea, Micro 21, Galati, Jud. Galati",
        day1: "Luni-Vineri: ",
        hour1: "9.00 - 21.00",
        day2: "Sambata: ",
        hour2: "9.00 - 18.00",
        day3: "Duminica: ",
        hour3: "9.00 - 18.00",
        link: "",
    },
    {
        id: 2,
        name: "Electro-Room Bucuresti Bucur Obor",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-bucuresti-bucur-obor",
        address: "Sos. Colentina, Nr. 2, Bl. ALMO, Complex Comercial Bucur Obor, Parter, Sector 2, Bucuresti",
        day1: "Luni-Vineri: ",
        hour1: "9.00 - 21.00",
        day2: "Sambata: ",
        hour2: "9.00 - 20.00",
        day3: "Duminica: ",
        hour3: "9.00 - 18.00",
        link: "",
    },
    {
        id: 3,
        name: "Electro-Room Bucuresti Plaza",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-bucuresti-plaza",
        address: "Bdul. Timisoara, Nr 26, Plaza Romania, Etaj -1, Sector 6, Bucuresti",
        day1: "Luni-Vineri: ",
        hour1: "10.00 - 22.00",
        day2: "Sambata: ",
        hour2: "10.00 - 22.00",
        day3: "Duminica: ",
        hour3: "10.00 - 22.00",
        link: "",
    },
    {
        id: 4,
        name: "Electro-Room Shopping City Sibiu",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-shopping-city-sibiu",
        address: "DN1, Km. 306, Selimbar, Shopping City Mall, Sibiu, Jud. Sibiu",
        day1: "Luni-Vineri: ",
        hour1: "10.00 - 22.00",
        day2: "Sambata: ",
        hour2: "10.00 - 22.00",
        day3: "Duminica: ",
        hour3: "10.00 - 22.00",
        link: "",
    },
    {
        id: 5,
        name: "Electro-Room Brasov Cometex",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-brasov-cometex",
        address: "Str. Caramidariei, Nr. 1, langa Complex Comercial Auchan, Brasov, Jud. Brasov",
        day1: "Luni-Vineri: ",
        hour1: "9.00 - 20.00",
        day2: "Sambata: ",
        hour2: "9.00 - 18.00",
        day3: "Duminica: ",
        hour3: "9.00 - 16.00",
        link: "",
    },
    {
        id: 6,
        name: "Electro-Room Ploiesti",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-ploiesti",
        address: "Str. Libertatii, Nr. 4, Complex Comercial Billa, Ploiesti, Jud. Prahova",
        day1: "Luni-Vineri: ",
        hour1: "9.00 - 21.00",
        day2: "Sambata: ",
        hour2: "9.00 - 20.00",
        day3: "Duminica: ",
        hour3: "9.00 - 20.00",
        link: "",
    },
    {
        id: 7,
        name: "Electro-Room Satu Mare Auchan",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-satu-mare-auchan",
        address: "Str. Drumul Careiului, Nr. 77-79, Complex Comercial Auchan, Satu Mare, Jud. Satu Mare",
        day1: "Luni-Vineri: ",
        hour1: "9.00 - 21.00",
        day2: "Sambata: ",
        hour2: "9.00 - 20.00",
        day3: "Duminica: ",
        hour3: "9.00 - 18.00",
        link: "",
    },
    {
        id: 8,
        name: "Electro-Room Petrosani Retail Park",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-petrosani-retail-park",
        address: "Str. Livezeni, Nr. 12, Petrosani Retail Park, Petrosani, Jud. Hunedoara",
        day1: "Luni-Vineri: ",
        hour1: "9.00 - 20.00",
        day2: "Sambata: ",
        hour2: "9.00 - 18.00",
        day3: "Duminica: ",
        hour3: "9.00 - 18.00",
        link: "",
    },
    {
        id: 9,
        name: "Electro-Room Hunedoara",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-hunedoara",
        address: "Bdul. Dacia, Nr. 11, Hunedoara, Jud. Hunedoara",
        day1: "Luni-Vineri: ",
        hour1: "9.00 - 19.00",
        day2: "Sambata: ",
        hour2: "9.00 - 16.00",
        day3: "Duminica: ",
        hour3: "9.00 - 15.00",
        link: "",
    },
    {
        id: 10,
        name: "Electro-Room Timisoara Greenfield",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-timisoara-greenfield",
        address: "Calea Aradului, Nr. 58A, Timioara, Jud. Timis",
        day1: "Luni-Vineri: ",
        hour1: "9.00 - 21.00",
        day2: "Sambata: ",
        hour2: "9.00 - 21.00",
        day3: "Duminica: ",
        hour3: "9.00 - 21.00",
        link: "",
    },
    {
        id: 11,
        name: "Electro-Room Cluj Iulius Mall",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-cluj-iulius-mall",
        address: "Str. Alexandru Vaida Voievod, Nr. 53-55, Cartier Gheorgheni, Iulius Mall, Cluj-Napoca, Jud. Cluj",
        day1: "Luni-Vineri: ",
        hour1: "9.00 - 22.00",
        day2: "Sambata: ",
        hour2: "9.00 - 20.00",
        day3: "Duminica: ",
        hour3: "9.00 - 20.00",
        link: "",
    },
    {
        id: 12,
        name: "Electro-Room Alba Iulia Retail Park",
        category: MENU_URL_KEY.STORES_URL_KEY,
        urlKey: "electro-room-alba-iulia-retail-park",
        address: "Str. Motilor, Nr. 118, Complex Comercial Retail Park, Alba Iulia, Jud. Alba",
        day1: "Luni-Vineri: ",
        hour1: "9.00 - 21.00",
        day2: "Sambata: ",
        hour2: "9.00 - 20.00",
        day3: "Duminica: ",
        hour3: "9.00 - 19.00",
        link: "",
    },
]