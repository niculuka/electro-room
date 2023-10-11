import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CAROUSEL_OWL_LPT, CAROUSEL_OWL_PRODUCTS } from 'src/app/shared/data/carousel-lpt.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-carousel-owl',
  templateUrl: './carousel-owl.component.html',
  styleUrls: ['./carousel-owl.component.css']
})
export class CarouselOwlComponent implements OnInit {

  carousel: Array<Product> = [];
  carouselArray: Array<any> = [];

  @Input() productType1: string = "";
  @Input() productType2: string = "";
  @Input() productIds: Array<number> = [];

  dataArray: Array<number> = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProductsByTypeService(this.productType1).subscribe(data1 => {
      this.productService.getProductsByTypeService(this.productType2).subscribe(data2 => {
        const data = data1.concat(data2);
        for (let productId of this.productIds) {
          let foundProduct = data.find((product: any) => product.id === productId);
          this.carouselArray.push(foundProduct);
        }
        this.carousel = this.carouselArray;
        // console.log(this.carousel)
      });
    });
  }

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
