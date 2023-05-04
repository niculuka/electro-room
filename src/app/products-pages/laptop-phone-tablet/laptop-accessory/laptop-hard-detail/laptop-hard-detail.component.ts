import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesGallery } from 'src/app/shared/models/images-gallery.model';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { LaptopHardService } from 'src/app/shared/services/laptop-hard.service';

@Component({
  selector: 'app-laptop-hard-detail',
  templateUrl: './laptop-hard-detail.component.html',
  styleUrls: ['./laptop-hard-detail.component.css']
})
export class LaptopHardDetailComponent {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  laptopHard: Product = new Product();
  product: Product = new Product();
  
  laptopHardImages: Array<ImagesGallery> = [];
  currentImage: string = "";

  constructor(
    activatedRoute: ActivatedRoute,
    laptopHardService: LaptopHardService,
    private cartService: CartService,
    private router: Router
  ) {
    let linkName = activatedRoute.snapshot.params["linkName"] as string
    laptopHardService.getLaptopHardByNameService(linkName).subscribe(data => {
      this.laptopHard = data;
      // this.laptopHardImages = data.gallery;
      // this.currentImage = data.gallery[0].image;
    })
  }

  addToCart() {
    this.product.id = this.laptopHard.id;
    this.product.name = this.laptopHard.name;
    this.product.linkName = this.laptopHard.linkName;
    this.product.description = this.laptopHard.description;
    this.product.brand = this.laptopHard.brand;
    this.product.category = this.laptopHard.category;
    this.product.image = this.laptopHard.image;
    this.product.alt = this.laptopHard.alt;    
    this.product.price = this.laptopHard.price;
    
    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

  receiveCurrentImage($event: any) {
    this.currentImage = $event;
  }
  
}
