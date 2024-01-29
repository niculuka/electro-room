import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogProductDeleteComponent } from 'src/app/dialogs/dialog-product-delete/dialog-product-delete.component';
import { Product } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnChanges {

  protected products: Array<Product> = [];
  protected product: Product = new Product();

  errorMessage: string = "";
  @Input() currentType: any = "";

  constructor(
    private productService: ProductService,
    private adminProductService: AdminProductService,
    private router: Router,
    private toastrService: ToastrService,
    public matDialog: MatDialog,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['currentType'].currentValue);
    this.productService
      .getProductsByTypeService(changes['currentType'].currentValue.toLowerCase())
      .subscribe(data => this.products = data);
  }

  viewProduct(product: Product) {
    this.router.navigate(['/prod/' + product.urlKey]);
  }

  createProduct() {
    this.router.navigate(['/admin/product/create']);
  }

  updateProduct(product: Product) {
    this.router.navigate(['/admin/product/update/' + product.urlKey]);
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
