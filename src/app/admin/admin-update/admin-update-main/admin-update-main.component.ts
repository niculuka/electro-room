import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ALL_IN_ONE_IMAGES, EXTERNAL_BATTERY_IMAGES, LAPTOP_BAG_IMAGES, LAPTOP_BUSINESS_IMAGES, LAPTOP_CHARGER_IMAGES, LAPTOP_GAMING_IMAGES, LAPTOP_HARD_IMAGES, LAPTOP_HOME_IMAGES, LAPTOP_ULTRA_IMAGES, MONITOR_PRO_IMAGES, PC_GAMING_IMAGES, RAM_MEMORY_IMAGES } from 'src/app/shared/data/product-images.data';
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

  protected productImages = LAPTOP_GAMING_IMAGES;
  handleDropdownMenu = false;

  @ViewChild('select') select: ElementRef | undefined;
  isSelectOpen: boolean = false;

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
    this.getImagesByCategories();
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.select?.nativeElement.contains(event.target)) { }
    else this.isSelectOpen = false;
  }

  toggleSelect() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  selectImage(image: any) {
    this.product.image = image;
  }

  updateProduct() {
    this.product.urlKey = this.product.name.replace(/\\|`+|~+|'+|,+|\/+|\?/g, "").replace(/\s+/g, "-").toLowerCase();
    this.adminProductService.updateProductService(this.product).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Nu s-a putut salva produsul!";
        console.log(err);
      }
    });
  }

  getImagesByCategories() {
    switch (this.product.category) {
      case CATEGORY.LAPTOP_GAMING: { this.productImages = LAPTOP_GAMING_IMAGES };
        break;
      case CATEGORY.LAPTOP_BUSINESS: { this.productImages = LAPTOP_BUSINESS_IMAGES };
        break;
      case CATEGORY.LAPTOP_ULTRA: { this.productImages = LAPTOP_ULTRA_IMAGES };
        break;
      case CATEGORY.LAPTOP_HOME: { this.productImages = LAPTOP_HOME_IMAGES };
        break;
      case CATEGORY.LAPTOP_BAG: { this.productImages = LAPTOP_BAG_IMAGES };
        break;
      case CATEGORY.LAPTOP_CHARGER: { this.productImages = LAPTOP_CHARGER_IMAGES };
        break;
      case CATEGORY.LAPTOP_HARD: { this.productImages = LAPTOP_HARD_IMAGES };
        break;
      case CATEGORY.EXTERNAL_BATTERY: { this.productImages = EXTERNAL_BATTERY_IMAGES };
        break;
      case CATEGORY.RAM_MEMORY: { this.productImages = RAM_MEMORY_IMAGES };
        break;
      case CATEGORY.PC_GAMING: { this.productImages = PC_GAMING_IMAGES };
        break;
      case CATEGORY.ALL_IN_ONE: { this.productImages = ALL_IN_ONE_IMAGES };
        break;
      case CATEGORY.MONITOR_PRO: { this.productImages = MONITOR_PRO_IMAGES };
        break;
    }
  }

}
