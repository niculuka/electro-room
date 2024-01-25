// App Enums =======================================================
export enum ROLE {
    USER = "USER",
    ADMIN = "ADMIN",
}

export enum USER {
    USERS = "utilizatori",
    TOKENS = "tokens",
}

export enum ORDER {
    ORDERS = "comenzi",
    ORDER = "comanda",
    ITEMS = "itemuri",
    NEW = "nou",
    DONE = "facut",
    CANCELED = "anulat",
}

export enum PAYMENT_TYPE {
    CASH = "cash",
    CARD = "card",
}

export enum SORTERS {
    BEST_SOLD = "best-sold", BEST_SOLD_RO = "Cele Mai Vandute",
    NAME = "name", NAME_RO = "Nume",
    LOW_TO_HIGH = "low-to-high", LOW_TO_HIGH_RO = "Pret Crescator",
    HIGH_TO_LOW = "high-to-low", HIGH_TO_LOW_RO = "Pret Descrescator",
}

export enum FINANCE {
    PROMO = "promo",
}

export enum SPECIFICATIONS {
    TITLE_DISPLAY = "ecran",
    DISPLAY_SIZE = "diagonala ecran",
    DISPLAY_RESOLUTION = "rezolutie",
    DISPLAY_FREQUENCY = "frecventa ecran",
    DISPLAY_TOUCH = "ecran tactil",

    TITLE_MOTHERBOARD = "placa de baza",
    MOTHERBOARD_BRAND = "producator pb",
    MOTHERBOARD_CHIPSET = "chipset",
    MOTHERBOARD_SLOT = "sloturi",
    MOTHERBOARD_AUDIO = "audio",

    TITLE_PROCESSOR = "procesor",
    PROCESSOR_BRAND = "producator procesor",
    PROCESSOR_TYPE = "tip procesor",
    PROCESSOR_MODEL = "model procesor",
    PROCESSOR_FREQUENCY = "frecventa procesor",

    TITLE_MEMORY = "memorie",
    MEMORY_TYPE = "tip memorie",
    MEMORY_CAPACITY = "capacitate memorie",
    MEMORY_FREQUENCY = "frecventa memorie",

    TITLE_HARD = "hard",
    HARD_TYPE_1 = "tip hard",
    HARD_CAPACITY_1 = "capacitate hard",
    HARD_SLOT_1 = "slot hard",
    HARD_TYPE_2 = "tip hard 2",
    HARD_CAPACITY_2 = "capacitate hard 2",
    HARD_SLOT_2 = "slot hard 2",

    TITLE_CONNECTIVITY = "conectivitate",
    CONNECTIVITY_BLUETOOTH = "bluetooth",
    CONNECTIVITY_WIRELESS = "wireless",

    TITLE_GENERAL = "caracteristici generale",
    BRAND = "producator",
    TYPE = "tip",
    MODEL = "model",
    CAPACITY = "capacitate",
    CONNECTION = "conectare",
    OUTPUT = "iesire",
    COMPATIBILITY = "compatibilitate",
    SCREEN_SIZE = "diagonala",
    FREQUENCY = "frecventa",
    POWER = "putere",

    TITLE_OTHER = "altele",
    MATERIAL = "material",
    COLOR = "culoare",
    WEIGHT = "greutate",
    SPEED = "viteza",
    READ_SPEED = "viteza citire",
    WRITE_SPEED = "viteza scriere",
    HDMI = "hdmi",
    SPEAKER = "difuzor",
    RADIATOR = "radiator",
    VOLTAGE = "tensiune",
}

export enum CATEGORY {
    CATEGORY = "category", CATEGORY_RO = "Categorie",
    SUBCATEGORY = "subcategory", SUBCATEGORY_RO = "Subcategorie",
    PRODUCTS = "produts", PRODUCTS_RO = "Produse",

    // B A D G E -----------------------------------------
    TOP_FAVORITE = "top-favorite", TOP_FAVORITE_RO = "Top Favorit",
    SUPER_PRICE = "super-price", SUPER_PRICE_RO = "Super Pret",

    // A V A I L A B L E -----------------------------------------
    AVAILABLE = "available", AVAILABLE_RO = "Disponibilitate",
    STOCK = "stock", STOCK_RO = "In Stoc",
    DEPOSIT = "deposit", DEPOSIT_RO = "In Depozit",
    ONLINE = "online", ONLINE_RO = "Online",

    // P R I C E  -  H I G H -------------------------------------
    PRICE = "price", PRICE_RO = "Pret",
    UNDER100 = "under100", UNDER100_RO = "Sub 100",
    UNDER500 = "under500", UNDER500_RO = "100 - 500",
    UNDER1000 = "under1000", UNDER1000_RO = "500 - 1000",
    UNDER2000 = "under2000", UNDER2000_RO = "1000 - 2000",
    UNDER3000 = "under3000", UNDER3000_RO = "2000 - 3000",
    UNDER4000 = "under4000", UNDER4000_RO = "3000 - 4000",
    OVER4000 = "over4000", OVER4000_RO = "Peste 4000",

    // B R A N D -----------------------------------------
    BRAND = "brand",
    BRAND_RO = "Brand",

