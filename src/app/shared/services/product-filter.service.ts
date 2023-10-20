import { Injectable } from '@angular/core';
import { ProductFilter } from '../models/product-filter.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  public productsFilters: Array<ProductFilter> = this.getProductsFiltersFromLS();
  private productsFiltersSubject: BehaviorSubject<Array<ProductFilter>> = new BehaviorSubject(this.productsFilters);

  constructor() { }

  clearProductsFiltersService() {
    this.productsFilters = [];
    this.setProductsFiltersToLS(this.productsFilters);
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
}
