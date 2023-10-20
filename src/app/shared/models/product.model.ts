import { CATEGORY } from "../enums/electro.enum";

export class ProductGallery {
    id: number | undefined;
    image: string = "";
    productId: number | undefined;
}

export class Product {
    id: number | undefined;
    name: string = "";
    linkName: string = "";
    description: string = "";
    brand: CATEGORY;
    type: CATEGORY;
    category: CATEGORY;
    subcategory: CATEGORY;
    image: string = "";
    badge: CATEGORY;
    available: CATEGORY;
    favorite: boolean = false;
    price: number = 0;
    display: number = 0;
    power?: CATEGORY;
    capacity?: CATEGORY;
    connect?: CATEGORY;
    gallery: Array<ProductGallery> = [];

    constructor(
        id?: number,
        name: string = "",
        linkName: string = "",
        description: string = "",
        brand: CATEGORY = CATEGORY.CATEGORY,
        type: CATEGORY = CATEGORY.CATEGORY,
        category: CATEGORY = CATEGORY.CATEGORY,
        subcategory: CATEGORY = CATEGORY.CATEGORY,
        image: string = "",
        badge: CATEGORY = CATEGORY.CATEGORY,
        available: CATEGORY = CATEGORY.CATEGORY,
        favorite: boolean = false,
        price: number = 0,
        display: number = 0,
        power?: CATEGORY,
        capacity?: CATEGORY,
        connect?: CATEGORY,
        gallery: Array<ProductGallery> = [],
    ) {
        this.id = id;
        this.name = name;
        this.linkName = linkName;
        this.description = description;
        this.brand = brand;
        this.type = type;
        this.category = category;
        this.subcategory = subcategory;
        this.image = image;
        this.badge = badge;
        this.available = available;
        this.favorite = favorite;
        this.price = price;
        this.display = display;
        this.power = power;
        this.capacity = capacity;
        this.connect = connect;
        this.gallery = gallery;
    }
}

// F I L T E R S ----------------------------------------------------------------------
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

