// App Enums =======================================================
export enum ROLE {
    USER = "USER",
    ADMIN = "ADMIN",
}

export enum USER {
    USERS = "Utilizatori",
    TOKENS = "Tokens",
}

export enum ORDER {
    ORDERS = "Comenzi",
    ORDER = "Comanda",
    ITEMS = "Itemuri",
    NEW = "Nou",
    DONE = "Facut",
    CANCELED = "Anulat",
}

export enum PAYMENT_TYPE {
    CASH = "Cash",
    CARD = "Card",
}

export enum SORTERS {
    BEST_SOLD = "Cele Mai Vandute",
    NAME = "Nume",
    LOW_TO_HIGH = "Mic La Mare",
    HIGH_TO_LOW = "Mare La Mic",
}

export enum FINANCE {
    PROMO = "Promo",
}

export enum SPECIFICATIONS {
    TITLE_DISPLAY = "Ecran",
    DISPLAY_SIZE = "Diagonala Ecran",
    DISPLAY_RESOLUTION = "Rezolutie",
    DISPLAY_FREQUENCY = "Frecventa Ecran",
    DISPLAY_TOUCH = "Ecran Tactil",

    TITLE_MOTHERBOARD = "Placa De Baza",
    MOTHERBOARD_BRAND = "Producator Pb",
    MOTHERBOARD_CHIPSET = "Chipset",
    MOTHERBOARD_SLOT = "Sloturi",
    MOTHERBOARD_AUDIO = "Audio",

    TITLE_PROCESSOR = "Procesor",
    PROCESSOR_BRAND = "Producator Procesor",
    PROCESSOR_TYPE = "Tip Procesor",
    PROCESSOR_MODEL = "Model Procesor",
    PROCESSOR_FREQUENCY = "Frecventa Procesor",

    TITLE_MEMORY = "Memorie",
    MEMORY_TYPE = "Tip Memorie",
    MEMORY_CAPACITY = "Capacitate Memorie",
    MEMORY_FREQUENCY = "Frecventa Memorie",

    TITLE_HARD = "Hard",
    HARD_TYPE_1 = "Tip Hard",
    HARD_CAPACITY_1 = "Capacitate Hard",
    HARD_SLOT_1 = "Slot Hard",
    HARD_TYPE_2 = "Tip Hard 2",
    HARD_CAPACITY_2 = "Capacitate Hard 2",
    HARD_SLOT_2 = "Slot Hard 2",

    TITLE_CONNECTIVITY = "Conectivitate",
    CONNECTIVITY_BLUETOOTH = "Bluetooth",
    CONNECTIVITY_WIRELESS = "Wireless",

    TITLE_GENERAL = "Caracteristici Generale",
    BRAND = "Producator",
    TYPE = "Tip",
    MODEL = "Model",
    CAPACITY = "Capacitate",
    CONNECTION = "Conectare",
    OUTPUT = "Iesire",
    COMPATIBILITY = "Compatibilitate",
    SCREEN_SIZE = "Diagonala",
    FREQUENCY = "Frecventa",
    POWER = "Putere",

    TITLE_OTHER = "Altele",
    MATERIAL = "Material",
    COLOR = "Culoare",
    WEIGHT = "Greutate",
    SPEED = "Viteza",
    READ_SPEED = "Viteza citire",
    WRITE_SPEED = "Viteza scriere",
    HDMI = "Hdmi",
    SPEAKER = "Difuzor",
    RADIATOR = "Radiator",
    VOLTAGE = "Tensiune",
}

export enum CATEGORY {
    CATEGORY = "Categorie",
    SUBCATEGORY = "Subcategorie",
    PRODUCTS = "Produse",
    PRODUCT = "Produs",

    // B A D G E -----------------------------------------
    TOP_FAVORITE = "Top Favorit",
    SUPER_PRICE = "Super Pret",

    // A V A I L A B L E -----------------------------------------
    AVAILABLE = "Disponibil",
    STOCK = "Stoc",
    DEPOSIT = "Depozit",
    ONLINE = "Online",

