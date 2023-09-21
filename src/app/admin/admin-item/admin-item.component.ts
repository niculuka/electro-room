import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogItemDeleteComponent } from '../../dialogs/dialog-item-delete/dialog-item-delete.component';
import { CartItem } from '../../shared/models/cart-item.model';
import { AdminItemService } from '../../shared/services/admin-item.service';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit {

  protected items: Array<CartItem> = [];
  protected item!: CartItem;

  constructor(
    private adminItemService: AdminItemService,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.adminItemService.getAllOrdersService().subscribe(data => {
      this.items = data;
    })
  }

  deleteItemDialog(item: CartItem) {
    const dialogRef = this.matDialog.open(DialogItemDeleteComponent, { data: item.productName });
    dialogRef.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteItem(item)
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete this Item!")
      }
    })
  }

  deleteItem(item: CartItem) {
    this.adminItemService.deleteItemService(item).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete this Item!")
        console.log(err);
      }
    })
  }

}
