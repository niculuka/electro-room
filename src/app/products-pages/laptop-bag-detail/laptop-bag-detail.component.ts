import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesGallery } from 'src/app/shared/models/images-gallery.model';
import { LaptopBag } from 'src/app/shared/models/laptop-bag.model';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { LaptopBagService } from 'src/app/shared/services/laptop-bag.service';

@Component({
  selector: 'app-laptop-bag-detail',
  templateUrl: './laptop-bag-detail.component.html',
  styleUrls: ['./laptop-bag-detail.component.css']
})
export class LaptopBagDetailComponent {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  laptopBag: LaptopBag = new LaptopBag();
  product: Product = new Product();
  
  laptopBagImages: Array<ImagesGallery> = [];
  index: number = 0;
  currentImage: string = "";

  constructor(
    activatedRoute: ActivatedRoute,
    laptopBagService: LaptopBagService,
    private cartService: CartService,
    private router: Router,
  ) {
    let linkName = activatedRoute.snapshot.params["linkName"] as string
    laptopBagService.getLaptopBagByNameService(linkName).subscribe(data => {
      this.laptopBag = data;
      laptopBagService.getLaptopBagsImagesService(data.bagId).subscribe(result => {
        this.laptopBagImages = result;
        this.currentImage = this.laptopBagImages[0].image
      })
    })
  }

  addToCart() {
    this.product.productId = this.laptopBag.bagId;
    this.product.name = this.laptopBag.name;
    this.product.linkName = this.laptopBag.linkName;
    this.product.description = this.laptopBag.description;
    this.product.brand = this.laptopBag.brand;
    this.product.category = this.laptopBag.category;
    this.product.image = this.laptopBag.image;
    this.product.alt = this.laptopBag.alt;
    this.product.price = this.laptopBag.price;

    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

  receiveIndex($event: any) {
    this.currentImage = $event;
  }

}
