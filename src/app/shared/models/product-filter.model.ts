
export class ProductFilter {
    value: string = "";
    name: string = "";
    filters: Array<ProdFilter> = [];
}

export class ProdFilter {
    id: number = 0;
    name: string = "";
    value: string = "";
    isChecked: boolean = false;
    min: number = 0;
    max: number = 0;
    labelName: string = "";
    count: number = 0;
}

// ------------------------------------------
export class ProductCounter {
    stock_count: any;
    deposit_count: any;
    under1000_count: any;
    under2000_count: any;
    under3000_count: any;
    under4000_count: any;
    over4000_count: any;
    acer_count: any;
    apple_count: any;
    asus_count: any;
}

export interface ProductSorter {
    name: string;
    value: string;
}

export const SORTERS_OPTIONS: Array<ProductSorter> = [
    { value: "BEST_SOLD", name: "Cele mai vandute" },
    { value: "NAME", name: "Nume" },
    { value: "LOW_TO_HIGH", name: "Pret crescator" },
    { value: "HIGH_TO_LOW", name: "Pret descrescator" },

]