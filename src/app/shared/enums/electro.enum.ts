// App Enums =======================================================
export enum ROLE {
    USER = "USER",
    ADMIN = "ADMIN",
}

export enum USER {
    USERS = "Utilizatori",
    USERS_LIST = "Lista Utilizatori",
    USERS_LIST_URL_KEY = "users",
    TOKENS = "Tokenuri",
    TOKENS_URL_KEY = "tokens",
}

export enum ORDER {    
    ORDERS = "Comenzi",
    ORDERS_LIST = "Lista Comenzi",
    ORDERS_LIST_URL_KEY = "orders",
    ORDED_PRODUCTS = "Produse Comandate",
    ORDED_PRODUCTS_URL_KEY = "items",
    
    NEW = "Noua",
    DONE = "Livrata",
    CANCELED = "Anulata",
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

export enum CAROUSEL {
    CAROUSEL_OWL_1 = "Laptopuri si Accesorii",
    CAROUSEL_OWL_2 = "PC-uri si Monitoare",
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
    PRODUCTS = "Produse",
    CATEGORY = "Categorie",
    SUBCATEGORY = "Subcategorie",    

    // B A D G E -----------------------------------------
    TOP_FAVORITE = "Top Favorit",
    SUPER_PRICE = "Super Pret",

    // A V A I L A B L E -----------------------------------------
    AVAILABLE = "Disponibilitate",
    STOCK = "Stoc",
    DEPOSIT = "Depozit",
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

    // D E P A R T M E N T ======================================== 
    LPT = "Laptopuri, Telefoane, Tablete",
    LPT_URL_KEY = "laptop-phone-tablet",
    DPS = "Desktop, Periferice, Software",
    DPS_URL_KEY = "desktop-peripheral-software",

    // T Y P E ====================================================
    LAPTOP = "Laptopuri",
    LAPTOP_URL_KEY = "laptop",
    LAPTOP_ACCESSORY = "Accesorii Laptop",
    LAPTOP_ACCESSORY_URL_KEY = "laptop-accessory",
    PC = "PC-uri",
    PC_URL_KEY = "pc",
    MONITOR = "Monitoare",
    MONITOR_URL_KEY = "monitor",

    // C A T E G O R Y ============================================
    LAPTOP_GAMING = "Laptopuri Gaming",
    LAPTOP_GAMING_URL_KEY = "laptop-gaming",
    LAPTOP_BUSINESS = "Laptopuri Business",
    LAPTOP_BUSINESS_URL_KEY = "laptop-business",
    LAPTOP_ULTRA = "Laptopuri Ultra",
    LAPTOP_ULTRA_URL_KEY = "laptop-ultra",
    LAPTOP_HOME = "Laptopuri Home",
    LAPTOP_HOME_URL_KEY = "laptop-home",
    LAPTOP_BAG = "Genti Laptop",
    LAPTOP_BAG_URL_KEY = "laptop-bag",
    LAPTOP_CHARGER = "Incarcatoare Laptop",
    LAPTOP_CHARGER_URL_KEY = "laptop-charger",
    LAPTOP_HARD = "Harduri Laptop",
    LAPTOP_HARD_URL_KEY = "laptop-hard",
    EXTERNAL_BATTERY = "Baterii Externe",
    EXTERNAL_BATTERY_URL_KEY = "external-battery",
    RAM_MEMORY = "Memorii Ram",
    RAM_MEMORY_URL_KEY = "ram-memory",
    PC_GAMING = "Calculatoare Gaming",
    PC_GAMING_URL_KEY = "pc-gaming",
    ALL_IN_ONE = "All In One",
    ALL_IN_ONE_URL_KEY = "all-in-one",
    MONITOR_PRO = "Monitoare Profesionale",
    MONITOR_PRO_URL_KEY = "monitor-pro",

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