import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from 'src/app/shared/models/laptop.model';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { LaptopService } from 'src/app/shared/services/laptop.service';

@Component({
  selector: 'app-laptop-detail',
  templateUrl: './laptop-detail.component.html',
  styleUrls: ['./laptop-detail.component.css']
})
export class LaptopDetailComponent{

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  laptop: Laptop = new Laptop();
  product: Product = new Product();
  slide: string = "left: 0";

  constructor(
    activatedRoute: ActivatedRoute,
    laptopService: LaptopService,
    private cartService: CartService,
    private router: Router
  ) {
    let linkName = activatedRoute.snapshot.params["linkName"] as string
    laptopService.getLaptopByNameService(linkName).subscribe(data => {
      this.laptop = data;
    })
  }

  addToCart() {
    this.product.productId = this.laptop.laptopId;
    this.product.name = this.laptop.name;
    this.product.linkName = this.laptop.linkName;
    this.product.description = this.laptop.description;
    this.product.brand = this.laptop.brand;
    this.product.category = this.laptop.category;
    this.product.src1 = this.laptop.src1;
    this.product.alt = this.laptop.alt;    
    this.product.price = this.laptop.price;
    
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
