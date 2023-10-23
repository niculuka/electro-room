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
  productsFilterOUT: Array<Product> = [];
  availablesProducts: Array<Product> = [];
  pricesProducts: Array<Product> = [];
  brandsProducts: Array<Product> = [];

  productsFiltersService(productsIN: Array<Product>) {

    this.getProductsFiltersObservable().subscribe((productsFilters) => {
      this.availablesProducts = [];
      this.pricesProducts = [];
      this.brandsProducts = [];
      if (productsFilters.length) {
        // ----------------------------------------------------------------------        
        for (let pf of productsFilters) {
          if (pf.value === CATEGORY.AVAILABLE) {
            let av = productsIN.filter((item: any) => item.available === pf.name);
            this.availablesProducts = this.availablesProducts.concat(av);
          }
        }
        if (!this.availablesProducts.length) {
          this.availablesProducts = productsIN;
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
        this.productsFilterOUT = this.brandsProducts;
        // console.log(this.productsFilterOUT);
      }
      else {
        this.productsFilterOUT = productsIN;
        // console.log(this.productsFilterOUT);
      }
      // console.log(productsFilters);
      // console.log(this.productsFilterOUT);
    });
  }
  // ================================================================================================
  // ================================================================================================
  // ================================================================================================
}
