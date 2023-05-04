import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesGallery } from 'src/app/shared/models/images-gallery.model';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { LaptopChargerService } from 'src/app/shared/services/laptop-charger.service';

@Component({
  selector: 'app-laptop-charger-detail',
  templateUrl: './laptop-charger-detail.component.html',
  styleUrls: ['./laptop-charger-detail.component.css']
})
export class LaptopChargerDetailComponent {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  laptopCharger: Product = new Product();
  product: Product = new Product();
  
  laptopChargerImages: Array<ImagesGallery> = [];
  currentImage: string = "";

  constructor(
    activatedRoute: ActivatedRoute,
    laptopChargerService: LaptopChargerService,
    private cartService: CartService,
    private router: Router
  ) {
    let linkName = activatedRoute.snapshot.params["linkName"] as string
    laptopChargerService.getLaptopChargerByNameService(linkName).subscribe(data => {
      this.laptopCharger = data;
      // this.laptopChargerImages = data.gallery;
      // this.currentImage = data.gallery[0].image;
    })
  }

  addToCart() {
    this.product.id = this.laptopCharger.id;
    this.product.name = this.laptopCharger.name;
    this.product.linkName = this.laptopCharger.linkName;
    this.product.description = this.laptopCharger.description;
    this.product.brand = this.laptopCharger.brand;
    this.product.category = this.laptopCharger.category;
    this.product.image = this.laptopCharger.image;
    this.product.alt = this.laptopCharger.alt;    
    this.product.price = this.laptopCharger.price;
    
    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

  receiveCurrentImage($event: any) {
    this.currentImage = $event;
  }
  
}