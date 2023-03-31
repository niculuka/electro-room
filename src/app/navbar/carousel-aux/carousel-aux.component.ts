import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselAuxData, CAROUSEL_AUX } from 'src/app/shared/data/carousel-aux.data';

@Component({
  selector: 'carousel-aux',
  templateUrl: './carousel-aux.component.html',
  styleUrls: ['./carousel-aux.component.css']
})
export class CarouselAuxComponent {

  auxCards: Array<CarouselAuxData> = CAROUSEL_AUX;
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
