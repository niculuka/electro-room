export interface CarouselMain {
    id: number;
    src: string;
    alt: string;
    link: string;
    isChecked: boolean;
    slide: string;
}

export const CAROUSEL_MAIN: CarouselMain[] = [
    {
        id: 0,
        src: "assets/images/carousel/stock_busters.png",
        alt: "laptops.png",
        link: "/laptops",
        isChecked: true,
        slide: "left: 0",
    },
    {
        id: 1,
        src: "assets/images/carousel/bags.png",
        alt: "bags.png",
        link: "/laptop-auxs/bags",
        isChecked: false,
        slide: "left: -100%",
    },
    {
        id: 2,
        src: "assets/images/carousel/hards.png",
        alt: "hards.png",
        link: "/laptop-auxs/hards",
        isChecked: false,
        slide: "left: -200%",
    },
]