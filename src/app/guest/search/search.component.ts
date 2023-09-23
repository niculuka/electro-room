import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { SearchProductService } from 'src/app/shared/services/search-product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  laptops_sorting: string = "bestSold";
  link: string = "";

  searchResult: string = "";
  noResult: string = "Nu s-a gasit nimic!";

  // L A P T O P S - Vars ---------------------------------------------------
  protected products: Array<Product> = [];
  protected products_copy: Array<Product> = [];

  protected product: Product = new Product();

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
  

  constructor(
    private searchProductService: SearchProductService,
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.searchProductService.getProductsObservable().subscribe(data => {
      this.products = data;
      this.products_copy = data;

      this.filters_available();
      this.filters_price();
    });

    this.activatedRoute.params.subscribe((params) => {
      this.searchResult = params['searchTerm'];
      this.searchProductService.searchProducts(this.searchResult.toLowerCase())
      console.log(this.searchResult)
    });       
  }

  isProductsEmpty() {    
    return this.products.length === 0;
  }

  goToProduct(product: Product) {
    if (product.category.startsWith("LAPTOP")) {
      this.link = "/lap/" + product.linkName
    }
    if (product.category.startsWith("BAG")) {
      this.link = "/bag/" + product.linkName
    }
    if (product.category.startsWith("CHARGER")) {
      this.link = "/chg/" + product.linkName
    }
    if (product.category.startsWith("HARD")) {
      this.link = "/hard/" + product.linkName
    }
    this.router.navigate([this.link]);
  }

  addToCart(item: Product) {
    this.product.id = item.id;
    this.product.name = item.name;
    this.product.linkName = item.linkName;
    this.product.description = item.description;
    this.product.brand = item.brand;
    this.product.category = item.category;
    this.product.image = item.image;
    this.product.price = item.price;

    this.cartService.addToCartService(this.product);
    this.product = new Product();
  }

  // =============================================================================== S O R T I N G 
  // =============================================================================================
  // =============================================================================================
  sorting() {
    if (this.laptops_sorting === "name") this.name_alphabetic();
    if (this.laptops_sorting === "lowToHigh") this.price_ascending();
    if (this.laptops_sorting === "highToLow") this.price_descending();
    if (this.laptops_sorting === "bestSold") this.sold();
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
    this.products = this.products
      .sort((a: any, b: any) => a.laptopId - b.laptopId)
      .sort((a: any, b: any) => a.bagId - b.bagId)
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
    this.products = this.price;
    this.sorting();
  }

  // -------------------------------------------------------------------- P R I C E S
  filters_price() {
    this.filter_under1000();
    this.filter_under2000();
    this.filter_under3000();
    this.filter_under4000();
    this.filter_over4000();
  }

}