    ACER = "acer", ACER_RO = "Acer",
    ADATA = "adata", ADATA_RO = "Adata",
    ALLVIEW = "allview", ALLVIEW_RO = "Allview",
    AMD = "amd", AMD_RO = "Amd",
    APPLE = "apple", APPLE_RO = "Apple",
    ASUS = "asus", ASUS_RO = "Asus",
    DELL = "dell", DELL_RO = "Dell",
    HAMA = "hama", HAMA_RO = "Hama",
    HP = "hp", HP_RO = "Hp",
    INTEL = "intel", INTEL_RO = "Intel",
    IPHONE = "iphone", IPHONE_RO = "Iphone",
    LENOVO = "lenovo", LENOVO_RO = "Lenovo",
    KINGSTON = "kingston", KINGSTON_RO = "Kingston",
    MYRIA = "myria", MYRIA_RO = "Myria",
    MSI = "msi", MSI_RO = "Msi",
    PHILIPS = "philips", PHILIPS_RO = "Philips",
    PROMATE = "promate", PROMATE_RO = "Promate",
    RIVACASE = "rivacase", RIVACASE_RO = "Rivacase",
    SAMSONITE = "samsonite", SAMSONITE_RO = "Samsonite",
    SAMSUNG = "samsung", SAMSUNG_RO = "Samsung",
    SANDISK = "sandisk", SANDISK_RO = "Sandisk",
    SEAGATE = "seagate", SEAGATE_RO = "Seagate",
    TUMI = "tumi", TUMI_RO = "Tumi",
    WD = "wd", WD_RO = "Wd",
    XTORM = "xtorm", XTORM_RO = "Xtorm",

    // Carousel Owl ===============================================
    CAROUSEL_OWL_1 = "Laptopuri si Accesorii",
    CAROUSEL_OWL_2 = "PC-uri si Monitoare",

    // D E P A R T M E N T ======================================== 
    LPT = "laptop-phone-tablet", LPT_RO = "Laptopuri, Telefoane, Tablete",
    DPS = "desktop-peripheral-software", DPS_RO = "Desktop, Periferice, Software",

    // T Y P E ====================================================
    LAPTOP = "laptop", LAPTOP_RO = "Laptopuri",
    LAPTOP_ACCESSORY = "laptop-accessory", LAPTOP_ACCESSORY_RO = "Accesorii Laptop",
    PC = "pc", PC_RO = "PC-uri",
    MONITOR = "monitor", MONITOR_RO = "Monitoare",

    // C A T E G O R Y ============================================
    LAPTOP_GAMING = "laptop-gaming", LAPTOP_GAMING_RO = "Laptopuri Gaming",
    LAPTOP_BUSINESS = "laptop-business", LAPTOP_BUSINESS_RO = "Laptopuri Business",
    LAPTOP_ULTRA = "laptop-ultra", LAPTOP_ULTRA_RO = "Laptopuri Ultra",
    LAPTOP_HOME = "laptop-home", LAPTOP_HOME_RO = "Laptopuri Home",
    LAPTOP_BAG = "laptop-bag", LAPTOP_BAG_RO = "Genti Laptop",
    LAPTOP_CHARGER = "laptop-charger", LAPTOP_CHARGER_RO = "Incarcatoare Laptop",
    LAPTOP_HARD = "laptop-hard", LAPTOP_HARD_RO = "Harduri Laptop",
    EXTERNAL_BATTERY = "external-battery", EXTERNAL_BATTERY_RO = "Baterii Externe",
    RAM_MEMORY = "ram-memory", RAM_MEMORY_RO = "Memorii Ram",
    PC_GAMING = "pc-gaming", PC_GAMING_RO = "Calculatoare Gaming",
    ALL_IN_ONE = "all-in-one", ALL_IN_ONE_RO = "Sisteme All In One",
    MONITOR_PRO = "monitor-pro", MONITOR_PRO_RO = "Monitoare Profesionale",

    // S U B C A T E G O R Y ======================================    
    BRIEFCASE = "briefcase", BRIEFCASE_RO = "Serviete",
    SLEEVE = "sleeve", SLEEVE_RO = "Huse",
    BACKPACK = "backpack", BACKPACK_RO = "Rucsacuri",
    CAR = "car", CAR_RO = "Auto",
    PLUG_IN = "plug-in", PLUG_IN_RO = "Priza",
    HDD = "hdd", HDD_RO = "Hdd",
    SSD = "ssd", SSD_RO = "Ssd",
    BATTERY = "battery", BATTERY_RO = "Baterii",
    DDR3 = "ddr3", DDR3_RO = "DDR3",
    DDR4 = "ddr4", DDR4_RO = "DDR4",
    DDR5 = "ddr5", DDR5_RO = "DDR5",
    MONITORS_FLAT = "monitor-flat", MONITORS_FLAT_RO = "Monitoare Plate",
    MONITORS_CURVED = "monitor-curved", MONITORS_CURVED_RO = "Monitoare Curbate",

    // M E N U ======================================   
    SPECIAL_OFFER = "special-offer", SPECIAL_OFFER_RO = "Oferte Speciale",
    CUSTOMER_SUPORT = "customer-support", CUSTOMER_SUPORT_RO = "Suport Clienti",
    STORES = "stores", STORES_RO = "Magazine",
}