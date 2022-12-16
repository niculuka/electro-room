import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../shared/models/cart-item.model';
import { Order } from '../../shared/models/order.model';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'order-user-detail',
  templateUrl: './order-user-detail.component.html',
  styleUrls: ['./order-user-detail.component.css']
})
export class OrderUserDetailComponent implements OnInit {  

  @Input()
  order: Order = new Order();

  @Input()
  items: Array<CartItem> = [];

  @Input()
  user: User = new User();

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
