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

  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected products: Array<Product> = [];
  protected product: Product = new Product();

  errorMessage: string = "";
  currentLevel: string = "";

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
      this.currentLevel = params.get('product') || "";
      this.productService.getProductsByLevelService(this.currentLevel).subscribe(data => {
        this.products = data;
      });
    });
  }

  viewProduct(product: Product) {
    this.router.navigate([
      '/lpt/'
      + product.level.replace(/_/g, "-").toLowerCase()
      + '/'
      + product.type.replace(/_/g, "-").toLowerCase()
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
