import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesGallery } from 'src/app/shared/models/images-gallery.model';
import { Laptop } from 'src/app/shared/models/laptop.model';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { LaptopService } from 'src/app/shared/services/laptop.service';

@Component({
  selector: 'app-laptop-detail',
  templateUrl: './laptop-detail.component.html',
  styleUrls: ['./laptop-detail.component.css']
})
export class LaptopDetailComponent {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  laptop: Laptop = new Laptop();  
  product: Product = new Product();

  laptopImages: Array<ImagesGallery> = [];
  currentImage: string = "";
  
  constructor(
    activatedRoute: ActivatedRoute,
    laptopService: LaptopService,
    private cartService: CartService,
    private router: Router
  ) {
    let linkName = activatedRoute.snapshot.params["linkName"] as string
    laptopService.getLaptopByNameService(linkName).subscribe(data => {
      this.laptop = data;
      // this.laptopImages = data.gallery;
      // this.currentImage = data.gallery[0].image;
    })
  }

  addToCart() {
    this.product.id = this.laptop.laptopId;
    this.product.name = this.laptop.name;
    this.product.linkName = this.laptop.linkName;
    this.product.description = this.laptop.description;
    this.product.brand = this.laptop.brand;
    this.product.category = this.laptop.category;
    this.product.image = this.laptop.image;
    this.product.alt = this.laptop.alt;
    this.product.price = this.laptop.price;

    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

  receiveCurrentImage($event: any) {
    this.currentImage = $event;
  }

}