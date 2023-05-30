import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminProductComponent } from 'src/app/admin/admin-product/admin-product.component';

@Component({
  selector: 'app-dialog-product-delete',
  templateUrl: './dialog-product-delete.component.html',
  styleUrls: ['./dialog-product-delete.component.css']
})
export class DialogProductDeleteComponent {

  laptop: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminProductComponent) {
    this.laptop = data;
  }

}
