import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { AvailableFilter, BrandFilter, PriceFilter, ProductFilter } from 'src/app/shared/models/product-filter.model';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit, OnChanges {

  // A V A I L A B L E - Vars -----------------------------------------------
  available_chk: boolean = false;
  stock_chk: boolean = false; protected stock_count: number = 0;
  deposit_chk: boolean = false; protected deposit_count: number = 0;

  // P R I C E S ------------------------------------------------
  price_chk: boolean = false;
  under1000_chk: boolean = false; protected under1000_count: number = 0;
  under2000_chk: boolean = false; protected under2000_count: number = 0;
  under3000_chk: boolean = false; protected under3000_count: number = 0;
  under4000_chk: boolean = false; protected under4000_count: number = 0;
  over4000_chk: boolean = false; protected over4000_count: number = 0;

  // B R A N D S - L a p t o p s --------------------------------------------
  brand_chk: boolean = false;
  acer_chk: boolean = false; protected acer_count: number = 0;
  adata_chk: boolean = false; protected adata_count: number = 0;
  allview_chk: boolean = false; protected allview_count: number = 0;
  apple_chk: boolean = false; protected apple_count: number = 0;
  asus_chk: boolean = false; protected asus_count: number = 0;
  dell_chk: boolean = false; protected dell_count: number = 0;
  hama_chk: boolean = false; protected hama_count: number = 0;
  hp_chk: boolean = false; protected hp_count: number = 0;
  iphone_chk: boolean = false; protected iphone_count: number = 0;
  lenovo_chk: boolean = false; protected lenovo_count: number = 0;
  kingston_chk: boolean = false; protected kingston_count: number = 0;
  promate_chk: boolean = false; protected promate_count: number = 0;
  rivacase_chk: boolean = false; protected rivacase_count: number = 0;
  samsonite_chk: boolean = false; protected samsonite_count: number = 0;
  samsung_chk: boolean = false; protected samsung_count: number = 0;
  sandisk_chk: boolean = false; protected sandisk_count: number = 0;
  seagate_chk: boolean = false; protected seagate_count: number = 0;
  tumi_chk: boolean = false; protected tumi_count: number = 0;
  wd_chk: boolean = false; protected wd_count: number = 0;
  xtorm_chk: boolean = false; protected xtorm_count: number = 0;

  // C A T E G O R Y - Vars --------------------------------------------------
  category_chk: boolean = false;
  business_chk: boolean = false; protected business_count: number = 0;
  gaming_chk: boolean = false; protected gaming_count: number = 0;
  home_chk: boolean = false; protected home_count: number = 0;
  ultra_chk: boolean = false; protected ultra_count: number = 0;
  briefcase_chk: boolean = false; protected briefcase_count: number = 0;
  sleeve_chk: boolean = false; protected sleeve_count: number = 0;
  backpack_chk: boolean = false; protected backpack_count: number = 0;
  plug_in_chk: boolean = false; protected plug_in_count: number = 0;
  car_chk: boolean = false; protected car_count: number = 0;
  hdd_chk: boolean = false; protected hdd_count: number = 0;
  ssd_chk: boolean = false; protected ssd_count: number = 0;

  // L A P T O P S - Vars ---------------------------------------------------
  // ------------------------------------------------------------------------
  @Input() productsFilterIN: Array<Product> = [];
  productsFilterIN_copy: Array<Product> = this.productsFilterIN;
  productsFilterOUT: Array<Product> = [];

  // productsFilters: Array<ProductFilter> = [
  //   { id: 1, name: CATEGORY.STOCK, value: CATEGORY.AVAILABLE, min: 0, max: 0 },
  //   { id: 2, name: CATEGORY.DEPOSIT, value: CATEGORY.AVAILABLE, min: 0, max: 0 },
  //   { id: 101, name: CATEGORY.UNDER1000, value: CATEGORY.PRICE, min: 0, max: 1000 },
  //   { id: 102, name: CATEGORY.UNDER2000, value: CATEGORY.PRICE, min: 1000, max: 2000 },
  //   { id: 103, name: CATEGORY.UNDER3000, value: CATEGORY.PRICE, min: 2000, max: 3000 },
  //   { id: 104, name: CATEGORY.UNDER4000, value: CATEGORY.PRICE, min: 3000, max: 4000 },
  //   { id: 105, name: CATEGORY.OVER4000, value: CATEGORY.PRICE, min: 4000, max: 1000000 },
  //   { id: 201, name: CATEGORY.ACER, value: CATEGORY.BRAND, min: 0, max: 0 },
  //   { id: 204, name: CATEGORY.APPLE, value: CATEGORY.BRAND, min: 0, max: 0 },
  //   { id: 205, name: CATEGORY.ASUS, value: CATEGORY.BRAND, min: 0, max: 0 },
  // ];
  productsFilter: ProductFilter = new ProductFilter();

  currentFilterName: string = "";
  currentFilterGroup: string = "";

  protected filter_0: Array<Product> = [];
  protected filter_1: Array<Product> = [];
  protected filter_2: Array<Product> = [];
  protected filter_3: Array<Product> = [];
  protected filter_4: Array<Product> = [];

  // AVAILABLE ---------------------------------------------------------
  availables: Array<AvailableFilter> = [
    // { id: 1, name: CATEGORY.STOCK },
    // { id: 2, name: CATEGORY.DEPOSIT },
  ];
  availableFilter: AvailableFilter = new AvailableFilter();
  availablesProducts: Array<Product> = [];

  // PRICE ------------------------------------------------------------
  prices: Array<PriceFilter> = [
    // { id: 101, name: CATEGORY.UNDER1000, minPrice: 0, maxPrice: 1000 },
    // { id: 102, name: CATEGORY.UNDER2000, minPrice: 1000, maxPrice: 2000 },
    // { id: 103, name: CATEGORY.UNDER3000, minPrice: 2000, maxPrice: 3000 },
    // { id: 104, name: CATEGORY.UNDER4000, minPrice: 3000, maxPrice: 4000 },
    // { id: 105, name: CATEGORY.OVER4000, minPrice: 4000, maxPrice: 1000000 },
  ];
  priceFilter: PriceFilter = new PriceFilter();
  pricesProducts: Array<Product> = [];

  // BRAND -------------------------------------------------------------
  brands: Array<BrandFilter> = [
    // { id: 201, name: CATEGORY.ACER },
    // { id: 202, name: CATEGORY.ADATA },
    // { id: 202, name: CATEGORY.ALLVIEW },
  ];
  brandFilter: BrandFilter = new BrandFilter();
  brandsProducts: Array<Product> = [];

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
      const getProducts = changes[change];
      this.productsFilterIN = getProducts.currentValue;
      if (this.productsFilterIN.length) {
        this.filtering(this.productsFilterIN);
        // this.filterAvailable(this.products);

        // this.filterPrice(this.products);
        // this.filterBrand(this.products);
        // console.log(this.products)
      }
    }
  }

  // ====================================================================================  S E L E C T - F I L T E R S
  onClick(event: any) {
    // if (event.target.checked) {
    //   let prod: any = this.productsFilters.find((item: any) => item.name === event.target.name);
    //   if (!prod) {
    //     this.productsFilter = new ProductFilter();
    //     this.productsFilter.id = event.target.id;
    //     this.productsFilter.name = event.target.name;
    //     this.productsFilter.value = event.target.value.split(",")[0];
    //     this.productsFilter.min = event.target.value.split(",")[1];
    //     this.productsFilter.max = event.target.value.split(",")[2];
    //     this.productsFilters.push(this.productsFilter);
    //     this.productsFilters = this.productsFilters.sort((a: any, b: any) => a.id - b.id);
    //   }
    // }
    // else {
    //   this.productsFilters = this.productsFilters.filter((item: any) => item.id != event.target.id);
    // }
    // console.log(this.productsFilters);

    // ------------------------------------------------------------------------------------------ 
    // this.filtering();
    // ------------------------------------------------------------------------------------------    
    // this.counting();
  }

  productsFilters: Array<ProductFilter> = [
    { id: 1, name: CATEGORY.STOCK, value: CATEGORY.AVAILABLE, min: 0, max: 0 },
    { id: 2, name: CATEGORY.DEPOSIT, value: CATEGORY.AVAILABLE, min: 0, max: 0 },

    { id: 101, name: CATEGORY.UNDER1000, value: CATEGORY.PRICE, min: 0, max: 1000 },
    { id: 102, name: CATEGORY.UNDER2000, value: CATEGORY.PRICE, min: 1000, max: 2000 },
    { id: 103, name: CATEGORY.UNDER3000, value: CATEGORY.PRICE, min: 2000, max: 3000 },
    { id: 104, name: CATEGORY.UNDER4000, value: CATEGORY.PRICE, min: 3000, max: 4000 },
    { id: 105, name: CATEGORY.OVER4000, value: CATEGORY.PRICE, min: 4000, max: 1000000 },

    { id: 201, name: CATEGORY.ACER, value: CATEGORY.BRAND, min: 0, max: 0 },
    { id: 204, name: CATEGORY.APPLE, value: CATEGORY.BRAND, min: 0, max: 0 },
    { id: 205, name: CATEGORY.ASUS, value: CATEGORY.BRAND, min: 0, max: 0 },
  ];

  // ================================================================================================= F I L T E R I N G
  // ===================================================================================================================
  // ===================================================================================================================
  filtering(productsFilterIN: Array<Product>) {
    // this.availablesProducts = this.pricesProducts = this.brandsProducts = productsFilterIN;

    if (this.productsFilters.length) {
      // --------------------------------------------------------------------------------
      for (let pf of this.productsFilters) {
        // this.availablesProducts = this.pricesProducts = this.brandsProducts = [];

        if (pf.value === CATEGORY.AVAILABLE) {
          let av = productsFilterIN.filter((item: any) => item.available === pf.name);
          this.availablesProducts = this.availablesProducts.concat(av);
        }
      }
      if (!this.availablesProducts.length) {
        this.availablesProducts = productsFilterIN;
      }
      // console.log(this.availablesProducts);

      // --------------------------------------------------------------------------------
      for (let pf of this.productsFilters) {
        if (pf.value === CATEGORY.PRICE) {
          let pr = this.availablesProducts.filter((item: any) => item.price >= pf.min && item.price < pf.max);
          this.pricesProducts = this.pricesProducts.concat(pr);
        }
      }
      if (!this.pricesProducts.length) {
        this.pricesProducts = this.availablesProducts;
      }
      // console.log(this.pricesProducts);

      // --------------------------------------------------------------------------------
      for (let pf of this.productsFilters) {
        if (pf.value === CATEGORY.BRAND) {
          let br = this.pricesProducts.filter((item: any) => item.brand === pf.name);
          this.brandsProducts = this.brandsProducts.concat(br);
        }
      }
      if (!this.brandsProducts.length) {
        this.brandsProducts = this.pricesProducts;
      }
      // console.log(this.brandsProducts);


      // --------------------------------------------------------------------------------
      this.productsFilterOUT = this.brandsProducts;
      // console.log(this.productsFilterOUT);
    }
    else {
      this.productsFilterOUT = productsFilterIN;
      // console.log(this.productsFilterOUT);
    }
    console.log(this.productsFilterOUT);
  }





  // // ========================================================================================= Close Filters  -  ONE BY ONE
  // filters_close(filterName: any) {
  //   // ------------------------------------------------------------------------------------------ 
  //   switch (filterName.name) {
  //     case CATEGORY.STOCK: { this.stock_chk = false; this.currentFilterGroup = CATEGORY.AVAILABLE } break;
  //     case CATEGORY.DEPOSIT: { this.deposit_chk = false; this.currentFilterGroup = CATEGORY.AVAILABLE } break;

  //     case CATEGORY.UNDER1000: { this.under1000_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
  //     case CATEGORY.UNDER2000: { this.under2000_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
  //     case CATEGORY.UNDER3000: { this.under3000_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
  //     case CATEGORY.UNDER4000: { this.under4000_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
  //     case CATEGORY.OVER4000: { this.over4000_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
  //     default:
  //   }
  //   // ------------------------------------------------------------------------------------------ 
  //   this.filterNames_check();
  //   // ------------------------------------------------------------------------------------------ 
  //   this.filtersNames = this.filtersNames.filter((item: any) => item != filterName);
  //   // ------------------------------------------------------------------------------------------ 
  //   // this.filtering();
  //   // ------------------------------------------------------------------------------------------  
  //   this.counting();
  // }

  // // =========================================================================================== Close Filters  -  CLOSE ALL
  // filters_close_all() {
  //   this.stock_chk = false; this.deposit_chk = false;
  //   // ------------------------------------------------------------------------------------------
  //   this.under1000_chk = false; this.under2000_chk = false; this.under3000_chk = false; this.under4000_chk = false; this.over4000_chk = false;
  //   // ------------------------------------------------------------------------------------------
  //   this.filtersNames = [];
  //   this.products = this.filter_0;
  //   // ------------------------------------------------------------------------------------------ 
  //   this.count_reset();
  // }

  // // ============================================================================================  C H E C K  - F I L T E R S
  // filterNames_check() {
  //   // ------------------------------------------------------------------------------------------ 
  //   if (this.stock_chk || this.deposit_chk) this.available_chk = true;
  //   else this.available_chk = false;
  //   // ------------------------------------------------------------------------------------------ 
  //   if (this.under1000_chk || this.under2000_chk || this.under3000_chk || this.under4000_chk || this.over4000_chk) this.price_chk = true;
  //   else this.price_chk = false;
  // }



  // // ============================================================================================ C  O  U  N  T  I  N  G
  // // ===================================================================================================================
  // // ===================================================================================================================
  // counting() {
  //   if (this.currentFilterGroup === CATEGORY.AVAILABLE) {
  //     if (this.available_chk) {
  //       this.count_price();
  //       // this.count_brand();
  //       // this.count_category();
  //     }
  //     else this.count_ordered();
  //   }

  //   if (this.currentFilterGroup === CATEGORY.PRICE) {
  //     if (this.price_chk) {
  //       this.count_available();
  //       // this.count_brand();
  //       // this.count_category();
  //     }
  //     else this.count_ordered();
  //   }
  // }

  // // =========================================================================================   C O U N T  A V A I L A B L E
  // count_available() {
  //   this.stock_count = this.products.filter((item: any) => item.available === CATEGORY.STOCK).length;
  //   this.deposit_count = this.products.filter((item: any) => item.available === CATEGORY.DEPOSIT).length;
  // }

  // count_price() {
  //   this.under1000_count = this.products.filter((item: any) => item.price < 1000).length;
  //   this.under2000_count = this.products.filter((item: any) => item.price >= 1000 && item.price < 2000).length;
  //   this.under3000_count = this.products.filter((item: any) => item.price >= 2000 && item.price < 3000).length;
  //   this.under4000_count = this.products.filter((item: any) => item.price >= 3000 && item.price < 4000).length;
  //   this.over4000_count = this.products.filter((item: any) => item.price >= 4000).length;
  // }

  // // ==================================================================================================   C O U N T  O R D E R
  // count_ordered() {
  //   this.stock_count = this.filter_0.filter((item: any) => item.available === CATEGORY.STOCK).length;
  //   this.deposit_count = this.filter_0.filter((item: any) => item.available === CATEGORY.DEPOSIT).length;

  //   this.under1000_count = this.filter_1.filter((item: any) => item.price < 1000).length;
  //   this.under2000_count = this.filter_1.filter((item: any) => item.price >= 1000 && item.price < 2000).length;
  //   this.under3000_count = this.filter_1.filter((item: any) => item.price >= 2000 && item.price < 3000).length;
  //   this.under4000_count = this.filter_1.filter((item: any) => item.price >= 3000 && item.price < 4000).length;
  //   this.over4000_count = this.filter_1.filter((item: any) => item.price >= 4000).length;
  // }

  // // ==================================================================================================   C O U N T  R E S E T
  // count_reset() {
  //   this.stock_count = this.filter_0.filter((item: any) => item.available === CATEGORY.STOCK).length;
  //   this.deposit_count = this.filter_0.filter((item: any) => item.available === CATEGORY.DEPOSIT).length;

  //   this.under1000_count = this.filter_0.filter((item: any) => item.price < 1000).length;
  //   this.under2000_count = this.filter_0.filter((item: any) => item.price >= 1000 && item.price < 2000).length;
  //   this.under3000_count = this.filter_0.filter((item: any) => item.price >= 2000 && item.price < 3000).length;
  //   this.under4000_count = this.filter_0.filter((item: any) => item.price >= 3000 && item.price < 4000).length;
  //   this.over4000_count = this.filter_0.filter((item: any) => item.price >= 4000).length;
  // }

}
