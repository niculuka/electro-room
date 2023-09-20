import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselLaptopData, CAROUSEL_LAPTOP } from 'src/app/shared/data/carousel-laptop.data';

@Component({
  selector: 'app-carousel-laptop',
  templateUrl: './carousel-laptop.component.html',
  styleUrls: ['./carousel-laptop.component.css']
})
export class CarouselLaptopComponent {

  laptopCards: Array<CarouselLaptopData> = CAROUSEL_LAPTOP;
  isDragging: boolean = false;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,    
    navSpeed: 700,
    navText: ['《', '》'],
    responsive: {
      0: {
        items: 1
      },
      316: {
        items: 2
      },
      616: {
        items: 3
      },
      816: {
        items: 4
      },
      996: {
        items: 5
      },
      1216: {
        items: 6
      }
    },
    dots: false,
    nav: true
  }

}
