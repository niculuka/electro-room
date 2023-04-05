import { CATEGORY } from "../enums/electro.enum";


export class Laptop {
    laptopId: number | undefined;
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
    alert: CATEGORY;
    available: CATEGORY;
    favorite!: boolean;
    price: number = 0;
    createTime: Date = new Date("dd-MM-yyyy, H:mm");

    constructor(
        laptopId?: number,
        name: string = "",
        linkName: string = "",
        description: string = "",
        brand: CATEGORY = CATEGORY.ACER,
        category: CATEGORY = CATEGORY.LAPTOP_BUSINESS,
        image: string = "",
        src2: string = "",
        src3: string = "",
        src4: string = "",
        alt: string = "",
        alert: CATEGORY = CATEGORY.TOP_FAVORITE,
        available: CATEGORY = CATEGORY.STOCK,
        favorite: boolean = false,
        price: number = 0
    ) {
        this.laptopId = laptopId;
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
        this.alert = alert;
        this.available = available;
        this.favorite = favorite;
        this.price = price;
    }
}