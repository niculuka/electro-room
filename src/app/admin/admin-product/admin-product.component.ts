import { Component, OnInit } from '@angular/core';
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
export class AdminProductComponent implements OnInit {

  protected products: Array<Product> = [];
  protected product: Product = new Product();

  errorMessage: string = "";
  currentType: string = "";

  constructor(
    private productService: ProductService,
    private adminProductService: AdminProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentType = params.get('product') || "";
      this.productService.getProductsByTypeService(this.currentType).subscribe(data => {
        this.products = data;
      });
    });
  }

  viewProduct(product: Product) {
    this.router.navigate([
      '/lpt/'
      + product.type.replace(/_/g, "-").toLowerCase()
      + '/'
      + product.category.replace(/_/g, "-").toLowerCase()
      + '/'
      + product.linkName
    ]);
  }

  createProduct() {
    this.router.navigate(['/admin/product/create']);
  }

  updateProduct(product: Product) {
    this.router.navigate(['/admin/product/update/' + product.linkName]);
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
    })
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
