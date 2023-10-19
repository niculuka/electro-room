export class AvailableFilter {
    id: number = 0;
    name: string = "";
}

export class PriceFilter {
    id: number = 0;
    name: string = "";
    minPrice: number = 0;
    maxPrice: number = 0;
}

export class BrandFilter {
    id: number = 0;
    name: string = "";
}

export class ProductFilter {
    id: number = 0;
    name: string = "";
    value: string = "";
    min: number = 0;
    max: number = 0;
}

// export class ProductFilter {
//     id: number = 0;
//     name: string = "";
//     min: number = 0;
//     max: number = 0;
// }