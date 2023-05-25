import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { ProductFilter } from 'src/app/shared/models/product-filter.model';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;


  // A V A I L A B L E - Vars -----------------------------------------------
  available_chk: boolean = false;

  stock_chk: boolean = false;
  protected stock: Array<Product> = [];
  protected stock_count: number = 0;

  deposit_chk: boolean = false;
  protected deposit: Array<Product> = [];
  protected deposit_count: number = 0;

  // P R I C E S - Vars -----------------------------------------------------
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

  // B R A N D S - Vars -----------------------------------------------------
  brand_chk: boolean = false;

  asus_chk: boolean = false;
  protected asus: Array<Product> = [];
  protected asus_count: number = 0;

  hp_chk: boolean = false;
  protected hp: Array<Product> = [];
  protected hp_count: number = 0;

  acer_chk: boolean = false;
  protected acer: Array<Product> = [];
  protected acer_count: number = 0;

  lenovo_chk: boolean = false;
  protected lenovo: Array<Product> = [];
  protected lenovo_count: number = 0;

  apple_chk: boolean = false;
  protected apple: Array<Product> = [];
  protected apple_count: number = 0;

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


  // L A P T O P S - Vars ---------------------------------------------------
  protected products: Array<Product> = [];
  protected filter_0: Array<Product> = [];

  product: Product = new Product();

  filterNames: Array<ProductFilter> = [];
  currentFilterName: string = "";
  productFilter: ProductFilter = new ProductFilter();

  currentFilterGroup: string = "";

  protected filter_1: Array<Product> = [];
  protected filter_2: Array<Product> = [];
  protected filter_3: Array<Product> = [];
  protected filter_4: Array<Product> = [];

  // ------------------------------------------------------------------------------------------ 
  products_sorting: string = "bestSold";
  favorite: boolean = false;

  departments: Array<Department> = DEPARTMENTS;
  cards: Array<any> = [];

  currentLevel: string = "";
  currentType: string = "";

  notFoundProduct: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentLevel = params.get('level') || "";
      this.currentType = params.get('type') || "";
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
  }

  filters(data: any) {
    if (data.length > 0) {
      let level = data[0].level.replace(/_/g, "-").toLowerCase();
      if (level === this.currentLevel) {
        this.notFoundProduct = true;
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

  addToFavorite(item: Product) {
    this.favorite = !this.favorite;
    console.log(item.id)
    if (this.favorite) {
      this.toastrService.warning("UNDER COSNSTRUCTION")
    }
  }

  addToCart(item: Product) {
    this.product.id = item.id;
    this.product.name = item.name;
    this.product.linkName = item.linkName;
    this.product.description = item.description;
    this.product.brand = item.brand;
    this.product.category = item.category;
    this.product.image = item.image;
    this.product.alt = item.image;
    this.product.price = item.price;

    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

  // =============================================================================== S O R T I N G 
  // =============================================================================================
  // =============================================================================================
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

  // ========================================================================  F  I  L  T  E  R  S
  // =============================================================================================
  // =============================================================================================

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

      case CATEGORY.LAPTOP_BUSINESS: { this.business_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY }
        break;
      case CATEGORY.LAPTOP_GAMING: { this.gaming_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY }
        break;
      case CATEGORY.LAPTOP_HOME: { this.home_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY }
        break;
      case CATEGORY.LAPTOP_ULTRA: { this.ultra_chk = false; this.currentFilterGroup = CATEGORY.CATEGORY }
        break;
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

    this.business_chk = false;
    this.gaming_chk = false;
    this.home_chk = false;
    this.ultra_chk = false;
    // ------------------------------------------------------------------------------------------ 
    this.filterNames = [];
    this.products = this.filter_0;
    // ------------------------------------------------------------------------------------------ 
    this.count_reset();
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
    // ------------------------------------------------------------------------------------------
    if (this.business_chk || this.gaming_chk || this.home_chk || this.ultra_chk) this.category_chk = true;
    else this.category_chk = false;
  }

  // ==============================================================================================  S E L E C T - F I L T E R S
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

  // ======================================================================================================== F I L T E R I N G
  filtering() {
    // ---------------------------------------------------------------------------------------------------- Filter 1
    if (this.available_chk) {
      if (this.stock_chk) this.stock = this.filter_0.filter((item: any) => item.available === CATEGORY.STOCK);
      else this.stock = [];

      if (this.deposit_chk) this.deposit = this.filter_0.filter((item: any) => item.available === CATEGORY.DEPOSIT);
      else this.deposit = [];

      this.filter_1 = this.stock.concat(this.deposit);
    }
    else this.filter_1 = this.filter_0;

    // ---------------------------------------------------------------------------------------------------- Filter 2
    if (this.price_chk) {
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

      this.filter_2 = this.under1000.concat(this.under2000.concat(this.under3000.concat(this.under4000.concat(this.over4000))));
    }
    else this.filter_2 = this.filter_1;

    // ---------------------------------------------------------------------------------------------------- Filter 3
    if (this.brand_chk) {
      if (this.asus_chk) this.asus = this.filter_2.filter((item: any) => item.brand === CATEGORY.ASUS);
      else this.asus = [];

      if (this.hp_chk) this.hp = this.filter_2.filter((item: any) => item.brand === CATEGORY.HP);
      else this.hp = [];

      if (this.acer_chk) this.acer = this.filter_2.filter((item: any) => item.brand === CATEGORY.ACER);
      else this.acer = [];

      if (this.lenovo_chk) this.lenovo = this.filter_2.filter((item: any) => item.brand === CATEGORY.LENOVO);
      else this.lenovo = [];

      if (this.apple_chk) this.apple = this.filter_2.filter((item: any) => item.brand === CATEGORY.APPLE);
      else this.apple = [];

      this.filter_3 = this.asus.concat(this.hp.concat(this.acer.concat(this.lenovo.concat(this.apple))));
    }
    else this.filter_3 = this.filter_2;

    // ---------------------------------------------------------------------------------------------------- Filter 4
    if (this.category_chk) {
      if (this.business_chk) this.business = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_BUSINESS);
      else this.business = [];

      if (this.gaming_chk) this.gaming = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_GAMING);
      else this.gaming = [];

      if (this.home_chk) this.home = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_HOME);
      else this.home = [];

      if (this.ultra_chk) this.ultra = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_ULTRA);
      else this.ultra = [];

      this.filter_4 = this.business.concat(this.gaming.concat(this.home.concat(this.ultra)));
    }
    else this.filter_4 = this.filter_3;

    // ---------------------------------------------------------------------------------------------------- O u t p u t
    this.products = this.filter_4;
  }

  // ======================================================================================================= C O U N T I N G

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

  // ====================================================================================================   C O U N T  C A T E G
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

  count_brand() {
    this.asus_count = this.products.filter((item: any) => item.brand === CATEGORY.ASUS).length;
    this.hp_count = this.products.filter((item: any) => item.brand === CATEGORY.HP).length;
    this.acer_count = this.products.filter((item: any) => item.brand === CATEGORY.ACER).length;
    this.lenovo_count = this.products.filter((item: any) => item.brand === CATEGORY.LENOVO).length;
    this.apple_count = this.products.filter((item: any) => item.brand === CATEGORY.APPLE).length;
  }

  count_category() {
    this.business_count = this.products.filter((item: any) => item.category === CATEGORY.LAPTOP_BUSINESS).length;
    this.gaming_count = this.products.filter((item: any) => item.category === CATEGORY.LAPTOP_GAMING).length;
    this.home_count = this.products.filter((item: any) => item.category === CATEGORY.LAPTOP_HOME).length;
    this.ultra_count = this.products.filter((item: any) => item.category === CATEGORY.LAPTOP_ULTRA).length;
  }

  // ====================================================================================================   C O U N T  O R D E R
  count_ordered() {
    this.stock_count = this.filter_0.filter((item: any) => item.available === CATEGORY.STOCK).length;
    this.deposit_count = this.filter_0.filter((item: any) => item.available === CATEGORY.DEPOSIT).length;

    this.under1000_count = this.filter_1.filter((item: any) => item.price < 1000).length;
    this.under2000_count = this.filter_1.filter((item: any) => item.price >= 1000 && item.price < 2000).length;
    this.under3000_count = this.filter_1.filter((item: any) => item.price >= 2000 && item.price < 3000).length;
    this.under4000_count = this.filter_1.filter((item: any) => item.price >= 3000 && item.price < 4000).length;
    this.over4000_count = this.filter_1.filter((item: any) => item.price >= 4000).length;

    this.asus_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.ASUS).length;
    this.hp_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.HP).length;
    this.acer_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.ACER).length;
    this.lenovo_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.LENOVO).length;
    this.apple_count = this.filter_2.filter((item: any) => item.brand === CATEGORY.APPLE).length;

    this.business_count = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_BUSINESS).length;
    this.gaming_count = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_GAMING).length;
    this.home_count = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_HOME).length;
    this.ultra_count = this.filter_3.filter((item: any) => item.category === CATEGORY.LAPTOP_ULTRA).length;
  }


  // ====================================================================================================   C O U N T  R E S E T
  count_reset() {
    this.stock_count = this.filter_0.filter((item: any) => item.available === CATEGORY.STOCK).length;
    this.deposit_count = this.filter_0.filter((item: any) => item.available === CATEGORY.DEPOSIT).length;

    this.under1000_count = this.filter_0.filter((item: any) => item.price < 1000).length;
    this.under2000_count = this.filter_0.filter((item: any) => item.price >= 1000 && item.price < 2000).length;
    this.under3000_count = this.filter_0.filter((item: any) => item.price >= 2000 && item.price < 3000).length;
    this.under4000_count = this.filter_0.filter((item: any) => item.price >= 3000 && item.price < 4000).length;
    this.over4000_count = this.filter_0.filter((item: any) => item.price >= 4000).length;

    this.asus_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.ASUS).length;
    this.hp_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.HP).length;
    this.acer_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.ACER).length;
    this.lenovo_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.LENOVO).length;
    this.apple_count = this.filter_0.filter((item: any) => item.brand === CATEGORY.APPLE).length;

    this.business_count = this.filter_0.filter((item: any) => item.category === CATEGORY.LAPTOP_BUSINESS).length;
    this.gaming_count = this.filter_0.filter((item: any) => item.category === CATEGORY.LAPTOP_GAMING).length;
    this.home_count = this.filter_0.filter((item: any) => item.category === CATEGORY.LAPTOP_HOME).length;
    this.ultra_count = this.filter_0.filter((item: any) => item.category === CATEGORY.LAPTOP_ULTRA).length;
  }

}