import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';
import { Product } from '../models/product.model';

const API_URL = `${environment.BASE_URL}`;

@Injectable({
    providedIn: 'root'
})
export class ProductService extends BearerService {

    constructor(
        authService: AuthService,
        http: HttpClient
    ) {
        super(authService, http);
    }

    getAllProductsService(): Observable<any> {
        return this.http.get(API_URL + "/products");
    }

    getProductsByCategoryService(category: string): Observable<any> {
        return this.http.get<Product>(API_URL + "/products/" + category);
    }

    getProductByNameService(linkName: string): Observable<any> {
        return this.http.get<Product>(API_URL + "/prod/" + linkName);
    }

}