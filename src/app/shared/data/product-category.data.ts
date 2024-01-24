import { CATEGORY, SORTERS } from "../enums/electro.enum";
import { ProductFilter, ProductSorter } from "../models/product-filter.model";

export const PRODUCTS_FILTERS: Array<ProductFilter> = [
    {
        name: CATEGORY.AVAILABLE_RO,
        value: CATEGORY.AVAILABLE,
        filters: [
            { id: 1, name: CATEGORY.STOCK_RO, value: CATEGORY.STOCK, category: CATEGORY.AVAILABLE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 2, name: CATEGORY.DEPOSIT_RO, value: CATEGORY.DEPOSIT, category: CATEGORY.AVAILABLE, isChecked: false, min: 0, max: 0, count: 0 },
        ]
    },
    {
        name: CATEGORY.PRICE_RO,
        value: CATEGORY.PRICE,
        filters: [
            { id: 101, name: CATEGORY.UNDER100_RO, value: CATEGORY.UNDER100, category: CATEGORY.PRICE, isChecked: false, min: 1, max: 100, count: 0 },
            { id: 102, name: CATEGORY.UNDER500_RO, value: CATEGORY.UNDER500, category: CATEGORY.PRICE, isChecked: false, min: 100, max: 500, count: 0 },
            { id: 103, name: CATEGORY.UNDER1000_RO, value: CATEGORY.UNDER1000, category: CATEGORY.PRICE, isChecked: false, min: 500, max: 1000, count: 0 },
            { id: 104, name: CATEGORY.UNDER2000_RO, value: CATEGORY.UNDER2000, category: CATEGORY.PRICE, isChecked: false, min: 1000, max: 2000, count: 0 },
            { id: 105, name: CATEGORY.UNDER3000_RO, value: CATEGORY.UNDER3000, category: CATEGORY.PRICE, isChecked: false, min: 2000, max: 3000, count: 0 },
            { id: 106, name: CATEGORY.UNDER4000_RO, value: CATEGORY.UNDER4000, category: CATEGORY.PRICE, isChecked: false, min: 3000, max: 4000, count: 0 },
            { id: 107, name: CATEGORY.OVER4000_RO, value: CATEGORY.OVER4000, category: CATEGORY.PRICE, isChecked: false, min: 4000, max: 1000000, count: 0 },
        ]
    },
    {
        name: CATEGORY.BRAND_RO,
        value: CATEGORY.BRAND,
        filters: [
            { id: 201, name: CATEGORY.ACER_RO, value: CATEGORY.ACER, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 202, name: CATEGORY.ADATA_RO, value: CATEGORY.ADATA, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 203, name: CATEGORY.APPLE_RO, value: CATEGORY.APPLE, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 204, name: CATEGORY.ASUS_RO, value: CATEGORY.ASUS, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 205, name: CATEGORY.DELL_RO, value: CATEGORY.DELL, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 206, name: CATEGORY.HAMA_RO, value: CATEGORY.HAMA, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 207, name: CATEGORY.HP_RO, value: CATEGORY.HP, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 208, name: CATEGORY.KINGSTON_RO, value: CATEGORY.KINGSTON, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 209, name: CATEGORY.LENOVO_RO, value: CATEGORY.LENOVO, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 210, name: CATEGORY.MSI_RO, value: CATEGORY.MSI, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 211, name: CATEGORY.MYRIA_RO, value: CATEGORY.MYRIA, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 212, name: CATEGORY.PHILIPS_RO, value: CATEGORY.PHILIPS, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 213, name: CATEGORY.PROMATE_RO, value: CATEGORY.PROMATE, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 214, name: CATEGORY.RIVACASE_RO, value: CATEGORY.RIVACASE, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 215, name: CATEGORY.SAMSONITE_RO, value: CATEGORY.SAMSONITE, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 216, name: CATEGORY.SAMSUNG_RO, value: CATEGORY.SAMSUNG, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 217, name: CATEGORY.SANDISK_RO, value: CATEGORY.SANDISK, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 218, name: CATEGORY.SEAGATE_RO, value: CATEGORY.SEAGATE, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 219, name: CATEGORY.WD_RO, value: CATEGORY.WD, category: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, count: 0 },
        ]
    },
    {
        name: CATEGORY.SUBCATEGORY_RO,
        value: CATEGORY.SUBCATEGORY,
        filters: [
            { id: 301, name: CATEGORY.LAPTOP_BUSINESS_RO, value: CATEGORY.LAPTOP_BUSINESS, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 302, name: CATEGORY.LAPTOP_GAMING_RO, value: CATEGORY.LAPTOP_GAMING, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 303, name: CATEGORY.LAPTOP_HOME_RO, value: CATEGORY.LAPTOP_HOME, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 304, name: CATEGORY.LAPTOP_ULTRA_RO, value: CATEGORY.LAPTOP_ULTRA, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 401, name: CATEGORY.BRIEFCASE_RO, value: CATEGORY.BRIEFCASE, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 402, name: CATEGORY.SLEEVE_RO, value: CATEGORY.SLEEVE, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 403, name: CATEGORY.BACKPACK_RO, value: CATEGORY.BACKPACK, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 501, name: CATEGORY.CAR_RO, value: CATEGORY.CAR, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 502, name: CATEGORY.PLUG_IN_RO, value: CATEGORY.PLUG_IN, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 601, name: CATEGORY.HDD_RO, value: CATEGORY.HDD, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 602, name: CATEGORY.SSD_RO, value: CATEGORY.SSD, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 701, name: CATEGORY.BATTERY_RO, value: CATEGORY.BATTERY, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 801, name: CATEGORY.DDR3_RO, value: CATEGORY.DDR3, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 802, name: CATEGORY.DDR4_RO, value: CATEGORY.DDR4, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 803, name: CATEGORY.DDR5_RO, value: CATEGORY.DDR5, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 901, name: CATEGORY.MONITORS_FLAT_RO, value: CATEGORY.MONITORS_FLAT, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 902, name: CATEGORY.MONITORS_CURVED_RO, value: CATEGORY.MONITORS_CURVED, category: CATEGORY.SUBCATEGORY, isChecked: false, min: 0, max: 0, count: 0 },
        ]
    },
]

export const SORTERS_OPTIONS: Array<ProductSorter> = [
    { name: SORTERS.BEST_SOLD_RO, value: SORTERS.BEST_SOLD },
    { name: SORTERS.NAME_RO, value: SORTERS.NAME },
    { name: SORTERS.LOW_TO_HIGH_RO, value: SORTERS.LOW_TO_HIGH },
    { name: SORTERS.HIGH_TO_LOW_RO, value: SORTERS.HIGH_TO_LOW },

]
