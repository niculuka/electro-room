import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductSpecification } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-specs',
  templateUrl: './product-specs.component.html',
  styleUrls: ['./product-specs.component.css']
})
export class ProductSpecsComponent implements OnInit {  

  @Input() product: Product = new Product();
  sp: ProductSpecification = new ProductSpecification();

  ngOnInit(): void {
    this.sp = this.product.specifications[0];
    // console.log (this.product);
  }

}
