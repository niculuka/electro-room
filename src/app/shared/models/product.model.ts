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
    
    // L a p t o p s - - - - - - - - - - - - -
    processor_brand?: string;
    processor_type?: string;
    processor_model?: string;
    processor_frequency?: number;

    display_size?: number;
    display_frequency?: number;
    display_touch?: boolean;

    memory_type?: string;
    memory_capacity?: number;
    memory_frequency?: number;

    hard_type?: string;
    hard_capacity?: number;
    hard_slot?: string;      

    connectivity_bluetooth?: string;
    connectivity_wireless?: string;

    // B a g s - - - - - - - - - - - - - - - - -
    bag_brand?: string;
    bag_type?: string;
    bag_compatibility?: number;
    
    bag_color?: string;
    bag_material?: string;
    bag_weight?: number;

    // C h a r g e r s - - - - - - - - - - - - -
    charger_brand?: string;
    charger_type?: string;
    charger_output?: number;
    charger_power?: number;
    
    charger_color?: string;
    charger_weight?: number;

    // H a r d s - - - - - - - - - - - - - - - - -
    harddisk_brand?: string;
    harddisk_type?: string;
    harddisk_capacity?: number;
    harddisk_slot?: string;
    
    harddisk_read?: number;
    harddisk_write?: number; 

    // E x t e r n a l  B a t t e r  r i e s - - -
    ext_batterry_brand?: string;
    ext_batterry_type?: string;
    ext_batterry_capacity?: number;
    ext_batterry_connection?: string;
    
    ext_batterry_color?: string;
    ext_batterry_weight?: number;

    // R a m  s - - - - - - - - - - - - - - - - - -
    ram_brand?: string;
    ram_type?: string;
    ram_capacity?: number;
    ram_frequency?: number;
    
    ram_compatibility?: string;
    ram_radiator?: boolean;

    // M o n i t o r s - - - - - - - - - - - - - -
    monitor_brand?: string;
    monitor_model?: string;
    monitor_type?: string;
    monitor_size?: number;
    monitor_frequency?: number;
    
    monitor_hdmi?: number;
    monitor_speaker?: boolean;
    
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
