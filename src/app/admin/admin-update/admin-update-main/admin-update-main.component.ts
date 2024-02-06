import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LAPTOP_IMAGES, ProductImages } from 'src/app/shared/data/product-images.data';
import { AVAILABLE, BADGE, BRAND, CATEGORY, SUBCATEGORY, TYPE } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-admin-update-main',
  templateUrl: './admin-update-main.component.html',
  styleUrls: ['./admin-update-main.component.css']
})
export class AdminUpdateMainComponent {

  @Input() product: Product = new Product();

  protected productImages: Array<ProductImages> = LAPTOP_IMAGES;

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  @ViewChild('f') form!: NgForm;
  errorMessage: string = "";

  typesEnums = TYPE;
  types: Array<any> = [];

  categoriesEnums = CATEGORY;
  categories: Array<any> = [];

  subcategoriesEnums = SUBCATEGORY;
  subcategories: Array<any> = [];

  brandsEnums = BRAND;
  brands: Array<any> = [];

  availablesEnums = AVAILABLE;
  availables: Array<any> = [];

  badgesEnums = BADGE;
  badges: Array<any> = [];

  constructor(
    private adminProductService: AdminProductService,
  ) {
    this.types = Object.values(this.typesEnums);
    this.categories = Object.values(this.categoriesEnums);
    this.subcategories = Object.values(this.subcategoriesEnums)
    this.brands = Object.values(this.brandsEnums);
    this.availables = Object.values(this.availablesEnums);
    this.badges = Object.values(this.badgesEnums);
  }

  updateProduct() {
    this.product.urlKey = this.product.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    // console.log(this.form)
    console.log(this.product.descriptions)


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
    //   this.handleDropdownMenu = !this.handleDropdownMenu;
    //   this.checkConditions();
  }

  setImageGallery() {
    //   switch (this.product.type) {
    //     case CATEGORY.LAPTOP_GAMING_URL_KEY: { this.productImages = LAPTOP_IMAGES };
    //       break;
    //     case CATEGORY.LAPTOP_BUSINESS_URL_KEY: { this.productImages = LAPTOP_IMAGES };
    //       break;
    //     case CATEGORY.LAPTOP_GAMING_URL_KEY: { this.productImages = LAPTOP_IMAGES };
    //       break;
    //     case CATEGORY.LAPTOP_ULTRA_URL_KEY: { this.productImages = LAPTOP_IMAGES };
    //       break;
    //     case CATEGORY.LAPTOP_BAG_URL_KEY: { this.productImages = LAPTOP_BAG_IMAGES };
    //       break;
    //     case CATEGORY.LAPTOP_CHARGER_URL_KEY: { this.productImages = LAPTOP_CHARGER_IMAGES };
    //       break;
    //     case CATEGORY.LAPTOP_HARD_URL_KEY: { this.productImages = LAPTOP_HARD_IMAGES };
    //       break;
    //     default: this.productImages = LAPTOP_IMAGES;
    //   }
  }

  getImage(image: ProductImages) {
    //   this.product.image = image.image;
    //   this.handleDropdownMenu = false;
    //   this.checkConditions();
  }

  checkConditions() {
    //   if (this.handleDropdownMenu == true) {
    //     this.isDropdownMenuOpen = "display: block;"
    //   } else {
    //     this.isDropdownMenuOpen = "display: none;"
    //   }
  }

}
