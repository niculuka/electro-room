import { CATEGORY } from "../enums/electro.enum";
import { Product } from "../models/product.model";

export interface CarouselTemplate {
    id: number,
    linkName: string,
    description: string,
    image: string,
    badge: CATEGORY,
    price: number,
}

export const CAROUSEL_OWL_LPT: CarouselTemplate[] = [
    {
        id: 1,
        linkName: "laptop-gaming-asus-rog-strix-g15-g513ic",
        description: "Laptop Gaming ASUS ROG Strix G15 G513IC-HN002, AMD Ryzen 7 4800H, 4.2GHz, 15.6', 8GB, SSD 512GB",
        image: "assets/departments/lpt/laptops/gaming/asus-g15_1.png",
        badge: CATEGORY.TOP_FAVORITE,
        price: 4199,
    },
    {
        id: 2,
        linkName: "laptop-gaming-lenovo-ideapad-gaming-15ach6",
        description: "Laptop gaming LENOVO IdeaPad Gaming 3 15ACH6, AMD Ryzen 5 5600H, SSD 512GB, Free DOS, negru",
        image: "assets/departments/lpt/laptops/gaming/lenovo-15ach_1.png",
        badge: CATEGORY.SUPER_PRICE,
        price: 3419,
    },
    {
        id: 3,
        linkName: "laptop-gaming-lenovo-legion-5-15imh6",
        description: "Laptop Gaming LENOVO Legion 5 15IMH6, Intel Core i5-10500H pana la 4.5GHz, 15.6' Full HD, 16GB, SSD 512GB, NVIDIA GeForce RTX 3050 4GB, Free Dos, negru",
        image: "assets/departments/lpt/laptops/gaming/legion-5-15imh6_1.png",
        badge: CATEGORY.SUPER_PRICE,
        price: 3899,
    },
    {
        id: 4,
        linkName: "laptop-gaming-lenovo-legion5-pro-16iah7h",
        description: "Laptop Gaming LENOVO Legion5 Pro 16IAH7H, Intel Core i5-12500H pana la 4.5GHz, 16' WQXGA, 16GB, SSD 512GB, NVIDIA GeForce RTX 3060 6GB, Free Dos, Glacier White",
        image: "assets/departments/lpt/laptops/gaming/legion5-16iah7h_1.png",
        badge: CATEGORY.TOP_FAVORITE,
        price: 5999,
    },
    {
        id: 5,
        linkName: "husa-laptop-hama-16507",
        description: "Husa laptop HAMA 16507, 11.6', gri-rosu",
        image: "assets/departments/lpt/laptop-accessories/bags/hama16507_1.png",
        badge: CATEGORY.TOP_FAVORITE,
        price: 39,
    },
    {
        id: 6,
        linkName: "geanta-laptop-samsonite-network-4",
        description: "Geanta laptop SAMSONITE Network 4, 14.1', negru",
        image: "assets/departments/lpt/laptop-accessories/bags/samsonite14_1.png",
        badge: CATEGORY.SUPER_PRICE,
        price: 247,
    },

]

export const CAROUSEL_OWL_PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Laptop Gaming ASUS ROG Strix G15 G513IC",
        linkName: "laptop-gaming-asus-rog-strix-g15-g513ic",
        description: "Laptop Gaming ASUS ROG Strix G15 G513IC-HN002, AMD Ryzen 7 4800H, 4.2GHz, 15.6\", 8GB, SSD 512GB",
        brand: CATEGORY.ASUS,
        type: CATEGORY.LAPTOPS,
        category: CATEGORY.LAPTOP_GAMING,
        subcategory: CATEGORY.LAPTOP_GAMING,
        image: "assets/departments/lpt/laptops/gaming/asus-g15_1.png",
        badge: CATEGORY.TOP_FAVORITE,
        available: CATEGORY.STOCK,
        favorite: false,
        price: 4199,
        display: 0,
        power: CATEGORY.CATEGORY,
        capacity: CATEGORY.CATEGORY,
        connect: CATEGORY.CATEGORY,
        gallery: []
    },
    {
        id: 2,
        name: "Laptop gaming LENOVO IdeaPad 15ACH6",
        linkName: "laptop-gaming-lenovo-ideapad-gaming-15ach6",
        description: "Laptop gaming LENOVO IdeaPad Gaming 3 15ACH6, AMD Ryzen 5 5600H, SSD 512GB, Free DOS, negru",
        brand: CATEGORY.LENOVO,
        type: CATEGORY.LAPTOPS,
        category: CATEGORY.LAPTOP_GAMING,
        subcategory: CATEGORY.LAPTOP_GAMING,
        image: "assets/departments/lpt/laptops/gaming/lenovo-15ach_1.png",
        badge: CATEGORY.SUPER_PRICE,
        available: CATEGORY.DEPOSIT,
        favorite: false,
        price: 3419,
        display: 0,
        power: CATEGORY.CATEGORY,
        capacity: CATEGORY.CATEGORY,
        connect: CATEGORY.CATEGORY,
        gallery: []
    }
]