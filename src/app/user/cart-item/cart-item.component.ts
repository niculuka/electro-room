import { Component, Input } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input()
  order!: Order;

}
