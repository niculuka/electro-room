import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';
import { Product } from '../models/product.model';
import { CATEGORY } from '../enums/electro.enum';

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

    getProductsByTypeService(type: string): Observable<any> {
        return this.http.get<Product>(API_URL + "/products/type/" + type);
    }

    getProductsByCategoryService(category: string): Observable<any> {
        return this.http.get<Product>(API_URL + "/products/category/" + category);
    }

    getProductsBySubcategoryService(subcategory: string): Observable<any> {
        return this.http.get<Product>(API_URL + "/products/subcategory/" + subcategory);
    }

    getProductByNameService(linkName: string): Observable<any> {
        return this.http.get<Product>(API_URL + "/product/linkname/" + linkName);
    }

}