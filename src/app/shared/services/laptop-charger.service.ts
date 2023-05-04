import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';
import { Product } from '../models/product.model';

const API_URL = `${environment.BASE_URL}`;

@Injectable({
  providedIn: 'root'
})
export class LaptopChargerService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  getAllLaptopChargersService(): Observable<any> {
    return this.http.get<Product>(API_URL + "/products/type/charger");
  }

  getLaptopChargersByCategoryService(category: string): Observable<any> {
    return this.http.get<Product>(API_URL + "/products/category/" + category);
  }

  getLaptopChargerByNameService(linkName: string): Observable<any> {
    return this.http.get<Product>(API_URL + "/product/linkname/" + linkName);
  }

  getLaptopChargersImagesService(id: number): Observable<any> {
    return this.http.get<Product>(API_URL + "/product/gallery/" + id);
  }
}