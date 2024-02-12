import { Component, ElementRef, HostListener, Input, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AVAILABLE, BADGE, BRAND, CATEGORY, SUBCATEGORY, TYPE } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';
import { AdminUpdateCategImgService } from 'src/app/shared/services/admin-update-categ-img.service';

@Component({
  selector: 'app-admin-update-main',
  templateUrl: './admin-update-main.component.html',
  styleUrls: ['./admin-update-main.component.css']
})
export class AdminUpdateMainComponent {

  @Input() product: Product = new Product();
  protected productImages = "";

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
    private adminUpdateCategImgService: AdminUpdateCategImgService,
  ) {
    this.types = Object.values(this.typesEnums);
    this.categories = Object.values(this.categoriesEnums);
    this.subcategories = Object.values(this.subcategoriesEnums)
    this.brands = Object.values(this.brandsEnums);
    this.availables = Object.values(this.availablesEnums);
    this.badges = Object.values(this.badgesEnums);
    this.adminUpdateCategImgService.getChangeCategoryObservable().subscribe(data => {
      this.product.typeUrlKey = data.currentTypeUrlKey;
      this.product.categoryUrlKey = data.currentCategUrlKey;
      this.productImages = data.currentImages;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'].currentValue;
    if (product.id) {
      this.product = product;
      this.getImagesByCategories();
    }
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
    this.adminUpdateCategImgService.changeCurrentCategoryService(this.product.category)
  }

}
