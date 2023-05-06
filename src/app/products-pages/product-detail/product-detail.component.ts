import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  currentType: any = "";
  currentLinkName: any = "";

  productImages: Array<any> = [];
  currentImage: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentType = this.activatedRoute.snapshot.params["type"] as string
    this.currentLinkName = this.activatedRoute.snapshot.params["linkName"] as string
    this.productService.getProductByNameService(this.currentLinkName).subscribe(data => {
      if (data) {
        let type = data.type.replace(/_/g, "-").toLowerCase();
        if (type === this.currentType) {
          this.notFoundProduct = true;
          this.product = data;
          this.productService.getProductGalleryService(data.id).subscribe(items => {
            this.productImages = items;
            this.currentImage = items[0].image;
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          })
        } else {
          this.notFoundProduct = false;
        }
      } else {
        this.notFoundProduct = false;
      }

    })
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