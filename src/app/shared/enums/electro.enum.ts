// App Enums =======================================================
export enum ROLE {
    USER = "USER",
    ADMIN = "ADMIN",
}

export enum ORDER_STATUS {
    NEW = "NEW",
    DONE = "DONE",
    CANCELED = "CANCELED",
}

export enum PAYMENT_TYPE {
    CASH = "CASH",
    CARD = "CARD",
}

export enum SORTERS {
    BEST_SOLD = "BEST_SOLD",
    NAME = "NAME",
    LOW_TO_HIGH = "LOW_TO_HIGH",
    HIGH_TO_LOW = "HIGH_TO_LOW",
}

export enum FINANCE {
    PROMO = "PROMO",
}

export enum SPECIFICATIONS {
    TITLE_DISPLAY = "Ecran",
    DISPLAY_DIAGONAL = "Diagonala ecran",
    DISPLAY_RESOLUTION = "Rezolutie",
    DISPLAY_FREQUENCY = "Frecventa ecran",
    DISPLAY_TOUCH = "Ecran Tactil",

    TITLE_MOTHERBOARD = "Placa de baza",
    MOTHERBOARD_BRAND = "Producator pb",
    MOTHERBOARD_CHIPSET = "Chipset",
    MOTHERBOARD_SLOT = "Sloturi",
    MOTHERBOARD_AUDIO = "Audio",

    TITLE_PROCESSOR = "Procesor",
    PROCESSOR_BRAND = "Producator procesor",
    PROCESSOR_TYPE = "Tip procesor",
    PROCESSOR_MODEL = "Model procesor",
    PROCESSOR_FREQUENCY = "Frecventa procesor",

    TITLE_MEMORY = "Memorie",
    MEMORY_TYPE = "Tip memorie",
    MEMORY_CAPACITY = "Capacitate memorie",
    MEMORY_FREQUENCY = "Frecventa memorie",

    TITLE_HARD = "Hard",
    HARD_TYPE_1 = "Tip hard",
    HARD_CAPACITY_1 = "Capacitate hard",
    HARD_SLOT_1 = "Slot hard",
    HARD_TYPE_2 = "Tip hard 2",
    HARD_CAPACITY_2 = "Capacitate hard 2",
    HARD_SLOT_2 = "Slot hard 2",

    TITLE_CONNECTIVITY = "Conectivitate",
    CONNECTIVITY_BLUETOOTH = "Bluetooth",
    CONNECTIVITY_WIRELESS = "Wireless",

    TITLE_GENERAL = "Caracteristici generale",
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
    READ_SPEED = "Viteza de citire",
    WRITE_SPEED = "Viteza de scriere",
    HDMI = "Hdmi",
    SPEAKER = "Difuzor",
    RADIATOR = "Radiator",
    VOLTAGE = "Tensiune",
}

export enum CATEGORY {
    CATEGORY = "CATEGORY",
    SUBCATEGORY = "SUBCATEGORY",

    // B A D G E -----------------------------------------
    TOP_FAVORITE = "TOP_FAVORITE",
    TOP_FAVORITE_RO = "Top Favorit",
    SUPER_PRICE = "SUPER_PRICE",
    SUPER_PRICE_RO = "Super Pret",

    // A V A I L A B L E -----------------------------------------
    AVAILABLE = "AVAILABLE",
    STOCK = "STOCK",
    DEPOSIT = "DEPOSIT",
    ONLINE = "ONLINE",

    // P R I C E  -  H I G H -------------------------------------
    PRICE = "PRICE",
    UNDER1000 = "UNDER1000",
    UNDER2000 = "UNDER2000",
    UNDER3000 = "UNDER3000",
    UNDER4000 = "UNDER4000",
    OVER4000 = "OVER4000",

    // P R I C E  -  L O W ---------------------------------------
    UNDER100 = "UNDER100",
    UNDER200 = "UNDER200",
    UNDER300 = "UNDER300",
    OVER300 = "OVER300",

