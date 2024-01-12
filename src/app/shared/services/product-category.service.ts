import { Injectable, OnDestroy } from '@angular/core';
import { ProductFilter } from '../models/product-filter.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { CATEGORY, SORTERS } from '../enums/electro.enum';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService implements OnDestroy {
  private sub: any;
  // =========================================================================  F I L T E R S  -  S E L E C T
  // =========================================================================  F I L T E R S  -  S E L E C T
  // =========================================================================  F I L T E R S  -  S E L E C T
  public productsFilters: Array<ProductFilter> = this.getProductsFiltersFromLS();
  private productsFiltersSubject: BehaviorSubject<Array<ProductFilter>> = new BehaviorSubject(this.productsFilters);

  changeFilterService(productsFilters: Array<ProductFilter>) {
    this.productsFilters = productsFilters;
    this.setProductsFiltersToLS();
  }

  clearProductsFiltersService() {
    this.productsFilters
      .filter((item: any) => item.filters
        .filter((res: any) => res.isChecked = false));
    this.setProductsFiltersToLS();
  }

  refreshProductsFiltersService() {
    localStorage.removeItem('pf-ls');
  }

  getProductsFiltersObservable(): Observable<Array<ProductFilter>> {
    return this.productsFiltersSubject.asObservable();
  }

  private setProductsFiltersToLS(): void {
    const pfJson = JSON.stringify(this.productsFilters);
    localStorage.setItem('pf-ls', pfJson);
    this.productsFiltersSubject.next(this.productsFilters);
  }

  private getProductsFiltersFromLS(): Array<ProductFilter> {
    const pfJson = localStorage.getItem('pf-ls');
    return pfJson ? JSON.parse(pfJson) : [];
  }

  // =====================================================================  F  I  L  T  E  R  I  N  G
  public productsOut: Array<Product> = [];
  private productsOutSubject: BehaviorSubject<Array<Product>> = new BehaviorSubject(this.productsOut);

  availablesProducts: Array<Product> = [];
  pricesProducts: Array<Product> = [];
  brandsProducts: Array<Product> = [];
  subcategoriesProducts: Array<Product> = [];

  getProductsOutObservable(): Observable<Array<Product>> {
    return this.productsOutSubject.asObservable();
  }

  productsFiltersService(products: Array<Product>) {
    this.sub = this.getProductsFiltersObservable().subscribe((productsFilters: Array<ProductFilter>) => {
      this.availablesProducts = [];
      this.pricesProducts = [];
      this.brandsProducts = [];
      this.subcategoriesProducts = [];

      // A V A I L A B L E S  -  F I L T E R --------------------------------------------------
      for (let pf of productsFilters) {
        if (pf.value == CATEGORY.AVAILABLE) {
          for (let f of pf.filters) {
            let av = products.filter((prod: any) => f.name === prod.available);
            f.count = av.length;
            if (f.isChecked == true) this.availablesProducts = this.availablesProducts.concat(av);
          }
        }
      }
      if (!this.availablesProducts.length) this.availablesProducts = products;

      // P R I C E S  -  F I L T E R  ---------------------------------------------------------
      for (let pf of productsFilters) {
        if (pf.value == CATEGORY.PRICE) {
          for (let f of pf.filters) {
            let pr = products.filter((prod: any) => prod.price >= f.min && prod.price < f.max);
            f.count = pr.length;
            if (f.isChecked == true) this.pricesProducts = this.pricesProducts.concat(pr);
          }
        }
      }
      if (!this.pricesProducts.length) this.pricesProducts = products;

      // B R A N D S  -  F I L T E R  ----------------------------------------------------------
      for (let pf of productsFilters) {
        if (pf.value == CATEGORY.BRAND) {
          for (let f of pf.filters) {
            let br = products.filter((prod: any) => f.name === prod.brand);
            f.count = br.length;
            if (f.isChecked == true) this.brandsProducts = this.brandsProducts.concat(br);
          }
        }
      }
      if (!this.brandsProducts.length) this.brandsProducts = products;

      // S U B C A T E G O R I E S  -  F I L T E R  --------------------------------------------
      for (let pf of productsFilters) {
        if (pf.value == CATEGORY.SUBCATEGORY) {
          for (let f of pf.filters) {
            let sc = products.filter((prod: any) => f.name === prod.subcategory);
            f.count = sc.length;
            if (f.isChecked == true) this.subcategoriesProducts = this.subcategoriesProducts.concat(sc);
          }
        }
      }
      if (!this.subcategoriesProducts.length) this.subcategoriesProducts = products;

      // ---------------------------------------------------------------------------------------
      // -----------   F   I   L   T   E   R   S   -   R   E   S   U   L   T   -----------------
      // ---------------------------------------------------------------------------------------
      let av_pr = this.availablesProducts.filter((el: any) => this.pricesProducts.includes(el));
      let br_sc = this.brandsProducts.filter((el: any) => this.subcategoriesProducts.includes(el));
      let av_pr_br_sc = av_pr.filter((el: any) => br_sc.includes(el));
      this.productsOut = av_pr_br_sc;
      // console.log(this.productsOut);

      this.productsCountersService(productsFilters);
      this.productsSortersService();
      // ---------------------------------------------------------------------------------------
      // -----------------   P   R   O   D   U   C   T   ---   O   U   T   ---------------------
      // -----------------   P   R   O   D   U   C   T   ---   O   U   T   ---------------------
      // -----------------   P   R   O   D   U   C   T   ---   O   U   T   ---------------------
      // -----------------   P   R   O   D   U   C   T   ---   O   U   T   ---------------------
      // -----------------   P   R   O   D   U   C   T   ---   O   U   T   ---------------------
      // ---------------------------------------------------------------------------------------
      this.productsOutSubject.next(this.productsOut);
      // console.log(this.productsOut);
    });
  }

  // ========================================================================  C  O  U  N  T  I  N  G
  productsCountersService(productsFilters: Array<ProductFilter>) {
    // A V A I L A B L E S  -  C O U N T  ----------------------------------------------------
    for (let pf of productsFilters) {
      if (pf.value == CATEGORY.AVAILABLE) {
        for (let f of pf.filters) {
          let pr_br = this.pricesProducts.filter((el: any) => this.brandsProducts.includes(el));
          let pr_br_sc = pr_br.filter((el: any) => this.subcategoriesProducts.includes(el));
          let av = pr_br_sc.filter((prod: any) => f.name === prod.available);
          f.count = av.length;
        }
      }
    }

    // P R I C E S -  C O U N T  -------------------------------------------------------------
    for (let pf of productsFilters) {
      if (pf.value == CATEGORY.PRICE) {
        for (let f of pf.filters) {
          let av_br = this.availablesProducts.filter((el: any) => this.brandsProducts.includes(el));
          let av_br_sc = av_br.filter((el: any) => this.subcategoriesProducts.includes(el));
          let pr = av_br_sc.filter((prod: any) => prod.price >= f.min && prod.price < f.max);
          f.count = pr.length;
        }
      }
    }

    // B R A N D S  -  C O U N T  -------------------------------------------------------------
    for (let pf of productsFilters) {
      if (pf.value == CATEGORY.BRAND) {
        for (let f of pf.filters) {
          let av_pr = this.availablesProducts.filter((el: any) => this.pricesProducts.includes(el));
          let av_pr_sc = av_pr.filter((el: any) => this.subcategoriesProducts.includes(el));
          let br = av_pr_sc.filter((prod: any) => f.name === prod.brand);
          f.count = br.length;
        }
      }
    }

    // S U B C A T E G O R I E S  -  C O U N T  -----------------------------------------------
    for (let pf of productsFilters) {
      if (pf.value == CATEGORY.SUBCATEGORY) {
        for (let f of pf.filters) {
          let av_pr = this.availablesProducts.filter((el: any) => this.pricesProducts.includes(el));
          let av_pr_br = av_pr.filter((el: any) => this.brandsProducts.includes(el));
          let sc = av_pr_br.filter((prod: any) => f.name === prod.subcategory);
          f.count = sc.length;
        }
      }
    }
  }

  // =========================================================================  S O R T E R S  -  S E L E C T
  // =========================================================================  S O R T E R S  -  S E L E C T
  // =========================================================================  S O R T E R S  -  S E L E C T
  public currentSorter: string = this.getCurrentSorterFromLS();
  private currentSorterSubject: BehaviorSubject<string> = new BehaviorSubject(this.currentSorter);

  changeSorterService(currentSorter: string) {
    this.currentSorter = currentSorter;
    this.setCurrentSorterToLS();
  }

  resetSorterService() {
    this.currentSorter = "";
    this.setCurrentSorterToLS();
  }

  getCurrentSorterObservable(): Observable<string> {
    return this.currentSorterSubject.asObservable();
  }

  private setCurrentSorterToLS(): void {
    localStorage.setItem('cs-ls', this.currentSorter);
    this.currentSorterSubject.next(this.currentSorter);
    this.productsSortersService();
  }

  private getCurrentSorterFromLS(): string {
    const psJson = localStorage.getItem('cs-ls');
    return psJson ? psJson : "";
  }

  // ===========================================================================  S  O  R  T  I  N  G
  productsSortersService() {
    switch (this.currentSorter) {
      case SORTERS.BEST_SOLD: this.sort_bestSold();
        break;
      case SORTERS.NAME: this.sort_name();
        break;
      case SORTERS.LOW_TO_HIGH: this.sort_lowToHigh();
        break;
      case SORTERS.HIGH_TO_LOW: this.sort_highToLow();
        break;
      default: this.sort_bestSold();
    }
  }

  sort_bestSold() {
    this.productsOut = this.productsOut.sort((a: any, b: any) => a.id - b.id);
  }

  sort_name() {
    this.productsOut = this.productsOut.sort((a, b) => {
      const nameA = a.brand.toUpperCase();
      const nameB = b.brand.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  sort_lowToHigh() {
    this.productsOut = this.productsOut.sort((a, b) => a.price - b.price);
  }

  sort_highToLow() {
    this.productsOut = this.productsOut.sort((a, b) => b.price - a.price);
  }




  // =============================================================================  D I S P L A Y  -  T Y P E
  // =============================================================================  D I S P L A Y  -  T Y P E
  // =============================================================================  D I S P L A Y  -  T Y P E
  public displayType: string = this.getDisplayTypeFromLS();
  private displayTypeSubject: BehaviorSubject<string> = new BehaviorSubject(this.displayType);

  changeDisplayTypeService(displayType: string) {
    this.displayType = displayType;
    this.setDisplayTypeToLS();
  }

  getDisplayTypeObservable(): Observable<string> {
    return this.displayTypeSubject.asObservable();
  }

  private setDisplayTypeToLS(): void {
    localStorage.setItem('displayType-ls', this.displayType);
    this.displayTypeSubject.next(this.displayType);
  }

  private getDisplayTypeFromLS(): string {
    const dtJson = localStorage.getItem('displayType-ls');
    return dtJson ? dtJson : "";
  }




  // -----------------------------------------------------------------------------
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
