import { CATEGORY } from "../enums/electro.enum";

export class Product {
    productId: number | undefined;
    laptopId: number | undefined;
    bagId: number | undefined;
    chargerId: number | undefined;
    ssdId: number | undefined;
    name: string = "";
    linkName: string = "";
    description: string = "";
    brand!: CATEGORY;
    category!: CATEGORY;
    image: string = "";
    alt: string = "";
    alert!: CATEGORY;
    available!: CATEGORY;
    price: number = 0; 
}


// export class Product {
//     productId?: number;
//     name: string = "";
//     linkName: string = "";
//     description: string = "";
//     brand: CATEGORY;
//     category: CATEGORY;
//     image: string[] = [];
//     alt: string = "";
//     alert: CATEGORY;
//     available: CATEGORY;
//     capacity?: CATEGORY;
//     connect?: CATEGORY;
//     power?: CATEGORY;
//     favorite!: boolean;
//     price: number = 0;
//     createTime: Date = new Date("dd-MM-yyyy, H:mm");

//     constructor(
//         productId?: number,
//         name: string = "",
//         linkName: string = "",
//         description: string = "",
//         brand: CATEGORY = CATEGORY.ACER,
//         category: CATEGORY = CATEGORY.LAPTOP_BUSINESS,
//         image: string[] = [],
//         alt: string = "",
//         alert: CATEGORY = CATEGORY.TOP_FAVORITE,
//         available: CATEGORY = CATEGORY.STOCK,
//         capacity?: CATEGORY,
//         connect?: CATEGORY,
//         power?: CATEGORY,
//         favorite: boolean = false,
//         price: number = 0
//     ) {
//         this.productId = productId;
//         this.name = name;
//         this.linkName = linkName;
//         this.description = description;
//         this.brand = brand;
//         this.category = category;
//         this.image = image;
//         this.alt = alt;
//         this.alert = alert;
//         this.available = available;
//         this.capacity = capacity;
//         this.connect = connect;
//         this.power = power;
//         this.favorite = favorite;
//         this.price = price;
//     }
// }