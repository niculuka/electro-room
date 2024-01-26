import { CATEGORY, SORTERS } from "../enums/electro.enum";

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
        name: CATEGORY.AVAILABLE,
        value: CATEGORY.AVAILABLE,
        count: 0,
        filters: [
            { id: 1, name: CATEGORY.STOCK, value: CATEGORY.STOCK, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 2, name: CATEGORY.DEPOSIT, value: CATEGORY.DEPOSIT, isChecked: false, min: 0, max: 0, count: 0 },
        ]
    },
    {
        name: CATEGORY.PRICE,
        value: CATEGORY.PRICE,
        count: 0,
        filters: [
            { id: 101, name: CATEGORY.UNDER100, value: CATEGORY.UNDER100, isChecked: false, min: 1, max: 100, count: 0 },
            { id: 102, name: CATEGORY.UNDER500, value: CATEGORY.UNDER500, isChecked: false, min: 100, max: 500, count: 0 },
            { id: 103, name: CATEGORY.UNDER1000, value: CATEGORY.UNDER1000, isChecked: false, min: 500, max: 1000, count: 0 },
            { id: 104, name: CATEGORY.UNDER2000, value: CATEGORY.UNDER2000, isChecked: false, min: 1000, max: 2000, count: 0 },
            { id: 105, name: CATEGORY.UNDER3000, value: CATEGORY.UNDER3000, isChecked: false, min: 2000, max: 3000, count: 0 },
            { id: 106, name: CATEGORY.UNDER4000, value: CATEGORY.UNDER4000, isChecked: false, min: 3000, max: 4000, count: 0 },
            { id: 107, name: CATEGORY.OVER4000, value: CATEGORY.OVER4000, isChecked: false, min: 4000, max: 1000000, count: 0 },
        ]
    },
    {
        name: CATEGORY.BRAND,
        value: CATEGORY.BRAND,
        count: 0,
        filters: [
            { id: 201, name: CATEGORY.ACER, value: CATEGORY.ACER, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 202, name: CATEGORY.ADATA, value: CATEGORY.ADATA, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 203, name: CATEGORY.APPLE, value: CATEGORY.APPLE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 204, name: CATEGORY.ASUS, value: CATEGORY.ASUS, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 205, name: CATEGORY.DELL, value: CATEGORY.DELL, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 206, name: CATEGORY.HAMA, value: CATEGORY.HAMA, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 207, name: CATEGORY.HP, value: CATEGORY.HP, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 208, name: CATEGORY.KINGSTON, value: CATEGORY.KINGSTON, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 209, name: CATEGORY.LENOVO, value: CATEGORY.LENOVO, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 210, name: CATEGORY.MSI, value: CATEGORY.MSI, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 211, name: CATEGORY.MYRIA, value: CATEGORY.MYRIA, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 212, name: CATEGORY.PHILIPS, value: CATEGORY.PHILIPS, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 213, name: CATEGORY.PROMATE, value: CATEGORY.PROMATE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 214, name: CATEGORY.RIVACASE, value: CATEGORY.RIVACASE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 215, name: CATEGORY.SAMSONITE, value: CATEGORY.SAMSONITE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 216, name: CATEGORY.SAMSUNG, value: CATEGORY.SAMSUNG, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 217, name: CATEGORY.SANDISK, value: CATEGORY.SANDISK, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 218, name: CATEGORY.SEAGATE, value: CATEGORY.SEAGATE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 219, name: CATEGORY.WD, value: CATEGORY.WD, isChecked: false, min: 0, max: 0, count: 0 },
        ]
    },
    {
        name: CATEGORY.SUBCATEGORY,
        value: CATEGORY.SUBCATEGORY,
        count: 0,
        filters: [
            { id: 301, name: CATEGORY.LAPTOP_BUSINESS, value: CATEGORY.LAPTOP_BUSINESS, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 302, name: CATEGORY.LAPTOP_GAMING, value: CATEGORY.LAPTOP_GAMING, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 303, name: CATEGORY.LAPTOP_HOME, value: CATEGORY.LAPTOP_HOME, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 304, name: CATEGORY.LAPTOP_ULTRA, value: CATEGORY.LAPTOP_ULTRA, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 401, name: CATEGORY.BRIEFCASE, value: CATEGORY.BRIEFCASE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 402, name: CATEGORY.SLEEVE, value: CATEGORY.SLEEVE, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 403, name: CATEGORY.BACKPACK, value: CATEGORY.BACKPACK, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 501, name: CATEGORY.CAR, value: CATEGORY.CAR, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 502, name: CATEGORY.PLUG_IN, value: CATEGORY.PLUG_IN, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 601, name: CATEGORY.HDD, value: CATEGORY.HDD, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 602, name: CATEGORY.SSD, value: CATEGORY.SSD, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 701, name: CATEGORY.DDR4, value: CATEGORY.DDR4, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 702, name: CATEGORY.DDR5, value: CATEGORY.DDR5, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 801, name: CATEGORY.INTEL, value: CATEGORY.INTEL, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 802, name: CATEGORY.AMD, value: CATEGORY.AMD, isChecked: false, min: 0, max: 0, count: 0 },

            { id: 901, name: CATEGORY.MONITORS_FLAT, value: CATEGORY.MONITORS_FLAT, isChecked: false, min: 0, max: 0, count: 0 },
            { id: 902, name: CATEGORY.MONITORS_CURVED, value: CATEGORY.MONITORS_CURVED, isChecked: false, min: 0, max: 0, count: 0 },
        ]
    },
]

// ProductSorter ==================================================================================================
export interface ProductSorter {
    name: string;
    value: string;
}

export const SORTERS_OPTIONS: Array<ProductSorter> = [
    { name: SORTERS.BEST_SOLD, value: SORTERS.BEST_SOLD },
    { name: SORTERS.NAME, value: SORTERS.NAME },
    { name: SORTERS.LOW_TO_HIGH, value: SORTERS.LOW_TO_HIGH },
    { name: SORTERS.HIGH_TO_LOW, value: SORTERS.HIGH_TO_LOW },

]
