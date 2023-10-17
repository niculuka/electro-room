import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { PriceFilter, Product, ProductFilter } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  // A V A I L A B L E - Vars -----------------------------------------------
  available_chk: boolean = false;

  stock_chk: boolean = false;
  protected stock_count: number = 0;

  deposit_chk: boolean = false;
  protected deposit_count: number = 0;


  // P R I C E S ------------------------------------------------
  price_chk: boolean = false;

  under1000_chk: boolean = false;
  protected under1000_count: number = 0;

  under2000_chk: boolean = false;
  protected under2000_count: number = 0;

  under3000_chk: boolean = false;
  protected under3000_count: number = 0;

  under4000_chk: boolean = false;
  protected under4000_count: number = 0;

  over4000_chk: boolean = false;
  protected over4000_count: number = 0;


  // B R A N D S - L a p t o p s --------------------------------------------
  brand_chk: boolean = false;

  acer_chk: boolean = false;
  protected acer_count: number = 0;

  adata_chk: boolean = false;
  protected adata_count: number = 0;

  allview_chk: boolean = false;
  protected allview_count: number = 0;

  apple_chk: boolean = false;
  protected apple_count: number = 0;

  asus_chk: boolean = false;
  protected asus_count: number = 0;

  dell_chk: boolean = false;
  protected dell_count: number = 0;

  hama_chk: boolean = false;
  protected hama_count: number = 0;

  hp_chk: boolean = false;
  protected hp_count: number = 0;

  iphone_chk: boolean = false;
  protected iphone_count: number = 0;

  lenovo_chk: boolean = false;
  protected lenovo_count: number = 0;

  kingston_chk: boolean = false;
  protected kingston_count: number = 0;

  promate_chk: boolean = false;
  protected promate_count: number = 0;

  rivacase_chk: boolean = false;
  protected rivacase_count: number = 0;

  samsonite_chk: boolean = false;
  protected samsonite_count: number = 0;

  samsung_chk: boolean = false;
  protected samsung_count: number = 0;

  sandisk_chk: boolean = false;
  protected sandisk_count: number = 0;

  seagate_chk: boolean = false;
  protected seagate_count: number = 0;

  tumi_chk: boolean = false;
  protected tumi_count: number = 0;

  wd_chk: boolean = false;
  protected wd_count: number = 0;

  xtorm_chk: boolean = false;
  protected xtorm_count: number = 0;


  // C A T E G O R Y - Vars --------------------------------------------------
  category_chk: boolean = false;

  business_chk: boolean = false;
  protected business_count: number = 0;

  gaming_chk: boolean = false;
  protected gaming_count: number = 0;

  home_chk: boolean = false;
  protected home_count: number = 0;

  ultra_chk: boolean = false;
  protected ultra_count: number = 0;

  briefcase_chk: boolean = false;
  protected briefcase_count: number = 0;

  sleeve_chk: boolean = false;
  protected sleeve_count: number = 0;

  backpack_chk: boolean = false;
  protected backpack_count: number = 0;

  plug_in_chk: boolean = false;
  protected plug_in_count: number = 0;

  car_chk: boolean = false;
  protected car_count: number = 0;

  hdd_chk: boolean = false;
  protected hdd_count: number = 0;

  ssd_chk: boolean = false;
  protected ssd_count: number = 0;



  // L A P T O P S - Vars ---------------------------------------------------
  // ------------------------------------------------------------------------
  products: Array<Product> = [];

  filtersNames: Array<ProductFilter> = [];

  currentFilterName: string = "";
  productFilter: ProductFilter = new ProductFilter();

  currentFilterGroup: string = "";

  protected filter_0: Array<Product> = [];
  protected filter_1: Array<Product> = [];
  protected filter_2: Array<Product> = [];
  protected filter_3: Array<Product> = [];
  protected filter_4: Array<Product> = [];

  availables: Array<string> = [];
  prices: Array<PriceFilter> = [];
  priceFilter: PriceFilter = new PriceFilter()

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {

  }

  // ====================================================================================  S E L E C T - F I L T E R S
  onClick(event: any) {
    if (event.target.checked) {
      if (event.target.name === CATEGORY.STOCK
        || event.target.name === CATEGORY.DEPOSIT) {
        let av: any = this.availables.find((item: any) => item === event.target.name);
        if (!av) {
          this.availables.push(event.target.name)
        }
        console.log(this.availables)
      }

      if (event.target.name === CATEGORY.UNDER1000
        || event.target.name === CATEGORY.UNDER2000
        || event.target.name === CATEGORY.UNDER3000
        || event.target.name === CATEGORY.UNDER4000
        || event.target.name === CATEGORY.OVER4000) {
        let pr: any = this.prices.find((item: any) => item.name === event.target.name);
        if (!pr) {
          this.priceFilter = new PriceFilter();
          this.priceFilter.name = event.target.name;
          this.priceFilter.min = event.target.value.split(",")[0];
          this.priceFilter.max = event.target.value.split(",")[1];
          this.prices.push(this.priceFilter);
        }
        console.log(this.prices)
      }


      // let fn = this.filtersNames.find((item: any) => item.id === event.target.id);
      // if (!fn) {
      //   this.productFilter = new ProductFilter();
      //   this.productFilter.id = event.target.id;
      //   this.productFilter.name = event.target.name;
      //   this.productFilter.value = event.target.value;
      //   this.filtersNames.push(this.productFilter)

      //   this.filtersNames = this.filtersNames
      //     .filter((item) => item)
      //     .sort((a: any, b: any) => a.id - b.id)
      // }
    }
    else {
      // this.filtersNames = this.filtersNames.filter((item: any) => item.id != event.target.id);
    }
    // ------------------------------------------------------------------------------------------ 
    // this.filtering();
    // ------------------------------------------------------------------------------------------    
    this.counting();
  }








  // ========================================================================================= Close Filters  -  ONE BY ONE
  filters_close(filterName: any) {
    // ------------------------------------------------------------------------------------------ 
    switch (filterName.name) {
      case CATEGORY.STOCK: { this.stock_chk = false; this.currentFilterGroup = CATEGORY.AVAILABLE } break;
      case CATEGORY.DEPOSIT: { this.deposit_chk = false; this.currentFilterGroup = CATEGORY.AVAILABLE } break;

      case CATEGORY.UNDER1000: { this.under1000_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
      case CATEGORY.UNDER2000: { this.under2000_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
      case CATEGORY.UNDER3000: { this.under3000_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
      case CATEGORY.UNDER4000: { this.under4000_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
      case CATEGORY.OVER4000: { this.over4000_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
      default:
    }
    // ------------------------------------------------------------------------------------------ 
    this.filterNames_check();
    // ------------------------------------------------------------------------------------------ 
    this.filtersNames = this.filtersNames.filter((item: any) => item != filterName);
    // ------------------------------------------------------------------------------------------ 
    // this.filtering();
    // ------------------------------------------------------------------------------------------  
    this.counting();
  }

  // =========================================================================================== Close Filters  -  CLOSE ALL
  filters_close_all() {
    this.stock_chk = false; this.deposit_chk = false;
    // ------------------------------------------------------------------------------------------
    this.under1000_chk = false; this.under2000_chk = false; this.under3000_chk = false; this.under4000_chk = false; this.over4000_chk = false;
    // ------------------------------------------------------------------------------------------
    this.filtersNames = [];
    this.products = this.filter_0;
    // ------------------------------------------------------------------------------------------ 
    this.count_reset();
  }

  // ============================================================================================  C H E C K  - F I L T E R S
  filterNames_check() {
    // ------------------------------------------------------------------------------------------ 
    if (this.stock_chk || this.deposit_chk) this.available_chk = true;
    else this.available_chk = false;
    // ------------------------------------------------------------------------------------------ 
    if (this.under1000_chk || this.under2000_chk || this.under3000_chk || this.under4000_chk || this.over4000_chk) this.price_chk = true;
    else this.price_chk = false;
  }



  // ============================================================================================ C  O  U  N  T  I  N  G
  // ===================================================================================================================
  // ===================================================================================================================
  counting() {
    if (this.currentFilterGroup === CATEGORY.AVAILABLE) {
      if (this.available_chk) {
        this.count_price();
        // this.count_brand();
        // this.count_category();
      }
      else this.count_ordered();
    }

    if (this.currentFilterGroup === CATEGORY.PRICE) {
      if (this.price_chk) {
        this.count_available();
        // this.count_brand();
        // this.count_category();
      }
      else this.count_ordered();
    }
  }

  // =========================================================================================   C O U N T  A V A I L A B L E
  count_available() {
    this.stock_count = this.products.filter((item: any) => item.available === CATEGORY.STOCK).length;
    this.deposit_count = this.products.filter((item: any) => item.available === CATEGORY.DEPOSIT).length;
  }

  count_price() {
    this.under1000_count = this.products.filter((item: any) => item.price < 1000).length;
    this.under2000_count = this.products.filter((item: any) => item.price >= 1000 && item.price < 2000).length;
    this.under3000_count = this.products.filter((item: any) => item.price >= 2000 && item.price < 3000).length;
    this.under4000_count = this.products.filter((item: any) => item.price >= 3000 && item.price < 4000).length;
    this.over4000_count = this.products.filter((item: any) => item.price >= 4000).length;
  }

  // ==================================================================================================   C O U N T  O R D E R
  count_ordered() {
    this.stock_count = this.filter_0.filter((item: any) => item.available === CATEGORY.STOCK).length;
    this.deposit_count = this.filter_0.filter((item: any) => item.available === CATEGORY.DEPOSIT).length;

    this.under1000_count = this.filter_1.filter((item: any) => item.price < 1000).length;
    this.under2000_count = this.filter_1.filter((item: any) => item.price >= 1000 && item.price < 2000).length;
    this.under3000_count = this.filter_1.filter((item: any) => item.price >= 2000 && item.price < 3000).length;
    this.under4000_count = this.filter_1.filter((item: any) => item.price >= 3000 && item.price < 4000).length;
    this.over4000_count = this.filter_1.filter((item: any) => item.price >= 4000).length;
  }

  // ==================================================================================================   C O U N T  R E S E T
  count_reset() {
    this.stock_count = this.filter_0.filter((item: any) => item.available === CATEGORY.STOCK).length;
    this.deposit_count = this.filter_0.filter((item: any) => item.available === CATEGORY.DEPOSIT).length;

    this.under1000_count = this.filter_0.filter((item: any) => item.price < 1000).length;
    this.under2000_count = this.filter_0.filter((item: any) => item.price >= 1000 && item.price < 2000).length;
    this.under3000_count = this.filter_0.filter((item: any) => item.price >= 2000 && item.price < 3000).length;
    this.under4000_count = this.filter_0.filter((item: any) => item.price >= 3000 && item.price < 4000).length;
    this.over4000_count = this.filter_0.filter((item: any) => item.price >= 4000).length;
  }

}
