import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LaptopCharger } from '../models/laptop-charger.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const ADMIN_URL = `${environment.BASE_URL}/admin/laptop-chargers`;

@Injectable({
  providedIn: 'root'
})
export class AdminLaptopChargerService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  createLaptopChargerService(charger: LaptopCharger): Observable<any> {
    return this.http.post(ADMIN_URL, charger, { headers: this.getHeaders });
  }

  getAllLaptopChargersService(): Observable<any> {
    return this.http.get(ADMIN_URL, { headers: this.getHeaders })
  }  

  updateLaptopChargerService(charger: LaptopCharger): Observable<any> {
    return this.http.put(ADMIN_URL, charger, { headers: this.getHeaders });
  }

  deleteLaptopChargerService(charger: LaptopCharger): Observable<any> {
    return this.http.delete(`${ADMIN_URL}/${charger.chargerId}`, { headers: this.getHeaders });
  }

}
