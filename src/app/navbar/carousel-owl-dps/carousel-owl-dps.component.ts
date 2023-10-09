import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-carousel-owl-dps',
  templateUrl: './carousel-owl-dps.component.html',
  styleUrls: ['./carousel-owl-dps.component.css']
})
export class CarouselOwlDpsComponent {

  protected carouselDps: Array<Product> = [];
  productIds: Array<number> = [72, 84, 74, 80, 76, 81, 75, 78, 82, 73, 83, 85, 71];
  pc: string = "pc";
  monitors: string = "monitor";

  constructor(
    private productService: ProductService,
  ) {
    this.productService.getProductsByTypeService(this.pc).subscribe(data1 => {
      this.productService.getProductsByTypeService(this.monitors).subscribe(data2 => {
        let data = data1.concat(data2);
        for (let productId of this.productIds) {
          let foundProduct = data.find((product: any) => product.id === productId);
          this.carouselDps.push(foundProduct);
        }
        // console.log(this.carouselDps)
      });
    });
  }


}
