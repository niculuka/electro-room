import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-carousel-owl',
  templateUrl: './carousel-owl.component.html',
  styleUrls: ['./carousel-owl.component.css']
})
export class CarouselOwlComponent {

  @Input() carousel: Array<Product> = [];
  topFavorite: CATEGORY = CATEGORY.TOP_FAVORITE;
  topFavoriteRo: CATEGORY = CATEGORY.TOP_FAVORITE_RO;
  superPrice: CATEGORY = CATEGORY.SUPER_PRICE;
  superPriceRo: CATEGORY = CATEGORY.SUPER_PRICE_RO;

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
