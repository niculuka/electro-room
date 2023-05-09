import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  product: Product = new Product();
  notFoundProduct: boolean = true;

  currentLevel: any = "";
  currentType: any = "";
  currentLinkName: any = "";

  productImages: Array<any> = [];
  currentImage: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentLevel = params.get('level') || "";
      this.currentType = params.get('type') || "";
      this.currentLinkName = params.get('linkName') || "";

      const breadcrumb = {
        customLevel: this.currentLevel.charAt(0).toUpperCase() + this.currentLevel.slice(1),
        customType: this.currentType.charAt(0).toUpperCase() + this.currentType.slice(1),
        customLinkName: this.currentLinkName.charAt(0).toUpperCase() + this.currentLinkName.slice(1),
      };
      this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);

      this.productService.getProductByNameService(this.currentLinkName).subscribe(data => {
        if (data) {
          let level = data.level.toLowerCase();
          let type = data.type.replace(/_/g, "-").toLowerCase();
          let category = data.category.replace(/_/g, "-").toLowerCase();
          if (level === this.currentLevel && (type === this.currentType || category === this.currentType)) {
            this.notFoundProduct = true;
            this.product = data;
            
            this.productService.getProductGalleryService(data.id).subscribe(items => {
              this.productImages = items;
              this.currentImage = items[0].image;
            })
          } else {
            this.notFoundProduct = false;
          }
        } else {
          this.notFoundProduct = false;
        }
      });
    });
  }

  addToCart() {
    this.product.id = this.product.id;
    this.product.name = this.product.name;
    this.product.linkName = this.product.linkName;
    this.product.description = this.product.description;
    this.product.brand = this.product.brand;
    this.product.category = this.product.category;
    this.product.image = this.product.image;
    this.product.alt = this.product.alt;
    this.product.price = this.product.price;

    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

  receiveCurrentImage($event: any) {
    this.currentImage = $event;
  }

}