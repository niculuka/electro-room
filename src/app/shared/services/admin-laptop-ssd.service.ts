import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LaptopSsd } from '../models/laptop-ssd.model';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';

const ADMIN_URL = `${environment.BASE_URL}/admin/laptop-ssds`;

@Injectable({
  providedIn: 'root'
})
export class AdminLaptopSsdService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient
  ) {
    super(authService, http);
  }

  createLaptopSsdService(ssd: LaptopSsd): Observable<any> {
    return this.http.post(ADMIN_URL, ssd, { headers: this.getHeaders });
  }

  getAllLaptopSsdsService(): Observable<any> {
    return this.http.get(ADMIN_URL, { headers: this.getHeaders })
  }  

  updateLaptopSsdService(ssd: LaptopSsd): Observable<any> {
    return this.http.put(ADMIN_URL, ssd, { headers: this.getHeaders });
  }
  
  deleteLaptopSsdService(ssd: LaptopSsd): Observable<any> {
    return this.http.delete(`${ADMIN_URL}/${ssd.ssdId}`, { headers: this.getHeaders });
  }

}
