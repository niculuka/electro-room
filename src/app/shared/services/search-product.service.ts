import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

const API_URL = `${environment.BASE_URL}`;

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {

  public products: Array<Product> = this.getProductsFromLocalStorage();
  private productsSubject: BehaviorSubject<Array<Product>> = new BehaviorSubject(this.products);

  constructor(private http: HttpClient) { }

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
            this.setProductsFromLocalStorage();
          });          
        });
      });
    });
  }

  // GETS ========================================================
  getLaptopsService(): Observable<any> {
    return this.http.get(API_URL + "/products/type/laptops");
  }

  getLaptopAccessoryService(): Observable<any> {
    return this.http.get(API_URL + "/products/type/laptop_accessory");
  }

  getPcService(): Observable<any> {
    return this.http.get(API_URL + "/products/type/pc");
  }

  getMonitorService(): Observable<any> {
    return this.http.get(API_URL + "/products/type/monitor");
  }

  // Observable --------------------------------------------------
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