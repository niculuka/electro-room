import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { LaptopCharger } from 'src/app/shared/models/laptop-charger.model';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { LaptopChargerService } from 'src/app/shared/services/laptop-charger.service';

@Component({
  selector: 'app-laptop-charger',
  templateUrl: './laptop-charger.component.html',
  styleUrls: ['./laptop-charger.component.css']
})
export class LaptopChargerComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  // L A P T O P S - Vars ---------------------------------------------------
  protected laptopChargers: Array<LaptopCharger> = [];
  protected laptopChargers_copy: Array<LaptopCharger> = [];

  product: Product = new Product();

  // A L L - Vars -----------------------------------------------------------
  none_chk: boolean = false;

  // A V A I L A B L E - Vars -----------------------------------------------
  protected available: Array<LaptopCharger> = [];

  stock_chk: boolean = false;
  protected stock: Array<LaptopCharger> = [];
  protected stock_out: Array<LaptopCharger> = [];

  deposit_chk: boolean = false;
  protected deposit: Array<LaptopCharger> = [];
  protected deposit_out: Array<LaptopCharger> = [];

  // P R I C E S - Vars -----------------------------------------------------
  price_chk: boolean = false;
  protected price: Array<LaptopCharger> = [];
  protected price_out: Array<LaptopCharger> = [];

  under100_chk: boolean = false;
  protected under100: Array<LaptopCharger> = [];
  protected under100_out: Array<LaptopCharger> = [];

  under200_chk: boolean = false;
  protected under200: Array<LaptopCharger> = [];
  protected under200_out: Array<LaptopCharger> = [];

  over200_chk: boolean = false;
  protected over200: Array<LaptopCharger> = [];
  protected over200_out: Array<LaptopCharger> = [];

  // B R A N D S - Vars -----------------------------------------------------
  brand_chk: boolean = false;
  protected brand: Array<LaptopCharger> = [];
  protected brand_out: Array<LaptopCharger> = [];

  hama_chk: boolean = false;
  protected hama: Array<LaptopCharger> = [];
  protected hama_out: Array<LaptopCharger> = [];

  lenovo_chk: boolean = false;
  protected lenovo: Array<LaptopCharger> = [];
  protected lenovo_out: Array<LaptopCharger> = [];

  iphone_chk: boolean = false;
  protected iphone: Array<LaptopCharger> = [];
  protected iphone_out: Array<LaptopCharger> = [];

  // C A T E G O R Y - Vars --------------------------------------------------
  category_chk: boolean = false;
  protected category: Array<LaptopCharger> = [];
  protected category_out: Array<LaptopCharger> = [];

  plugIn_chk: boolean = false;
  protected plugIn: Array<LaptopCharger> = [];
  protected plugIn_out: Array<LaptopCharger> = [];

  car_chk: boolean = false;
  protected car: Array<LaptopCharger> = [];
  protected car_out: Array<LaptopCharger> = [];

  // P O W E R - Vars --------------------------------------------------------
  power_chk: boolean = false;
  protected power: Array<LaptopCharger> = [];
  protected power_out: Array<LaptopCharger> = [];

  p45_chk: boolean = false;
  protected p45: Array<LaptopCharger> = [];
  protected p45_out: Array<LaptopCharger> = [];

  p60_chk: boolean = false;
  protected p60: Array<LaptopCharger> = [];
  protected p60_out: Array<LaptopCharger> = [];

  p65_chk: boolean = false;
  protected p65: Array<LaptopCharger> = [];
  protected p65_out: Array<LaptopCharger> = [];

  p70_chk: boolean = false;
  protected p70: Array<LaptopCharger> = [];
  protected p70_out: Array<LaptopCharger> = [];

  p85_chk: boolean = false;
  protected p85: Array<LaptopCharger> = [];
  protected p85_out: Array<LaptopCharger> = [];

  p90_chk: boolean = false;
  protected p90: Array<LaptopCharger> = [];
  protected p90_out: Array<LaptopCharger> = [];

  p120_chk: boolean = false;
  protected p120: Array<LaptopCharger> = [];
  protected p120_out: Array<LaptopCharger> = [];


  laptopChargers_sorting: string = "bestSold";

  constructor(
    private laptopChargerService: LaptopChargerService,
    private cartService: CartService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.laptopChargerService.getAllLaptopChargersService().subscribe(data => {
      this.laptopChargers = data;
      this.laptopChargers_copy = data;

      this.filters_available();
      this.filters_price();
      this.filters_brand();
      this.filters_category();
    });
  }

  addToCart(item: LaptopCharger) {
    this.product.id = item.chargerId;
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
    if (this.laptopChargers_sorting === "name") this.name_alphabetic();
    if (this.laptopChargers_sorting === "lowToHigh") this.price_ascending();
    if (this.laptopChargers_sorting === "highToLow") this.price_descending();
    if (this.laptopChargers_sorting === "bestSold") this.sold();
  }

  // ------------------------------------------------------------- S o r t i n g
  name_alphabetic() {
    this.laptopChargers = this.laptopChargers.sort((a, b) => {
      const nameA = a.brand.toUpperCase();
      const nameB = b.brand.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  price_ascending() {
    this.laptopChargers = this.laptopChargers.sort((a, b) => a.price - b.price);
  }

  price_descending() {
    this.laptopChargers = this.laptopChargers.sort((a, b) => b.price - a.price);
  }

  sold() {
    this.laptopChargers = this.laptopChargers.sort((a: any, b: any) => a.chargerId - b.chargerId);
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
      this.stock = new Array<LaptopCharger>;
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
      this.deposit = new Array<LaptopCharger>;
    }
    this.availables_check_and_concat();
  }

  // --------------------------------------------------------- A V A I L A B L E
  get_stock() {
    this.available = this.laptopChargers_copy;
    this.stock_out = new Array<LaptopCharger>;
    this.available.filter((res: any) => {
      if (res.available === CATEGORY.STOCK) {
        this.stock_out.push(res);
      }
    });
  }

  get_deposit() {
    this.available = this.laptopChargers_copy;
    this.deposit_out = new Array<LaptopCharger>;
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
      this.available = this.laptopChargers_copy;
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
      this.under100 = new Array<LaptopCharger>;
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
      this.under200 = new Array<LaptopCharger>;
    }
    this.prices_check_and_concat();
  }

  filter_over200() {
    this.get_over200();
    if (this.over200_chk) {
      this.get_over200();
      this.over200 = this.over200_out;
    }
    else {
      this.over200 = new Array<LaptopCharger>;
    }
    this.prices_check_and_concat();
  }

  // -------------------------------------------------------------------- P R I C E S
  get_under100() {
    this.price = this.available;
    this.under100_out = new Array<LaptopCharger>;
    this.price.filter((res: any) => {
      if (res.price < 100) {
        this.under100_out.push(res);
      }
    });
  }

  get_under200() {
    this.price = this.available;
    this.under200_out = new Array<LaptopCharger>;
    this.price.filter((res: any) => {
      if (res.price >= 100 && res.price < 200) {
        this.under200_out.push(res);
      }
    });
  }

  get_over200() {
    this.price = this.available;
    this.over200_out = new Array<LaptopCharger>;
    this.price.filter((res: any) => {
      if (res.price >= 200) {
        this.over200_out.push(res);
      }
    });
  }

  // -------------------------------------------------------------------- P R I C E S
  prices_check_and_concat() {
    if (this.under100_chk
      || this.under200_chk
      || this.over200_chk
    ) {
      this.price = this.under100
        .concat(this.under200
          .concat(this.over200
          ));
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
    this.filter_over200();
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
      this.hama = new Array<LaptopCharger>;
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
      this.lenovo = new Array<LaptopCharger>;
    }
    this.brands_check_and_concat();
  }

  filter_iphone() {
    this.get_iphone();
    if (this.iphone_chk) {
      this.get_iphone();
      this.iphone = this.iphone_out;
    }
    else {
      this.iphone = new Array<LaptopCharger>;
    }
    this.brands_check_and_concat();
  }

  // ------------------------------------------------------------------------- B R A N D
  get_hama() {
    this.brand = this.price;
    this.hama_out = new Array<LaptopCharger>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.HAMA) {
        this.hama_out.push(res);
      }
    });
  }

  get_lenovo() {
    this.brand = this.price;
    this.lenovo_out = new Array<LaptopCharger>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.LENOVO) {
        this.lenovo_out.push(res);
      }
    });
  }

  get_iphone() {
    this.brand = this.price;
    this.iphone_out = new Array<LaptopCharger>;
    this.brand.filter((res: any) => {
      if (res.brand == CATEGORY.IPHONE) {
        this.iphone_out.push(res);
      }
    });
  }

  // ------------------------------------------------------------------------- B R A N D
  brands_check_and_concat() {
    if (this.hama_chk
      || this.lenovo_chk
      || this.iphone_chk
    ) {
      this.brand = this.hama
        .concat(this.lenovo
          .concat(this.iphone
          ));
    }
    else {
      this.brand = this.price;
    }
    this.filters_category();
  }

  // ------------------------------------------------------------------------- B R A N D
  filters_brand() {
    this.filter_hama();
    this.filter_lenovo();
    this.filter_iphone();
  }

  // ============================================================================= C A T E G O R Y
  // =============================================================================================
  // =============================================================================================

  filter_plugIn() {
    this.get_plugIn();
    if (this.plugIn_chk) {
      this.get_plugIn();
      this.plugIn = this.plugIn_out;
    }
    else {
      this.plugIn = new Array<LaptopCharger>;
    }
    this.category_check_and_concat();
  }

  filter_car() {
    this.get_car();
    if (this.car_chk) {
      this.get_car();
      this.car = this.car_out;
    }
    else {
      this.car = new Array<LaptopCharger>;
    }
    this.category_check_and_concat();
  }

  // --------------------------------------------------------------- C A T E G O R Y
  get_plugIn() {
    this.category = this.brand;
    this.plugIn_out = new Array<LaptopCharger>;
    this.category.filter((res: any) => {
      if (res.category == CATEGORY.CHARGER_PLUG_IN) {
        this.plugIn_out.push(res);
      }
    });
  }

  get_car() {
    this.category = this.brand;
    this.car_out = new Array<LaptopCharger>;
    this.category.filter((res: any) => {
      if (res.category == CATEGORY.CHARGER_CAR) {
        this.car_out.push(res);
      }
    });
  }

  // --------------------------------------------------------------- C A T E G O R Y
  category_check_and_concat() {
    if (this.plugIn_chk || this.car_chk) {
      this.category = this.plugIn.concat(this.car);
    }
    else {
      this.category = this.brand;
    }
    this.filters_power();
  }

  // --------------------------------------------------------------- C A T E G O R Y
  filters_category() {
    this.filter_plugIn();
    this.filter_car();
  }

  // =================================================================================== P O W E R
  // =============================================================================================
  // =============================================================================================

  filter_p45() {
    this.get_p45();
    if (this.p45_chk) {
      this.get_p45();
      this.p45 = this.p45_out;
    }
    else {
      this.p45 = new Array<LaptopCharger>;
    }
    this.power_check_and_concat();
  }

  filter_p60() {
    this.get_p60();
    if (this.p60_chk) {
      this.get_p60();
      this.p60 = this.p60_out;
    }
    else {
      this.p60 = new Array<LaptopCharger>;
    }
    this.power_check_and_concat();
  }

  filter_p65() {
    this.get_p65();
    if (this.p65_chk) {
      this.get_p65();
      this.p65 = this.p65_out;
    }
    else {
      this.p65 = new Array<LaptopCharger>;
    }
    this.power_check_and_concat();
  }

  filter_p70() {
    this.get_p70();
    if (this.p70_chk) {
      this.get_p70();
      this.p70 = this.p70_out;
    }
    else {
      this.p70 = new Array<LaptopCharger>;
    }
    this.power_check_and_concat();
  }

  filter_p85() {
    this.get_p85();
    if (this.p85_chk) {
      this.get_p85();
      this.p85 = this.p85_out;
    }
    else {
      this.p85 = new Array<LaptopCharger>;
    }
    this.power_check_and_concat();
  }

  filter_p90() {
    this.get_p90();
    if (this.p90_chk) {
      this.get_p90();
      this.p90 = this.p90_out;
    }
    else {
      this.p90 = new Array<LaptopCharger>;
    }
    this.power_check_and_concat();
  }

  filter_p120() {
    this.get_p120();
    if (this.p120_chk) {
      this.get_p120();
      this.p120 = this.p120_out;
    }
    else {
      this.p120 = new Array<LaptopCharger>;
    }
    this.power_check_and_concat();
  }

  // --------------------------------------------------------------------- P O W E R
  get_p45() {
    this.power = this.category;
    this.p45_out = new Array<LaptopCharger>;
    this.power.filter((res: any) => {
      if (res.power == CATEGORY.W45) {
        this.p45_out.push(res);
      }
    });
  }

  get_p60() {
    this.power = this.category;
    this.p60_out = new Array<LaptopCharger>;
    this.power.filter((res: any) => {
      if (res.power == CATEGORY.W60) {
        this.p60_out.push(res);
      }
    });
  }

  get_p65() {
    this.power = this.category;
    this.p65_out = new Array<LaptopCharger>;
    this.power.filter((res: any) => {
      if (res.power == CATEGORY.W65) {
        this.p65_out.push(res);
      }
    });
  }

  get_p70() {
    this.power = this.category;
    this.p70_out = new Array<LaptopCharger>;
    this.power.filter((res: any) => {
      if (res.power == CATEGORY.W70) {
        this.p70_out.push(res);
      }
    });
  }

  get_p85() {
    this.power = this.category;
    this.p85_out = new Array<LaptopCharger>;
    this.power.filter((res: any) => {
      if (res.power == CATEGORY.W85) {
        this.p85_out.push(res);
      }
    });
  }

  get_p90() {
    this.power = this.category;
    this.p90_out = new Array<LaptopCharger>;
    this.power.filter((res: any) => {
      if (res.power == CATEGORY.W90) {
        this.p90_out.push(res);
      }
    });
  }

  get_p120() {
    this.power = this.category;
    this.p120_out = new Array<LaptopCharger>;
    this.power.filter((res: any) => {
      if (res.power == CATEGORY.W120) {
        this.p120_out.push(res);
      }
    });
  }

  // --------------------------------------------------------------------- P O W E R
  power_check_and_concat() {
    if (this.p45_chk
      || this.p60_chk
      || this.p65_chk
      || this.p70_chk
      || this.p85_chk
      || this.p90_chk
      || this.p120_chk
    ) {
      this.power = this.p45
        .concat(this.p60
          .concat(this.p65
            .concat(this.p70
              .concat(this.p85
                .concat(this.p90
                  .concat(this.p120
                  ))))));
    }
    else {
      this.power = this.category;
    }
    this.laptopChargers = this.power;
    this.sorting();
  }

  // --------------------------------------------------------------------- P O W E R
  filters_power() {
    this.filter_p45();
    this.filter_p60();
    this.filter_p65();
    this.filter_p70();
    this.filter_p85();
    this.filter_p90();
    this.filter_p120();
  }

}
