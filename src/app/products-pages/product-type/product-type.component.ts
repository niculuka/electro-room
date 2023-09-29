import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { ProductFilter } from 'src/app/shared/models/product.model';
import { Product } from 'src/app/shared/models/product.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {

  // A V A I L A B L E - Vars -----------------------------------------------
  available_chk: boolean = false;

  stock_chk: boolean = false;
  protected stock: Array<Product> = [];
  protected stock_count: number = 0;

  deposit_chk: boolean = false;
  protected deposit: Array<Product> = [];
  protected deposit_count: number = 0;

  // P R I C E S  -  H I G H ------------------------------------------------
  price_chk: boolean = false;

  under1000_chk: boolean = false;
  protected under1000: Array<Product> = [];
  protected under1000_count: number = 0;

  under2000_chk: boolean = false;
  protected under2000: Array<Product> = [];
  protected under2000_count: number = 0;

  under3000_chk: boolean = false;
  protected under3000: Array<Product> = [];
  protected under3000_count: number = 0;

  under4000_chk: boolean = false;
  protected under4000: Array<Product> = [];
  protected under4000_count: number = 0;

  over4000_chk: boolean = false;
  protected over4000: Array<Product> = [];
  protected over4000_count: number = 0;


  // P R I C E S  -  L O W ------------------------------------------------
  price_low_chk: boolean = false;

  under100_chk: boolean = false;
  protected under100: Array<Product> = [];
  protected under100_count: number = 0;

  under200_chk: boolean = false;
  protected under200: Array<Product> = [];
  protected under200_count: number = 0;

  under300_chk: boolean = false;
  protected under300: Array<Product> = [];
  protected under300_count: number = 0;

  over300_chk: boolean = false;
  protected over300: Array<Product> = [];
  protected over300_count: number = 0;

  // B R A N D S - L a p t o p s --------------------------------------------
  brand_chk: boolean = false;

  acer_chk: boolean = false;
  protected acer: Array<Product> = [];
  protected acer_count: number = 0;

  adata_chk: boolean = false;
  protected adata: Array<Product> = [];
  protected adata_count: number = 0;

  allview_chk: boolean = false;
  protected allview: Array<Product> = [];
  protected allview_count: number = 0;

  apple_chk: boolean = false;
  protected apple: Array<Product> = [];
  protected apple_count: number = 0;

  asus_chk: boolean = false;
  protected asus: Array<Product> = [];
  protected asus_count: number = 0;

  dell_chk: boolean = false;
  protected dell: Array<Product> = [];
  protected dell_count: number = 0;

  hama_chk: boolean = false;
  protected hama: Array<Product> = [];
  protected hama_count: number = 0;

  hp_chk: boolean = false;
  protected hp: Array<Product> = [];
  protected hp_count: number = 0;

  iphone_chk: boolean = false;
  protected iphone: Array<Product> = [];
  protected iphone_count: number = 0;

  lenovo_chk: boolean = false;
  protected lenovo: Array<Product> = [];
  protected lenovo_count: number = 0;

  kingston_chk: boolean = false;
  protected kingston: Array<Product> = [];
  protected kingston_count: number = 0;

  promate_chk: boolean = false;
  protected promate: Array<Product> = [];
  protected promate_count: number = 0;

  rivacase_chk: boolean = false;
  protected rivacase: Array<Product> = [];
  protected rivacase_count: number = 0;

  samsonite_chk: boolean = false;
  protected samsonite: Array<Product> = [];
  protected samsonite_count: number = 0;

  samsung_chk: boolean = false;
  protected samsung: Array<Product> = [];
  protected samsung_count: number = 0;

  sandisk_chk: boolean = false;
  protected sandisk: Array<Product> = [];
  protected sandisk_count: number = 0;

  seagate_chk: boolean = false;
  protected seagate: Array<Product> = [];
  protected seagate_count: number = 0;

  tumi_chk: boolean = false;
  protected tumi: Array<Product> = [];
  protected tumi_count: number = 0;

  wd_chk: boolean = false;
  protected wd: Array<Product> = [];
  protected wd_count: number = 0;

  xtorm_chk: boolean = false;
  protected xtorm: Array<Product> = [];
  protected xtorm_count: number = 0;


  // C A T E G O R Y - Vars --------------------------------------------------
  category_chk: boolean = false;

  business_chk: boolean = false;
  protected business: Array<Product> = [];
  protected business_count: number = 0;

  gaming_chk: boolean = false;
  protected gaming: Array<Product> = [];
  protected gaming_count: number = 0;

  home_chk: boolean = false;
  protected home: Array<Product> = [];
  protected home_count: number = 0;

  ultra_chk: boolean = false;
  protected ultra: Array<Product> = [];
  protected ultra_count: number = 0;

  briefcase_chk: boolean = false;
  protected briefcase: Array<Product> = [];
  protected briefcase_count: number = 0;

  sleeve_chk: boolean = false;
  protected sleeve: Array<Product> = [];
  protected sleeve_count: number = 0;

  backpack_chk: boolean = false;
  protected backpack: Array<Product> = [];
  protected backpack_count: number = 0;

  plug_in_chk: boolean = false;
  protected plug_in: Array<Product> = [];
  protected plug_in_count: number = 0;

  car_chk: boolean = false;
  protected car: Array<Product> = [];
  protected car_count: number = 0;

  hdd_chk: boolean = false;
  protected hdd: Array<Product> = [];
  protected hdd_count: number = 0;

  ssd_chk: boolean = false;
  protected ssd: Array<Product> = [];
  protected ssd_count: number = 0;


  // L A P T O P S - Vars ---------------------------------------------------
  // ------------------------------------------------------------------------
  protected products: Array<Product> = [];
  product: Product = new Product();

  filterNames: Array<ProductFilter> = [];
  currentFilterName: string = "";
  productFilter: ProductFilter = new ProductFilter();

  currentFilterGroup: string = "";

  protected filter_0: Array<Product> = [];
  protected filter_1: Array<Product> = [];
  protected filter_2: Array<Product> = [];
  protected filter_3: Array<Product> = [];
  protected filter_4: Array<Product> = [];

  products_sorting: string = "bestSold";

  // ------------------------------------------------------------------------
  departments: Array<Department> = DEPARTMENTS;
  cards: Array<any> = [];

  currentLevel: string = "";
  currentType: string = "";
  currentBreadcrumb: Breadcrumb = new Breadcrumb();

  notFoundProduct: boolean = true;

  // ------------------------------------------------------------------------
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private breadcrumbService: BreadcrumbService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.favoriteService.getFavoritesObservable().subscribe(data => {
      this.activatedRoute.paramMap.subscribe((params) => {
        this.currentLevel = params.get('level') || "";
        this.currentType = params.get('type') || "";
        this.createBreadcrumb();
        if (
          this.currentType === CATEGORY.LAPTOP.replace(/_/g, "-").toLowerCase()
        ) {
          this.productService.getProductsByLevelService(this.currentLevel).subscribe(data => {
            this.filters(data);
          });
        } else {
          this.productService.getProductsByTypeService(this.currentType).subscribe(data => {
            this.filters(data);
          });
        }
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      });
    });

  }

  filters(data: any) {
    if (data.length > 0) {
      let level = data[0].level.replace(/_/g, "-").toLowerCase();
      if (level === this.currentLevel) {
        this.notFoundProduct = true;
        this.getFavoritesProducts(data);
        this.products = data;
        this.filter_0 = data;

        // ------------------------------------------------------------------------------------------
        this.count_reset();
        // ------------------------------------------------------------------------------------------ 
        this.filterNames_check();
      } else {
        this.notFoundProduct = false;
      }
    } else {
      this.notFoundProduct = false;
    }
  }

  getFavoritesProducts(data: any) {
    this.favoriteService.getFavoritesObservable().subscribe(wish => {
      for (let item of wish.items) {
        for (let product of data) {
          if (product.name === item.productName) {
            product.favorite = true;
          }
        }
      }
    });
  }

  createBreadcrumb() {
    this.currentBreadcrumb = {
      customLevel: this.currentLevel,
      customType: this.currentType,
      customLinkName: "",
    };
    this.breadcrumbService.handleBreadcrumbService(this.currentBreadcrumb);
  }

  createProductItem(item: Product) {
    this.product.id = item.id;
    this.product.name = item.name;
    this.product.linkName = item.linkName;
    this.product.description = item.description;
    this.product.brand = item.brand;
    this.product.category = item.category;
    this.product.image = item.image;
    this.product.price = item.price;
    this.product.favorite = item.favorite;
  }

  addToCart(item: Product) {
    this.createProductItem(item);
    this.cartService.addToCartService(this.product);
    this.product = new Product();
  }

  handleFavorite(item: Product) {
    item.favorite = !item.favorite;
    // console.log(item);
    this.createProductItem(item);

    if (item.favorite) {
      this.favoriteService.addToFavoritesService(this.product);
    }
    else {
      this.favoriteService.removeFromFavoritesService(this.product.name)
    }
    this.product = new Product();
  }

  // =================================================================================================== S O R T I N G 
  // =================================================================================================================
  // =================================================================================================================
  sorting() {
    if (this.products_sorting === "name") this.name_alphabetic();
    if (this.products_sorting === "lowToHigh") this.price_ascending();
    if (this.products_sorting === "highToLow") this.price_descending();
    if (this.products_sorting === "bestSold") this.sold();
  }

  // ------------------------------------------------------------- S o r t i n g
  name_alphabetic() {
    this.products = this.products.sort((a, b) => {
      const nameA = a.brand.toUpperCase();
      const nameB = b.brand.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  price_ascending() {
    this.products = this.products.sort((a, b) => a.price - b.price);
  }

  price_descending() {
    this.products = this.products.sort((a, b) => b.price - a.price);
  }

  sold() {
    this.products = this.products.sort((a: any, b: any) => a.id - b.id);
  }

  // ===============================================================================================  F  I  L  T  E  R  S
  // ====================================================================================================================
  // ====================================================================================================================

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

      case CATEGORY.UNDER100: { this.under100_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
      case CATEGORY.UNDER200: { this.under200_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
      case CATEGORY.UNDER300: { this.under300_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;
      case CATEGORY.OVER300: { this.over300_chk = false; this.currentFilterGroup = CATEGORY.PRICE } break;

      case CATEGORY.ACER: { this.acer_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.ADATA: { this.adata_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.ALLVIEW: { this.allview_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.APPLE: { this.apple_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.ASUS: { this.asus_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.DELL: { this.dell_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.HAMA: { this.hama_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.HP: { this.hp_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.IPHONE: { this.iphone_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.LENOVO: { this.lenovo_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.KINGSTON: { this.kingston_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.PROMATE: { this.promate_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.RIVACASE: { this.rivacase_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.SAMSONITE: { this.samsonite_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.SAMSUNG: { this.samsung_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.SANDISK: { this.sandisk_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.SEAGATE: { this.seagate_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.TUMI: { this.tumi_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.WD: { this.wd_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;
      case CATEGORY.XTORM: { this.xtorm_chk = false; this.currentFilterGroup = CATEGORY.BRAND } break;

      case CATEGORY.LAPTOP_BUSINESS: { this.business_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY } break;
      case CATEGORY.LAPTOP_GAMING: { this.gaming_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY } break;
      case CATEGORY.LAPTOP_HOME: { this.home_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY } break;
      case CATEGORY.LAPTOP_ULTRA: { this.ultra_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY } break;
      case CATEGORY.BRIEFCASE: { this.briefcase_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY } break;
      case CATEGORY.SLEEVE: { this.sleeve_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY } break;
      case CATEGORY.BACKPACK: { this.backpack_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY } break;
      case CATEGORY.PLUG_IN: { this.plug_in_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY } break;
      case CATEGORY.CAR: { this.car_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY } break;
      case CATEGORY.HDD: { this.hdd_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY } break;
      case CATEGORY.SSD: { this.ssd_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY } break;
      default:
    }
    // ------------------------------------------------------------------------------------------ 
    this.filterNames_check();
    // ------------------------------------------------------------------------------------------ 
    this.filterNames = this.filterNames.filter((item: any) => item != filterName);
    // ------------------------------------------------------------------------------------------ 
    this.filtering();
    // ------------------------------------------------------------------------------------------  
    this.counting();
  }

  // =========================================================================================== Close Filters  -  CLOSE ALL
  filters_close_all() {
    this.stock_chk = false; this.deposit_chk = false;
    // ------------------------------------------------------------------------------------------
    this.under1000_chk = false; this.under2000_chk = false; this.under3000_chk = false; this.under4000_chk = false; this.over4000_chk = false; this.under100_chk = false; this.under200_chk = false; this.under300_chk = false; this.over300_chk = false;
    // ------------------------------------------------------------------------------------------
    this.acer_chk = false; this.adata_chk = false; this.allview_chk = false; this.apple_chk = false; this.asus_chk = false; this.dell_chk = false; this.hama_chk = false; this.hp_chk = false; this.iphone_chk = false; this.lenovo_chk = false; this.kingston_chk = false; this.promate_chk = false; this.rivacase_chk = false; this.samsonite_chk = false; this.samsung_chk = false; this.sandisk_chk = false; this.seagate_chk = false; this.tumi_chk = false; this.wd_chk = false; this.xtorm_chk = false;
    // ------------------------------------------------------------------------------------------
    this.business_chk = false; this.gaming_chk = false; this.home_chk = false; this.ultra_chk = false; this.briefcase_chk = false; this.sleeve_chk = false; this.backpack_chk = false; this.plug_in_chk = false; this.car_chk = false; this.hdd_chk = false; this.ssd_chk = false;
    // ------------------------------------------------------------------------------------------ 
    this.filterNames = [];
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
    if (this.under1000_chk || this.under2000_chk || this.under3000_chk || this.under4000_chk || this.over4000_chk || this.under100_chk || this.under200_chk || this.under300_chk || this.over300_chk) this.price_chk = true;
    else this.price_chk = false;
    // ------------------------------------------------------------------------------------------
    if (this.acer_chk || this.adata_chk || this.allview_chk || this.apple_chk || this.asus_chk || this.dell_chk || this.hama_chk || this.hp_chk || this.iphone_chk || this.lenovo_chk || this.kingston_chk || this.promate_chk || this.rivacase_chk || this.samsonite_chk || this.samsung_chk || this.sandisk_chk || this.seagate_chk || this.tumi_chk || this.wd_chk || this.xtorm_chk) this.brand_chk = true;
    else this.brand_chk = false;
    // ------------------------------------------------------------------------------------------
    if (this.business_chk || this.gaming_chk || this.home_chk || this.ultra_chk || this.briefcase_chk || this.sleeve_chk || this.backpack_chk || this.plug_in_chk || this.car_chk || this.hdd_chk || this.ssd_chk) this.category_chk = true;
    else this.category_chk = false;
  }

  // ===========================================================================================  S E L E C T - F I L T E R S
  onClick(event: any) {
    this.currentFilterName = event.target.name;
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
    }
    else {
      this.filterNames = this.filterNames.filter((item: any) => item.id != event.target.id);
    }
    // ------------------------------------------------------------------------------------------ 
    this.filtering();
    // ------------------------------------------------------------------------------------------    
    this.counting();
  }

  // ================================================================================================= F I L T E R I N G
  // ===================================================================================================================
  // ===================================================================================================================
  filtering() {
    // ---------------------------------------------------------------------------------------------- Filter 1
    if (this.available_chk) {
      if (this.stock_chk) this.stock = this.filter_0.filter((item: any) => item.available === CATEGORY.STOCK);
      else this.stock = [];

      if (this.deposit_chk) this.deposit = this.filter_0.filter((item: any) => item.available === CATEGORY.DEPOSIT);
      else this.deposit = [];

      this.filter_1 = this.stock.concat(this.deposit);
    }
    else this.filter_1 = this.filter_0;

    // ---------------------------------------------------------------------------------------------- Filter 2    
    if (this.price_chk) {
      // ----------------------------------------------------------------------------------  H i g h      
      if (this.under1000_chk) this.under1000 = this.filter_1.filter((item: any) => item.price < 1000);
      else this.under1000 = [];

      if (this.under2000_chk) this.under2000 = this.filter_1.filter((item: any) => item.price >= 1000 && item.price < 2000);
      else this.under2000 = [];

      if (this.under3000_chk) this.under3000 = this.filter_1.filter((item: any) => item.price >= 2000 && item.price < 3000);
      else this.under3000 = [];

      if (this.under4000_chk) this.under4000 = this.filter_1.filter((item: any) => item.price >= 3000 && item.price < 4000);
      else this.under4000 = [];

      if (this.over4000_chk) this.over4000 = this.filter_1.filter((item: any) => item.price >= 4000);
      else this.over4000 = [];

      // ----------------------------------------------------------------------------------  L o w
      if (this.under100_chk) this.under100 = this.filter_1.filter((item: any) => item.price < 100);
      else this.under100 = [];

      if (this.under200_chk) this.under200 = this.filter_1.filter((item: any) => item.price >= 100 && item.price < 200);
      else this.under200 = [];

      if (this.under300_chk) this.under300 = this.filter_1.filter((item: any) => item.price >= 200 && item.price < 300);
      else this.under300 = [];

      if (this.over300_chk) this.over300 = this.filter_1.filter((item: any) => item.price >= 300);
      else this.over300 = [];

      let prices_high = this.under1000.concat(this.under2000.concat(this.under3000.concat(this.under4000.concat(this.over4000))));
      let prices_low = this.under100.concat(this.under200.concat(this.under300.concat(this.over300)));
      this.filter_2 = prices_high.concat(prices_low)
    }
    else this.filter_2 = this.filter_1;

    // ---------------------------------------------------------------------------------------------- Filter 3
    if (this.brand_chk) {
      if (this.acer_chk) this.acer = this.filter_2.filter((item: any) => item.brand === CATEGORY.ACER);
      else this.acer = [];

      if (this.adata_chk) this.adata = this.filter_2.filter((item: any) => item.brand === CATEGORY.ADATA);
      else this.adata = [];

      if (this.allview_chk) this.allview = this.filter_2.filter((item: any) => item.brand === CATEGORY.ALLVIEW);
      else this.allview = [];

      if (this.apple_chk) this.apple = this.filter_2.filter((item: any) => item.brand === CATEGORY.APPLE);
      else this.apple = [];

      if (this.asus_chk) this.asus = this.filter_2.filter((item: any) => item.brand === CATEGORY.ASUS);
      else this.asus = [];

      if (this.dell_chk) this.dell = this.filter_2.filter((item: any) => item.brand === CATEGORY.DELL);
      else this.dell = [];

      if (this.hama_chk) this.hama = this.filter_2.filter((item: any) => item.brand === CATEGORY.HAMA);
      else this.hama = [];

      if (this.hp_chk) this.hp = this.filter_2.filter((item: any) => item.brand === CATEGORY.HP);
      else this.hp = [];

      if (this.iphone_chk) this.iphone = this.filter_2.filter((item: any) => item.brand === CATEGORY.IPHONE);
      else this.iphone = [];

      if (this.lenovo_chk) this.lenovo = this.filter_2.filter((item: any) => item.brand === CATEGORY.LENOVO);
      else this.lenovo = [];

      if (this.kingston_chk) this.kingston = this.filter_2.filter((item: any) => item.brand === CATEGORY.KINGSTON);
      else this.kingston = [];

      if (this.promate_chk) this.promate = this.filter_2.filter((item: any) => item.brand === CATEGORY.PROMATE);
      else this.promate = [];

      if (this.rivacase_chk) this.rivacase = this.filter_2.filter((item: any) => item.brand === CATEGORY.RIVACASE);
      else this.rivacase = [];

      if (this.samsonite_chk) this.samsonite = this.filter_2.filter((item: any) => item.brand === CATEGORY.SAMSONITE);
      else this.samsonite = [];

      if (this.samsung_chk) this.samsung = this.filter_2.filter((item: any) => item.brand === CATEGORY.SAMSUNG);
      else this.samsung = [];

      if (this.sandisk_chk) this.sandisk = this.filter_2.filter((item: any) => item.brand === CATEGORY.SANDISK);
      else this.sandisk = [];

      if (this.seagate_chk) this.seagate = this.filter_2.filter((item: any) => item.brand === CATEGORY.SEAGATE);
      else this.seagate = [];

      if (this.tumi_chk) this.tumi = this.filter_2.filter((item: any) => item.brand === CATEGORY.TUMI);
      else this.tumi = [];

      if (this.wd_chk) this.wd = this.filter_2.filter((item: any) => item.brand === CATEGORY.WD);
      else this.wd = [];

      if (this.xtorm_chk) this.xtorm = this.filter_2.filter((item: any) => item.brand === CATEGORY.XTORM);
      else this.xtorm = [];

      let brand_1 = this.acer.concat(this.adata.concat(this.allview.concat(this.apple.concat(this.asus.concat(this.dell.concat(this.hama.concat(this.hp.concat(this.iphone.concat(this.lenovo)))))))));
      let brand_2 = this.kingston.concat(this.promate.concat(this.rivacase.concat(this.samsonite.concat(this.samsung.concat(this.sandisk.concat(this.seagate.concat(this.tumi.concat(this.wd.concat(this.xtorm)))))))));
      this.filter_3 = brand_1.concat(brand_2);
    }
    else this.filter_3 = this.filter_2;

    // ---------------------------------------------------------------------------------------------- Filter 4
    if (this.category_chk) {
      if (this.business_chk) this.business = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_BUSINESS);
      else this.business = [];

      if (this.gaming_chk) this.gaming = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_GAMING);
      else this.gaming = [];

      if (this.home_chk) this.home = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_HOME);
      else this.home = [];

      if (this.ultra_chk) this.ultra = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_ULTRA);
      else this.ultra = [];

      if (this.briefcase_chk) this.briefcase = this.filter_3.filter((item: any) => item.category === CATEGORY.BRIEFCASE);
      else this.briefcase = [];

      if (this.sleeve_chk) this.sleeve = this.filter_3.filter((item: any) => item.category === CATEGORY.SLEEVE);
      else this.sleeve = [];

      if (this.backpack_chk) this.backpack = this.filter_3.filter((item: any) => item.category === CATEGORY.BACKPACK);
      else this.backpack = [];

      if (this.plug_in_chk) this.plug_in = this.filter_3.filter((item: any) => item.category === CATEGORY.PLUG_IN);
      else this.plug_in = [];

      if (this.car_chk) this.car = this.filter_3.filter((item: any) => item.category === CATEGORY.CAR);
      else this.car = [];

      if (this.hdd_chk) this.hdd = this.filter_3.filter((item: any) => item.category === CATEGORY.HDD);
      else this.hdd = [];

      if (this.ssd_chk) this.ssd = this.filter_3.filter((item: any) => item.category === CATEGORY.SSD);
      else this.ssd = [];

      let category_1 = this.business.concat(this.gaming.concat(this.home.concat(this.ultra)));
      let category_2 = this.briefcase.concat(this.sleeve.concat(this.backpack.concat(this.plug_in.concat(this.car.concat(this.hdd.concat(this.ssd))))));
      this.filter_4 = category_1.concat(category_2);
    }
    else this.filter_4 = this.filter_3;

    // ------------------------------------------------------------------------------------------- O u t p u t
    this.products = this.filter_4;
  }

  // ============================================================================================ C  O  U  N  T  I  N  G
  // ===================================================================================================================
  // ===================================================================================================================
  counting() {
    if (this.currentFilterGroup === CATEGORY.AVAILABLE) {
      if (this.available_chk) {
        this.count_price();
        this.count_brand();
        this.count_category();
      }
      else this.count_ordered();
    }

    if (this.currentFilterGroup === CATEGORY.PRICE) {
      if (this.price_chk) {
        this.count_available();
        this.count_brand();
        this.count_category();
      }
      else this.count_ordered();
    }

    if (this.currentFilterGroup === CATEGORY.BRAND) {
      if (this.brand_chk) {
        this.count_available();
        this.count_price();
        this.count_category();
      }
      else this.count_ordered();
    }

    if (this.currentFilterGroup === CATEGORY.CATEGORY) {
      if (this.category_chk) {
        this.count_available();
        this.count_price();
        this.count_brand();
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
    this.under100_count = this.products.filter((item: any) => item.price < 100).length;
    this.under200_count = this.products.filter((item: any) => item.price >= 100 && item.price < 200).length;
    this.under300_count = this.products.filter((item: any) => item.price >= 200 && item.price < 300).length;
    this.over300_count = this.products.filter((item: any) => item.price >= 300).length;
  }

  count_brand() {
    this.acer_count = this.products.filter((item: any) => item.brand === CATEGORY.ACER).length;
    this.adata_count = this.products.filter((item: any) => item.brand === CATEGORY.ADATA).length;
    this.allview_count = this.products.filter((item: any) => item.brand === CATEGORY.ALLVIEW).length;
    this.apple_count = this.products.filter((item: any) => item.brand === CATEGORY.APPLE).length;
    this.asus_count = this.products.filter((item: any) => item.brand === CATEGORY.ASUS).length;
    this.dell_count = this.products.filter((item: any) => item.brand === CATEGORY.DELL).length;
    this.hama_count = this.products.filter((item: any) => item.brand === CATEGORY.HAMA).length;
    this.hp_count = this.products.filter((item: any) => item.brand === CATEGORY.HP).length;
    this.iphone_count = this.products.filter((item: any) => item.brand === CATEGORY.IPHONE).length;
    this.lenovo_count = this.products.filter((item: any) => item.brand === CATEGORY.LENOVO).length;
    this.kingston_count = this.products.filter((item: any) => item.brand === CATEGORY.KINGSTON).length;
    this.promate_count = this.products.filter((item: any) => item.brand === CATEGORY.PROMATE).length;
    this.rivacase_count = this.products.filter((item: any) => item.brand === CATEGORY.RIVACASE).length;
    this.samsonite_count = this.products.filter((item: any) => item.brand === CATEGORY.SAMSONITE).length;
    this.samsung_count = this.products.filter((item: any) => item.brand === CATEGORY.SAMSUNG).length;
    this.sandisk_count = this.products.filter((item: any) => item.brand === CATEGORY.SANDISK).length;
    this.seagate_count = this.products.filter((item: any) => item.brand === CATEGORY.SEAGATE).length;
    this.tumi_count = this.products.filter((item: any) => item.brand === CATEGORY.TUMI).length;
    this.wd_count = this.products.filter((item: any) => item.brand === CATEGORY.WD).length;
    this.xtorm_count = this.products.filter((item: any) => item.brand === CATEGORY.XTORM).length;
  }

  count_category() {
    this.business_count = this.products.filter((item: any) => item.category === CATEGORY.LAPTOP_BUSINESS).length;
    this.gaming_count = this.products.filter((item: any) => item.category === CATEGORY.LAPTOP_GAMING).length;
    this.home_count = this.products.filter((item: any) => item.category === CATEGORY.LAPTOP_HOME).length;
    this.ultra_count = this.products.filter((item: any) => item.category === CATEGORY.LAPTOP_ULTRA).length;
    this.briefcase_count = this.products.filter((item: any) => item.category === CATEGORY.BRIEFCASE).length;
    this.sleeve_count = this.products.filter((item: any) => item.category === CATEGORY.SLEEVE).length;
    this.backpack_count = this.products.filter((item: any) => item.category === CATEGORY.BACKPACK).length;
    this.plug_in_count = this.products.filter((item: any) => item.category === CATEGORY.PLUG_IN).length;
    this.car_count = this.products.filter((item: any) => item.category === CATEGORY.CAR).length;
    this.hdd_count = this.products.filter((item: any) => item.category === CATEGORY.HDD).length;
    this.ssd_count = this.products.filter((item: any) => item.category === CATEGORY.SSD).length;
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
    this.under100_count = this.filter_1.filter((item: any) => item.price < 100).length;
    this.under200_count = this.filter_1.filter((item: any) => item.price >= 100 && item.price < 200).length;
    this.under300_count = this.filter_1.filter((item: any) => item.price >= 200 && item.price < 300).length;
    this.over300_count = this.filter_1.filter((item: any) => item.price >= 300).length;

    this.acer_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.ACER).length;
    this.adata_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.ADATA).length;
    this.allview_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.ALLVIEW).length;
    this.apple_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.APPLE).length;
    this.asus_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.ASUS).length;
    this.dell_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.DELL).length;
    this.hama_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.HAMA).length;
    this.hp_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.HP).length;
    this.iphone_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.IPHONE).length;
    this.lenovo_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.LENOVO).length;
    this.kingston_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.KINGSTON).length;
    this.promate_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.PROMATE).length;
    this.rivacase_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.RIVACASE).length;
    this.samsonite_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.SAMSONITE).length;
    this.samsung_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.SAMSUNG).length;
    this.sandisk_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.SANDISK).length;
    this.seagate_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.SEAGATE).length;
    this.tumi_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.TUMI).length;
    this.wd_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.WD).length;
    this.xtorm_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.XTORM).length;

    this.business_count = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_BUSINESS).length;
    this.gaming_count = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_GAMING).length;
    this.home_count = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_HOME).length;
    this.ultra_count = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_ULTRA).length;
    this.briefcase_count = this.filter_3.filter((item: any) => item.category === CATEGORY.BRIEFCASE).length;
    this.sleeve_count = this.filter_3.filter((item: any) => item.category === CATEGORY.SLEEVE).length;
    this.backpack_count = this.filter_3.filter((item: any) => item.category === CATEGORY.BACKPACK).length;
    this.plug_in_count = this.filter_3.filter((item: any) => item.category === CATEGORY.PLUG_IN).length;
    this.car_count = this.filter_3.filter((item: any) => item.category === CATEGORY.CAR).length;
    this.hdd_count = this.filter_3.filter((item: any) => item.category === CATEGORY.HDD).length;
    this.ssd_count = this.filter_3.filter((item: any) => item.category === CATEGORY.SSD).length;
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
    this.under100_count = this.filter_0.filter((item: any) => item.price < 100).length;
    this.under200_count = this.filter_0.filter((item: any) => item.price >= 100 && item.price < 200).length;
    this.under300_count = this.filter_0.filter((item: any) => item.price >= 200 && item.price < 300).length;
    this.over300_count = this.filter_0.filter((item: any) => item.price >= 300).length;

    this.acer_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.ACER).length;
    this.adata_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.ADATA).length;
    this.allview_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.ALLVIEW).length;
    this.apple_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.APPLE).length;
    this.asus_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.ASUS).length;
    this.dell_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.DELL).length;
    this.hama_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.HAMA).length;
    this.hp_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.HP).length;
    this.iphone_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.IPHONE).length;
    this.lenovo_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.LENOVO).length;
    this.kingston_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.KINGSTON).length;
    this.promate_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.PROMATE).length;
    this.rivacase_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.RIVACASE).length;
    this.samsonite_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.SAMSONITE).length;
    this.samsung_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.SAMSUNG).length;
    this.sandisk_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.SANDISK).length;
    this.seagate_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.SEAGATE).length;
    this.tumi_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.TUMI).length;
    this.wd_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.WD).length;
    this.xtorm_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.XTORM).length;

    this.business_count = this.filter_0.filter((item: any) => item.category === CATEGORY.LAPTOP_BUSINESS).length;
    this.gaming_count = this.filter_0.filter((item: any) => item.category === CATEGORY.LAPTOP_GAMING).length;
    this.home_count = this.filter_0.filter((item: any) => item.category === CATEGORY.LAPTOP_HOME).length;
    this.ultra_count = this.filter_0.filter((item: any) => item.category === CATEGORY.LAPTOP_ULTRA).length;
    this.briefcase_count = this.filter_0.filter((item: any) => item.category === CATEGORY.BRIEFCASE).length;
    this.sleeve_count = this.filter_0.filter((item: any) => item.category === CATEGORY.SLEEVE).length;
    this.backpack_count = this.filter_0.filter((item: any) => item.category === CATEGORY.BACKPACK).length;
    this.plug_in_count = this.filter_0.filter((item: any) => item.category === CATEGORY.PLUG_IN).length;
    this.car_count = this.filter_0.filter((item: any) => item.category === CATEGORY.CAR).length;
    this.hdd_count = this.filter_0.filter((item: any) => item.category === CATEGORY.HDD).length;
    this.ssd_count = this.filter_0.filter((item: any) => item.category === CATEGORY.SSD).length;
  }


}