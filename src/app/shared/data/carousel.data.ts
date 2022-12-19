export class Carousel {
    id!: number;
    src!: string;
    alt!: string;
    link!: string;
    isChecked!: boolean;
    slide!: string;
}

export const CAROUSEL: Carousel[] = [
    {
        id: 0,
        src: "assets/carousel/stock_busters.png",
        alt: "laptops.png",
        link: "/laptops",        
        isChecked: true,
        slide: "left: 0",
    },
    {
        id: 1,
        src: "assets/carousel/bags.png",
        alt: "bags.png",
        link: "/laptop-auxs/bags",
        isChecked: false,
        slide: "left: -100%",
    },
    {
        id: 2,
        src: "assets/carousel/ssds.png",
        alt: "ssdss.png",
        link: "/laptop-auxs/ssds",        
        isChecked: false,
        slide: "left: -200%",
    },
]
