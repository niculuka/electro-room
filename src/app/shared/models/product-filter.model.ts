
export class ProductFilter {
    name: string = "";
    value: string = "";    
    filters: Array<ProdFilter> = [];
}

export class ProdFilter {
    id: number = 0;
    name: string = "";
    category: string = "";
    value: string = "";
    isChecked: boolean = false;
    min: number = 0;
    max: number = 0;
    count: number = 0;
}

// ------------------------------------------
export interface ProductSorter {
    name: string;
    value: string;
}