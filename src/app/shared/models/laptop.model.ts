import { CATEGORY } from "../enums/electro.enum";


export class Laptop {
    laptopId: number | undefined;
    name: string = "";
    brand: CATEGORY;
    linkName: string = "";
    description: string = "";
    category: CATEGORY;
    src1: string = "";
    src2: string = "";
    src3: string = "";
    src4: string = "";
    alt: string = "";
    alert: CATEGORY;
    favorite!: boolean;
    available: CATEGORY;
    price: number = 0;
    createTime: Date = new Date("dd-MM-yyyy, H:mm");

    constructor(
        laptopId?: number,
        name: string = "",
        brand: CATEGORY = CATEGORY.ACER,
        linkName: string = "",
        description: string = "",
        category: CATEGORY = CATEGORY.LAPTOP_BUSINESS,
        src1: string = "",
        src2: string = "",
        src3: string = "",
        src4: string = "",
        alt: string = "",
        alert: CATEGORY = CATEGORY.TOP_FAVORITE,
        favorite: boolean = false,
        available: CATEGORY = CATEGORY.STOCK,
        price: number = 0
    ) {
        this.laptopId = laptopId;
        this.name = name;
        this.brand = brand;
        this.linkName = linkName;
        this.description = description;
        this.category = category;
        this.src1 = src1;
        this.src2 = src2;
        this.src3 = src3;
        this.src4 = src4;
        this.alt = alt;
        this.alert = alert;
        this.favorite = favorite;
        this.available = available;
        this.price = price;
    }
}