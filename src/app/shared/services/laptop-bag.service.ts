import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LaptopBag } from '../models/laptop-bag.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const API_URL = `${environment.BASE_URL}`;

@Injectable({
  providedIn: 'root'
})
export class LaptopBagService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  getAllLaptopBagsService(): Observable<any> {
    return this.http.get(API_URL + "/laptop-bags");
  }

  getLaptopBagsByCategoryService(category: string): Observable<any> {
    return this.http.get<LaptopBag>(API_URL + "/laptop-bags/" + category);
  }  

  getLaptopBagByNameService(linkName: string): Observable<any> {
    return this.http.get<LaptopBag>(API_URL + "/bag/" + linkName);
  }  
}