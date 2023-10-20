import { CATEGORY } from "../enums/electro.enum";

export class ProductFilter {
    id: number = 0;
    name: string = "";
    value: string = "";
    min: number = 0;
    max: number = 0;
}

export interface ProdFilt {
    id: number;
    name: string;
    value: string;
    min: number;
    max: number;
}

export const PRODUCTS_FILTERS: Array<ProdFilt> = [
    { id: 1, name: CATEGORY.STOCK, value: CATEGORY.AVAILABLE, min: 0, max: 0 },
    { id: 2, name: CATEGORY.DEPOSIT, value: CATEGORY.AVAILABLE, min: 0, max: 0 },
    { id: 101, name: CATEGORY.UNDER1000, value: CATEGORY.PRICE, min: 0, max: 1000 },
    { id: 102, name: CATEGORY.UNDER2000, value: CATEGORY.PRICE, min: 1000, max: 2000 },
    { id: 103, name: CATEGORY.UNDER3000, value: CATEGORY.PRICE, min: 2000, max: 3000 },
    { id: 104, name: CATEGORY.UNDER4000, value: CATEGORY.PRICE, min: 3000, max: 4000 },
    { id: 105, name: CATEGORY.OVER4000, value: CATEGORY.PRICE, min: 4000, max: 1000000 },
    { id: 201, name: CATEGORY.ACER, value: CATEGORY.BRAND, min: 0, max: 0 },
    { id: 204, name: CATEGORY.APPLE, value: CATEGORY.BRAND, min: 0, max: 0 },
    { id: 205, name: CATEGORY.ASUS, value: CATEGORY.BRAND, min: 0, max: 0 },
]