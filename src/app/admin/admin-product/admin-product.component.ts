import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogProductCreateComponent } from 'src/app/dialogs/dialog-product-create/dialog-product-create.component';
import { DialogProductDeleteComponent } from 'src/app/dialogs/dialog-product-delete/dialog-product-delete.component';
import { DialogProductUpdateComponent } from 'src/app/dialogs/dialog-product-update/dialog-product-update.component';
import { Product } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

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
    private adminProductService: AdminProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    public matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentLevel = params.get('product') || "";
      this.adminProductService.getProductsByLevelService(this.currentLevel).subscribe(data => {
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

  createProductDialog() {
    const create = this.matDialog.open(DialogProductCreateComponent);
    create.afterClosed().subscribe({
      next: result => {
        if (result === "true") {
          this.toastrService.success("Created Product!")
        }
      },
      error: error => {
        this.toastrService.warning("Could not create Product!")
      }
    })
  }

  updateProductDialog(product: Product) {
    const update = this.matDialog.open(DialogProductUpdateComponent, { data: product });
    update.afterClosed().subscribe(result => {
      if (result !== "true") {
        window.location.reload();
      }
    })
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
