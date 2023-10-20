import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { PRODUCTS_FILTERS, ProductFilter } from 'src/app/shared/models/product.model';
import { Product } from 'src/app/shared/models/product.model';
import { ProductFilterService } from 'src/app/shared/services/product-filter.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit, OnChanges {

  // I N P U T S ------------------------------------------------------------
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

  productsFilter: ProductFilter = new ProductFilter();
  productsFilters: Array<ProductFilter> = [];
  // productsFilters: Array<ProductFilter> = PRODUCTS_FILTERS;

  availablesProducts: Array<Product> = [];
  pricesProducts: Array<Product> = [];
  brandsProducts: Array<Product> = [];



  constructor(
    private productFilterService: ProductFilterService,
  ) {
    productFilterService.getProductsFiltersObservable().subscribe(data => {
      console.log(data);
      this.productsFilters = data;
      this.defaultFilters();
    })

  }



  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
      const getProducts = changes[change];
      this.productsFilterIN = getProducts.currentValue;
      if (this.productsFilterIN.length) {
        this.filtering();
      }
    }
  }



  onClick(event: any) {
    if (event.target.checked) {
      let prod: any = this.productsFilters.find((item: any) => item.name === event.target.name);
      if (!prod) {
        this.productsFilter = new ProductFilter();
        this.productsFilter.id = event.target.id;
        this.productsFilter.name = event.target.name;
        this.productsFilter.value = event.target.value.split(",")[0];
        this.productsFilter.min = event.target.value.split(",")[1];
        this.productsFilter.max = event.target.value.split(",")[2];

        this.productsFilters.push(this.productsFilter);
        this.productsFilters = this.productsFilters.sort((a: any, b: any) => a.id - b.id);
      }
    }
    else {
      this.productsFilters = this.productsFilters.filter((item: any) => item.id != event.target.id);
    }
    // console.log(this.productsFilters);
    this.productFilterService.setProductsFiltersLS(this.productsFilters);
  }



  clearProductsFilters() {
    this.productFilterService.clearProductsFiltersService();
  }



  defaultFilters() {
    if (this.productsFilters.length) {
      this.productsFilters.filter((item: any) => {
        switch (item.name) {
          case CATEGORY.STOCK: this.stock_chk = true;
            break;
          case CATEGORY.DEPOSIT: this.deposit_chk = true;
            break;

          case CATEGORY.UNDER1000: this.under1000_chk = true;
            break;
          case CATEGORY.UNDER2000: this.under2000_chk = true;
            break;
          case CATEGORY.UNDER3000: this.under3000_chk = true;
            break;
          case CATEGORY.UNDER4000: this.under4000_chk = true;
            break;
          case CATEGORY.OVER4000: this.over4000_chk = true;
            break;

          case CATEGORY.ACER: this.acer_chk = true;
            break;
          case CATEGORY.APPLE: this.apple_chk = true;
            break;
          case CATEGORY.ASUS: this.asus_chk = true;
            break;
        }
      });
    }
    else {
      this.stock_chk
        = this.deposit_chk
        = this.under1000_chk
        = this.under2000_chk
        = this.under3000_chk
        = this.under4000_chk
        = this.over4000_chk
        = this.acer_chk
        = this.apple_chk
        = this.asus_chk
        = false;
    }
  }





  // ================================================================================================= F I L T E R I N G
  // ===================================================================================================================
  // ===================================================================================================================
  filtering() {
    if (this.productsFilters.length) {
      for (let pf of this.productsFilters) {
        if (pf.value === CATEGORY.AVAILABLE) {
          let av = this.productsFilterIN.filter((item: any) => item.available === pf.name);
          this.availablesProducts = this.availablesProducts.concat(av);
        }
      }
      if (!this.availablesProducts.length) {
        this.availablesProducts = this.productsFilterIN;
      }
      // console.log(this.availablesProducts);
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
      this.productsFilterOUT = this.brandsProducts;
    }
    else {
      this.productsFilterOUT = this.productsFilterIN;
    }
    // console.log(this.productsFilterOUT);
  }
  // ===================================================================================================================
  // ===================================================================================================================
  // ===================================================================================================================

}
