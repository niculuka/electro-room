import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-admin-demo-product',
  templateUrl: './admin-demo-product.component.html',
  styleUrls: ['./admin-demo-product.component.css']
})
export class AdminDemoProductComponent implements OnInit {

  protected products: Array<Product> = [];
  protected product: Product = new Product();

  errorMessage: string = "";
  currentType: string = "";

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentType = params.get('product') || "";
      this.productService.getProductsByTypeService(this.currentType).subscribe(data => {
        this.products = data;
      });
    });
  }

  noAction() {
    alert("Esti DEMO / USER. Pentru ADMIN, contacteaza proprietarul!");
  }

  viewProduct(product: Product) {
    this.router.navigate([
      '/lpt/'
      + product.type.replace(/_/g, "-").toLowerCase()
      + '/'
      + product.category.replace(/_/g, "-").toLowerCase()
      + '/'
      + product.urlKey
    ]);
  }
}
