import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Product, ProductDescription } from 'src/app/shared/models/product.model';
import { BLANK_PHOTO } from 'src/app/shared/constants/const';
import { NgForm } from '@angular/forms';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-admin-update-description',
  templateUrl: './admin-update-description.component.html',
  styleUrls: ['./admin-update-description.component.css']
})
export class AdminUpdateDescriptionComponent implements OnChanges {

  @Input() product: Product = new Product();
  descriptions: Array<ProductDescription> = [];
  description: ProductDescription = new ProductDescription();

  @ViewChild('d') form!: NgForm;
  errorMessage: string = "";

  constructor(private adminProductService: AdminProductService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'].currentValue;
    if (product.id) this.descriptions = product.descriptions;
  }

  addDescription() {
    this.description = new ProductDescription();
    this.description.title = "Titlu";
    this.description.text = "Text";
    this.description.image = BLANK_PHOTO;
    this.description.product_id_fk = this.product.id;
    this.descriptions.push(this.description);
  }

  removeDescription(description: any) {
    this.descriptions = this.descriptions.filter(item => item != description);
  }

  updateDescription() {
    this.product.descriptions = this.descriptions;
    this.adminProductService.updateProductService(this.product).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Nu s-au putut salva descrierile!";
        console.log(err);
      }
    });
  }

}
