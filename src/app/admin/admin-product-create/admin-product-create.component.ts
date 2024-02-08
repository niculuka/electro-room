import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CATEGORY, CATEGORY_URL_KEY } from 'src/app/shared/enums/electro.enum';
import { Product, ProductGallery } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent implements OnInit {

  protected productImages = [];
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
    this.newProduct.image = "assets/images/main/blank600.png";
  }

  createProduct() {
    this.newProduct.urlKey = this.newProduct.name
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
    // switch (this.newProduct.type) {
    //   case CATEGORY_URL_KEY.LAPTOP_GAMING_URL_KEY: { this.productImages = LAPTOP_IMAGES };
    //     break;
    //   case CATEGORY_URL_KEY.LAPTOP_BUSINESS_URL_KEY: { this.productImages = LAPTOP_IMAGES };
    //     break;
    //   case CATEGORY_URL_KEY.LAPTOP_GAMING_URL_KEY: { this.productImages = LAPTOP_IMAGES };
    //     break;
    //   case CATEGORY_URL_KEY.LAPTOP_ULTRA_URL_KEY: { this.productImages = LAPTOP_IMAGES };
    //     break;
      
    //   default: this.productImages = LAPTOP_IMAGES; 
    // }
  }

  getImage(image: any) {    
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
