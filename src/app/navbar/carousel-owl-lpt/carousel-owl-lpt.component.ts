import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-carousel-owl-lpt',
  templateUrl: './carousel-owl-lpt.component.html',
  styleUrls: ['./carousel-owl-lpt.component.css']
})
export class CarouselOwlLptLaptopComponent {

  protected carouselLpt: Array<Product> = [];
  productIds: Array<number> = [1, 32, 27, 5, 18, 58, 33, 28, 42, 10, 15, 22, 24, 30, 35, 6];
  laptops: string = "laptops";
  laptopAccessories: string = "laptop-accessory";

  constructor(
    private productService: ProductService,
  ) {
    this.productService.getProductsByTypeService(this.laptops).subscribe(data1 => {
      this.productService.getProductsByTypeService(this.laptopAccessories).subscribe(data2 => {
        let data = data1.concat(data2);
        for (let productId of this.productIds) {
          let foundProduct = data.find((product: any) => product.id === productId);
          this.carouselLpt.push(foundProduct);
        }
        // console.log(this.carouselLpt)
      });
    });
  }


}
