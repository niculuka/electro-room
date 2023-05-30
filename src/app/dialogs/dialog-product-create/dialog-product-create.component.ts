import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminProductComponent } from 'src/app/admin/admin-product/admin-product.component';
import { ProductImages, LAPTOP_IMAGES } from 'src/app/shared/data/product-images.data';
import { Product } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-dialog-product-create',
  templateUrl: './dialog-product-create.component.html',
  styleUrls: ['./dialog-product-create.component.css']
})
export class DialogProductCreateComponent implements OnInit {

  protected productImages: Array<ProductImages> = LAPTOP_IMAGES;
  newProduct: Product = new Product();

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminProductService: AdminProductService,
    @Inject(MAT_DIALOG_DATA) private data: AdminProductComponent) {
  }

  ngOnInit(): void {
    this.newProduct.image = "assets/images/blank600.png";
  }

  createProduct() {
    this.newProduct.linkName = this.newProduct.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();    
    this.adminProductService.createProductService(this.newProduct).subscribe({
      next: () => {
        window.location.reload();
      },
      error: error => {
        this.errorMessage = "Could not create the product!";
        console.log(error);
      }
    })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }

  getImage(image: ProductImages) {
    this.newProduct.image = image.image;
    this.newProduct.alt = image.image.substring(15);
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
