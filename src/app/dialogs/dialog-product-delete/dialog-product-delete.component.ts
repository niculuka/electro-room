import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminProductComponent } from 'src/app/admin/admin-product/admin-product.component';

@Component({
  selector: 'app-dialog-product-delete',
  templateUrl: './dialog-product-delete.component.html',
  styleUrls: ['./dialog-product-delete.component.css']
})
export class DialogProductDeleteComponent {

  product: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminProductComponent) {
    this.product = data;
  }

}
