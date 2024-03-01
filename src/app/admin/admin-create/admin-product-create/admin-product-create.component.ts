import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BLANK_PHOTO } from 'src/app/shared/constants/const';
import { AVAILABLE, BADGE, BRAND, CATEGORY, TYPE } from 'src/app/shared/enums/electro.enum';
import { Product, ProductSpecification } from 'src/app/shared/models/product.model';
import { AdminHandleFormFieldService } from 'src/app/shared/services/admin-handle-form-field.service';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent {

  newProduct: Product = new Product();
  protected selectedSubcategories = "";
  protected productImages = "";

  @ViewChild('select') select: ElementRef | undefined;
  isSelectOpen: boolean = false;

  @ViewChild('c') form!: NgForm;
  errorMessage: string = "";

  typesEnums = TYPE;
  types: Array<any> = [];

  categoriesEnums = CATEGORY;
  categories: Array<any> = [];

  brandsEnums = BRAND;
  brands: Array<any> = [];

  availablesEnums = AVAILABLE;
  availables: Array<any> = [];

  badgesEnums = BADGE;
  badges: Array<any> = [];

  constructor(
    private adminProductService: AdminProductService,
    private formFieldService: AdminHandleFormFieldService,
    private router: Router,
    private toastrService: ToastrService,
  ) {
    this.types = Object.values(this.typesEnums);
    this.categories = Object.values(this.categoriesEnums);
    this.brands = Object.values(this.brandsEnums);
    this.availables = Object.values(this.availablesEnums);
    this.badges = Object.values(this.badgesEnums);
    // first element of array is displayed
    this.newProduct.brand = this.brands[0];
    this.newProduct.category = this.categories[0];
    this.newProduct.image = BLANK_PHOTO;
    this.newProduct.available = this.availables[0];
    this.newProduct.badge = this.badges[0];
    this.newProduct.gallery = [];
    this.newProduct.descriptions = [];
    this.newProduct.specification = new ProductSpecification();
    this.getFieldsByCategories();

    this.formFieldService.getChangeCategoryObservable().subscribe(data => {
      this.newProduct.type = data.currentType;
      this.newProduct.typeUrlKey = data.currentTypeUrlKey;
      this.newProduct.categoryUrlKey = data.currentCategUrlKey;
      this.selectedSubcategories = data.selectedSubcategories;
      this.newProduct.subcategory = this.selectedSubcategories[0];
      this.productImages = data.currentImages;
    });
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
    this.newProduct.image = image;
  }

  getFieldsByCategories() {
    this.formFieldService.changeCurrentCategoryService(this.newProduct.category)
  }

  createProduct() {
    this.newProduct.urlKey = this.newProduct.name
      .replace(/\\|`+|~+|'+|,+|\/+|\?/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();
    // console.log(this.newProduct)
    this.adminProductService.createProductService(this.newProduct).subscribe({
      next: () => {
        this.router.navigate(["/admin/product/update/" + this.newProduct.urlKey]);
        this.toastrService.success("Produsul a fost salvat");
      },
      error: error => {
        this.errorMessage = "Nu s-a putut salva produsul!";
        console.log(error);
      }
    });
  }
}
