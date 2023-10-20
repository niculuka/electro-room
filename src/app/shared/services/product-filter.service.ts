import { Injectable } from '@angular/core';
import { ProductFilter } from '../models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  public productsFilters: Array<ProductFilter> = this.getProductsFiltersLS();
  private productsFiltersSubject: BehaviorSubject<Array<ProductFilter>> = new BehaviorSubject(this.productsFilters);

  constructor() { }

  clearProductsFiltersService() {
    this.productsFilters = [];
    this.setProductsFiltersLS([]);
  }

  getProductsFiltersObservable(): Observable<Array<ProductFilter>> {
    return this.productsFiltersSubject.asObservable();
  }

  setProductsFiltersLS(data: Array<ProductFilter>): void {
    this.productsFilters = data;
    const pfJson = JSON.stringify(this.productsFilters);
    localStorage.setItem('pf-ls', pfJson);
    this.productsFiltersSubject.next(this.productsFilters);
  }

  private getProductsFiltersLS(): Array<ProductFilter> {
    const pfJson = localStorage.getItem('pf-ls');
    return pfJson ? JSON.parse(pfJson) : [];
  }
}
