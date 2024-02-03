import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LAPTOP_BAG_IMAGES, LAPTOP_CHARGER_IMAGES, LAPTOP_HARD_IMAGES, LAPTOP_IMAGES, ProductImages } from 'src/app/shared/data/product-images.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { Product, ProductDescription } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrls: ['./admin-product-update.component.css']
})
export class AdminProductUpdateComponent implements OnInit {

  protected product: Product = new Product();
  protected descriptions: Array<ProductDescription> = [];
  description: ProductDescription = new ProductDescription();
  protected productImages: Array<ProductImages> = LAPTOP_IMAGES;

  errorMessage: string = "";
  category = CATEGORY;

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminProductService: AdminProductService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let urlKey = params.get('urlKey') || "";
      this.productService.getProductByNameService(urlKey).subscribe(data => {
        this.product = data;
        this.descriptions = this.product.descriptions;
        // console.log(this.descriptions)
        this.setImageGallery();
      });
    });
  }

  addDescription() {
    this.descriptions.push(new ProductDescription());
  }


  

  updateProduct() {
    // this.product.urlKey = this.product.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    console.log(this.product.descriptions)
    // this.adminProductService.updateProductService(this.product).subscribe({
    //   next: () => {
    //     window.location.reload();
    //   },
    //   error: err => {
    //     this.errorMessage = "Could not update product!";
    //     console.log(err);
    //   }
    // })
  }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
    this.checkConditions();
  }

  setImageGallery() {
    switch (this.product.type) {
      case CATEGORY.LAPTOP_GAMING_URL_KEY: { this.productImages = LAPTOP_IMAGES };
        break;
      case CATEGORY.LAPTOP_BUSINESS_URL_KEY: { this.productImages = LAPTOP_IMAGES };
        break;
      case CATEGORY.LAPTOP_GAMING_URL_KEY: { this.productImages = LAPTOP_IMAGES };
        break;
      case CATEGORY.LAPTOP_ULTRA_URL_KEY: { this.productImages = LAPTOP_IMAGES };
        break;
      case CATEGORY.LAPTOP_BAG_URL_KEY: { this.productImages = LAPTOP_BAG_IMAGES };
        break;
      case CATEGORY.LAPTOP_CHARGER_URL_KEY: { this.productImages = LAPTOP_CHARGER_IMAGES };
        break;
      case CATEGORY.LAPTOP_HARD_URL_KEY: { this.productImages = LAPTOP_HARD_IMAGES };
        break;
      default: this.productImages = LAPTOP_IMAGES;
    }
  }

  getImage(image: ProductImages) {
    this.product.image = image.image;
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
