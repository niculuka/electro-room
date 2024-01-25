import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-carousel-owl',
  templateUrl: './carousel-owl.component.html',
  styleUrls: ['./carousel-owl.component.css']
})
export class CarouselOwlComponent implements OnInit {

  @Input() title: string = "";
  @Input() type1: string = "";
  @Input() type2: string = "";
  @Input() ids: Array<number> = [];

  products: Array<Product> = [];
  category = CATEGORY;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsByTypeService(this.type1).subscribe(data1 => {
      this.productService.getProductsByTypeService(this.type2).subscribe(data2 => {
        const data = data1.concat(data2);
        for (let id of this.ids) {
          let foundProduct = data.find((prod: any) => prod.id === id);
          this.products.push(foundProduct);
        }
      });
    });
  }

  isDragging: boolean = false;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    // margin: 6,
    navSpeed: 700,
    navText: ['《', '》'],
    responsive: {
      0: {
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
    dots: true,
    nav: false
  }
}
