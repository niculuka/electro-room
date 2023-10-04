import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const API_URL = `${environment.BASE_URL}`;

@Injectable({
  providedIn: 'root'
})
export class SearchProductService extends BearerService {

  findProduct: string = "gaming";

  public products: Array<Product> = this.getProductsFromLocalStorage();
  private productsSubject: BehaviorSubject<Array<Product>> = new BehaviorSubject(this.products);

  findAll: Array<any> = [];


  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  searchProducts(searchTerm: string): void {
    this.findAll = new Array;
    this.getLaptopsService().subscribe(laptop => {
      laptop.filter((data: Product) => {
        if (data.name.toLowerCase().includes(searchTerm)) {
          this.findAll.push(data)
        }
      });
      this.getLaptopAccessoryService().subscribe(bag => {
        bag.filter((data: Product) => {
          if (data.name.toLowerCase().includes(searchTerm)) {
            this.findAll.push(data)
          }
        });
      });
      this.products = this.findAll;
      // console.log(this.products)
      this.setProductsFromLocalStorage();
    });
  }

  getLaptopsService(): Observable<any> {
    return this.http.get(API_URL + "/products/type/laptops");
  }

  getLaptopAccessoryService(): Observable<any> {
    return this.http.get(API_URL + "/products/type/laptop-accessory");
  }

  // ****************************************************
  getProductsObservable(): Observable<Array<Product>> {
    return this.productsSubject.asObservable();
  }

  getProducts(): Array<Product> {
    return this.productsSubject.value;
  }

  setProductsFromLocalStorage(): void {
    const productsJson = JSON.stringify(this.products);
    localStorage.setItem('search-ls', productsJson);
    this.productsSubject.next(this.products);
  }

  private getProductsFromLocalStorage(): Array<Product> {
    const productsJson = localStorage.getItem('search-ls');
    return productsJson ? JSON.parse(productsJson) : new Array<Product>();
  }
}