import { CATEGORY } from "../enums/electro.enum";


export class Product {
    id: number | undefined;
    name: string = "";
    linkName: string = "";
    description: string = "";
    brand: CATEGORY;
    level: CATEGORY;
    type: CATEGORY;
    category: CATEGORY;
    image: string = "";   
    alt: string = "";
    badge: CATEGORY;
    available: CATEGORY;
    price: number = 0;
    power: CATEGORY;
    capacity: CATEGORY;
    connect: CATEGORY;
    gallery: Array<string> = []; 

    constructor(
        id?: number,
        name: string = "",
        linkName: string = "",
        description: string = "",
        brand: CATEGORY = CATEGORY.CATEGORY,
        level: CATEGORY = CATEGORY.CATEGORY,
        type: CATEGORY = CATEGORY.CATEGORY,
        category: CATEGORY = CATEGORY.CATEGORY,
        image: string = "",
        alt: string = "",
        badge: CATEGORY = CATEGORY.CATEGORY,
        available: CATEGORY = CATEGORY.CATEGORY,
        price: number = 0,
        power: CATEGORY = CATEGORY.CATEGORY,
        capacity: CATEGORY = CATEGORY.CATEGORY,
        connect: CATEGORY = CATEGORY.CATEGORY,
        gallery: Array<string> = [],
    ) {
        this.id = id;
        this.name = name;
        this.linkName = linkName;
        this.description = description;
        this.brand = brand;
        this.level = level;
        this.type = type;
        this.category = category;
        this.image = image;
        this.alt = alt;
        this.badge = badge;
        this.available = available;
        this.price = price;
        this.power = power;
        this.capacity = capacity;
        this.connect = connect;
        this.gallery = gallery;
    }
}

export class ProductFilter {
    id: number = 0;
    name: string = "";
    value: string = "";
}