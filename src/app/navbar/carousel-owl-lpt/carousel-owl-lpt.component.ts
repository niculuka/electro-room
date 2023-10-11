import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-owl-lpt',
  templateUrl: './carousel-owl-lpt.component.html',
  styleUrls: ['./carousel-owl-lpt.component.css']
})
export class CarouselOwlLptLaptopComponent {

  productType1: string = "laptops";
  productType2: string = "laptop-accessory";
  productIds: Array<number> = [1, 42, 37, 5, 7, 68, 50, 38, 42, 10, 45, 63, 67, 30, 35, 20];
  // productIds: Array<number> = [31, 131, 661, 151, 31, 361, 151, 481, 541, 101, 151, 161, 611, 91, 471, 41];
}
