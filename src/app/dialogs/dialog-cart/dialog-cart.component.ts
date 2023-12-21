import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartComponent } from 'src/app/user/cart/cart.component';

@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.css']
})
export class DialogCartComponent {

  getData: any;

  constructor(@Inject(MAT_DIALOG_DATA) private data: CartComponent) {
    this.getData = data;
  }
}
