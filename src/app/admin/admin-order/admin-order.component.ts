import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogOrderDeleteComponent } from '../../dialogs/dialog-order-delete/dialog-order-delete.component';
import { CartItem } from '../../shared/models/cart-item.model';
import { ORDER_STATUS } from '../../shared/enums/electro.enum';
import { Order } from '../../shared/models/order.model';
import { AdminOrderService } from '../../shared/services/admin-order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  orders: Array<Order> = [];
  order: Order = new Order();

  items: Array<CartItem> = [];
  item!: CartItem;

  status: string = "";

  constructor(
    private adminOrderService: AdminOrderService,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminOrderService.getAllOrdersService().subscribe(data => {
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

  updateStatus(order: Order) {
    if (order.status === ORDER_STATUS.NEW) this.status = ORDER_STATUS.DONE;
    if (order.status === ORDER_STATUS.DONE) this.status = ORDER_STATUS.CANCELED;
    if (order.status === ORDER_STATUS.CANCELED) this.status = ORDER_STATUS.NEW;

    this.adminOrderService.updateStatusService(order.orderId, this.status).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.info("Could not update the status!");
        console.log(err);
      }
    })
  }

  deleteOrderDialog(order: Order) {
    const dialogRef = this.matDialog.open(DialogOrderDeleteComponent, { data: order });
    dialogRef.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteOrder(order);
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete this User!")
      }
    })
  }

  deleteOrder(order: Order) {
    this.adminOrderService.deleteOrderService(order).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete this User!")
        console.log(err);
      }
    })
  }
}
