import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../../shared/models/cart-item.model';
import { Order } from '../../shared/models/order.model';
import { AuthService } from '../../shared/services/auth.service';
import { OrderService } from '../../shared/services/order.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  orders: Array<Order> = [];
  order: Order = new Order();

  items: Array<CartItem> = [];
  item!: CartItem;

  id!: any;
  foundOrders: boolean = false;

  constructor(
    private orderService: OrderService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private location: Location,
  ) {
    this.authService.currentUser.subscribe(data => {
      this.id = data.id;
    })
  }

  ngOnInit(): void {
    this.orderService.getMyOrdersService(this.id).subscribe(data => {
      if (data) {
        this.orders = data;
        this.foundOrders = true;
      }
      else this.foundOrders = false;
    })
  }

  goBack() {
    this.location.back();
  }

  reOrder() {
    this.toastrService.warning("UNDER COSTRUCTION!")
  }

}
