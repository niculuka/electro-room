import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SPECIFICATIONS, TYPE } from 'src/app/shared/enums/electro.enum';
import { Product, ProductSpecification } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-admin-update-specification',
  templateUrl: './admin-update-specification.component.html',
  styleUrls: ['./admin-update-specification.component.css']
})
export class AdminUpdateSpecificationComponent {

  @Input() product: Product = new Product();
  specification: ProductSpecification = new ProductSpecification();
  newSpecification: ProductSpecification = new ProductSpecification();

  @ViewChild('s') form!: NgForm;
  errorMessage: string = "";

  specificEnum = SPECIFICATIONS;

  type = TYPE;
  currentType: string = "";

  constructor(private adminProductService: AdminProductService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'].currentValue;
    if (product.id) {
      this.specification = product.specifications[0];
      this.currentType = product.type;
    }
  }

  updateSpecification() {
    this.specification = JSON.parse(JSON.stringify(this.specification), (key, value) => {
      return value === '' ? null : value;
    });
    this.product.specifications[0] = this.specification;
    this.adminProductService.updateProductService(this.product).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Could not update product!";
        console.log(err);
      }
    });
  }
}
