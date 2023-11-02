import { Injectable } from '@angular/core';
import { ProductCounter, ProductFilter, ProductSorter } from '../models/product-filter.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { CATEGORY } from '../enums/electro.enum';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  // ============================================================================== F I L T E R
  // ============================================================================== F I L T E R
  // ============================================================================== F I L T E R
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

  // ========================================================== P R O D U C T S - F I L T E R I N G
  public productsOut: Array<Product> = [];
  private productsOutSubject: BehaviorSubject<Array<Product>> = new BehaviorSubject(this.productsOut);

  getProductsOutObservable(): Observable<Array<Product>> {
    return this.productsOutSubject.asObservable();
  }

  products_filtered: Array<Product> = [];
  products_OUT: Array<Product> = [];
  // av: Array<Product> = [];
  availablesProducts: Array<Product> = [];
  availablesProducts_f: Array<Product> = [];
  // pr: Array<Product> = [];
  pricesProducts: Array<Product> = [];
  pricesProducts_f: Array<Product> = [];
  brandsProducts: Array<Product> = [];
  brandsProducts_f: Array<Product> = [];

  productsCounter: ProductCounter = new ProductCounter();

  productsFiltersService(products: Array<Product>) {
    this.getProductsFiltersObservable().subscribe((productsFilters) => {
      this.products_OUT = [];
      this.availablesProducts = [];
      this.availablesProducts_f = [];
      this.pricesProducts = [];
      this.pricesProducts_f = [];
      this.brandsProducts = [];
      this.brandsProducts_f = [];

      // ----------------------------------------------------------------------
      for (let pf of productsFilters) {
        if (pf.value == CATEGORY.AVAILABLE) {
          for (let f of pf.filters) {
            let av = products.filter((prod: any) => f.name === prod.available);
            f.count = av.length;
            if (f.isChecked == true) {
              this.availablesProducts = this.availablesProducts.concat(av);
            }
          }
        }
      }
      if (!this.availablesProducts.length) {
        this.availablesProducts = products;
      }
      // console.log(this.availablesProducts);

      // ----------------------------------------------------------------------
      for (let pf of productsFilters) {
        if (pf.value == CATEGORY.PRICE) {
          for (let f of pf.filters) {
            let pr = products.filter((prod: any) => prod.price >= f.min && prod.price < f.max);
            f.count = pr.length;
            if (f.isChecked == true) {
              this.pricesProducts = this.pricesProducts.concat(pr);
            }
          }
        }
      }

      if (!this.pricesProducts.length) {
        this.pricesProducts = products;
      }
      // console.log(this.pricesProducts);

      // v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v
      // v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v v
      this.availablesProducts.filter((av: any) =>
        this.pricesProducts.filter((pr: any) => {
          if (av.id === pr.id) {
            this.products_OUT = this.products_OUT.concat(av);
          }
        })
      )
      console.log(this.products_OUT);
      // A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A
      // A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A A


      for (let pf of productsFilters) {
        if (pf.value == CATEGORY.AVAILABLE) {
          for (let f of pf.filters) {
            let av: any;
            if (this.pricesProducts.length) {
              av = this.pricesProducts.filter((prod: any) => f.name === prod.available);
            }
            else {
              av = products.filter((prod: any) => f.name === prod.available);
            }
            // console.log(av);
            f.count = av.length;

          }
        }
      }


      for (let pf of productsFilters) {
        if (pf.value == CATEGORY.PRICE) {
          for (let f of pf.filters) {
            let pr: any;
            if (this.availablesProducts.length) {
              pr = this.availablesProducts.filter((prod: any) => prod.price >= f.min && prod.price < f.max);
            }
            else {
              pr = products.filter((prod: any) => prod.price >= f.min && prod.price < f.max);
            }
            // console.log(pr);
            f.count = pr.length;
            
          }
        }
      }



    });
  }

  // ============================================================================== S O R T E R
  // ============================================================================== S O R T E R
  // ============================================================================== S O R T E R
  public currentSorter: string = this.getCurrentSorterFromLS();
  private currentSorterSubject: BehaviorSubject<string> = new BehaviorSubject(this.currentSorter);

  changeSorterService(currentSorter: string) {
    this.currentSorter = currentSorter;
    this.setCurrentSorterToLS();
  }

  clearCurrentSorterService() {
    this.currentSorter = "";
    this.setCurrentSorterToLS();
  }

  getCurrentSorterObservable(): Observable<string> {
    return this.currentSorterSubject.asObservable();
  }

  private setCurrentSorterToLS(): void {
    localStorage.setItem('cs-ls', this.currentSorter);
    this.currentSorterSubject.next(this.currentSorter);
    // this.productsSortersService();
  }

  private getCurrentSorterFromLS(): string {
    const psJson = localStorage.getItem('cs-ls');
    return psJson ? psJson : "";
  }

  productsSortersService() {
    // switch (this.productsSorters) {
    //   case SORTER_SELECT.BEST_SOLD: this.sort_bestSold();
    //     break;
    //   case SORTER_SELECT.NAME: this.sort_name();
    //     break;
    //   case SORTER_SELECT.LOW_TO_HIGH: this.sort_lowToHigh();
    //     break;
    //   case SORTER_SELECT.HIGH_TO_LOW: this.sort_highToLow();
    //     break;
    //   default: this.sort_bestSold();
    // }
    // console.log(this.currentSorter);
    // console.log(this.products_filtered);
  }




  // ============================================================================== S O R T E R
  // ============================================================================== S O R T E R
  // ============================================================================== S O R T E R


  // sort_bestSold() {
  //   this.products_filtered = this.products_filtered.sort((a: any, b: any) => a.id - b.id);
  // }

  // sort_name() {
  //   this.products_filtered = this.products_filtered.sort((a, b) => {
  //     const nameA = a.brand.toUpperCase();
  //     const nameB = b.brand.toUpperCase();
  //     if (nameA < nameB) return -1;
  //     if (nameA > nameB) return 1;
  //     return 0;
  //   });
  // }

  // sort_lowToHigh() {
  //   this.products_filtered = this.products_filtered.sort((a, b) => a.price - b.price);
  // }

  // sort_highToLow() {
  //   this.products_filtered = this.products_filtered.sort((a, b) => b.price - a.price);
  // }

  // filt() {
  // this.productsCounter.stock_count = this.products_filtered.filter((item: any) => item.available === CATEGORY.STOCK);
  // this.productsCounter.deposit_count = this.products_filtered.filter((item: any) => item.available === CATEGORY.DEPOSIT);

  // this.productsCounter.under1000_count = this.products_filtered.filter((item: any) => item.price >= 0 && item.price < 1000);
  // this.productsCounter.under2000_count = this.products_filtered.filter((item: any) => item.price >= 1000 && item.price < 2000);
  // this.productsCounter.under3000_count = this.products_filtered.filter((item: any) => item.price >= 2000 && item.price < 3000);
  // this.productsCounter.under4000_count = this.products_filtered.filter((item: any) => item.price >= 3000 && item.price < 4000);
  // this.productsCounter.over4000_count = this.products_filtered.filter((item: any) => item.price >= 4000 && item.price < 1000000);


  // console.log(this.productsCounter.stock_count);
  // console.log(this.productsCounter.deposit_count);

  // console.log(this.productsCounter.under1000_count);
  // console.log(this.productsCounter.under2000_count);
  // console.log(this.productsCounter.under3000_count);
  // console.log(this.productsCounter.under4000_count);
  // console.log(this.productsCounter.over4000_count);
  // console.log("--------------------------");
  // }

}
