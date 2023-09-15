import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { FavoriteService } from 'src/app/shared/services/favorite.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  product: Product = new Product();
  notFoundProduct: boolean = true;

  currentLevel: string = "";
  currentType: string = "";
  currentLinkName: string = "";

  productImages: Array<any> = [];
  currentImage: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private favoriteService: FavoriteService,
    private router: Router,    
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentLevel = params.get('level') || "";
      this.currentType = params.get('type') || "";
      this.currentLinkName = params.get('linkName') || "";

      this.productService.getProductByNameService(this.currentLinkName).subscribe(data => {
        if (data) {
          let level = data.level.replace(/_/g, "-").toLowerCase();
          let type = data.type.replace(/_/g, "-").toLowerCase();

          if (this.currentType === CATEGORY.LAPTOP.replace(/_/g, "-").toLowerCase()) {
            this.currentType = type;
          }
          if (level === this.currentLevel && type === this.currentType) {
            this.notFoundProduct = true;
            this.product = data;
            this.productImages = this.product.gallery;
            this.currentImage = this.productImages[0].image;
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
    this.product.price = this.product.price;

    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

  addToFavorites() {
    this.product.id = this.product.id;
    this.product.name = this.product.name;
    this.product.linkName = this.product.linkName;
    this.product.description = this.product.description;
    this.product.brand = this.product.brand;
    this.product.category = this.product.category;
    this.product.image = this.product.image;
    this.product.price = this.product.price;

    this.favoriteService.addToFavoritesService(this.product);
    // this.router.navigateByUrl('/favorites');
  }

  receiveCurrentImage($event: any) {
    this.currentImage = $event;
  }

}