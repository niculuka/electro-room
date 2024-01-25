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
    LOW_TO_HIGH = "Pret Crescator",
    HIGH_TO_LOW = "Pret Descrescator",
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
    READ_SPEED = "Viteza Citire",
    WRITE_SPEED = "Viteza Scriere",
    HDMI = "Hdmi",
    SPEAKER = "Difuzor",
    RADIATOR = "Radiator",
    VOLTAGE = "Tensiune",
}

export enum CATEGORY {
    CATEGORY = "Categorie",
    SUBCATEGORY = "Subcategorie",
    PRODUCTS = "Produse",

    // B A D G E -----------------------------------------
    TOP_FAVORITE = "Top Favorit",
    SUPER_PRICE = "Super Pret",

    // A V A I L A B L E -----------------------------------------
    AVAILABLE = "Disponibilitate",
    STOCK = "In Stoc",
    DEPOSIT = "In Depozit",
    ONLINE = "Online",

    // P R I C E  -  H I G H -------------------------------------
    PRICE = "Pret",
    UNDER100 = "Sub 100",
    UNDER500 = "100 - 500",
    UNDER1000 = "500 - 1000",
    UNDER2000 = "1000 - 2000",
    UNDER3000 = "2000 - 3000",
    UNDER4000 = "3000 - 4000",
    OVER4000 = "Peste 4000",

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
    KINGSTON = "Kingston",
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
    BRIEFCASE = "Serviete",
    SLEEVE = "Huse",
    BACKPACK = "Rucsacuri",
    CAR = "Auto",
    PLUG_IN = "Priza",
    HDD = "HDD",
    SSD = "SSD",
    DDR3 = "DDR3",
    DDR4 = "DDR4",
    DDR5 = "DDR5",
    MONITORS_FLAT = "Monitoare Plate",
    MONITORS_CURVED = "Monitoare Curbate",

    // M E N U ======================================   
    SPECIAL_OFFER = "Oferte Speciale",
    SPECIAL_OFFER_PATH = "special-offer",
    CUSTOMER_SUPORT = "Suport Clienti",
    CUSTOMER_SUPORT_PATH = "customer-support",
    STORES = "Magazine",
    STORES_PATH = "stores",
}