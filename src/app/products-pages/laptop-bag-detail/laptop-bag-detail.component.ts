import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  slide: string = "left: 0";

  constructor(
    activatedRoute: ActivatedRoute,
    laptopBagService: LaptopBagService,
    private cartService: CartService,
    private router: Router,
  ) {
    let linkName = activatedRoute.snapshot.params["linkName"] as string
    laptopBagService.getLaptopBagByNameService(linkName).subscribe(data => {
      this.laptopBag = data;
    })
  }

  addToCart() {
    this.product.productId = this.laptopBag.bagId;
    this.product.name = this.laptopBag.name;
    this.product.linkName = this.laptopBag.linkName;
    this.product.description = this.laptopBag.description;
    this.product.brand = this.laptopBag.brand;
    this.product.category = this.laptopBag.category;
    this.product.src1 = this.laptopBag.src1;
    this.product.alt = this.laptopBag.alt;    
    this.product.price = this.laptopBag.price;
    
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
