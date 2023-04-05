import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesGallery } from 'src/app/shared/models/images-gallery.model';
import { LaptopSsd } from 'src/app/shared/models/laptop-ssd.model';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { LaptopSsdService } from 'src/app/shared/services/laptop-ssd.service';

@Component({
  selector: 'app-laptop-ssd-detail',
  templateUrl: './laptop-ssd-detail.component.html',
  styleUrls: ['./laptop-ssd-detail.component.css']
})
export class LaptopSsdDetailComponent {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  laptopSsd: LaptopSsd = new LaptopSsd();
  product: Product = new Product();
  
  laptopSsdImages: Array<ImagesGallery> = [];
  index: number = 0;
  currentImage: string = "";

  constructor(
    activatedRoute: ActivatedRoute,
    laptopSsdService: LaptopSsdService,
    private cartService: CartService,
    private router: Router
  ) {
    let linkName = activatedRoute.snapshot.params["linkName"] as string
    laptopSsdService.getLaptopSsdByNameService(linkName).subscribe(data => {
      this.laptopSsd = data;
      laptopSsdService.getLaptopSsdsImagesService(data.ssdId).subscribe(result => {
        this.laptopSsdImages = result;
        this.currentImage = this.laptopSsdImages[0].image
      })
    })
  }

  addToCart() {
    this.product.productId = this.laptopSsd.ssdId;
    this.product.name = this.laptopSsd.name;
    this.product.linkName = this.laptopSsd.linkName;
    this.product.description = this.laptopSsd.description;
    this.product.brand = this.laptopSsd.brand;
    this.product.category = this.laptopSsd.category;
    this.product.image = this.laptopSsd.image;
    this.product.alt = this.laptopSsd.alt;    
    this.product.price = this.laptopSsd.price;
    
    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

  receiveIndex($event: any) {
    this.currentImage = $event;
  }
  
}
