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

