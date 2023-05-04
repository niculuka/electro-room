import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';
import { Product } from '../models/product.model';

const ADMIN_URL = `${environment.BASE_URL}/admin/laptop-bags`;

@Injectable({
  providedIn: 'root'
})
export class AdminLaptopBagService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  createLaptopBagService(bag: Product): Observable<any> {
    return this.http.post(ADMIN_URL, bag, { headers: this.getHeaders });
  }

  getAllLaptopBagsService(): Observable<any> {
    return this.http.get(ADMIN_URL, { headers: this.getHeaders })
  }  

  updateLaptopBagService(bag: Product): Observable<any> {
    return this.http.put(ADMIN_URL, bag, { headers: this.getHeaders });
  }

  deleteLaptopBagService(bag: Product): Observable<any> {
    return this.http.delete(`${ADMIN_URL}/${bag.id}`, { headers: this.getHeaders });
  }

}
