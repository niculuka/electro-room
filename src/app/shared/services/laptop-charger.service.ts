import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LaptopCharger } from '../models/laptop-charger.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

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
    return this.http.get(API_URL + "/laptop-chargers");
  }

  getLaptopChargersByCategoryService(category: string): Observable<any> {
    return this.http.get<LaptopCharger>(API_URL + "/laptop-chargers/" + category);
  }  

  getLaptopChargerByNameService(linkName: string): Observable<any> {
    return this.http.get<LaptopCharger>(API_URL + "/chg/" + linkName);
  }  
}