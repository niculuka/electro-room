import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartItem } from '../../shared/models/cart-item.model';
import { ORDER_STATUS } from '../../shared/enums/electro.enum';
import { Order } from '../../shared/models/order.model';
import { AdminDemoService } from 'src/app/shared/services/admin-demo.service';

@Component({
  selector: 'app-admin-demo-order',
  templateUrl: './admin-demo-order.component.html',
  styleUrls: ['./admin-demo-order.component.css']
})
export class AdminDemoOrderComponent implements OnInit {

  orders: Array<Order> = [];
  order: Order = new Order();

  items: Array<CartItem> = [];
  item!: CartItem;

  status: string = "";

  constructor(
    private adminDemoService: AdminDemoService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminDemoService.getAllDemoOrdersService().subscribe(data => {
      this.orders = data;
    });
  }

  getStatus(status: any) {
    switch (status) {
      case ORDER_STATUS.NEW: return "#4fbe04";
      case ORDER_STATUS.DONE: return "#03b7ce";
      case ORDER_STATUS.CANCELED: return "#df2177";
      default: return "#4fbe04";
    }
  }

  noAction() {
    alert("Esti DEMO / USER. Pentru ADMIN, contacteaza proprietarul!");
  }
}
