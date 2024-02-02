import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminOrderComponent } from '../../admin/admin-order/admin-order.component';

@Component({
  selector: 'app-dialog-order-delete',
  templateUrl: './dialog-order-delete.component.html',
  styleUrls: ['./dialog-order-delete.component.css']
})
export class DialogOrderDeleteComponent {

  order: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AdminOrderComponent) {
    this.order = data;
  }

}
