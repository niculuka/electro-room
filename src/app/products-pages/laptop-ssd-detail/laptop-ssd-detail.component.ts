import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  slide: string = "left: 0";

  constructor(
    activatedRoute: ActivatedRoute,
    laptopSsdService: LaptopSsdService,
    private cartService: CartService,
    private router: Router
  ) {
    let linkName = activatedRoute.snapshot.params["linkName"] as string
    laptopSsdService.getLaptopSsdByNameService(linkName).subscribe(data => {
      this.laptopSsd = data;
    })
  }

  addToCart() {
    this.product.productId = this.laptopSsd.ssdId;
    this.product.name = this.laptopSsd.name;
    this.product.linkName = this.laptopSsd.linkName;
    this.product.description = this.laptopSsd.description;
    this.product.brand = this.laptopSsd.brand;
    this.product.category = this.laptopSsd.category;
    this.product.src1 = this.laptopSsd.src1;
    this.product.alt = this.laptopSsd.alt;    
    this.product.price = this.laptopSsd.price;
    
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
