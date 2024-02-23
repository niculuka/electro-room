import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { BearerService } from './bearer.service';
import { Product, ProductDescription, ProductGallery, ProductSpecification } from '../models/product.model';
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

  product: Product = new Product();
  specification: ProductSpecification = new ProductSpecification();

  setProductService(product: Product) {
    let getProduct = JSON.stringify(product)
    this.product = JSON.parse(getProduct);
  }

  updateMainService(product: Product) {
    this.product.name = product.name;
    this.product.urlKey = product.urlKey;
    this.product.description = product.description;
    this.product.type = product.type;
    this.product.typeUrlKey = product.typeUrlKey;
    this.product.category = product.category;
    this.product.categoryUrlKey = product.categoryUrlKey;
    this.product.subcategory = product.subcategory;
    this.product.brand = product.brand;
    this.product.image = product.image;
    this.product.available = product.available;
    this.product.badge = product.badge;
    this.product.favorite = product.favorite;
    this.product.compare = product.compare;
    this.product.price = product.price;
    this.updateProduct();
  }

  updateGalleryService(gallery: Array<ProductGallery>) {
    this.product.gallery = gallery;
    this.updateProduct();
  }

  updateDescriptionService(descriptions: Array<ProductDescription>) {
    this.product.descriptions = descriptions;
    this.updateProduct();
  }

  updateSpecificationService(specification: ProductSpecification) {
    this.product.specification = specification;
    this.updateProduct();
  }

  updateProduct() {
    this.updateProductService(this.product).subscribe({
      next: () => {
        this.router
          .navigate(['/admin/product/update/' + this.product.urlKey])
          .then(() => window.location.reload());
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
