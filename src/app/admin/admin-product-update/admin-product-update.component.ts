import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BLANK_PHOTO } from 'src/app/shared/constants/const';
import { LAPTOP_IMAGES, ProductImages } from 'src/app/shared/data/product-images.data';
import { AVAILABLE, BADGE, BRAND, CATEGORY, SUBCATEGORY, TYPE } from 'src/app/shared/enums/electro.enum';
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
  protected descriptions: Array<any> = [];
  description: ProductDescription = new ProductDescription();
  protected productImages: Array<ProductImages> = LAPTOP_IMAGES;

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

  handleDropdownMenu = false;
  isDropdownMenuOpen: string = "display: none;";

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminProductService: AdminProductService,
    private productService: ProductService,
  ) {
    this.types = Object.values(this.typesEnums);
    this.categories = Object.values(this.categoriesEnums);
    this.subcategories = Object.values(this.subcategoriesEnums)
    this.brands = Object.values(this.brandsEnums);
    this.availables = Object.values(this.availablesEnums);
    this.badges = Object.values(this.badgesEnums);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let urlKey = params.get('urlKey') || "";
      this.productService.getProductByNameService(urlKey).subscribe(data => {
        this.product = data;
        const aaa = JSON.stringify(this.product.descriptions);
        this.descriptions = JSON.parse(aaa);
        console.log(this.descriptions)
        // this.setImageGallery();
      });
    });
  }

  addDescription() {
    this.description = new ProductDescription();
    this.description.title = "Titlul";
    this.description.text = "Textul";
    this.description.image = BLANK_PHOTO;
    this.description.product_id_fk = this.product.descriptions[0].product_id_fk;
    this.descriptions.push(this.description);
  }

  removeDescription(description: any) {
    this.descriptions = this.descriptions.filter(item => item != description);
  }

  updateProduct() {
    this.product.urlKey = this.product.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    // console.log(this.form)
    // console.log(this.descriptions)

    const aaa = JSON.stringify(this.descriptions);
    this.product.descriptions = JSON.parse(aaa);

    // console.log(this.product)
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
