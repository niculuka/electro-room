import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  // L A P T O P S - Vars ---------------------------------------------------
  protected products: Array<Product> = [];
  protected products_copy: Array<Product> = [];

  product: Product = new Product();

  // A L L - Vars -----------------------------------------------------------
  none_chk: boolean = false;

  // A V A I L A B L E - Vars -----------------------------------------------
  protected available: Array<Product> = [];

  stock_chk: boolean = false;
  protected stock: Array<Product> = [];
  protected stock_out: Array<Product> = [];

  deposit_chk: boolean = false;
  protected deposit: Array<Product> = [];
  protected deposit_out: Array<Product> = [];

  // P R I C E S - Vars -----------------------------------------------------
  price_chk: boolean = false;
  protected price: Array<Product> = [];
  protected price_out: Array<Product> = [];

  under1000_chk: boolean = false;
  protected under1000: Array<Product> = [];
  protected under1000_out: Array<Product> = [];

  under2000_chk: boolean = false;
  protected under2000: Array<Product> = [];
  protected under2000_out: Array<Product> = [];

  under3000_chk: boolean = false;
  protected under3000: Array<Product> = [];
  protected under3000_out: Array<Product> = [];

  under4000_chk: boolean = false;
  protected under4000: Array<Product> = [];
  protected under4000_out: Array<Product> = [];

  over4000_chk: boolean = false;
  protected over4000: Array<Product> = [];
  protected over4000_out: Array<Product> = [];

  // B R A N D S - Vars -----------------------------------------------------
  brand_chk: boolean = false;
  protected brand: Array<Product> = [];
  protected brand_out: Array<Product> = [];

  asus_chk: boolean = false;
  protected asus: Array<Product> = [];
  protected asus_out: Array<Product> = [];

  hp_chk: boolean = false;
  protected hp: Array<Product> = [];
  protected hp_out: Array<Product> = [];

  acer_chk: boolean = false;
  protected acer: Array<Product> = [];
  protected acer_out: Array<Product> = [];

  lenovo_chk: boolean = false;
  protected lenovo: Array<Product> = [];
  protected lenovo_out: Array<Product> = [];

  apple_chk: boolean = false;
  protected apple: Array<Product> = [];
  protected apple_out: Array<Product> = [];

  products_sorting: string = "bestSold";
  favorite: boolean = false;

  currentCategory: any = "";

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentCategory = params.get('category') || "";
      this.productService.getProductsByCategoryService(this.currentCategory).subscribe(data => {
        this.products = data;
        this.products_copy = data;

        this.filters_available();
        this.filters_price();
        this.filters_brand();
      });
    });
  }

  addToFavorite(item: Product) {
    this.favorite = !this.favorite;
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

  // =========================================================================== A V A I L A B L E
  // =============================================================================================
  // =============================================================================================
  filter_stock() {
    this.get_stock();
    if (this.stock_chk) {
      this.get_stock();
      this.stock = this.stock_out;
    }
    else {
      this.stock = new Array<Product>;
    }
    this.availables_check_and_concat();
  }

  filter_deposit() {
    this.get_deposit();
    if (this.deposit_chk) {
      this.get_deposit();
      this.deposit = this.deposit_out;
    }
    else {
      this.deposit = new Array<Product>;
    }
    this.availables_check_and_concat();
  }

  // --------------------------------------------------------- A V A I L A B L E
  get_stock() {
    this.available = this.products_copy;
    this.stock_out = new Array<Product>;
    this.available.filter((res: any) => {
      if (res.available === CATEGORY.STOCK) {
        this.stock_out.push(res);
      }
    });
  }

  get_deposit() {
    this.available = this.products_copy;
    this.deposit_out = new Array<Product>;
    this.available.filter((res: any) => {
      if (res.available === CATEGORY.DEPOSIT) {
        this.deposit_out.push(res);
      }
    });
  }

  // --------------------------------------------------------- A V A I L A B L E
  availables_check_and_concat() {
    if (this.stock_chk || this.deposit_chk) {
      this.available = this.stock.concat(this.deposit);
    }
    else {
      this.available = this.products_copy;
    }
    this.filters_price();
  }

  // --------------------------------------------------------- A V A I L A B L E
  filters_available() {
    this.filter_stock();
    this.filter_deposit();
  }

  // ================================================================================= P R I C E S
  // =============================================================================================
  // =============================================================================================
  filter_under1000() {
    this.get_under1000();
    if (this.under1000_chk) {
      this.get_under1000();
      this.under1000 = this.under1000_out;
    }
    else {
      this.under1000 = new Array<Product>;
    }
    this.prices_check_and_concat();
  }

  filter_under2000() {
    this.get_under2000();
    if (this.under2000_chk) {
      this.get_under2000();
      this.under2000 = this.under2000_out;
    }
    else {
      this.under2000 = new Array<Product>;
    }
    this.prices_check_and_concat();
  }

  filter_under3000() {
    this.get_under3000();
    if (this.under3000_chk) {
      this.get_under3000();
      this.under3000 = this.under3000_out;
    }
    else {
      this.under3000 = new Array<Product>;
    }
    this.prices_check_and_concat();
  }

  filter_under4000() {
    this.get_under4000();
    if (this.under4000_chk) {
      this.get_under4000();
      this.under4000 = this.under4000_out;
    }
    else {
      this.under4000 = new Array<Product>;
    }
    this.prices_check_and_concat();
  }

  filter_over4000() {
    this.get_over4000();
    if (this.over4000_chk) {
      this.get_over4000();
      this.over4000 = this.over4000_out;
    }
    else {
      this.over4000 = new Array<Product>;
    }
    this.prices_check_and_concat();
  }

  // -------------------------------------------------------------------- P R I C E S
  get_under1000() {
    this.price = this.available;
    this.under1000_out = new Array<Product>;
    this.price.filter((res: any) => {
      if (res.price < 1000) {
        this.under1000_out.push(res);
      }
    });
  }

  get_under2000() {
    this.price = this.available;
    this.under2000_out = new Array<Product>;
    this.price.filter((res: any) => {
      if (res.price >= 1000 && res.price < 2000) {
        this.under2000_out.push(res);
      }
    });
  }

  get_under3000() {
    this.price = this.available;
    this.under3000_out = new Array<Product>;
    this.price.filter((res: any) => {
      if (res.price >= 2000 && res.price < 3000) {
        this.under3000_out.push(res);
      }
    });
  }

  get_under4000() {
    this.price = this.available;
    this.under4000_out = new Array<Product>;
    this.price.filter((res: any) => {
      if (res.price >= 3000 && res.price < 4000) {
        this.under4000_out.push(res);
      }
    });
  }
  get_over4000() {
    this.price = this.available;
    this.over4000_out = new Array<Product>;
    this.price.filter((res: any) => {
      if (res.price >= 4000) {
        this.over4000_out.push(res);
      }
    });
  }

  // -------------------------------------------------------------------- P R I C E S
  prices_check_and_concat() {
    if (this.under1000_chk
      || this.under2000_chk
      || this.under3000_chk
      || this.under4000_chk
      || this.over4000_chk
    ) {
      this.price = this.under1000
        .concat(this.under2000
          .concat(this.under3000
            .concat(this.under4000
              .concat(this.over4000
              ))));
    }
    else {
      this.price = this.available;
    }
    this.filters_brand();
  }

  // -------------------------------------------------------------------- P R I C E S
  filters_price() {
    this.filter_under1000();
    this.filter_under2000();
    this.filter_under3000();
    this.filter_under4000();
    this.filter_over4000();
  }

  // =================================================================================== B R A N D
  // =============================================================================================
  // =============================================================================================
  filter_asus() {
    this.get_asus();
    if (this.asus_chk) {
      this.get_asus();
      this.asus = this.asus_out;
    }
    else {
      this.asus = new Array<Product>;
    }
    this.brands_check_and_concat();
  }

  filter_hp() {
    this.get_hp();
    if (this.hp_chk) {
      this.get_hp();
      this.hp = this.hp_out;
    }
    else {
      this.hp = new Array<Product>;
    }
    this.brands_check_and_concat();
  }

  filter_acer() {
    this.get_acer();
    if (this.acer_chk) {
      this.get_acer();
      this.acer = this.acer_out;
    }
    else {
      this.acer = new Array<Product>;
    }
    this.brands_check_and_concat();
  }

  filter_lenovo() {
    this.get_lenovo();
    if (this.lenovo_chk) {
      this.get_lenovo();
      this.lenovo = this.lenovo_out;
    }
    else {
      this.lenovo = new Array<Product>;
    }
    this.brands_check_and_concat();
  }

  filter_apple() {
    this.get_apple();
    if (this.apple_chk) {
      this.get_apple();
      this.apple = this.apple_out;
    }
    else {
      this.apple = new Array<Product>;
    }
    this.brands_check_and_concat();
  }

  // ------------------------------------------------------------------------- B R A N D
  get_asus() {
    this.brand = this.price;
    this.asus_out = new Array<Product>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.ASUS) {
        this.asus_out.push(res);
      }
    });
  }

  get_hp() {
    this.brand = this.price;
    this.hp_out = new Array<Product>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.HP) {
        this.hp_out.push(res);
      }
    });
  }

  get_acer() {
    this.brand = this.price;
    this.acer_out = new Array<Product>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.ACER) {
        this.acer_out.push(res);
      }
    });
  }

  get_lenovo() {
    this.brand = this.price;
    this.lenovo_out = new Array<Product>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.LENOVO) {
        this.lenovo_out.push(res);
      }
    });
  }

  get_apple() {
    this.brand = this.price;
    this.apple_out = new Array<Product>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.APPLE) {
        this.apple_out.push(res);
      }
    });
  }

  // ------------------------------------------------------------------------- B R A N D
  brands_check_and_concat() {
    if (this.asus_chk
      || this.hp_chk
      || this.acer_chk
      || this.lenovo_chk
      || this.apple_chk
    ) {
      this.brand = this.asus
        .concat(this.hp
          .concat(this.acer
            .concat(this.lenovo
              .concat(this.apple
              ))));
    }
    else {
      this.brand = this.price;
    }
    this.products = this.brand;
    this.sorting();
  }

  // ------------------------------------------------------------------------- B R A N D
  filters_brand() {
    this.filter_asus();
    this.filter_hp();
    this.filter_acer();
    this.filter_lenovo();
    this.filter_apple();
  }

}