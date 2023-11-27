import { CATEGORY } from "../enums/electro.enum";

// P r o d u c t  -  G a l l e r y --------------------------------
export class ProductGallery {
    id: number | undefined;
    image: string = "";
    productId: number | undefined;
}

// P r o d u c t  -  D e s c r i p t i o n ------------------------
export class ProductDescription {
    id: number | undefined;
    title: string = "";
    text: string = "";
    image: string = "";
    productId: number | undefined;
}

// P r o d u c t  -  S p e c i f i c a t i o n ---------------------
export class Processor {
    producer?: CATEGORY;
    type?: CATEGORY;
    model?: CATEGORY;
    frequency?: CATEGORY;
    power?: CATEGORY;
}

export class Display {
    diagonal?: CATEGORY;
    frequency?: CATEGORY;
    touchScreen: boolean = false;
}

export class Memory {
    capacity?: CATEGORY;
    type?: CATEGORY;
    frequency?: CATEGORY;
}

export class HardDisk {
    type?: CATEGORY;
    capacity?: CATEGORY;
    slot?: CATEGORY;
}

export class Connectivity {
    slot?: CATEGORY;
    touchScreen: boolean = false;
}

// ----------------------------------------------------------------
export class ProductSpecification {
    id: number | undefined;    
    processor: Array<Processor> = [];
    display: Array<Display> = [];
    memory: Array<Memory> = [];
    hardDisk: Array<HardDisk> = [];
    connectivity: Array<Connectivity> = [];
    productId: number | undefined;
}

// P R O D U C T  - - - - - - - - - - - - - - - - - - - - - - - - -
export class Product {
    id: number | undefined;
    name: string = "";
    linkName: string = "";
    description: string = "";
    brand: CATEGORY;
    type: CATEGORY;
    department: CATEGORY;
    category: CATEGORY;
    subcategory: CATEGORY;
    image: string = "";
    badge: CATEGORY;
    available: CATEGORY;
    favorite: boolean = false;
    compare: boolean = false;
    price: number = 0;
    display: number = 0;
    power?: CATEGORY;
    capacity?: CATEGORY;
    connect?: CATEGORY;
    gallery: Array<ProductGallery> = [];
    descriptions: Array<ProductDescription> = [];
    specifications: Array<ProductSpecification> = [];

    constructor(
        id?: number,
        name: string = "",
        linkName: string = "",
        description: string = "",
        brand: CATEGORY = CATEGORY.CATEGORY,
        department: CATEGORY = CATEGORY.CATEGORY,
        type: CATEGORY = CATEGORY.CATEGORY,
        category: CATEGORY = CATEGORY.CATEGORY,
        subcategory: CATEGORY = CATEGORY.CATEGORY,
        image: string = "",
        badge: CATEGORY = CATEGORY.CATEGORY,
        available: CATEGORY = CATEGORY.CATEGORY,
        price: number = 0,
        display: number = 0,
        power?: CATEGORY,
        capacity?: CATEGORY,
        connect?: CATEGORY,
        gallery: Array<ProductGallery> = [],
        descriptions: Array<ProductDescription> = [],
        specifications: Array<ProductSpecification> = [],
    ) {
        this.id = id;
        this.name = name;
        this.linkName = linkName;
        this.description = description;
        this.brand = brand;
        this.type = type;
        this.department = department;
        this.category = category;
        this.subcategory = subcategory;
        this.image = image;
        this.badge = badge;
        this.available = available;
        this.price = price;
        this.display = display;
        this.power = power;
        this.capacity = capacity;
        this.connect = connect;
        this.gallery = gallery;
        this.descriptions = descriptions;
        this.specifications = specifications;
    }
}

