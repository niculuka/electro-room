import { CATEGORY } from "../enums/electro.enum";


export class LaptopBag {
    bagId: number | undefined;
    name: string = "";
    linkName: string = "";
    description: string = "";
    brand: CATEGORY;
    category: CATEGORY;
    src1: string = "";
    src2: string = "";
    src3: string = "";
    src4: string = "";
    alt: string = "";
    available: CATEGORY;
    price: number = 0;
    createTime: Date = new Date("dd-MM-yyyy, H:mm");

    constructor(
        bagId?: number,
        name: string = "",
        linkName: string = "",
        description: string = "",
        brand: CATEGORY = CATEGORY.HAMA,        
        category: CATEGORY = CATEGORY.BAG,
        src1: string = "",
        src2: string = "",
        src3: string = "",
        src4: string = "",
        alt: string = "",
        available: CATEGORY = CATEGORY.STOCK,
        price: number = 0
    ) {
        this.bagId = bagId;
        this.name = name;
        this.linkName = linkName;
        this.description = description;
        this.brand = brand;        
        this.category = category;
        this.src1 = src1;
        this.src2 = src2;
        this.src3 = src3;
        this.src4 = src4;
        this.alt = alt;
        this.available = available;
        this.price = price;
    }
}