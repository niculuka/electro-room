import { AVAILABLE, BRAND, GENERAL, PRICE, SORTER_TYPE, SUBCATEGORY } from "../enums/electro.enum";

export class ProductFilter {
    name: string = "";
    value: string = "";
    count: number = 0;
    filters: Array<ProdFilter> = [];
}

export class ProdFilter {
    id: number = 0;
    name: string = "";
    value: string = "";
    isChecked: boolean = false;
    min: number = 0;
    max: number = 0;
    count: number = 0;
}

export const PRODUCTS_FILTERS: Array<ProductFilter> = [
    {
        name: GENERAL.AVAILABLE,
        value: GENERAL.AVAILABLE,
        count: 0,
        filters: [
            { id: 1, name: AVAILABLE.STOCK, value: AVAILABLE.STOCK, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 2, name: AVAILABLE.DEPOSIT, value: AVAILABLE.DEPOSIT, isChecked: false, min: 0, max: 0, count: 0 },
        ]
    },
    {
        name: GENERAL.PRICE,
        value: GENERAL.PRICE,
        count: 0,
        filters: [
            { id: 101, name: PRICE.UNDER100, value: PRICE.UNDER100, isChecked: false, min: 1, max: 100, count: 0 },
            { id: 102, name: PRICE.UNDER500, value: PRICE.UNDER500, isChecked: false, min: 100, max: 500, count: 0 },
            { id: 103, name: PRICE.UNDER1000, value: PRICE.UNDER1000, isChecked: false, min: 500, max: 1000, count: 0 },
            { id: 104, name: PRICE.UNDER2000, value: PRICE.UNDER2000, isChecked: false, min: 1000, max: 2000, count: 0 },
            { id: 105, name: PRICE.UNDER3000, value: PRICE.UNDER3000, isChecked: false, min: 2000, max: 3000, count: 0 },
            { id: 106, name: PRICE.UNDER4000, value: PRICE.UNDER4000, isChecked: false, min: 3000, max: 4000, count: 0 },
            { id: 107, name: PRICE.OVER4000, value: PRICE.OVER4000, isChecked: false, min: 4000, max: 1000000, count: 0 },
        ]
    },
    {
        name: GENERAL.BRAND,
        value: GENERAL.BRAND,
        count: 0,
        filters: [
            { id: 201, name: BRAND.ACER, value: BRAND.ACER, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 202, name: BRAND.ADATA, value: BRAND.ADATA, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 203, name: BRAND.APPLE, value: BRAND.APPLE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 204, name: BRAND.ASUS, value: BRAND.ASUS, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 205, name: BRAND.DELL, value: BRAND.DELL, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 206, name: BRAND.HAMA, value: BRAND.HAMA, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 207, name: BRAND.HP, value: BRAND.HP, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 208, name: BRAND.KINGSTON, value: BRAND.KINGSTON, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 209, name: BRAND.LENOVO, value: BRAND.LENOVO, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 210, name: BRAND.MSI, value: BRAND.MSI, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 211, name: BRAND.MYRIA, value: BRAND.MYRIA, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 212, name: BRAND.PHILIPS, value: BRAND.PHILIPS, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 213, name: BRAND.PROMATE, value: BRAND.PROMATE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 214, name: BRAND.RIVACASE, value: BRAND.RIVACASE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 215, name: BRAND.SAMSONITE, value: BRAND.SAMSONITE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 216, name: BRAND.SAMSUNG, value: BRAND.SAMSUNG, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 217, name: BRAND.SANDISK, value: BRAND.SANDISK, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 218, name: BRAND.SEAGATE, value: BRAND.SEAGATE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 219, name: BRAND.WD, value: BRAND.WD, isChecked: false, min: 0, max: 0, count: 0 },
        ]
    },
    {
        name: GENERAL.SUBCATEGORY,
        value: GENERAL.SUBCATEGORY,
        count: 0,
        filters: [
            { id: 301, name: SUBCATEGORY.LAPTOP_BUSINESS, value: SUBCATEGORY.LAPTOP_BUSINESS, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 302, name: SUBCATEGORY.LAPTOP_GAMING, value: SUBCATEGORY.LAPTOP_GAMING, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 303, name: SUBCATEGORY.LAPTOP_HOME, value: SUBCATEGORY.LAPTOP_HOME, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 304, name: SUBCATEGORY.LAPTOP_ULTRA, value: SUBCATEGORY.LAPTOP_ULTRA, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 401, name: SUBCATEGORY.BRIEFCASE, value: SUBCATEGORY.BRIEFCASE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 402, name: SUBCATEGORY.SLEEVE, value: SUBCATEGORY.SLEEVE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 403, name: SUBCATEGORY.BACKPACK, value: SUBCATEGORY.BACKPACK, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 501, name: SUBCATEGORY.CAR, value: SUBCATEGORY.CAR, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 502, name: SUBCATEGORY.PLUG_IN, value: SUBCATEGORY.PLUG_IN, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 601, name: SUBCATEGORY.HDD, value: SUBCATEGORY.HDD, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 602, name: SUBCATEGORY.SSD, value: SUBCATEGORY.SSD, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 701, name: SUBCATEGORY.DDR4, value: SUBCATEGORY.DDR4, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 702, name: SUBCATEGORY.DDR5, value: SUBCATEGORY.DDR5, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 801, name: SUBCATEGORY.INTEL, value: SUBCATEGORY.INTEL, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 802, name: SUBCATEGORY.AMD, value: SUBCATEGORY.AMD, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 901, name: SUBCATEGORY.MONITORS_FLAT, value: SUBCATEGORY.MONITORS_FLAT, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 902, name: SUBCATEGORY.MONITORS_CURVED, value: SUBCATEGORY.MONITORS_CURVED, isChecked: false, min: 0, max: 0, count: 0 },
        ]
    },
]

// ProductSorter ==================================================================================================
export interface ProductSorter {
    name: string;
    value: string;
}

export const SORTERS_OPTIONS: Array<ProductSorter> = [
    { name: SORTER_TYPE.BEST_SOLD, value: SORTER_TYPE.BEST_SOLD },
    { name: SORTER_TYPE.NAME, value: SORTER_TYPE.NAME },
    { name: SORTER_TYPE.LOW_TO_HIGH, value: SORTER_TYPE.LOW_TO_HIGH },
    { name: SORTER_TYPE.HIGH_TO_LOW, value: SORTER_TYPE.HIGH_TO_LOW },

]
