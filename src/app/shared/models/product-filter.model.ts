
export class ProductFilter {
    name: string = "";
    value: string = "";    
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
export interface ProductSorter {
    name: string;
    value: string;
}

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