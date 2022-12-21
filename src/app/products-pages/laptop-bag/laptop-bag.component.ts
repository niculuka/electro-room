import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { LaptopBag } from 'src/app/shared/models/laptop-bag.model';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { LaptopBagService } from 'src/app/shared/services/laptop-bag.service';

@Component({
  selector: 'app-laptop-bag',
  templateUrl: './laptop-bag.component.html',
  styleUrls: ['./laptop-bag.component.css']
})
export class LaptopBagComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  // L A P T O P S - Vars ---------------------------------------------------
  protected laptopBags: Array<LaptopBag> = [];
  protected laptopBags_copy: Array<LaptopBag> = [];

  product: Product = new Product();

  // A L L - Vars -----------------------------------------------------------
  none_chk: boolean = false;

  // A V A I L A B L E - Vars -----------------------------------------------
  protected available: Array<LaptopBag> = [];

  stock_chk: boolean = false;
  protected stock: Array<LaptopBag> = [];
  protected stock_out: Array<LaptopBag> = [];

  deposit_chk: boolean = false;
  protected deposit: Array<LaptopBag> = [];
  protected deposit_out: Array<LaptopBag> = [];

  // P R I C E S - Vars -----------------------------------------------------
  price_chk: boolean = false;
  protected price: Array<LaptopBag> = [];
  protected price_out: Array<LaptopBag> = [];

  under100_chk: boolean = false;
  protected under100: Array<LaptopBag> = [];
  protected under100_out: Array<LaptopBag> = [];

  under200_chk: boolean = false;
  protected under200: Array<LaptopBag> = [];
  protected under200_out: Array<LaptopBag> = [];

  under300_chk: boolean = false;
  protected under300: Array<LaptopBag> = [];
  protected under300_out: Array<LaptopBag> = [];

  under400_chk: boolean = false;
  protected under400: Array<LaptopBag> = [];
  protected under400_out: Array<LaptopBag> = [];

  over400_chk: boolean = false;
  protected over400: Array<LaptopBag> = [];
  protected over400_out: Array<LaptopBag> = [];

  // B R A N D S - Vars -----------------------------------------------------
  brand_chk: boolean = false;
  protected brand: Array<LaptopBag> = [];
  protected brand_out: Array<LaptopBag> = [];

  hama_chk: boolean = false;
  protected hama: Array<LaptopBag> = [];
  protected hama_out: Array<LaptopBag> = [];

  promate_chk: boolean = false;
  protected promate: Array<LaptopBag> = [];
  protected promate_out: Array<LaptopBag> = [];

  rivacase_chk: boolean = false;
  protected rivacase: Array<LaptopBag> = [];
  protected rivacase_out: Array<LaptopBag> = [];

  samsonite_chk: boolean = false;
  protected samsonite: Array<LaptopBag> = [];
  protected samsonite_out: Array<LaptopBag> = [];

  // C A T E G O R Y - Vars --------------------------------------------------
  category_chk: boolean = false;
  protected category: Array<LaptopBag> = [];
  protected category_out: Array<LaptopBag> = [];

  bag_chk: boolean = false;
  protected bag: Array<LaptopBag> = [];
  protected bag_out: Array<LaptopBag> = [];

  sleeve_chk: boolean = false;
  protected sleeve: Array<LaptopBag> = [];
  protected sleeve_out: Array<LaptopBag> = [];

  backpack_chk: boolean = false;
  protected backpack: Array<LaptopBag> = [];
  protected backpack_out: Array<LaptopBag> = [];


  laptopBags_sorting: string = "bestSold";

  constructor(
    private laptopBagService: LaptopBagService,
    private cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.laptopBagService.getAllLaptopBagsService().subscribe(data => {
      this.laptopBags = data;
      this.laptopBags_copy = data;

      this.filters_available();
      this.filters_price();
      this.filters_brand();
      this.filters_category();
    });
  }

  addToCart(item: LaptopBag) {
    this.product.productId = item.bagId;
    this.product.name = item.name;
    this.product.linkName = item.linkName;
    this.product.description = item.description;
    this.product.brand = item.brand;
    this.product.category = item.category;
    this.product.src1 = item.src1;
    this.product.alt = item.alt;
    this.product.price = item.price;

    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

  // =============================================================================== S O R T I N G 
  // =============================================================================================
  // =============================================================================================
  sorting() {
    if (this.laptopBags_sorting === "name") this.name_alphabetic();
    if (this.laptopBags_sorting === "lowToHigh") this.price_ascending();
    if (this.laptopBags_sorting === "highToLow") this.price_descending();
    if (this.laptopBags_sorting === "bestSold") this.sold();
  }

  // ------------------------------------------------------------- S o r t i n g
  name_alphabetic() {
    this.laptopBags = this.laptopBags.sort((a, b) => {
      const nameA = a.brand.toUpperCase();
      const nameB = b.brand.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  price_ascending() {
    this.laptopBags = this.laptopBags.sort((a, b) => a.price - b.price);
  }

  price_descending() {
    this.laptopBags = this.laptopBags.sort((a, b) => b.price - a.price);
  }

  sold() {
    this.laptopBags = this.laptopBags.sort((a: any, b: any) => a.bagId - b.bagId);
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
      this.stock = new Array<LaptopBag>;
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
      this.deposit = new Array<LaptopBag>;
    }
    this.availables_check_and_concat();
  }

  // --------------------------------------------------------- A V A I L A B L E
  get_stock() {
    this.available = this.laptopBags_copy;
    this.stock_out = new Array<LaptopBag>;
    this.available.filter((res: any) => {
      if (res.available === CATEGORY.STOCK) {
        this.stock_out.push(res);
      }
    });
  }

  get_deposit() {
    this.available = this.laptopBags_copy;
    this.deposit_out = new Array<LaptopBag>;
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
      this.available = this.laptopBags_copy;
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
  filter_under100() {
    this.get_under100();
    if (this.under100_chk) {
      this.get_under100();
      this.under100 = this.under100_out;
    }
    else {
      this.under100 = new Array<LaptopBag>;
    }
    this.prices_check_and_concat();
  }

  filter_under200() {
    this.get_under200();
    if (this.under200_chk) {
      this.get_under200();
      this.under200 = this.under200_out;
    }
    else {
      this.under200 = new Array<LaptopBag>;
    }
    this.prices_check_and_concat();
  }

  filter_under300() {
    this.get_under300();
    if (this.under300_chk) {
      this.get_under300();
      this.under300 = this.under300_out;
    }
    else {
      this.under300 = new Array<LaptopBag>;
    }
    this.prices_check_and_concat();
  }

  filter_under400() {
    this.get_under400();
    if (this.under400_chk) {
      this.get_under400();
      this.under400 = this.under400_out;
    }
    else {
      this.under400 = new Array<LaptopBag>;
    }
    this.prices_check_and_concat();
  }

  filter_over400() {
    this.get_over400();
    if (this.over400_chk) {
      this.get_over400();
      this.over400 = this.over400_out;
    }
    else {
      this.over400 = new Array<LaptopBag>;
    }
    this.prices_check_and_concat();
  }

  // -------------------------------------------------------------------- P R I C E S
  get_under100() {
    this.price = this.available;
    this.under100_out = new Array<LaptopBag>;
    this.price.filter((res: any) => {
      if (res.price < 100) {
        this.under100_out.push(res);
      }
    });
  }

  get_under200() {
    this.price = this.available;
    this.under200_out = new Array<LaptopBag>;
    this.price.filter((res: any) => {
      if (res.price >= 100 && res.price < 200) {
        this.under200_out.push(res);
      }
    });
  }

  get_under300() {
    this.price = this.available;
    this.under300_out = new Array<LaptopBag>;
    this.price.filter((res: any) => {
      if (res.price >= 200 && res.price < 300) {
        this.under300_out.push(res);
      }
    });
  }

  get_under400() {
    this.price = this.available;
    this.under400_out = new Array<LaptopBag>;
    this.price.filter((res: any) => {
      if (res.price >= 300 && res.price < 400) {
        this.under400_out.push(res);
      }
    });
  }

  get_over400() {
    this.price = this.available;
    this.over400_out = new Array<LaptopBag>;
    this.price.filter((res: any) => {
      if (res.price >= 400) {
        this.over400_out.push(res);
      }
    });
  }

  // -------------------------------------------------------------------- P R I C E S
  prices_check_and_concat() {
    if (this.under100_chk
      || this.under200_chk
      || this.under300_chk
      || this.under400_chk
      || this.over400_chk
    ) {
      this.price = this.under100
        .concat(this.under200
          .concat(this.under300
            .concat(this.under400
              .concat(this.over400
              ))));
    }
    else {
      this.price = this.available;
    }
    this.filters_brand();
  }

  // -------------------------------------------------------------------- P R I C E S
  filters_price() {
    this.filter_under100();
    this.filter_under200();
    this.filter_under300();
    this.filter_under400();
    this.filter_over400();
  }

  // =================================================================================== B R A N D
  // =============================================================================================
  // =============================================================================================
  filter_hama() {
    this.get_hama();
    if (this.hama_chk) {
      this.get_hama();
      this.hama = this.hama_out;
    }
    else {
      this.hama = new Array<LaptopBag>;
    }
    this.brands_check_and_concat();
  }

  filter_promate() {
    this.get_promate();
    if (this.promate_chk) {
      this.get_promate();
      this.promate = this.promate_out;
    }
    else {
      this.promate = new Array<LaptopBag>;
    }
    this.brands_check_and_concat();
  }

  filter_rivacase() {
    this.get_rivacase();
    if (this.rivacase_chk) {
      this.get_rivacase();
      this.rivacase = this.rivacase_out;
    }
    else {
      this.rivacase = new Array<LaptopBag>;
    }
    this.brands_check_and_concat();
  }

  filter_samsonite() {
    this.get_samsonite();
    if (this.samsonite_chk) {
      this.get_samsonite();
      this.samsonite = this.samsonite_out;
    }
    else {
      this.samsonite = new Array<LaptopBag>;
    }
    this.brands_check_and_concat();
  }

  // ------------------------------------------------------------------------- B R A N D
  get_hama() {
    this.brand = this.price;
    this.hama_out = new Array<LaptopBag>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.HAMA) {
        this.hama_out.push(res);
      }
    });
  }

  get_promate() {
    this.brand = this.price;
    this.promate_out = new Array<LaptopBag>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.PROMATE) {
        this.promate_out.push(res);
      }
    });
  }

  get_rivacase() {
    this.brand = this.price;
    this.rivacase_out = new Array<LaptopBag>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.RIVACASE) {
        this.rivacase_out.push(res);
      }
    });
  }

  get_samsonite() {
    this.brand = this.price;
    this.samsonite_out = new Array<LaptopBag>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.SAMSONITE) {
        this.samsonite_out.push(res);
      }
    });
  }

  // ------------------------------------------------------------------------- B R A N D
  brands_check_and_concat() {
    if (this.hama_chk
      || this.promate_chk
      || this.rivacase_chk
      || this.samsonite_chk
    ) {
      this.brand = this.hama
        .concat(this.promate
          .concat(this.rivacase
            .concat(this.samsonite
            )));
    }
    else {
      this.brand = this.price;
    }
    this.filters_category();
  }

  // ------------------------------------------------------------------------- B R A N D
  filters_brand() {
    this.filter_hama();
    this.filter_promate();
    this.filter_rivacase();
    this.filter_samsonite();
  }

  // ============================================================================= C A T E G O R Y
  // =============================================================================================
  // =============================================================================================

  filter_bag() {
    this.get_bag();
    if (this.bag_chk) {
      this.get_bag();
      this.bag = this.bag_out;
    }
    else {
      this.bag = new Array<LaptopBag>;
    }
    this.category_check_and_concat();
  }

  filter_sleeve() {
    this.get_sleeve();
    if (this.sleeve_chk) {
      this.get_sleeve();
      this.sleeve = this.sleeve_out;
    }
    else {
      this.sleeve = new Array<LaptopBag>;
    }
    this.category_check_and_concat();
  }

  filter_backpack() {
    this.get_backpack();
    if (this.backpack_chk) {
      this.get_backpack();
      this.backpack = this.backpack_out;
    }
    else {
      this.backpack = new Array<LaptopBag>;
    }
    this.category_check_and_concat();
  }

  // --------------------------------------------------------------- C A T E G O R Y
  get_bag() {
    this.category = this.brand;
    this.bag_out = new Array<LaptopBag>;
    this.category.filter((res: any) => {
      if (res.category == CATEGORY.BAG_BAG) {
        this.bag_out.push(res);
      }
    });
  }

  get_sleeve() {
    this.category = this.brand;
    this.sleeve_out = new Array<LaptopBag>;
    this.category.filter((res: any) => {
      if (res.category == CATEGORY.BAG_SLEEVE) {
        this.sleeve_out.push(res);
      }
    });
  }

  get_backpack() {
    this.category = this.brand;
    this.backpack_out = new Array<LaptopBag>;
    this.category.filter((res: any) => {
      if (res.category == CATEGORY.BAG_BACKPACK) {
        this.backpack_out.push(res);
      }
    });
  }

  // --------------------------------------------------------------- C A T E G O R Y
  category_check_and_concat() {
    if (this.bag_chk
      || this.sleeve_chk
      || this.backpack_chk
    ) {
      this.category = this.bag
        .concat(this.sleeve
          .concat(this.backpack
          ));
    }
    else {
      this.category = this.brand;
    }
    this.laptopBags = this.category;
    this.sorting();
  }

  // --------------------------------------------------------------- C A T E G O R Y
  filters_category() {
    this.filter_bag();
    this.filter_sleeve();
    this.filter_backpack();
  }

}
