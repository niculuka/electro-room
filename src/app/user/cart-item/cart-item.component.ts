import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { DELIVERY } from '../../shared/constants/const';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input()
  order!: Order;

}
