import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaptopCharger } from 'src/app/shared/models/laptop-charger.model';
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

  laptopCharger: LaptopCharger = new LaptopCharger();
  product: Product = new Product();
  slide: string = "left: 0";

  constructor(
    activatedRoute: ActivatedRoute,
    laptopChargerService: LaptopChargerService,
    private cartService: CartService,
    private router: Router
  ) {
    let linkName = activatedRoute.snapshot.params["linkName"] as string
    laptopChargerService.getLaptopChargerByNameService(linkName).subscribe(data => {
      this.laptopCharger = data;
    })
  }

  addToCart() {
    this.product.productId = this.laptopCharger.chargerId;
    this.product.name = this.laptopCharger.name;
    this.product.linkName = this.laptopCharger.linkName;
    this.product.description = this.laptopCharger.description;
    this.product.brand = this.laptopCharger.brand;
    this.product.category = this.laptopCharger.category;
    this.product.src1 = this.laptopCharger.src1;
    this.product.alt = this.laptopCharger.alt;    
    this.product.price = this.laptopCharger.price;
    
    this.cartService.addToCartService(this.product);
    this.router.navigateByUrl('/cart');
  }

  slide1() {
    this.slide = "left: 0;";
  }

  slide2() {
    this.slide = "left: -100%;";
  }

  slide3() {
    this.slide = "left: -200%;";
  }

  slide4() {
    this.slide = "left: -300%;";
  }
}