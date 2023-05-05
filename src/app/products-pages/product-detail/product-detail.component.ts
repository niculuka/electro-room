import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesGallery } from 'src/app/shared/models/images-gallery.model';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent{

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  product: Product = new Product();

  productImages: Array<any> = [];
  currentImage: string = "";

  constructor(
    activatedRoute: ActivatedRoute,
    productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {
    let linkName = activatedRoute.snapshot.params["linkName"] as string
    productService.getProductByNameService(linkName).subscribe(data => {
      this.product = data;
      productService.getProductGalleryService(data.id).subscribe(items => {
        this.productImages = items;
        this.currentImage = items[0].image;
      })
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