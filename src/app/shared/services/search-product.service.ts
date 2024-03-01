import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { CATEGORY, TYPE, TYPE_URL_KEY } from '../enums/electro.enum';

const API_URL = `${environment.BASE_URL}`;

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {

  public products: Array<Product> = this.getSearchedProductsFromLocalStorage();
  private productsSubject: BehaviorSubject<Array<Product>> = new BehaviorSubject(this.products);

  constructor(private http: HttpClient) { }

  // GETS =============================================================================
  // switch with getAllProducts(1 get instead of 4)
  getLaptopsService(): Observable<any> {
    return this.http.get(API_URL + "/products/type/" + TYPE_URL_KEY.LAPTOP_URL_KEY);
  }

  getLaptopAccessoryService(): Observable<any> {
    return this.http.get(API_URL + "/products/type/" + TYPE_URL_KEY.LAPTOP_ACCESSORY_URL_KEY);
  }

  getPcService(): Observable<any> {
    return this.http.get(API_URL + "/products/type/" + TYPE_URL_KEY.PC_URL_KEY);
  }

  getMonitorService(): Observable<any> {
    return this.http.get(API_URL + "/products/type/" + TYPE_URL_KEY.MONITOR_URL_KEY);
  }

  // Observable =======================================================================
  searchProducts(searchTerm: string): void {
    this.products = [];
    this.getLaptopsService().subscribe(laptop => {
      laptop.filter((data: Product) => {
        if (data.name.toLowerCase().includes(searchTerm)) {
          this.products.push(data);
        }
      });
      this.getLaptopAccessoryService().subscribe(accessory => {
        accessory.filter((data: Product) => {
          if (data.name.toLowerCase().includes(searchTerm)) {
            this.products.push(data);
          }
        });
        this.getPcService().subscribe(pc => {
          pc.filter((data: Product) => {
            if (data.name.toLowerCase().includes(searchTerm)) {
              this.products.push(data);
            }
          });
          this.getMonitorService().subscribe(monitor => {
            monitor.filter((data: Product) => {
              if (data.name.toLowerCase().includes(searchTerm)) {
                this.products.push(data);
              }
            });
            this.setSearchedProductsFromLocalStorage();
          });
        });
      });
    });
  }

  getSearchedProductsObservable(): Observable<Array<Product>> {
    return this.productsSubject.asObservable();
  }

  getSearchedProducts(): Array<Product> {
    return this.productsSubject.value;
  }

  private setSearchedProductsFromLocalStorage(): void {
    const searchedProductsJson = JSON.stringify(this.products);
    localStorage.setItem('searchedProducts-ls', searchedProductsJson);
    this.productsSubject.next(this.products);
  }

  private getSearchedProductsFromLocalStorage(): Array<Product> {
    const searchedProductsJson = localStorage.getItem('searchedProducts-ls');
    return searchedProductsJson ? JSON.parse(searchedProductsJson) : new Array<Product>();
  }
}