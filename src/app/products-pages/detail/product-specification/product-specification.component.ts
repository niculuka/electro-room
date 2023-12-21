import { Component, Input, OnInit } from '@angular/core';
import { SPECIFICATIONS } from 'src/app/shared/enums/electro.enum';
import { Product, ProductSpecification } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-specification',
  templateUrl: './product-specification.component.html',
  styleUrls: ['./product-specification.component.css']
})
export class ProductSpecificationComponent implements OnInit {  

  @Input() product: Product = new Product();
  ps: ProductSpecification = new ProductSpecification();

  name = SPECIFICATIONS;

  ngOnInit(): void {
    this.ps = this.product.specifications[0];
    // console.log (this.product);
  }

}
