import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-owl-lpt',
  templateUrl: './carousel-owl-lpt.component.html',
  styleUrls: ['./carousel-owl-lpt.component.css']
})
export class CarouselOwlLptLaptopComponent {

  carouselTitle:string = "Laptopuri si Accesorii:";
  productType1: string = "laptops";
  productType2: string = "laptop-accessory";
  productIds: Array<number> = [1, 42, 37, 5, 7, 68, 50, 38, 42, 10, 45, 63, 67, 30, 35, 20];
}
