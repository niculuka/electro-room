import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INFO, Info } from 'src/app/shared/data/info.data';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { Product } from 'src/app/shared/models/product.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();
  info: Info[] = INFO;
  notFoundProduct: boolean = true;

  currentDepartment: string = "";
  currentType: string = "";
  currentCategory: string = "";
  currentLinkName: string = "";
  customBreadcrumb: Breadcrumb = new Breadcrumb();

  productImages: Array<any> = [];
  currentImage: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentDepartment = params.get('department') || "";
      this.currentType = params.get('type') || "";
      this.currentCategory = params.get('category') || "";
      this.currentLinkName = params.get('linkName') || "";
      this.createBreadcrumb();
      this.productService.getProductByNameService(this.currentLinkName).subscribe(data => {
        if (data) {
            this.notFoundProduct = false;
            this.product = data;
            this.productImages = this.product.gallery;
            this.currentImage = this.productImages[0].image;
        } else {
          this.notFoundProduct = true;
        }
      });
    });
  }

  createBreadcrumb() {
    this.customBreadcrumb = {
      customDepartment: this.currentDepartment,
      customType: this.currentType,
      customCategory: this.currentCategory,
      customLinkName: this.currentLinkName,
    };
    this.breadcrumbService.handleBreadcrumbService(this.customBreadcrumb);
  }

  addToCart() {
    this.cartService.addToCartService(this.product);
  }

  addToFavorites() {
    this.favoriteService.addToFavoritesService(this.product);
  }

  receiveCurrentImage($event: any) {
    this.currentImage = $event;
  }

}