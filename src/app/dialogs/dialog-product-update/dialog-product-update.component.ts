import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminProductComponent } from 'src/app/admin/admin-product/admin-product.component';
import { ProductImages, LAPTOP_IMAGES, LAPTOP_BAG_IMAGES, LAPTOP_CHARGER_IMAGES, LAPTOP_HARD_IMAGES }
  from 'src/app/shared/data/product-images.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-dialog-product-update',
  templateUrl: './dialog-product-update.component.html',
  styleUrls: ['./dialog-product-update.component.css']
})
export class DialogProductUpdateComponent implements OnInit {

  protected productImages: Array<ProductImages> = [];
  product: any;

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminProductService: AdminProductService,
    @Inject(MAT_DIALOG_DATA) private data: AdminProductComponent,
  ) {
    this.product = data;
    // console.log(this.product)
  }

  ngOnInit(): void {
    this.setImageGallery();
  }

  updateProduct() {
    this.product.linkName = this.product.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    this.adminProductService.updateProductService(this.product).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Could not update product!";
        console.log(err);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }

  setImageGallery() {
    switch (this.product.type) {
      case CATEGORY.LAPTOP_GAMING: { this.productImages = LAPTOP_IMAGES };
        break;
      case CATEGORY.LAPTOP_BUSINESS: { this.productImages = LAPTOP_IMAGES };
        break;
      case CATEGORY.LAPTOP_GAMING: { this.productImages = LAPTOP_IMAGES };
        break;
      case CATEGORY.LAPTOP_ULTRA: { this.productImages = LAPTOP_IMAGES };
        break;
      case CATEGORY.LAPTOP_BAG: { this.productImages = LAPTOP_BAG_IMAGES };
        break;
      case CATEGORY.LAPTOP_CHARGER: { this.productImages = LAPTOP_CHARGER_IMAGES };
        break;
      case CATEGORY.LAPTOP_HARD: { this.productImages = LAPTOP_HARD_IMAGES };
        break;
      default: this.productImages = LAPTOP_IMAGES;
    }
  }

  getImage(image: ProductImages) {
    this.product.image = image.image;
    this.product.src2 = image.src2;
    this.product.src3 = image.src3;
    this.product.src4 = image.src4;
    this.product.alt = image.image.substring(15);
    this.handleDropdownMenu = false;
    this.checkConditions();
  }

  checkConditions() {
    if (this.handleDropdownMenu == true) {
      this.isDropdownMenuOpen = "display: block;"
    } else {
      this.isDropdownMenuOpen = "display: none;"
    }
  }
}