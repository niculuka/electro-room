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
export class ProductSpecification {
    id: number | undefined;

    processor_producer?: String;
    processor_type?: String;
    processor_model?: String;
    processor_frequency?: String;
    processor_power?: String;

    display_diagonal?: String;
    display_frequency?: String;
    display_touchable: boolean = false;

    memory_capacity?: String;
    memory_type?: String;
    memory_frequency?: String;

    hard_type?: String;
    hard_capacity?: String;
    hard_slot?: String;

    connectivity_slot?: String;
    connectivity_wireless?: String;
    
    productId: number | undefined;
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

// export class Product {
//     id: number | undefined;
//     name: string = "";
//     linkName: string = "";
//     description: string = "";
//     brand: CATEGORY;
//     type: CATEGORY;
//     department: CATEGORY;
//     category: CATEGORY;
//     subcategory: CATEGORY;
//     image: string = "";
//     badge: CATEGORY;
//     available: CATEGORY;
//     favorite: boolean = false;
//     compare: boolean = false;
//     price: number = 0;
//     gallery: Array<ProductGallery> = [];
//     descriptions: Array<ProductDescription> = [];
//     processor: ProductProcessor = new ProductProcessor();
//     display: ProductDisplay = new ProductDisplay();
//     memory: ProductMemory = new ProductMemory();
//     hardDisk: ProductHardDisk = new ProductHardDisk();
//     connectivity: ProductConnectivity = new ProductConnectivity();

//     constructor(
//         id?: number,
//         name: string = "",
//         linkName: string = "",
//         description: string = "",
//         brand: CATEGORY = CATEGORY.CATEGORY,
//         department: CATEGORY = CATEGORY.CATEGORY,
//         type: CATEGORY = CATEGORY.CATEGORY,
//         category: CATEGORY = CATEGORY.CATEGORY,
//         subcategory: CATEGORY = CATEGORY.CATEGORY,
//         image: string = "",
//         badge: CATEGORY = CATEGORY.CATEGORY,
//         available: CATEGORY = CATEGORY.CATEGORY,
//         price: number = 0,
//         gallery: Array<ProductGallery> = [],
//         descriptions: Array<ProductDescription> = [],
//         processor: ProductProcessor = new ProductProcessor(),
//         display: ProductDisplay = new ProductDisplay(),
//         memory: ProductMemory = new ProductMemory(),
//         hardDisk: ProductHardDisk = new ProductHardDisk(),
//         connectivity: ProductConnectivity = new ProductConnectivity(),
//     ) {
//         this.id = id;
//         this.name = name;
//         this.linkName = linkName;
//         this.description = description;
//         this.brand = brand;
//         this.type = type;
//         this.department = department;
//         this.category = category;
//         this.subcategory = subcategory;
//         this.image = image;
//         this.badge = badge;
//         this.available = available;
//         this.price = price;
//         this.gallery = gallery;
//         this.descriptions = descriptions;
//         this.processor = processor;
//         this.display = display;
//         this.memory = memory;
//         this.hardDisk = hardDisk;
//         this.connectivity = connectivity;
//     }
// }

