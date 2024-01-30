import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DialogProductDeleteComponent } from 'src/app/dialogs/dialog-product-delete/dialog-product-delete.component';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { IProduct, Product } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnChanges {

  protected products: Array<IProduct> = [];
  protected product: Product = new Product();

  category = CATEGORY;

  errorMessage: string = "";
  @Input() activeSubtitleName: any;
  @Input() activeSubtitleUrlKey: any;

  displayedColumns: string[] = ['index', 'image', 'brand', 'available', 'category', 'subcategory', 'price', 'action'];
  dataSource!: MatTableDataSource<IProduct>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
    private adminProductService: AdminProductService,
    private toastrService: ToastrService,
    public matDialog: MatDialog,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const urlKey = changes['activeSubtitleUrlKey'].currentValue;
    this.productService.getProductsByTypeService(urlKey).subscribe(data => {
      this.products = data;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProductDialog(product: Product) {
    const dialogRef = this.matDialog.open(DialogProductDeleteComponent, { data: product });
    dialogRef.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.deleteProduct(product)
        }
      },
      error: error => {
        this.toastrService.warning("Could not delete Product!")
      }
    });
  }

  deleteProduct(product: Product) {
    this.adminProductService.deleteProductService(product).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.toastrService.warning("Could not delete Product!")
        this.errorMessage = "Could not delete Product!";
        console.log(err);
      }
    })
  }
}
