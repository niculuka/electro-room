import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';
import { Product } from '../models/product.model';

const ADMIN_URL = `${environment.BASE_URL}/admin/laptop-hards`;

@Injectable({
  providedIn: 'root'
})
export class AdminLaptopHardService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  createLaptopHardService(hard: Product): Observable<any> {
    return this.http.post(ADMIN_URL, hard, { headers: this.getHeaders });
  }

  getAllLaptopHardsService(): Observable<any> {
    return this.http.get(ADMIN_URL, { headers: this.getHeaders })
  }  

  updateLaptopHardService(hard: Product): Observable<any> {
    return this.http.put(ADMIN_URL, hard, { headers: this.getHeaders });
  }
  
  deleteLaptopHardService(hard: Product): Observable<any> {
    return this.http.delete(`${ADMIN_URL}/${hard.id}`, { headers: this.getHeaders });
  }

}
