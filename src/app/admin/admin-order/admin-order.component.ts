import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogOrderDeleteComponent } from '../../dialogs/dialog-order-delete/dialog-order-delete.component';
import { CartItem } from '../../shared/models/cart-item.model';
import { ORDER, ORDER_STATUS, PAYMENT_TYPE } from '../../shared/enums/electro.enum';
import { IOrder, Order } from '../../shared/models/order.model';
import { AdminOrderService } from '../../shared/services/admin-order.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit, OnDestroy {

  orders: Array<IOrder> = [];
  order: Order = new Order();
  foundOrders: boolean = false;

  items: Array<CartItem> = [];
  item!: CartItem;
  currentStatus: string = "";
  paymentType = PAYMENT_TYPE;

  @Input() activeSubtitleName: any;
  @Input() activeSubtitleUrlKey: any;

  displayedColumns: string[] = ['index', 'id', 'nameGet', 'usernameGet', 'date', 'paymentType', 'status', 'totalPrice', 'delete',];
  dataSource!: MatTableDataSource<IOrder>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private sub0: any;
  private sub1: any;
  private sub2: any;
  private sub3: any;

  constructor(
    private adminOrderService: AdminOrderService,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.sub0 = this.adminOrderService.getAllOrdersService().subscribe(data => {
      if (data) {
        this.orders = data;
        this.foundOrders = true;
        this.dataSource = new MatTableDataSource(this.orders);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      else this.foundOrders = false;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
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
    if (order.status === ORDER_STATUS.NEW) this.currentStatus = ORDER_STATUS.DONE;
    if (order.status === ORDER_STATUS.DONE) this.currentStatus = ORDER_STATUS.CANCELED;
    if (order.status === ORDER_STATUS.CANCELED) this.currentStatus = ORDER_STATUS.NEW;

    this.sub1 = this.adminOrderService.updateStatusService(order.id, this.currentStatus).subscribe({
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
    this.sub2 = dialogRef.afterClosed().subscribe({
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
    this.sub3 = this.adminOrderService.deleteOrderService(order).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete this User!")
        console.log(err);
      }
    })
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
  }
}
