import { Component, OnInit } from '@angular/core';
import { LAPTOP_IMAGES, ProductImages } from 'src/app/shared/data/product-images.data';
import { Product } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent implements OnInit {
  isDesktopMenuOpen = false;
  isCarouselOpen = true;

  protected productImages: Array<ProductImages> = LAPTOP_IMAGES;
  newProduct: Product = new Product();

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminProductService: AdminProductService,
  ) { }

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
