import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.BASE_URL}`;

@Injectable({
    providedIn: 'root'
})
export class AdminDemoService {

    constructor(
        private http: HttpClient
    ) { }

    getAllDemoLaptopsService(): Observable<any> {
        return this.http.get(API_URL + "/laptops");
    }

    getAllDemoBagsService(): Observable<any> {
        return this.http.get(API_URL + "/laptop-bags");
    }

    getAllDemoChargersService(): Observable<any> {
        return this.http.get(API_URL + "/laptop-chargers");
    }

    getAllDemoSsdsService(): Observable<any> {
        return this.http.get(API_URL + "/laptop-ssds");
    }

    getAllDemoOrdersService(): Observable<any> {
        return this.http.get(API_URL + "/admin/demo/electro-orders");
    }

    getAllDemoUsersService(): Observable<any> {
        return this.http.get(API_URL + "/admin/demo/users");
    }
}