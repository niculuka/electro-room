import { Injectable } from '@angular/core';
import { ProductFilter } from '../models/product-filter.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { CATEGORY } from '../enums/electro.enum';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  public productsFilters: Array<ProductFilter> = this.getProductsFiltersFromLS();
  private productsFiltersSubject: BehaviorSubject<Array<ProductFilter>>
    = new BehaviorSubject(this.productsFilters);

  clearProductsFiltersService() {
    this.productsFilters = [];
    this.setProductsFiltersToLS(this.productsFilters);
  }

  getProductsFilters(): Array<ProductFilter> {
    return this.productsFiltersSubject.value;
  }

  getProductsFiltersObservable(): Observable<Array<ProductFilter>> {
    return this.productsFiltersSubject.asObservable();
  }

  setProductsFiltersToLS(data: Array<ProductFilter>): void {
    this.productsFilters = data;
    const pfJson = JSON.stringify(this.productsFilters);
    localStorage.setItem('pf-ls', pfJson);
    this.productsFiltersSubject.next(this.productsFilters);
  }

  private getProductsFiltersFromLS(): Array<ProductFilter> {
    const pfJson = localStorage.getItem('pf-ls');
    return pfJson ? JSON.parse(pfJson) : [];
  }


  // ============================================================================== F I L T E R
  // ============================================================================== F I L T E R
  // ============================================================================== F I L T E R
  products_filtered: Array<Product> = [];
  availablesProducts: Array<Product> = [];
  pricesProducts: Array<Product> = [];
  brandsProducts: Array<Product> = [];

  productsFiltersService(products: Array<Product>) {
    this.getProductsFiltersObservable().subscribe((productsFilters) => {
      this.availablesProducts = [];
      this.pricesProducts = [];
      this.brandsProducts = [];
      if (productsFilters.length) {
        // ----------------------------------------------------------------------        
        for (let pf of productsFilters) {
          if (pf.value === CATEGORY.AVAILABLE) {
            let av = products.filter((item: any) => item.available === pf.name);
            this.availablesProducts = this.availablesProducts.concat(av);
          }
        }
        if (!this.availablesProducts.length) {
          this.availablesProducts = products;
        }
        // console.log(this.availablesProducts);
        // ----------------------------------------------------------------------        
        for (let pf of productsFilters) {
          if (pf.value === CATEGORY.PRICE) {
            let pr = this.availablesProducts.filter((item: any) => item.price >= pf.min && item.price < pf.max);
            this.pricesProducts = this.pricesProducts.concat(pr);
          }
        }
        if (!this.pricesProducts.length) {
          this.pricesProducts = this.availablesProducts;
        }
        // console.log(this.pricesProducts);
        // ----------------------------------------------------------------------        
        for (let pf of productsFilters) {
          if (pf.value === CATEGORY.BRAND) {
            let br = this.pricesProducts.filter((item: any) => item.brand === pf.name);
            this.brandsProducts = this.brandsProducts.concat(br);
          }
        }
        if (!this.brandsProducts.length) {
          this.brandsProducts = this.pricesProducts;
        }
        // console.log(this.brandsProducts);
        // ----------------------------------------------------------------------
        this.products_filtered = this.brandsProducts;
        // console.log(this.products_filtered);
      }
      else {
        this.products_filtered = products;
        // console.log(this.products_filtered);
      }
      // console.log(productsFilters);
      // console.log(this.products_filtered);
      this.productsSortersService();
    });
  }
  // ============================================================================== S O R T E R
  // ============================================================================== S O R T E R
  // ============================================================================== S O R T E R
  public currentSorter: string = this.getCurrentSorterFromLS();
  private currentSorterSubject: BehaviorSubject<string> = new BehaviorSubject(this.currentSorter);

  getCurrentSorterObservable(): Observable<string> {
    return this.currentSorterSubject.asObservable();
  }

  clearCurrentSorterService(data: string) {
    this.currentSorter = data;
    this.setCurrentSorterToLS(this.currentSorter);
  }

  setCurrentSorterToLS(data: string): void {
    this.currentSorter = data;
    localStorage.setItem('curr-sorter-ls', this.currentSorter);
    this.currentSorterSubject.next(this.currentSorter);
  }

  private getCurrentSorterFromLS(): string {
    const currSorter = localStorage.getItem('curr-sorter-ls');
    return currSorter ? currSorter : "";
  }

  productsSortersService() {
    this.getCurrentSorterObservable().subscribe((data) => {
      console.log(data);
      // switch (this.currentSorter) {
      //   case "bestSold": this.sort_bestSold();
      //     break;
      //   case "name": this.sort_name();
      //     break;
      //   case "lowToHigh": this.sort_lowToHigh();
      //     break;
      //   case "highToLow": this.sort_highToLow();
      //     break;
      //   default: this.sort_bestSold();
      // }
      // console.log(this.currentSorter);
      console.log(this.products_filtered);
    });
  }

  sort_bestSold() {
    this.products_filtered = this.products_filtered.sort((a: any, b: any) => a.id - b.id);
  }

  sort_name() {
    this.products_filtered = this.products_filtered.sort((a, b) => {
      const nameA = a.brand.toUpperCase();
      const nameB = b.brand.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  sort_lowToHigh() {
    this.products_filtered = this.products_filtered.sort((a, b) => a.price - b.price);
  }

  sort_highToLow() {
    this.products_filtered = this.products_filtered.sort((a, b) => b.price - a.price);
  }


}
