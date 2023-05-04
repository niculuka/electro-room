import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { LaptopHardService } from 'src/app/shared/services/laptop-hard.service';

@Component({
  selector: 'app-laptop-hard',
  templateUrl: './laptop-hard.component.html',
  styleUrls: ['./laptop-hard.component.css']
})
export class LaptopHardComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  // L A P T O P S - Vars ---------------------------------------------------
  protected laptopHards: Array<Product> = [];
  protected laptopHards_copy: Array<Product> = [];

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

  under100_chk: boolean = false;
  protected under100: Array<Product> = [];
  protected under100_out: Array<Product> = [];

  under200_chk: boolean = false;
  protected under200: Array<Product> = [];
  protected under200_out: Array<Product> = [];

  under300_chk: boolean = false;
  protected under300: Array<Product> = [];
  protected under300_out: Array<Product> = [];

  under400_chk: boolean = false;
  protected under400: Array<Product> = [];
  protected under400_out: Array<Product> = [];

  over400_chk: boolean = false;
  protected over400: Array<Product> = [];
  protected over400_out: Array<Product> = [];

  // B R A N D S - Vars -----------------------------------------------------
  brand_chk: boolean = false;
  protected brand: Array<Product> = [];
  protected brand_out: Array<Product> = [];

  adata_chk: boolean = false;
  protected adata: Array<Product> = [];
  protected adata_out: Array<Product> = [];

  wd_chk: boolean = false;
  protected wd: Array<Product> = [];
  protected wd_out: Array<Product> = [];

  sandisk_chk: boolean = false;
  protected sandisk: Array<Product> = [];
  protected sandisk_out: Array<Product> = [];

  kingston_chk: boolean = false;
  protected kingston: Array<Product> = [];
  protected kingston_out: Array<Product> = [];

  samsung_chk: boolean = false;
  protected samsung: Array<Product> = [];
  protected samsung_out: Array<Product> = [];

  // C A T E G O R Y - Vars --------------------------------------------------
  category_chk: boolean = false;
  protected category: Array<Product> = [];
  protected category_out: Array<Product> = [];

  ssd_chk: boolean = false;
  protected ssd: Array<Product> = [];
  protected ssd_out: Array<Product> = [];

  hdd_chk: boolean = false;
  protected hdd: Array<Product> = [];
  protected hdd_out: Array<Product> = [];

  // C A P A C I T Y - Vars --------------------------------------------------
  capacity_chk: boolean = false;
  protected capacity: Array<Product> = [];
  protected capacity_out: Array<Product> = [];

  c120_chk: boolean = false;
  protected c120: Array<Product> = [];
  protected c120_out: Array<Product> = [];

  c240_chk: boolean = false;
  protected c240: Array<Product> = [];
  protected c240_out: Array<Product> = [];

  c480_chk: boolean = false;
  protected c480: Array<Product> = [];
  protected c480_out: Array<Product> = [];

  c500_chk: boolean = false;
  protected c500: Array<Product> = [];
  protected c500_out: Array<Product> = [];

  // C O N N E C T- Vars -----------------------------------------------------
  connect_chk: boolean = false;
  protected connect: Array<Product> = [];
  protected connect_out: Array<Product> = [];

  sata3_chk: boolean = false;
  protected sata3: Array<Product> = [];
  protected sata3_out: Array<Product> = [];

  pciExpress_chk: boolean = false;
  protected pciExpress: Array<Product> = [];
  protected pciExpress_out: Array<Product> = [];

  mSata3_chk: boolean = false;
  protected mSata3: Array<Product> = [];
  protected mSata3_out: Array<Product> = [];


  laptopHards_sorting: string = "bestSold";

  constructor(
    private laptopHardService: LaptopHardService,
    private cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.laptopHardService.getAllLaptopHardsService().subscribe(data => {
      this.laptopHards = data;
      this.laptopHards_copy = data;

      this.filters_available();
      this.filters_price();
      this.filters_brand();
      this.filters_category();
    });
  }

  addToCart(item: Product) {
    this.product.id = item.id;
    this.product.name = item.name;
    this.product.linkName = item.linkName;
    this.product.description = item.description;
    this.product.brand = item.brand;
    this.product.category = item.category;
    this.product.image = item.image;
    this.product.alt = item.alt;
    this.product.price = item.price;

    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

  // =============================================================================== S O R T I N G 
  // =============================================================================================
  // =============================================================================================
  sorting() {
    if (this.laptopHards_sorting === "name") this.name_alphabetic();
    if (this.laptopHards_sorting === "lowToHigh") this.price_ascending();
    if (this.laptopHards_sorting === "highToLow") this.price_descending();
    if (this.laptopHards_sorting === "bestSold") this.sold();
  }

  // ------------------------------------------------------------- S o r t i n g
  name_alphabetic() {
    this.laptopHards = this.laptopHards.sort((a, b) => {
      const nameA = a.brand.toUpperCase();
      const nameB = b.brand.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  price_ascending() {
    this.laptopHards = this.laptopHards.sort((a, b) => a.price - b.price);
  }

  price_descending() {
    this.laptopHards = this.laptopHards.sort((a, b) => b.price - a.price);
  }

  sold() {
    this.laptopHards = this.laptopHards.sort((a: any, b: any) => a.id - b.id);
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
    this.available = this.laptopHards_copy;
    this.stock_out = new Array<Product>;
    this.available.filter((res: any) => {
      if (res.available === CATEGORY.STOCK) {
        this.stock_out.push(res);
      }
    });
  }

  get_deposit() {
    this.available = this.laptopHards_copy;
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
      this.available = this.laptopHards_copy;
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
      this.under100 = new Array<Product>;
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
      this.under200 = new Array<Product>;
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
      this.under300 = new Array<Product>;
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
      this.under400 = new Array<Product>;
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
      this.over400 = new Array<Product>;
    }
    this.prices_check_and_concat();
  }

  // -------------------------------------------------------------------- P R I C E S
  get_under100() {
    this.price = this.available;
    this.under100_out = new Array<Product>;
    this.price.filter((res: any) => {
      if (res.price < 100) {
        this.under100_out.push(res);
      }
    });
  }

  get_under200() {
    this.price = this.available;
    this.under200_out = new Array<Product>;
    this.price.filter((res: any) => {
      if (res.price >= 100 && res.price < 200) {
        this.under200_out.push(res);
      }
    });
  }

  get_under300() {
    this.price = this.available;
    this.under300_out = new Array<Product>;
    this.price.filter((res: any) => {
      if (res.price >= 200 && res.price < 300) {
        this.under300_out.push(res);
      }
    });
  }

  get_under400() {
    this.price = this.available;
    this.under400_out = new Array<Product>;
    this.price.filter((res: any) => {
      if (res.price >= 300 && res.price < 400) {
        this.under400_out.push(res);
      }
    });
  }

  get_over400() {
    this.price = this.available;
    this.over400_out = new Array<Product>;
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
  filter_adata() {
    this.get_adata();
    if (this.adata_chk) {
      this.get_adata();
      this.adata = this.adata_out;
    }
    else {
      this.adata = new Array<Product>;
    }
    this.brands_check_and_concat();
  }

  filter_wd() {
    this.get_wd();
    if (this.wd_chk) {
      this.get_wd();
      this.wd = this.wd_out;
    }
    else {
      this.wd = new Array<Product>;
    }
    this.brands_check_and_concat();
  }

  filter_sandisk() {
    this.get_sandisk();
    if (this.sandisk_chk) {
      this.get_sandisk();
      this.sandisk = this.sandisk_out;
    }
    else {
      this.sandisk = new Array<Product>;
    }
    this.brands_check_and_concat();
  }

  filter_kingston() {
    this.get_kingston();
    if (this.kingston_chk) {
      this.get_kingston();
      this.kingston = this.kingston_out;
    }
    else {
      this.kingston = new Array<Product>;
    }
    this.brands_check_and_concat();
  }

  filter_samsung() {
    this.get_samsung();
    if (this.samsung_chk) {
      this.get_samsung();
      this.samsung = this.samsung_out;
    }
    else {
      this.samsung = new Array<Product>;
    }
    this.brands_check_and_concat();
  }

  // ------------------------------------------------------------------------- B R A N D
  get_adata() {
    this.brand = this.price;
    this.adata_out = new Array<Product>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.ADATA) {
        this.adata_out.push(res);
      }
    });
  }

  get_wd() {
    this.brand = this.price;
    this.wd_out = new Array<Product>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.WD) {
        this.wd_out.push(res);
      }
    });
  }

  get_sandisk() {
    this.brand = this.price;
    this.sandisk_out = new Array<Product>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.SANDISK) {
        this.sandisk_out.push(res);
      }
    });
  }

  get_kingston() {
    this.brand = this.price;
    this.kingston_out = new Array<Product>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.KINGSTON) {
        this.kingston_out.push(res);
      }
    });
  }

  get_samsung() {
    this.brand = this.price;
    this.samsung_out = new Array<Product>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.SAMSUNG) {
        this.samsung_out.push(res);
      }
    });
  }

  // ------------------------------------------------------------------------- B R A N D
  brands_check_and_concat() {
    if (this.adata_chk
      || this.wd_chk
      || this.sandisk_chk
      || this.kingston_chk
      || this.samsung_chk
    ) {
      this.brand = this.adata
        .concat(this.wd
          .concat(this.sandisk
            .concat(this.kingston
              .concat(this.samsung
              ))));
    }
    else {
      this.brand = this.price;
    }
    this.filters_category();
  }

  // ------------------------------------------------------------------------- B R A N D
  filters_brand() {
    this.filter_adata();
    this.filter_wd();
    this.filter_sandisk();
    this.filter_kingston();
    this.filter_samsung();
  }

  // ============================================================================= C A T E G O R Y
  // =============================================================================================
  // =============================================================================================

  filter_ssd() {
    this.get_ssd();
    if (this.ssd_chk) {
      this.get_ssd();
      this.ssd = this.ssd_out;
    }
    else {
      this.ssd = new Array<Product>;
    }
    this.category_check_and_concat();
  }

  filter_hdd() {
    this.get_hdd();
    if (this.hdd_chk) {
      this.get_hdd();
      this.hdd = this.hdd_out;
    }
    else {
      this.hdd = new Array<Product>;
    }
    this.category_check_and_concat();
  }

  // --------------------------------------------------------------- C A T E G O R Y
  get_ssd() {
    this.category = this.brand;
    this.ssd_out = new Array<Product>;
    this.category.filter((res: any) => {
      if (res.category == CATEGORY.SSD) {
        this.ssd_out.push(res);
      }
    });
  }

  get_hdd() {
    this.category = this.brand;
    this.hdd_out = new Array<Product>;
    this.category.filter((res: any) => {
      if (res.category == CATEGORY.HARD) {
        this.hdd_out.push(res);
      }
    });
  }

  // --------------------------------------------------------------- C A T E G O R Y
  category_check_and_concat() {
    if (this.ssd_chk || this.hdd_chk) {
      this.category = this.ssd.concat(this.hdd);
    }
    else {
      this.category = this.brand;
    }
    this.filters_capacity();
  }

  // --------------------------------------------------------------- C A T E G O R Y
  filters_category() {
    this.filter_ssd();
    this.filter_hdd();
  }

  // ============================================================================= C A P A C I T Y
  // =============================================================================================
  // =============================================================================================
  filter_c120() {
    this.get_c120();
    if (this.c120_chk) {
      this.get_c120();
      this.c120 = this.c120_out;
    }
    else {
      this.c120 = new Array<Product>;
    }
    this.capacity_check_and_concat();
  }

  filter_c240() {
    this.get_c240();
    if (this.c240_chk) {
      this.get_c240();
      this.c240 = this.c240_out;
    }
    else {
      this.c240 = new Array<Product>;
    }
    this.capacity_check_and_concat();
  }

  filter_c480() {
    this.get_c480();
    if (this.c480_chk) {
      this.get_c480();
      this.c480 = this.c480_out;
    }
    else {
      this.c480 = new Array<Product>;
    }
    this.capacity_check_and_concat();
  }

  filter_c500() {
    this.get_c500();
    if (this.c500_chk) {
      this.get_c500();
      this.c500 = this.c500_out;
    }
    else {
      this.c500 = new Array<Product>;
    }
    this.capacity_check_and_concat();
  }

  // ----------------------------------------------------------- C A P A C I T Y
  get_c120() {
    this.capacity = this.category;
    this.c120_out = new Array<Product>;
    this.capacity.filter((res: any) => {
      if (res.capacity === CATEGORY.GB120) {
        this.c120_out.push(res);
      }
    });
  }

  get_c240() {
    this.capacity = this.category;
    this.c240_out = new Array<Product>;
    this.capacity.filter((res: any) => {
      if (res.capacity === CATEGORY.GB240) {
        this.c240_out.push(res);
      }
    });
  }

  get_c480() {
    this.capacity = this.category;
    this.c480_out = new Array<Product>;
    this.capacity.filter((res: any) => {
      if (res.capacity === CATEGORY.GB480) {
        this.c480_out.push(res);
      }
    });
  }

  get_c500() {
    this.capacity = this.category;
    this.c500_out = new Array<Product>;
    this.capacity.filter((res: any) => {
      if (res.capacity === CATEGORY.GB500) {
        this.c500_out.push(res);
      }
    });
  }

  // ----------------------------------------------------------- C A P A C I T Y
  capacity_check_and_concat() {
    if (this.c120_chk
      || this.c240_chk
      || this.c480_chk
      || this.c500_chk
    ) {
      this.capacity = this.c120
        .concat(this.c240
          .concat(this.c480
            .concat(this.c500
            )));
    }
    else {
      this.capacity = this.category;
    }
    this.filters_connect();
  }

  // ----------------------------------------------------------- C A P A C I T Y
  filters_capacity() {
    this.filter_c120();
    this.filter_c240();
    this.filter_c480();
    this.filter_c500();
  }

  // =============================================================================== C O N N E C T
  // =============================================================================================
  // =============================================================================================
  filter_sata3() {
    this.get_sata3();
    if (this.sata3_chk) {
      this.get_sata3();
      this.sata3 = this.sata3_out;
    }
    else {
      this.sata3 = new Array<Product>;
    }
    this.connect_check_and_concat();
  }

  filter_pciExpress() {
    this.get_pciExpress();
    if (this.pciExpress_chk) {
      this.get_pciExpress();
      this.pciExpress = this.pciExpress_out;
    }
    else {
      this.pciExpress = new Array<Product>;
    }
    this.connect_check_and_concat();
  }

  filter_mSata3() {
    this.get_mSata3();
    if (this.mSata3_chk) {
      this.get_mSata3();
      this.mSata3 = this.mSata3_out;
    }
    else {
      this.mSata3 = new Array<Product>;
    }
    this.connect_check_and_concat();
  }

  // ------------------------------------------------------------- C O N N E C T
  get_sata3() {
    this.connect = this.capacity;
    this.sata3_out = new Array<Product>;
    this.connect.filter((res: any) => {
      if (res.connect === CATEGORY.SATA3) {
        this.sata3_out.push(res);
      }
    });
  }

  get_pciExpress() {
    this.connect = this.capacity;
    this.pciExpress_out = new Array<Product>;
    this.connect.filter((res: any) => {
      if (res.connect === CATEGORY.PCI_EXPRESS) {
        this.pciExpress_out.push(res);
      }
    });
  }

  get_mSata3() {
    this.connect = this.capacity;
    this.mSata3_out = new Array<Product>;
    this.connect.filter((res: any) => {
      if (res.connect === CATEGORY.M_SATA3) {
        this.mSata3_out.push(res);
      }
    });
  }

  // ------------------------------------------------------------- C O N N E C T
  connect_check_and_concat() {
    if (this.sata3_chk || this.pciExpress_chk || this.mSata3_chk) {
      this.connect = this.sata3.concat(this.pciExpress.concat(this.mSata3));
    }
    else {
      this.connect = this.capacity;
    }
    this.laptopHards = this.connect;
    this.sorting();
  }

  // ------------------------------------------------------------- C O N N E C T
  filters_connect() {
    this.filter_sata3();
    this.filter_pciExpress();
    this.filter_mSata3();
  }
}