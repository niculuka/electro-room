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

export class SpecificationTitle {
    display?: string;
    motherboard?: string;
    processor?: string;    
    memory?: string;
    hard?: string
    connectivity?: string;

    general?: string;
    others?: string;
}

export class ProductSpecification {
    id: number | undefined;

    // Laptops - Desktops - - - - - - - - - - - - - - - - - - - - - - -
    display_size?: string;
    display_frequency?: string;
    display_touch?: string;

    motherboard_brand?: string;
    motherboard_chipset?: string;
    motherboard_slot?: string;
    motherboard_audio?: string;

    processor_brand?: string;
    processor_type?: string;
    processor_model?: string;
    processor_frequency?: string;    

    memory_type?: string;
    memory_capacity?: string;
    memory_frequency?: string;

    hard_type_1?: string;
    hard_capacity_1?: string;
    hard_slot_1?: string;

    hard_type_2?: string;
    hard_capacity_2?: string;
    hard_slot_2?: string;

    connectivity_bluetooth?: string;
    connectivity_wireless?: string;

    // Bags - Chargers - Hards - ExtBaterries - Rams - Monitors - - - -
    type?: string;
    model?: string;
    capacity?: string;
    connection?: string;
    output?: string;
    compatibility?: string;
    screen_size?: string;
    frequency?: string;
    power?: string;

    material?: string;
    color?: string;
    weight?: string;
    speed?: string;
    read_speed?: string;
    write_speed?: string;
    hdmi?: string;
    speaker?: string;
    radiator?: string;
    voltage?: string;

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
