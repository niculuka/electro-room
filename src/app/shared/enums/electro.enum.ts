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
    BEST_SOLD = "cele mai vandute",
    NAME = "nume",
    LOW_TO_HIGH = "mic la mare",
    HIGH_TO_LOW = "mare la mic",
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
    CATEGORY = "categorie",
    SUBCATEGORY = "subcategorie",
    PRODUCTS = "produse",

    // B A D G E -----------------------------------------
    TOP_FAVORITE = "top favorit",
    SUPER_PRICE = "super pret",

    // A V A I L A B L E -----------------------------------------
    AVAILABLE = "disponibil",
    STOCK = "stoc",
    DEPOSIT = "depozit",
    ONLINE = "online",

    // P R I C E  -  H I G H -------------------------------------
    PRICE = "pret",
    UNDER1000 = "sub 1000",
    UNDER2000 = "sub 2000",
    UNDER3000 = "sub 3000",
    UNDER4000 = "sub 4000",
    OVER4000 = "peste 4000",

    // P R I C E  -  L O W ---------------------------------------
    UNDER100 = "sub 100",
    UNDER200 = "sub 200",
    UNDER300 = "sub 300",
    OVER300 = "peste 300",

    // B R A N D -----------------------------------------
    BRAND = "brand",
    ACER = "acer",
    ADATA = "adata",
    ALLVIEW = "allview",
    AMD = "amd",
    APPLE = "apple",
    ASUS = "asus",
    DELL = "dell",
    HAMA = "hama",
    HP = "hp",
    INTEL = "intel",
    IPHONE = "iphone",
    LENOVO = "lenovo",
    KINGSTON = "kingston",
    MYRIA = "myria",
    MSI = "msi",
    PHILIPS = "philips",
    PROMATE = "promate",
    RIVACASE = "rivacase",
    SAMSONITE = "samsonite",
    SAMSUNG = "samsung",
    SANDISK = "sandisk",
    SEAGATE = "seagate",
    TUMI = "tumi",
    WD = "wd",
    XTORM = "xtorm",

    // D E P A R T M E N T ======================================== 
    LPT = "laptop-phone-tablet",
    DPS = "desktop-peripheral-software",

    // T Y P E ====================================================
    LAPTOP = "laptop",
    LAPTOP_ACCESSORY = "laptop-accessory",
    PC = "pc",
    MONITOR = "monitor",

    // C A T E G O R Y ============================================
    LAPTOP_GAMING = "laptop-gaming",
    LAPTOP_BUSINESS = "laptop-business",
    LAPTOP_ULTRA = "laptop-ultra",    
    LAPTOP_HOME = "laptop-home",
    LAPTOP_BAG = "laptop-bag",
    LAPTOP_CHARGER = "laptop-charger",
    LAPTOP_HARD = "laptop-hard",
    EXTERNAL_BATTERY = "external-battery",
    RAM_MEMORY = "ram-memory",
    PC_GAMING = "pc-gaming",
    ALL_IN_ONE = "all-in-one",
    MONITOR_PRO = "monitor-pro",    

    // S U B C A T E G O R Y ======================================    
    BRIEFCASE = "briefcase",
    SLEEVE = "sleeve",
    BACKPACK = "backpack",
    CAR = "car",
    PLUG_IN = "plug-in",    
    HDD = "hdd",
    SSD = "ssd",   
    BATTERY = "battery",    
    DDR3 = "ddr3",
    DDR4 = "ddr4",
    DDR5 = "ddr5",
    MONITORS_FLAT = "monitor-flat",
    MONITORS_CURVED = "monitor-curved",
}

export enum MENU {
    // D E P A R T M E N T ======================================== 
    LPT = "Laptopuri, Telefoane, Tablete",
    DPS = "Desktop, Periferice, Software",

    // T Y P E ====================================================
    LAPTOP = "Laptopuri",
    LAPTOP_ACCESSORY = "Accesorii Laptop",
    PC = "PC-uri",
    MONITOR = "Monitoare",

    // C A T E G O R Y ============================================
    LAPTOP_GAMING = "Laptopuri Gaming",    
    LAPTOP_BUSINESS = "Laptopuri Business",
    LAPTOP_ULTRA = "Laptopuri Ultra",
    LAPTOP_HOME = "Laptopuri Home",
    LAPTOP_BAG = "Genti Laptop",
    LAPTOP_CHARGER = "Incarcatoare Laptop",
    LAPTOP_HARD = "Harduri Laptop",
    EXTERNAL_BATTERY = "Baterii Externe",
    RAM_MEMORY = "Memorii Ram",
    PC_GAMING = "Calculatoare Gaming",
    ALL_IN_ONE = "Sisteme All In One",
    MONITOR_PRO = "Monitoare profesionale",    

    // S U B C A T E G O R Y ======================================    
    BRIEFCASE = "briefcase",
    SLEEVE = "sleeve",
    BACKPACK = "backpack",
    CAR = "car",
    PLUG_IN = "plug-in",    
    HDD = "hdd",
    SSD = "ssd",   
    BATTERY = "battery",    
    DDR3 = "ddr3",
    DDR4 = "ddr4",
    DDR5 = "ddr5",
    MONITORS_FLAT = "monitor-flat",
    MONITORS_CURVED = "monitor-curved",
}