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
    src1: string = "";
    alt: string = "";
    alert!: CATEGORY;
    available!: CATEGORY;
    price: number = 0; 
}
