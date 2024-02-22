import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

const ADMIN_URL = `${environment.BASE_URL}/admin/products`;

@Injectable({
  providedIn: 'root'
})
export class AdminProductService extends BearerService {

  constructor(
    authService: AuthService,
    http: HttpClient,
    private router: Router,
  ) {
    super(authService, http);
  }  

  createProductService(product: Product): Observable<any> {
    return this.http.post(ADMIN_URL, product, { headers: this.getHeaders });
  }

  updateProductService(product: Product): Observable<any> {
    return this.http.put(ADMIN_URL, product, { headers: this.getHeaders });
  }


  deleteProductService(product: Product): Observable<any> {
    return this.http.delete(`${ADMIN_URL}/${product.id}`, { headers: this.getHeaders });
  }

  updateProdServ(product: Product) {
    product.urlKey = product.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    this.updateProductService(product).subscribe({
      next: () => {
        this.router
          .navigate(['/admin/product/update/' + product.urlKey])
          .then(() => window.location.reload());
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
