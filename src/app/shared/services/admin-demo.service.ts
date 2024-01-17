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

    getAllDemoOrdersService(): Observable<any> {
        return this.http.get(API_URL + "/admin/demo/orders");
    }

    getAllDemoUsersService(): Observable<any> {
        return this.http.get(API_URL + "/admin/demo/users");
    }
}