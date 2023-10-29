import { Injectable } from '@angular/core';
import { IProductFilter, ProductCounter, ProductFilter, ProductFilterArray, SORTERS_OPTIONS } from '../models/product-filter.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { CATEGORY, SORTER_SELECT } from '../enums/electro.enum';
import { Product } from '../models/product.model';
import { PRODUCTS_FILTERS } from '../data/product-filter.data';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  public productsFilters: Array<ProductFilterArray> = this.getProductsFiltersFromLS();
  private productsFiltersSubject: BehaviorSubject<Array<ProductFilterArray>> = new BehaviorSubject(this.productsFilters);

  changeFiltersService(productsFilters: Array<ProductFilterArray>) {
    this.productsFilters = productsFilters;
    this.setProductsFiltersToLS();
  }

  clearProductsFiltersService() {
    this.productsFilters
      .filter((item: any) => item.filters
        .filter((res: any) => res.isChecked = false));
    this.setProductsFiltersToLS();
  }

  getProductsFiltersObservable(): Observable<Array<ProductFilterArray>> {
    return this.productsFiltersSubject.asObservable();
  }

  private setProductsFiltersToLS(): void {
    const pfJson = JSON.stringify(this.productsFilters);
    localStorage.setItem('pf-ls', pfJson);
    this.productsFiltersSubject.next(this.productsFilters);
  }

  private getProductsFiltersFromLS(): Array<ProductFilterArray> {
    const pfJson = localStorage.getItem('pf-ls');
    return pfJson ? JSON.parse(pfJson) : [];
  }

  // ============================================================================== F I L T E R
  // ============================================================================== F I L T E R
  // ============================================================================== F I L T E R
  // products_filtered: Array<Product> = [];
  // availablesProducts: Array<Product> = [];
  // pricesProducts: Array<Product> = [];
  // brandsProducts: Array<Product> = [];

  // productsCounter: ProductCounter = new ProductCounter();

  // productsFiltersService(products: Array<Product>) {
  //   this.getProductsFiltersObservable().subscribe((productsFilters) => {
  //     this.availablesProducts = [];
  //     this.pricesProducts = [];
  //     this.brandsProducts = [];
  //     if (productsFilters.length) {
  //       // ----------------------------------------------------------------------        
  //       for (let pf of productsFilters) {
  //         if (pf.value === CATEGORY.AVAILABLE) {
  //           let av = products.filter((item: any) => item.available === pf.name);
  //           this.availablesProducts = this.availablesProducts.concat(av);
  //         }
  //       }
  //       if (!this.availablesProducts.length) {
  //         this.availablesProducts = products;
  //       }
  //       // ----------------------------------------------------------------------        
  //       for (let pf of productsFilters) {
  //         if (pf.value === CATEGORY.PRICE) {
  //           let pr = this.availablesProducts.filter((item: any) => item.price >= pf.min && item.price < pf.max);
  //           this.pricesProducts = this.pricesProducts.concat(pr);
  //         }
  //       }
  //       if (!this.pricesProducts.length) {
  //         this.pricesProducts = this.availablesProducts;
  //       }
  //       // ----------------------------------------------------------------------        
  //       for (let pf of productsFilters) {
  //         if (pf.value === CATEGORY.BRAND) {
  //           let br = this.pricesProducts.filter((item: any) => item.brand === pf.name);
  //           this.brandsProducts = this.brandsProducts.concat(br);
  //         }
  //       }
  //       if (!this.brandsProducts.length) {
  //         this.brandsProducts = this.pricesProducts;
  //       }
  //       // ----------------------------------------------------------------------
  //       this.products_filtered = this.brandsProducts;
  //     }
  //     else {
  //       this.products_filtered = products;
  //     }
  //     // console.log(productsFilters);
  //     // console.log(this.products_filtered);
  //     // console.log("--------------------------");
  //   });
  // }
  // ============================================================================== S O R T E R
  // ============================================================================== S O R T E R
  // ============================================================================== S O R T E R
  // public currentSorter: string = this.getCurrentSorterFromLS();
  // private currentSorterSubject: BehaviorSubject<string> = new BehaviorSubject(this.currentSorter);

  // getCurrentSorterObservable(): Observable<string> {
  //   return this.currentSorterSubject.asObservable();
  // }

  // clearCurrentSorterService(data: string) {
  //   this.currentSorter = data;
  //   this.setCurrentSorterToLS(this.currentSorter);
  // }

  // setCurrentSorterToLS(data: string): void {
  //   this.currentSorter = data;
  //   localStorage.setItem('curr-sorter-ls', this.currentSorter);
  //   this.currentSorterSubject.next(this.currentSorter);
  //   this.productsSortersService();
  // }

  // private getCurrentSorterFromLS(): string {
  //   const currSorter = localStorage.getItem('curr-sorter-ls');
  //   return currSorter ? currSorter : "";
  // }

  // productsSortersService() {
  //   switch (this.currentSorter) {
  //     case SORTER_SELECT.BEST_SOLD: this.sort_bestSold();
  //       break;
  //     case SORTER_SELECT.NAME: this.sort_name();
  //       break;
  //     case SORTER_SELECT.LOW_TO_HIGH: this.sort_lowToHigh();
  //       break;
  //     case SORTER_SELECT.HIGH_TO_LOW: this.sort_highToLow();
  //       break;
  //     default: this.sort_bestSold();
  //   }
  //   // console.log(this.currentSorter);
  //   // console.log(this.products_filtered);
  // }

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
