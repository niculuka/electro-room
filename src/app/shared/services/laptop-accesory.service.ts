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
export class LaptopAccessoryService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  getLaptopBagsBySubcategoryService(category: string): Observable<any> {
    return this.http.get<LaptopBag>(API_URL + "/laptop_accessory/" + category);
  }

  getLaptopBagByNameService(linkName: string): Observable<any> {
    return this.http.get<LaptopBag>(API_URL + "/bag/" + linkName);
  }  
}