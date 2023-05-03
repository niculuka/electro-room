import { CATEGORY } from "../enums/electro.enum";


export class LaptopSsd {
    ssdId: number | undefined;
    name: string = "";
    linkName: string = "";
    description: string = "";
    brand: CATEGORY;
    category: CATEGORY;
    image: string = "";
    gallery: Array<string> =[];
    src2: string = "";
    src3: string = "";
    src4: string = "";
    alt: string = "";
    available: CATEGORY;
    capacity: CATEGORY;
    connect: CATEGORY;
    price: number = 0;
    createTime: Date = new Date("dd-MM-yyyy, H:mm");

    constructor(
        ssdId?: number,
        name: string = "",
        linkName: string = "",
        description: string = "",
        brand: CATEGORY = CATEGORY.ADATA,
        category: CATEGORY = CATEGORY.HARD_SSD,
        image: string = "",
        gallery: Array<string> =[],
        src2: string = "",
        src3: string = "",
        src4: string = "",
        alt: string = "",
        available: CATEGORY = CATEGORY.STOCK,
        capacity: CATEGORY = CATEGORY.GB120,
        connect: CATEGORY = CATEGORY.SATA3,
        price: number = 0
    ) {
        this.ssdId = ssdId;
        this.name = name;
        this.linkName = linkName;
        this.description = description;
        this.brand = brand; 
        this.category = category;        
        this.image = image;
        this.gallery = gallery;
        this.src2 = src2;
        this.src3 = src3;
        this.src4 = src4;
        this.alt = alt;
        this.available = available;
        this.capacity = capacity;
        this.connect = connect;
        this.price = price;
    }
}