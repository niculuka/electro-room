// App Enums =======================================================
export enum ROLE {
    USER = "USER",
    ADMIN = "ADMIN",
}

export enum USER {
    USERS_LIST = "Lista Utilizatori",
    TOKENS = "Tokenuri",
}

export enum USER_URL_KEY {
    USERS_LIST_URL_KEY = "users",
    TOKENS_URL_KEY = "tokens",
}

export enum ORDER {
    ORDERS_LIST = "Lista Comenzi",
    ORDED_PRODUCTS = "Produse Comandate",
}

export enum ORDER_URL_KEY {
    ORDERS_LIST_URL_KEY = "orders",
    ORDED_PRODUCTS_URL_KEY = "items",
}

export enum ORDER_STATUS {
    NEW = "Noua",
    DONE = "Livrata",
    CANCELED = "Anulata",
}

export enum PAYMENT_TYPE {
    CASH = "Cash",
    CARD = "Card",
}

export enum SORTER_TYPE {
    BEST_SOLD = "Cele Mai Vandute",
    NAME = "Nume",
    LOW_TO_HIGH = "Pret Crescator",
    HIGH_TO_LOW = "Pret Descrescator",
}

export enum CAROUSEL {
    CAROUSEL_OWL_1 = "Laptopuri si Accesorii",
    CAROUSEL_OWL_2 = "PC-uri si Monitoare",
}

export enum ADVERTISE {
    PROMO = "Promo",
}

export enum GENERAL {    
    PRODUCTS = "Produse",
    CATEGORY = "Categorie",
    SUBCATEGORY = "Subcategorie",
    PRICE = "Pret",
    BRAND = "Brand",
    AVAILABLE = "Disponibilitate",
    USERS = "Utilizatori",
    ORDERS = "Comenzi",
}

export enum AVAILABLE {
    STOCK = "Stoc",
    DEPOSIT = "Depozit",
    // ONLINE = "Online",
}

export enum PRICE {
    UNDER100 = "Sub 100",
    UNDER500 = "100 - 500",
    UNDER1000 = "500 - 1000",
    UNDER2000 = "1000 - 2000",
    UNDER3000 = "2000 - 3000",
    UNDER4000 = "3000 - 4000",
    OVER4000 = "Peste 4000",
}

export enum BADGE {
    TOP_FAVORITE = "Top Favorit",
    SUPER_PRICE = "Super Pret",
}

export enum DEPARTMENT {
    LPT = "Laptopuri, Telefoane, Tablete",
    DPS = "Desktop, Periferice, Software",
}

export enum DEPARTMENT_URL_KEY {
    LPT_URL_KEY = "laptop-phone-tablet",
    DPS_URL_KEY = "desktop-peripheral-software",
}

export enum TYPE {
    LAPTOP = "Laptopuri",
    LAPTOP_ACCESSORY = "Accesorii Laptop",
    PC = "PC-uri",
    MONITOR = "Monitoare",
}

export enum TYPE_URL_KEY {
    LAPTOP_URL_KEY = "laptop",
    LAPTOP_ACCESSORY_URL_KEY = "laptop-accessory",
    PC_URL_KEY = "pc",
    MONITOR_URL_KEY = "monitor",
}

export enum CATEGORY {
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
    ALL_IN_ONE = "All In One",
    MONITOR_PRO = "Monitoare Profesionale",
}

export enum CATEGORY_URL_KEY {
    LAPTOP_GAMING_URL_KEY = "laptop-gaming",
    LAPTOP_BUSINESS_URL_KEY = "laptop-business",
    LAPTOP_ULTRA_URL_KEY = "laptop-ultra",
    LAPTOP_HOME_URL_KEY = "laptop-home",
    LAPTOP_BAG_URL_KEY = "laptop-bag",
    LAPTOP_CHARGER_URL_KEY = "laptop-charger",
    LAPTOP_HARD_URL_KEY = "laptop-hard",
    EXTERNAL_BATTERY_URL_KEY = "external-battery",
    RAM_MEMORY_URL_KEY = "ram-memory",
    PC_GAMING_URL_KEY = "pc-gaming",
    ALL_IN_ONE_URL_KEY = "all-in-one",
    MONITOR_PRO_URL_KEY = "monitor-pro",
}

export enum SUBCATEGORY {
    LAPTOP_GAMING = "Laptopuri Gaming",
    LAPTOP_BUSINESS = "Laptopuri Business",
    LAPTOP_ULTRA = "Laptopuri Ultra",
    LAPTOP_HOME = "Laptopuri Home",
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
}

export enum BRAND {
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

export enum MENU {
    SPECIAL_OFFER = "Oferte Speciale",
    CUSTOMER_SUPORT = "Suport Clienti",
    STORES = "Magazine",
}

export enum MENU_URL_KEY {
    SPECIAL_OFFER_URL_KEY = "special-offer",
    CUSTOMER_SUPORT_URL_KEY = "customer-support",
    STORES_URL_KEY = "stores",
}