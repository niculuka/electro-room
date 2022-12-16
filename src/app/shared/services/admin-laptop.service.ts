import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Laptop } from '../models/laptop.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const ADMIN_URL = `${environment.BASE_URL}/admin/laptops`;

@Injectable({
  providedIn: 'root'
})
export class AdminLaptopService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  getAllLaptopsService(): Observable<any> {
    return this.http.get(ADMIN_URL, { headers: this.getHeaders })
  }

  // getLaptopByIdService(laptop: Laptop): Observable<any> {
  //   return this.http.get(`${ADMIN_URL}/${laptop.laptopId}`, { headers: this.getHeaders })
  // }

  createLaptopService(laptop: Laptop): Observable<any> {
    return this.http.post(ADMIN_URL, laptop, { headers: this.getHeaders });
  }

  updateLaptopService(laptop: Laptop): Observable<any> {
    return this.http.put(ADMIN_URL, laptop, { headers: this.getHeaders });
  }


  deleteLaptopService(laptop: Laptop): Observable<any> {
    return this.http.delete(`${ADMIN_URL}/${laptop.laptopId}`, { headers: this.getHeaders });
  }

}
