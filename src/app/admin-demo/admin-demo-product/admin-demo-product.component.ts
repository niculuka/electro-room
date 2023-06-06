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

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected products: Array<Product> = [];
  protected product: Product = new Product();

  errorMessage: string = "";
  currentLevel: string = "";

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentLevel = params.get('product') || "";
      this.productService.getProductsByLevelService(this.currentLevel).subscribe(data => {
        this.products = data;
      });
    });
  }

  noAction() {
    alert("Esti in DEMO-MODE. Pentru acces complet, contacteaza proprietarul!")
  }

  viewProduct(product: Product) {
    this.router.navigate([
      '/lpt/'
      + product.level.replace(/_/g, "-").toLowerCase()
      + '/'
      + product.type.replace(/_/g, "-").toLowerCase()
      + '/'
      + product.linkName
    ]);
  }
}
