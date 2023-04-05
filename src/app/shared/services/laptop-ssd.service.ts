import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LaptopSsd } from '../models/laptop-ssd.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const API_URL = `${environment.BASE_URL}`;

@Injectable({
  providedIn: 'root'
})
export class LaptopSsdService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  getAllLaptopSsdsService(): Observable<any> {
    return this.http.get(API_URL + "/laptop-ssds");
  }

  getLaptopSsdsImagesService(ssdId: number): Observable<any> {
    return this.http.get(API_URL + "/images/laptop-ssds/" + ssdId);
  }

  getLaptopSsdsByCategoryService(category: string): Observable<any> {
    return this.http.get<LaptopSsd>(API_URL + "/laptop-ssds/" + category);
  }  

  getLaptopSsdByNameService(linkName: string): Observable<any> {
    return this.http.get<LaptopSsd>(API_URL + "/ssd/" + linkName);
  }  
}