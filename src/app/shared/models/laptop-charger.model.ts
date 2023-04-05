import { CATEGORY } from "../enums/electro.enum";


export class LaptopCharger {
    chargerId: number | undefined;
    name: string = "";
    linkName: string = "";
    description: string = "";
    brand: CATEGORY;    
    category: CATEGORY;
    image: string = "";
    src2: string = "";
    src3: string = "";
    src4: string = "";
    alt: string = "";
    available: CATEGORY;
    power: CATEGORY;
    price: number = 0;
    createTime: Date = new Date("dd-MM-yyyy, H:mm");

    constructor(
        chargerId?: number,
        name: string = "",
        linkName: string = "",
        description: string = "",
        brand: CATEGORY = CATEGORY.HAMA,        
        category: CATEGORY = CATEGORY.CHARGER_PLUG_IN,
        image: string = "",
        src2: string = "",
        src3: string = "",
        src4: string = "",
        alt: string = "",
        available: CATEGORY = CATEGORY.STOCK,
        power: CATEGORY = CATEGORY.W45,
        price: number = 0
    ) {
        this.chargerId = chargerId;
        this.name = name;
        this.linkName = linkName;
        this.description = description;
        this.brand = brand;        
        this.category = category;
        this.image = image;
        this.src2 = src2;
        this.src3 = src3;
        this.src4 = src4;
        this.alt = alt;
        this.available = available;
        this.power = power;
        this.price = price;
    }
}