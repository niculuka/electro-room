import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogItemDeleteComponent } from '../../dialogs/dialog-item-delete/dialog-item-delete.component';
import { CartItem } from '../../shared/models/cart-item.model';
import { AdminItemService } from '../../shared/services/admin-item.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css']
})
export class AdminItemComponent implements OnInit, OnDestroy {

  protected items: Array<CartItem> = [];
  protected item!: CartItem;

  @Input() activeSubtitleName: any;
  @Input() activeSubtitleUrlKey: any;

  displayedColumns: string[] = ['index', 'id', 'productName', 'productId', 'quantity', 'orderIdFk', 'price', 'delete'];
  dataSource!: MatTableDataSource<CartItem>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private sub0: any;
  private sub1: any;
  private sub2: any;

  constructor(
    private adminItemService: AdminItemService,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.sub0 = this.adminItemService.getAllOrdersService().subscribe(data => {
      this.items = data;
      this.dataSource = new MatTableDataSource(this.items);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
  }

  deleteItemDialog(item: CartItem) {
    const dialogRef = this.matDialog.open(DialogItemDeleteComponent, { data: item });
    this.sub1 = dialogRef.afterClosed().subscribe({
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
    this.sub2 = this.adminItemService.deleteItemService(item).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete this Item!")
        console.log(err);
      }
    })
  }

  ngOnDestroy(): void {
    this.sub0?.unsubscribe();
    this.sub1?.unsubscribe();
    this.sub2?.unsubscribe();
  }
}
