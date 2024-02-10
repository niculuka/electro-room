export class ProductGallery {
    id?: number | undefined;
    image: string = "";
    selectedImage: boolean = false;
    product_id_fk: number | undefined;
}

export class ProductDescription {
    id?: number;
    title: string = "";
    text: string = "";
    image: string = "";
    product_id_fk: number | undefined;
}

export class ProductSpecification {
    id: number | undefined;

    // Laptops - Desktops - - - - - - - - - - - - - - - - - - - - - - -
    display_size?: string;
    display_frequency?: string;
    display_resolution?: string;
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
    brand?: string;
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
    urlKey: string = "";
    description: string = "";
    type: string = "";
    typeUrlKey: string = "";
    category: string = "";
    categoryUrlKey: string = "";
    subcategory: string = "";
    brand: string = "";
    image: string = "";
    available: string = "";
    badge: string = "";
    favorite: boolean = false;
    compare: boolean = false;
    price: number = 0;
    gallery: Array<ProductGallery> = [];
    descriptions: Array<ProductDescription> = [];
    specifications: Array<ProductSpecification> = [];

    constructor(
        id?: number,
        name: string = "",
        urlKey: string = "",
        description: string = "",
        type: string = "",
        typeUrlKey: string = "",
        category: string = "",
        categoryUrlKey: string = "",
        subcategory: string = "",
        brand: string = "",
        image: string = "",
        available: string = "",
        badge: string = "",
        price: number = 0,
        gallery: Array<ProductGallery> = [],
        descriptions: Array<ProductDescription> = [],
        specifications: Array<ProductSpecification> = [],
    ) {
        this.id = id;
        this.name = name;
        this.urlKey = urlKey;
        this.description = description;
        this.type = type;
        this.typeUrlKey = typeUrlKey;
        this.category = category;
        this.categoryUrlKey = categoryUrlKey;
        this.subcategory = subcategory;
        this.brand = brand;
        this.image = image;
        this.available = available;
        this.badge = badge;
        this.price = price;
        this.gallery = gallery;
        this.descriptions = descriptions;
        this.specifications = specifications;
    }
}

export interface IProduct {
    id: number;
    name: string;
    urlKey: string;
    description: string;
    type: string;
    category: string;
    subcategory: string;
    brand: string;
    image: string;
    available: string;
    badge: string;
    price: number;
}