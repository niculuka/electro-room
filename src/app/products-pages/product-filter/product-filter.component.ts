import { Component, Input, OnInit } from '@angular/core';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { ProductFilter } from 'src/app/shared/models/product-filter.model';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  // A V A I L A B L E - Vars -----------------------------------------------
  available_chk: boolean = false;

  stock_chk: boolean = false;
  protected stock: Array<Product> = [];
  protected stock_count: Array<Product> = [];

  deposit_chk: boolean = false;
  protected deposit: Array<Product> = [];
  protected deposit_count: Array<Product> = [];

  // P R I C E S - Vars -----------------------------------------------------
  price_chk: boolean = false;

  under1000_chk: boolean = false;
  protected under1000: Array<Product> = [];
  protected under1000_count: Array<Product> = [];

  under2000_chk: boolean = false;
  protected under2000: Array<Product> = [];
  protected under2000_count: Array<Product> = [];

  under3000_chk: boolean = false;
  protected under3000: Array<Product> = [];
  protected under3000_count: Array<Product> = [];

  under4000_chk: boolean = false;
  protected under4000: Array<Product> = [];
  protected under4000_count: Array<Product> = [];

  over4000_chk: boolean = false;
  protected over4000: Array<Product> = [];
  protected over4000_count: Array<Product> = [];

  // B R A N D S - Vars -----------------------------------------------------
  brand_chk: boolean = false;

  asus_chk: boolean = false;
  protected asus: Array<Product> = [];
  protected asus_count: Array<Product> = [];

  hp_chk: boolean = false;
  protected hp: Array<Product> = [];
  protected hp_count: Array<Product> = [];

  acer_chk: boolean = false;
  protected acer: Array<Product> = [];
  protected acer_count: Array<Product> = [];

  lenovo_chk: boolean = false;
  protected lenovo: Array<Product> = [];
  protected lenovo_count: Array<Product> = [];

  apple_chk: boolean = false;
  protected apple: Array<Product> = [];
  protected apple_count: Array<Product> = [];

  // C A T E G O R Y - Vars --------------------------------------------------
  category_chk: boolean = false;

  business_chk: boolean = false;
  protected business: Array<Product> = [];
  protected business_count: Array<Product> = [];

  gaming_chk: boolean = false;
  protected gaming: Array<Product> = [];
  protected gaming_count: Array<Product> = [];

  home_chk: boolean = false;
  protected home: Array<Product> = [];
  protected home_count: Array<Product> = [];

  ultra_chk: boolean = false;
  protected ultra: Array<Product> = [];
  protected ultra_count: Array<Product> = [];

  // ------------------------------------------------------------------------------------------ 
  @Input() products: Array<Product> = [];
  protected products_copy: Array<Product> = [];

  product: Product = new Product();

  filterNames: Array<ProductFilter> = [];
  productFilter: ProductFilter = new ProductFilter();

  filterGroups: Array<string> = [];
  currentFilterGroup: string = "";

  protected filter_1: Array<Product> = [];
  protected filter_2: Array<Product> = [];
  protected filter_3: Array<Product> = [];

  // ------------------------------------------------------------------------------------------ 
  constructor() { }

  ngOnInit(): void {
    this.products_copy = this.products;

    this.count_available(this.products_copy);
    this.count_price(this.products_copy);
    this.count_brand(this.products_copy);

    this.filterNames_check();
  }

  // ============================================================================================ I N S T A N T  P R O D U C T S
  count_available(array: any) {
    this.stock_count = array.filter((item: any) => item.available === CATEGORY.STOCK);
    this.deposit_count = array.filter((item: any) => item.available === CATEGORY.DEPOSIT);
  }

  count_price(array: any) {
    this.under1000_count = array.filter((item: any) => item.price < 1000);
    this.under2000_count = array.filter((item: any) => item.price >= 1000 && item.price < 2000);
    this.under3000_count = array.filter((item: any) => item.price >= 2000 && item.price < 3000);
    this.under4000_count = array.filter((item: any) => item.price >= 3000 && item.price < 4000);
    this.over4000_count = array.filter((item: any) => item.price >= 4000);
  }

  count_brand(array: any) {
    this.asus_count = array.filter((item: any) => item.brand === CATEGORY.ASUS);
    this.hp_count = array.filter((item: any) => item.brand === CATEGORY.HP);
    this.acer_count = array.filter((item: any) => item.brand === CATEGORY.ACER);
    this.lenovo_count = array.filter((item: any) => item.brand === CATEGORY.LENOVO);
    this.apple_count = array.filter((item: any) => item.brand === CATEGORY.APPLE);
  }


  // =============================================================================================== Close Filters  -  ONE BY ONE
  filters_close(filterName: any) {
    // ------------------------------------------------------------------------------------------ 
    switch (filterName.name) {
      case CATEGORY.STOCK: { this.stock_chk = false; this.currentFilterGroup = CATEGORY.AVAILABLE }
        break;
      case CATEGORY.DEPOSIT: { this.deposit_chk = false; this.currentFilterGroup = CATEGORY.AVAILABLE }
        break;
      case CATEGORY.UNDER1000: { this.under1000_chk = false; this.currentFilterGroup = CATEGORY.PRICE }
        break;
      case CATEGORY.UNDER2000: { this.under2000_chk = false; this.currentFilterGroup = CATEGORY.PRICE }
        break;
      case CATEGORY.UNDER3000: { this.under3000_chk = false; this.currentFilterGroup = CATEGORY.PRICE }
        break;
      case CATEGORY.UNDER4000: { this.under4000_chk = false; this.currentFilterGroup = CATEGORY.PRICE }
        break;
      case CATEGORY.OVER4000: { this.over4000_chk = false; this.currentFilterGroup = CATEGORY.PRICE }
        break;
      case CATEGORY.ASUS: { this.asus_chk = false; this.currentFilterGroup = CATEGORY.BRAND }
        break;
      case CATEGORY.HP: { this.hp_chk = false; this.currentFilterGroup = CATEGORY.BRAND }
        break;
      case CATEGORY.ACER: { this.acer_chk = false; this.currentFilterGroup = CATEGORY.BRAND }
        break;
      case CATEGORY.LENOVO: { this.lenovo_chk = false; this.currentFilterGroup = CATEGORY.BRAND }
        break;
      case CATEGORY.APPLE: { this.apple_chk = false; this.currentFilterGroup = CATEGORY.BRAND }
        break;
      default:
    }
    // ------------------------------------------------------------------------------------------ 
    this.filterNames_check();
    // ------------------------------------------------------------------------------------------ 
    this.filterNames = this.filterNames.filter((item: any) => item != filterName);
    if (!this.available_chk) {
      this.filterGroups = this.filterGroups.filter((item: any) => item != CATEGORY.AVAILABLE);
    }
    if (!this.price_chk) {
      this.filterGroups = this.filterGroups.filter((item: any) => item != CATEGORY.PRICE);
    }
    if (!this.brand_chk) {
      this.filterGroups = this.filterGroups.filter((item: any) => item != CATEGORY.BRAND);
    }
    // ------------------------------------------------------------------------------------------ 
    this.filterGroup_1();
    this.filterGroup_2();
    this.filterGroup_3();
    // ------------------------------------------------------------------------------------------ 
    this.filterGroup_do();
    // ------------------------------------------------------------------------------------------  
    this.count_products();
  }

  // ================================================================================================ Close Filters  -  CLOSE ALL
  filters_close_all() {
    this.stock_chk = false;
    this.deposit_chk = false;
    this.under1000_chk = false;
    this.under2000_chk = false;
    this.under3000_chk = false;
    this.under4000_chk = false;
    this.over4000_chk = false;
    this.asus_chk = false;
    this.hp_chk = false;
    this.acer_chk = false;
    this.lenovo_chk = false;
    this.apple_chk = false;
    // ------------------------------------------------------------------------------------------ 
    this.filterNames = [];
    this.filterGroups = [];
    this.products = this.products_copy;
    // ------------------------------------------------------------------------------------------ 
    this.count_products();
  }

  // ================================================================================================  C H E C K  - F I L T E R S
  filterNames_check() {
    // ------------------------------------------------------------------------------------------ 
    if (this.stock_chk || this.deposit_chk) this.available_chk = true;
    else this.available_chk = false;
    // ------------------------------------------------------------------------------------------ 
    if (this.under1000_chk || this.under2000_chk || this.under3000_chk || this.under4000_chk || this.over4000_chk) this.price_chk = true;
    else this.price_chk = false;
    // ------------------------------------------------------------------------------------------
    if (this.asus_chk || this.hp_chk || this.acer_chk || this.lenovo_chk || this.apple_chk) this.brand_chk = true;
    else this.brand_chk = false;
  }

  // ==============================================================================================  S E L E C T - F I L T E R S
  onClick(event: any) {
    this.currentFilterGroup = event.target.value;
    this.filterNames_check();
    // ------------------------------------------------------------------------------------------
    if (event.target.checked) {
      let filterName = this.filterNames.find((item: any) => item.id === event.target.id);
      if (!filterName) {
        this.productFilter = new ProductFilter();
        this.productFilter.id = event.target.id;
        this.productFilter.name = event.target.name;
        this.productFilter.value = event.target.value;
        this.filterNames.push(this.productFilter)

        this.filterNames = this.filterNames
          .filter((item) => item)
          .sort((a: any, b: any) => a.id - b.id)
      }
      let filterGroup = this.filterGroups.find((item: any) => item === event.target.value);
      if (!filterGroup) {
        this.filterGroups.push(event.target.value);
      }
    }
    else {
      this.filterNames = this.filterNames.filter((item: any) => item.id != event.target.id);
      if (!this.available_chk) {
        this.filterGroups = this.filterGroups.filter((item: any) => item != CATEGORY.AVAILABLE);
      }
      if (!this.price_chk) {
        this.filterGroups = this.filterGroups.filter((item: any) => item != CATEGORY.PRICE);
      }
      if (!this.brand_chk) {
        this.filterGroups = this.filterGroups.filter((item: any) => item != CATEGORY.BRAND);
      }
    }
    // ------------------------------------------------------------------------------------------ 
    this.filterGroup_1();
    this.filterGroup_2();
    this.filterGroup_3();
    // ------------------------------------------------------------------------------------------   
    this.filterGroup_do();
    // ------------------------------------------------------------------------------------------  
    this.count_products();
  }

  // ========================================================================================================= F I L T E R _ 1
  filterGroup_1() {
    if (this.filterGroups[0] === CATEGORY.AVAILABLE) {
      this.filter_available(this.products_copy);
      this.filter_1 = this.stock.concat(this.deposit);
    }

    if (this.filterGroups[0] === CATEGORY.PRICE) {
      this.filter_price(this.products_copy);
      this.filter_1 = this.under1000.concat(this.under2000.concat(this.under3000.concat(this.under4000.concat(this.over4000))));
    }

    if (this.filterGroups[0] === CATEGORY.BRAND) {
      this.filter_brand(this.products_copy);
      this.filter_1 = this.asus.concat(this.hp.concat(this.acer.concat(this.lenovo.concat(this.apple))));
    }
  }

  // ========================================================================================================= F I L T E R _ 2
  filterGroup_2() {
    if (this.filterGroups[1] === CATEGORY.AVAILABLE) {
      this.filter_available(this.filter_1);
      this.filter_2 = this.stock.concat(this.deposit);
    }

    if (this.filterGroups[1] === CATEGORY.PRICE) {
      this.filter_price(this.filter_1);
      this.filter_2 = this.under1000.concat(this.under2000.concat(this.under3000.concat(this.under4000.concat(this.over4000))));
    }

    if (this.filterGroups[1] === CATEGORY.BRAND) {
      this.filter_brand(this.filter_1);
      this.filter_2 = this.asus.concat(this.hp.concat(this.acer.concat(this.lenovo.concat(this.apple))));
    }
  }

  // ========================================================================================================= F I L T E R _ 2
  filterGroup_3() {
    if (this.filterGroups[2] === CATEGORY.AVAILABLE) {
      this.filter_available(this.filter_2);
      this.filter_3 = this.stock.concat(this.deposit);
    }

    if (this.filterGroups[2] === CATEGORY.PRICE) {
      this.filter_price(this.filter_2);
      this.filter_3 = this.under1000.concat(this.under2000.concat(this.under3000.concat(this.under4000.concat(this.over4000))));
    }

    if (this.filterGroups[2] === CATEGORY.BRAND) {
      this.filter_brand(this.filter_2);
      this.filter_3 = this.asus.concat(this.hp.concat(this.acer.concat(this.lenovo.concat(this.apple))));
    }
  }

  // ======================================================================================================= F  I  L  T  E  R  S
  // ------------------------------------------------------------------------------------------ A V A I L A B L E
  filter_available(array: any) {
    if (this.stock_chk) this.stock = array.filter((item: any) => item.available === CATEGORY.STOCK);
    else this.stock = [];

    if (this.deposit_chk) this.deposit = array.filter((item: any) => item.available === CATEGORY.DEPOSIT);
    else this.deposit = [];
  }
  // -------------------------------------------------------------------------------------------------- P R I C E
  filter_price(array: any) {
    if (this.under1000_chk) this.under1000 = array.filter((item: any) => item.price < 1000);
    else this.under1000 = [];

    if (this.under2000_chk) this.under2000 = array.filter((item: any) => item.price >= 1000 && item.price < 2000);
    else this.under2000 = [];

    if (this.under3000_chk) this.under3000 = array.filter((item: any) => item.price >= 2000 && item.price < 3000);
    else this.under3000 = [];

    if (this.under4000_chk) this.under4000 = array.filter((item: any) => item.price >= 3000 && item.price < 4000);
    else this.under4000 = [];

    if (this.over4000_chk) this.over4000 = array.filter((item: any) => item.price >= 4000);
    else this.over4000 = [];
  }
  // -------------------------------------------------------------------------------------------------- B R A N D
  filter_brand(array: any) {
    if (this.asus_chk) this.asus = array.filter((item: any) => item.brand === CATEGORY.ASUS);
    else this.asus = [];

    if (this.hp_chk) this.hp = array.filter((item: any) => item.brand === CATEGORY.HP);
    else this.hp = [];

    if (this.acer_chk) this.acer = array.filter((item: any) => item.brand === CATEGORY.ACER);
    else this.acer = [];

    if (this.lenovo_chk) this.lenovo = array.filter((item: any) => item.brand === CATEGORY.LENOVO);
    else this.lenovo = [];

    if (this.apple_chk) this.apple = array.filter((item: any) => item.brand === CATEGORY.APPLE);
    else this.apple = [];
  }

  // ===================================================================================================== D O -  F I L T E R S
  filterGroup_do() {
    if (this.filterGroups.length === 0) this.products = this.products_copy;
    if (this.filterGroups.length === 1) this.products = this.filter_1;
    if (this.filterGroups.length === 2) this.products = this.filter_2;
    if (this.filterGroups.length === 3) this.products = this.filter_3;
    // console.log(this.products)
  }

  // ========================================================================================================   C  O  U  N  T
  count_products() {
    if (this.filterGroups.length === 0) {
      this.count_available(this.products_copy);
      this.count_price(this.products_copy);
      this.count_brand(this.products_copy);
    }
    // ------------------------------------------------------------------------------------------------------- 1 
    if (this.filterGroups.length === 1) {
      if (this.filterGroups[0] === CATEGORY.AVAILABLE) {
        if (this.filterGroups[0] === CATEGORY.AVAILABLE && this.currentFilterGroup !== CATEGORY.AVAILABLE) {
          this.count_available(this.products_copy);
        }
        this.count_price(this.filter_1);
        this.count_brand(this.filter_1);
      }
      if (this.filterGroups[0] === CATEGORY.PRICE) {
        this.count_available(this.filter_1);
        if (this.filterGroups[0] === CATEGORY.PRICE && this.currentFilterGroup !== CATEGORY.PRICE) {
          this.count_price(this.products_copy);
        }
        this.count_brand(this.filter_1);
      }
      if (this.filterGroups[0] === CATEGORY.BRAND) {
        this.count_available(this.filter_1);
        this.count_price(this.filter_1);
        if (this.filterGroups[0] === CATEGORY.BRAND && this.currentFilterGroup !== CATEGORY.BRAND) {
          this.count_brand(this.products_copy);
        }
      }
    }
    // ------------------------------------------------------------------------------------------------------- 2
    if (this.filterGroups.length === 2) {
      if (this.filterGroups[1] === CATEGORY.AVAILABLE) {
        if (this.filterGroups[1] === CATEGORY.AVAILABLE && this.currentFilterGroup !== CATEGORY.AVAILABLE) {
          this.count_available(this.filter_1);
        }
        this.count_price(this.filter_2);
        this.count_brand(this.filter_2);
      }
      if (this.filterGroups[1] === CATEGORY.PRICE) {
        this.count_available(this.filter_2);
        if (this.filterGroups[1] === CATEGORY.PRICE && this.currentFilterGroup !== CATEGORY.PRICE) {
          this.count_price(this.filter_1);
        }
        this.count_brand(this.filter_2);
      }
      if (this.filterGroups[1] === CATEGORY.BRAND) {
        this.count_available(this.filter_2);
        this.count_price(this.filter_2);
        if (this.filterGroups[1] === CATEGORY.BRAND && this.currentFilterGroup !== CATEGORY.BRAND) {
          this.count_brand(this.filter_1);
        }
      }
    }
    // ------------------------------------------------------------------------------------------------------- 3
    if (this.filterGroups.length === 3) {
      if (this.filterGroups[2] === CATEGORY.AVAILABLE) {
        if (this.filterGroups[2] === CATEGORY.AVAILABLE && this.currentFilterGroup !== CATEGORY.AVAILABLE) {
          this.count_available(this.filter_2);
        }
        this.count_price(this.filter_3);
        this.count_brand(this.filter_3);
      }
      if (this.filterGroups[2] === CATEGORY.PRICE) {
        this.count_available(this.filter_3);
        if (this.filterGroups[2] === CATEGORY.PRICE && this.currentFilterGroup !== CATEGORY.PRICE) {
          this.count_price(this.filter_2);
        }
        this.count_brand(this.filter_3);
      }
      if (this.filterGroups[2] === CATEGORY.BRAND) {
        this.count_available(this.filter_3);
        this.count_price(this.filter_3);
        if (this.filterGroups[2] === CATEGORY.BRAND && this.currentFilterGroup !== CATEGORY.BRAND) {
          this.count_brand(this.filter_2);
        }
      }
    }
  }

}
