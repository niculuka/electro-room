import { CATEGORY } from "../enums/electro.enum";

export class ProductGallery {
    id: number | undefined;
    image: string = "";
    productId: number | undefined;
}

export class ProductDescription {
    id: number | undefined;
    title: string = "";
    text: string = "";
    image: string = "";
    productId: number | undefined;
}

export class ProductSpecification {
    id: number | undefined;     
    
    // Laptops - Desktops - Monitors - - - - - - - - - - - - -
    processor_brand?: string;
    processor_type?: string;
    processor_model?: string;
    processor_frequency?: number;

    display_size?: number;
    display_frequency?: number;
    display_touch?: string;

    memory_type?: string;
    memory_capacity?: number;
    memory_frequency?: number;

    hard_type?: string;
    hard_capacity?: number;
    hard_slot?: string;      

    connectivity_bluetooth?: string;
    connectivity_wireless?: string;

    // Bags - Chargers - Hards - ExtBaterries - Rams  - - - - - -
    brand?: string;
    type?: string;
    model?: string;
    connection?: string; 
    output?: string;
    compatibility?: string;     
    frequency?: number;
    capacity?: number;
    screen_size?: number;
    power?: number;
    speed?: number;
    read_speed?: number;
    write_speed?: number;
    
    material?: string;
    color?: string;
    weight?: number;         
    hdmi?: number;
    speaker?: string;
    radiator?: string;
    
    product_id_fk: number | undefined;
}

// P R O D U C T  = = = = = = = = = = = = = = = = = = = = = = = = = = 
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
        this.gallery = gallery;
        this.descriptions = descriptions;
        this.specifications = specifications;
    }
}
