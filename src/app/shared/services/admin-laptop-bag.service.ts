import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LaptopBag } from '../models/laptop-bag.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

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

  createLaptopBagService(bag: LaptopBag): Observable<any> {
    return this.http.post(ADMIN_URL, bag, { headers: this.getHeaders });
  }

  getAllLaptopBagsService(): Observable<any> {
    return this.http.get(ADMIN_URL, { headers: this.getHeaders })
  }  

  updateLaptopBagService(bag: LaptopBag): Observable<any> {
    return this.http.put(ADMIN_URL, bag, { headers: this.getHeaders });
  }

  deleteLaptopBagService(bag: LaptopBag): Observable<any> {
    return this.http.delete(`${ADMIN_URL}/${bag.bagId}`, { headers: this.getHeaders });
  }

}
