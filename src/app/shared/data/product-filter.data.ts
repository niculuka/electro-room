import { CATEGORY, SORTERS } from "../enums/electro.enum";
import { ProductFilter, ProductSorter } from "../models/product-filter.model";

export const PRODUCTS_FILTERS: Array<ProductFilter> = [
    {
        name: "Disponibilitate",
        value: CATEGORY.AVAILABLE,
        filters: [
            { id: 1, name: CATEGORY.STOCK, value: CATEGORY.AVAILABLE, isChecked: false, min: 0, max: 0, labelName: "In Stoc", count: 0 },
            { id: 2, name: CATEGORY.DEPOSIT, value: CATEGORY.AVAILABLE, isChecked: false, min: 0, max: 0, labelName: "In Depozit", count: 0 },
        ]
    },
    {
        name: "Pret",
        value: CATEGORY.PRICE,
        filters: [
            { id: 101, name: CATEGORY.UNDER1000, value: CATEGORY.PRICE, isChecked: false, min: 0, max: 1000, labelName: "Sub 1000", count: 0 },
            { id: 102, name: CATEGORY.UNDER2000, value: CATEGORY.PRICE, isChecked: false, min: 1000, max: 2000, labelName: "1000 - 2000", count: 0 },
            { id: 103, name: CATEGORY.UNDER3000, value: CATEGORY.PRICE, isChecked: false, min: 2000, max: 3000, labelName: "2000 - 3000", count: 0 },
            { id: 104, name: CATEGORY.UNDER4000, value: CATEGORY.PRICE, isChecked: false, min: 3000, max: 4000, labelName: "3000 - 4000", count: 0 },
            { id: 105, name: CATEGORY.OVER4000, value: CATEGORY.PRICE, isChecked: false, min: 4000, max: 1000000, labelName: "Peste 4000", count: 0 },
        ]
    },
    {
        name: "Brand",
        value: CATEGORY.BRAND,
        filters: [
            { id: 201, name: CATEGORY.ACER, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.ACER, count: 0 },
            // { id: 202, name: CATEGORY.ADATA, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.ADATA, count: 0 },
            // { id: 203, name: CATEGORY.ALLVIEW, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.ALLVIEW, count: 0 },
            { id: 204, name: CATEGORY.APPLE, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.APPLE, count: 0 },
            { id: 205, name: CATEGORY.ASUS, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.ASUS, count: 0 },
            // { id: 206, name: CATEGORY.DELL, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.DELL, count: 0 },
            // { id: 207, name: CATEGORY.HAMA, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.HAMA, count: 0 },
            // { id: 208, name: CATEGORY.HP, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.HP, count: 0 },
            // { id: 209, name: CATEGORY.IPHONE, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.IPHONE, count: 0 },
            // { id: 210, name: CATEGORY.LENOVO, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.LENOVO, count: 0 },
            // { id: 211, name: CATEGORY.KINGSTON, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.KINGSTON, count: 0 },
            // { id: 212, name: CATEGORY.MYRIA, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.MYRIA, count: 0 },
            // { id: 213, name: CATEGORY.PROMATE, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.PROMATE, count: 0 },
            // { id: 214, name: CATEGORY.RIVACASE, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.RIVACASE, count: 0 },
            // { id: 215, name: CATEGORY.SAMSONITE, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.SAMSONITE, count: 0 },
            // { id: 216, name: CATEGORY.SAMSUNG, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.SAMSUNG, count: 0 },
            // { id: 217, name: CATEGORY.SANDISK, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.SANDISK, count: 0 },
            // { id: 218, name: CATEGORY.SEAGATE, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.SEAGATE, count: 0 },
            // { id: 219, name: CATEGORY.TUMI, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.TUMI, count: 0 },
            // { id: 220, name: CATEGORY.WD, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.WD, count: 0 },
            // { id: 221, name: CATEGORY.XTORM, value: CATEGORY.BRAND, isChecked: false, min: 0, max: 0, labelName: CATEGORY.XTORM, count: 0 },
        ]
    },
    {
        name: "Categorie",
        value: CATEGORY.CATEGORY,
        filters: [
            { id: 301, name: CATEGORY.LAPTOP_BUSINESS, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: "Business", count: 0 },
            { id: 302, name: CATEGORY.LAPTOP_GAMING, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: "Gaming", count: 0 },
            { id: 303, name: CATEGORY.LAPTOP_HOME, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: "Home", count: 0 },
            { id: 304, name: CATEGORY.LAPTOP_ULTRA, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: "Ultraportabil", count: 0 },
            // { id: 305, name: CATEGORY.ALL_IN_ONE, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: "All In One", count: 0 },

            // { id: 401, name: CATEGORY.BRIEFCASE, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: CATEGORY.BRIEFCASE, count: 0 },
            // { id: 402, name: CATEGORY.SLEEVE, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: CATEGORY.SLEEVE, count: 0 },
            // { id: 403, name: CATEGORY.BACKPACK, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: CATEGORY.BACKPACK, count: 0 },

            // { id: 404, name: CATEGORY.PLUG_IN, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: CATEGORY.PLUG_IN, count: 0 },
            // { id: 405, name: CATEGORY.CAR, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: CATEGORY.CAR, count: 0 },

            // { id: 406, name: CATEGORY.HDD, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: CATEGORY.HDD, count: 0 },
            // { id: 407, name: CATEGORY.SSD, value: CATEGORY.CATEGORY, isChecked: false, min: 0, max: 0, labelName: CATEGORY.SSD, count: 0 },
        ]
    },
]

export const SORTERS_OPTIONS: Array<ProductSorter> = [
    { name: "Cele mai vandute", value: SORTERS.BEST_SOLD },
    { name: "Nume", value: SORTERS.NAME },
    { name: "Pret crescator", value: SORTERS.LOW_TO_HIGH },
    { name: "Pret descrescator", value: SORTERS.HIGH_TO_LOW },

]
