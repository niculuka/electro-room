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

  @Input() products: Array<Product> = [];
  protected products_copy: Array<Product> = [];

  product: Product = new Product();


  // A V A I L A B L E - Vars -----------------------------------------------
  available_chk: boolean = false;
  protected products_available: Array<Product> = [];

  stock_chk: boolean = false;
  protected stock: Array<Product> = [];
  protected stock_out: Array<Product> = [];

  deposit_chk: boolean = false;
  protected deposit: Array<Product> = [];
  protected deposit_out: Array<Product> = [];


  // P R I C E S - Vars -----------------------------------------------------
  price_chk: boolean = false;
  protected products_price: Array<Product> = [];

  under1000_chk: boolean = false;
  protected under1000: Array<Product> = [];
  protected under1000_out: Array<Product> = [];

  under2000_chk: boolean = false;
  protected under2000: Array<Product> = [];
  protected under2000_out: Array<Product> = [];

  under3000_chk: boolean = false;
  protected under3000: Array<Product> = [];
  protected under3000_out: Array<Product> = [];


  // B R A N D S - Vars -----------------------------------------------------
  brand_chk: boolean = false;
  protected products_brand: Array<Product> = [];

  asus_chk: boolean = false;
  protected asus: Array<Product> = [];
  protected asus_out: Array<Product> = [];

  hp_chk: boolean = false;
  protected hp: Array<Product> = [];
  protected hp_out: Array<Product> = [];



  products_sorting: string = "bestSold";
  favorite: boolean = false;

  filterNames: Array<ProductFilter> = [];
  productFilter: ProductFilter = new ProductFilter();
  filterName_1: string = "";
  filterName_2: string = "";

  filterGroups: Array<string> = [];

  protected filter_1: Array<Product> = [];
  protected filter_2: Array<Product> = [];

  constructor() { }

  ngOnInit(): void {
    this.products_copy = this.products;
    this.filter_1 = this.products;

    this.instant_available();
    this.instant_price();
    this.instant_brand();

    this.filterNames_check();
  }

  // ===================================================================================== C L O S E - F I L T E R S
  filters_close(filterName: any) {
    // ------------------------------------------------------------------------------------------ 
    switch (filterName.name) {
      case CATEGORY.STOCK: this.stock_chk = false;
        break;
      case CATEGORY.DEPOSIT: this.deposit_chk = false;
        break;
      case CATEGORY.UNDER1000: this.under1000_chk = false;
        break;
      case CATEGORY.UNDER2000: this.under2000_chk = false;
        break;
      case CATEGORY.UNDER3000: this.under3000_chk = false;
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
    // ------------------------------------------------------------------------------------------ 
    this.filterGroup_1();
    this.filterGroup_2();
    // ------------------------------------------------------------------------------------------ 
    this.filterGroup_do();
  }

  // ====================================================================================  C H E C K  - F I L T E R S
  filterNames_check() {
    // ------------------------------------------------------------------------------------------ 
    if (this.stock_chk || this.deposit_chk) {
      this.available_chk = true;
    } else {
      this.available_chk = false;
    }
    // ------------------------------------------------------------------------------------------ 
    if (this.under1000_chk || this.under2000_chk || this.under3000_chk) {
      this.price_chk = true;
    } else {
      this.price_chk = false;
    }
  }

  // ====================================================================================  S E L E C T - F I L T E R S
  onClick(event: any) {
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
    }
    // ------------------------------------------------------------------------------------------ 
    this.filterGroup_1();
    this.filterGroup_2();
    // ------------------------------------------------------------------------------------------   
    this.filterGroup_do();
  }

  // ================================================================================= I N S T A N T  P R O D U C T S
  instant_available() {
    this.stock_out = this.products.filter((item: any) => item.available === CATEGORY.STOCK);
    this.deposit_out = this.products.filter((item: any) => item.available === CATEGORY.DEPOSIT);
  }
  
  instant_price() {
    this.under1000_out = this.products.filter((item: any) => item.price < 1000);
    this.under2000_out = this.products.filter((item: any) => item.price >= 1000 && item.price < 2000);
    this.under3000_out = this.products.filter((item: any) => item.price >= 2000 && item.price < 3000);
  }

  instant_brand() {
    this.asus_out = this.products.filter((item: any) => item.brand === CATEGORY.ASUS);
    this.hp_out = this.products.filter((item: any) => item.brand === CATEGORY.HP);
  }

  // ================================================================================================ F I L T E R _ 1
  filterGroup_1() {
    // --------------------------------------------------------------------------------- A V A I L A B L E
    if (this.filterGroups[0] === CATEGORY.AVAILABLE || this.filterGroups[0] === undefined) {
      if (this.stock_chk) {
        this.stock = this.products_copy.filter((item: any) => item.available === CATEGORY.STOCK);
      }
      else {
        this.stock = [];
      }
      if (this.deposit_chk) {
        this.deposit = this.products_copy.filter((item: any) => item.available === CATEGORY.DEPOSIT);
      }
      else {
        this.deposit = [];
      }
      this.products_available = this.stock.concat(this.deposit);
      this.filter_1 = this.products_available;
    }
    // ------------------------------------------------------------------------------------------ P R I C E
    if (this.filterGroups[0] === CATEGORY.PRICE || this.filterGroups[0] === undefined) {
      if (this.under1000_chk) {
        this.under1000 = this.products_copy.filter((item: any) => item.price < 1000);
      }
      else {
        this.under1000 = [];
      }
      if (this.under2000_chk) {
        this.under2000 = this.products_copy.filter((item: any) => item.price >= 1000 && item.price < 2000);
      }
      else {
        this.under2000 = [];
      }
      if (this.under3000_chk) {
        this.under3000 = this.products_copy.filter((item: any) => item.price >= 2000 && item.price < 3000);
      }
      else {
        this.under3000 = [];
      }
      this.products_price = this.under1000.concat(this.under2000.concat(this.under3000));
      this.filter_1 = this.products_price;
    }
  }
  // ================================================================================================ F I L T E R _ 2
  filterGroup_2() {
    // --------------------------------------------------------------------------------- A V A I L A B L E
    if (this.filterGroups[1] === CATEGORY.AVAILABLE) {
      if (this.stock_chk) {
        this.stock = this.filter_1.filter((item: any) => item.available === CATEGORY.STOCK);
      }
      else {
        this.stock = [];
      }
      if (this.deposit_chk) {
        this.deposit = this.filter_1.filter((item: any) => item.available === CATEGORY.DEPOSIT);
      }
      else {
        this.deposit = [];
      }
      this.products_available = this.stock.concat(this.deposit);
      this.filter_2 = this.products_available;
    }
    // ------------------------------------------------------------------------------------------ P R I C E
    if (this.filterGroups[1] === CATEGORY.PRICE) {
      if (this.under1000_chk) {
        this.under1000 = this.filter_1.filter((item: any) => item.price < 1000);
      }
      else {
        this.under1000 = [];
      }
      if (this.under2000_chk) {
        this.under2000 = this.filter_1.filter((item: any) => item.price >= 1000 && item.price < 2000);
      }
      else {
        this.under2000 = [];
      }
      if (this.under3000_chk) {
        this.under3000 = this.filter_1.filter((item: any) => item.price >= 2000 && item.price < 3000);
      }
      else {
        this.under3000 = [];
      }
      this.products_price = this.under1000.concat(this.under2000.concat(this.under3000));
      this.filter_2 = this.products_price;
    }
  }

  // ========================================================================================== D O -  F I L T E R S
  filterGroup_do() {
    if (!this.filterGroups.length) {
      this.products = this.products_copy;
    }
    if (this.filterGroups.length === 1) {
      this.products = this.filter_1;
    }
    if (this.filterGroups.length === 2) {
      this.products = this.filter_2;
    }
    console.log(this.products)
  }

}
