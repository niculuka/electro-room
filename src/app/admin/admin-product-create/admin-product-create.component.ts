import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LAPTOP_BAG_IMAGES, LAPTOP_CHARGER_IMAGES, LAPTOP_HARD_IMAGES, LAPTOP_IMAGES, ProductImages } from 'src/app/shared/data/product-images.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Product, ProductGallery } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent implements OnInit {

  protected productImages: Array<ProductImages> = LAPTOP_IMAGES;
  productGallery: ProductGallery = new ProductGallery();
  newProduct: Product = new Product();

  errorMessage: string = "";

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private adminProductService: AdminProductService,
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
    this.newProduct.image = "assets/images/blank600.png";
  }

  createProduct() {
    this.newProduct.linkname = this.newProduct.name
      .replace(/\\|`+|~+|'+|,+|\/+|\?/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    this.productGallery.image = this.newProduct.image;
    this.newProduct.gallery = [this.productGallery];
    // console.log(this.newProduct)

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

  setImageGallery() {
    switch (this.newProduct.type) {
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
    this.newProduct.image = image.image;
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