    // P R I C E  -  H I G H -------------------------------------
    PRICE = "Pret",
    UNDER1000 = "Sub 1000",
    UNDER2000 = "Sub 2000",
    UNDER3000 = "Sub 3000",
    UNDER4000 = "Sub 4000",
    OVER4000 = "Peste 4000",

    // P R I C E  -  L O W ---------------------------------------
    UNDER100 = "Sub 100",
    UNDER200 = "Sub 200",
    UNDER300 = "Sub 300",
    OVER300 = "Peste 300",

    // B R A N D -----------------------------------------
    BRAND = "Brand",
    ACER = "Acer",
    ADATA = "Adata",
    ALLVIEW = "Allview",
    AMD = "Amd",
    APPLE = "Apple",
    ASUS = "Asus",
    DELL = "Dell",
    HAMA = "Hama",
    HP = "Hp",
    INTEL = "Intel",
    IPHONE = "Iphone",
    LENOVO = "Lenovo",
    KINGSTON = "Kington",
    MYRIA = "Myria",
    MSI = "Msi",
    PHILIPS = "Philips",
    PROMATE = "Promate",
    RIVACASE = "Rivacase",
    SAMSONITE = "Samsonite",
    SAMSUNG = "Samsung",
    SANDISK = "Sandisk",
    SEAGATE = "Seagate",
    TUMI = "Tumi",
    WD = "Wd",
    XTORM = "Xtorm",

    // D E P A R T M E N T ========================================
    LPT = "Lpt",
    LPT_PATH = "lpt",
    DPS = "Dps",
    DPS_PATH = "dps",

    // T Y P E ====================================================
    LAPTOPS = "Laptopuri",
    LAPTOPS_PATH = "laptopuri",
    LAPTOP = "laptop",
    LAPTOP_ACCESSORIES = "Accesorii Laptop",
    LAPTOP_ACCESSORIES_PATH = "accesorii-laptop",
    PCS = "Pc-uri",
    PCS_PATH = "pc-uri",
    MONITORS = "Monitoare",
    MONITORS_PATH = "monitoare",

    // C A T E G O R Y ============================================
    LAPTOPS_GAMING = "Laptopuri Gaming",
    LAPTOPS_GAMING_PATH = "laptopuri-gaming",
    LAPTOPS_ULTRA = "Laptopuri Ultra",
    LAPTOPS_ULTRA_PATH = "laptopuri-ultra",
    LAPTOPS_BUSINESS = "Laptopuri Bussiness",
    LAPTOPS_BUSINESS_PATH = "laptopuri-bussiness",
    LAPTOPS_HOME = "Laptopuri Home",
    LAPTOPS_HOME_PATH = "laptopuri-home",
    PCS_GAMING = "Pc-uri Gaming",
    PCS_GAMING_PATH = "pc-uri-gaming",
    ALL_IN_ONE = "All In One",
    ALL_IN_ONE_PATH = "all-in-one",
    MONITORS_PRO = "Monitoare Pro",
    MONITORS_PRO_PATH = "monitoare-pro", 

    // S U B = C A T E G O R Y ====================================
    // CHARGER --------------------------------
    LAPTOP_BAGS = "Genti Laptop",
    BRIEFCASE = "Serviete",
    SLEEVE = "Huse",
    BACKPACK = "Rucsacuri",

    // CHARGER --------------------------------
    LAPTOP_CHARGERS = "Incarcatoare Laptop",
    PLUG_IN = "Priza",
    CAR = "Auto",

    // HARD ------------------------------------
    LAPTOP_HARDS = "Harduri Laptop",
    HDD = "Hdd",
    SSD = "Ssd",

    // EXTERNAL-BATTERY-------------------------    
    EXTERNAL_BATTERIES = "Baterii externe",
    BATTERY = "Baterii",

    // RAM ------------------------------------
    RAM_MEMORIES = "Memorii Ram",
    RAM = "Ram",    
    DDR3 = "DDR3",
    DDR4 = "DDR4",
    DDR5 = "DDR5",

    // MONITOR ------------------------------------
    MONITORS_FLAT = "Monitoare Plate",
    MONITORS_CURVED = "Monitoare Curbate",

}