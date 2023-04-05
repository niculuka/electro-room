import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Laptop } from '../models/laptop.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const API_URL = `${environment.BASE_URL}`;

@Injectable({
  providedIn: 'root'
})
export class LaptopService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  getAllLaptopsService(): Observable<any> {
    return this.http.get(API_URL + "/laptops");
  }

  getLaptopImagesService(laptopId: number): Observable<any> {
    return this.http.get(API_URL + "/images/laptops/" + laptopId);
  }

  getLaptopsByCategoryService(category: string): Observable<any> {
    return this.http.get<Laptop>(API_URL + "/laptops/" + category);
  }  

  getLaptopByNameService(linkName: string): Observable<any> {
    return this.http.get<Laptop>(API_URL + "/lap/" + linkName);
  }  
}