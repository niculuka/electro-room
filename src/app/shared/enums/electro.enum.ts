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

export enum CATEGORY {
    CATEGORY = "CATEGORY",    

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
    GHZ4 =  "GHZ4",
    GHZ5 =  "GHZ5",

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
}