    // B R A N D -----------------------------------------
    BRAND = "BRAND",
    ACER = "ACER",
    ADATA = "ADATA",
    ALLVIEW = "ALLVIEW",
    AMD = "AMD",
    APPLE = "APPLE",
    ASUS = "ASUS",
    DELL = "DELL",
    HAMA = "HAMA",
    HP = "HP",
    INTEL = "INTEL",
    IPHONE = "IPHONE",
    LENOVO = "LENOVO",
    KINGSTON = "KINGSTON",
    MYRIA = "MYRIA",
    MSI = "MSI",
    PHILIPS = "PHILIPS",
    PROMATE = "PROMATE",
    RIVACASE = "RIVACASE",
    SAMSONITE = "SAMSONITE",
    SAMSUNG = "SAMSUNG",
    SANDISK = "SANDISK",
    SEAGATE = "SEAGATE",
    TUMI = "HATUMIMA",
    WD = "WD",
    XTORM = "XTORM",

    // D E P A R T M E N T ========================================
    LPT = "LPT",
    DPS = "DPS",

    // T Y P E ====================================================
    LAPTOPS = "LAPTOPS",
    LAPTOP = "LAPTOP",
    LAPTOP_ACCESSORY = "LAPTOP_ACCESSORY",
    DESKTOP = "DESKTOP",
    PC = "PC",
    MONITOR = "MONITOR",

    // C A T E G O R Y ============================================
    LAPTOP_GAMING = "LAPTOP_GAMING",
    LAPTOP_ULTRA = "LAPTOP_ULTRA",
    LAPTOP_BUSINESS = "LAPTOP_BUSINESS",
    LAPTOP_HOME = "LAPTOP_HOME",
    LAPTOP_L2IN1 = "LAPTOP_L2IN1",
    PC_GAMING = "PC_GAMING",
    ALL_IN_ONE = "ALL_IN_ONE",
    MONITOR_PRO = "MONITOR_PRO",

    // S U B = C A T E G O R Y ====================================
    // CHARGER --------------------------------
    LAPTOP_BAG = "LAPTOP_BAG",
    BRIEFCASE = "BRIEFCASE",
    SLEEVE = "SLEEVE",
    BACKPACK = "BACKPACK",

    // CHARGER --------------------------------
    LAPTOP_CHARGER = "LAPTOP_CHARGER",
    PLUG_IN = "PLUG_IN",
    CAR = "CAR",

    // HARD ------------------------------------
    LAPTOP_HARD = "LAPTOP_HARD",
    HDD = "HDD",
    SSD = "SSD",

    // EXTERNAL-BATTERY-------------------------    
    EXTERNAL_BATTERY = "EXTERNAL_BATTERY",
    BATTERY = "BATTERY",

    // RAM ------------------------------------
    RAM = "RAM",
    RAM_MEMORY = "RAM_MEMORY",
    DDR3 = "DDR3",
    DDR4 = "DDR4",

    // MONITOR ------------------------------------
    MONITOR_FLAT = "MONITOR_FLAT",
    MONITOR_CURVED = "MONITOR_CURVED",

    // P O W E R ------------------------------
    W45 = "W45",
    W60 = "W60",
    W65 = "W65",
    W70 = "W70",
    W85 = "W85",
    W90 = "W90",
    W120 = "W120",
    HZ60 = "HZ60",
    HZ75 = "HZ75",
    MHZ3200 = "MHZ3200",
    MHZ3600 = "MHZ3600",
    MHZ6000 = "MHZ6000",
    GHZ4 = "GHZ4",
    GHZ5 = "GHZ5",

    // CAPACITY -----------------------------------------
    GB120 = "GB120",
    GB240 = "GB240",
    GB256 = "GB256",
    GB480 = "GB480",
    GB500 = "GB500",
    GB512 = "GB512",
    T1 = "T1",
    T2 = "T2",
    A = "A",
    MA10000 = "MA10000",
    MA15000 = "MA15000",
    MA18000 = "MA18000",
    MA20000 = "MA20000",
    GB2X8 = "GB2X8",
    GB2X16 = "GB2X16",

    // CONNECT -----------------------------------------
    PCI_EXPRESS = "PCI_EXPRESS",
    M_SATA3 = "M_SATA3",
    SATA3 = "SATA3",
    USB = "USB",
    MICRO_USB = "MICRO_USB",

    RYZEN_7 = "RYZEN_7",
    G15 = "G15",
    HZ4200 = "4200HZ",
    D15 = "D15",
    HZ120 = "HZ120",
}