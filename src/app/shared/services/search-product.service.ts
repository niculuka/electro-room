import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LaptopBag } from '../models/laptop-bag.model';
import { LaptopCharger } from '../models/laptop-charger.model';
import { LaptopSsd } from '../models/laptop-ssd.model';
import { Laptop } from '../models/laptop.model';
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
    this.getAllLaptopsService().subscribe(laptop => {
      laptop.filter((data: Laptop) => {
        if (data.name.toLowerCase().includes(searchTerm)) {
          this.findAll.push(data)
        }
      });
      this.getAllBagsService().subscribe(bag => {
        bag.filter((data: LaptopBag) => {
          if (data.name.toLowerCase().includes(searchTerm)) {
            this.findAll.push(data)
          }
        });
        this.getAllChargersService().subscribe(charger => {
          charger.filter((data: LaptopCharger) => {
            if (data.name.toLowerCase().includes(searchTerm)) {
              this.findAll.push(data)
            }
          });
          this.getAllSsdsService().subscribe(ssd => {
            ssd.filter((data: LaptopSsd) => {
              if (data.name.toLowerCase().includes(searchTerm)) {
                this.findAll.push(data)
              }
            });
          });
          this.products = this.findAll;
          // console.log(this.products)
          this.setProductsFromLocalStorage();
        });
      });
    });
  }

  getAllLaptopsService(): Observable<any> {
    return this.http.get(API_URL + "/laptops");
  }

  getAllBagsService(): Observable<any> {
    return this.http.get(API_URL + "/laptop-bags");
  }

  getAllChargersService(): Observable<any> {
    return this.http.get(API_URL + "/laptop-chargers");
  }

  getAllSsdsService(): Observable<any> {
    return this.http.get(API_URL + "/laptop-ssds");
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