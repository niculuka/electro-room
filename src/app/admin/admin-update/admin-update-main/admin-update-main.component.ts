import { Component, ElementRef, HostListener, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AVAILABLE, BADGE, BRAND, CATEGORY, TYPE } from 'src/app/shared/enums/electro.enum';
import { Product } from 'src/app/shared/models/product.model';
import { AdminHandleFormFieldService } from 'src/app/shared/services/admin-handle-form-field.service';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-admin-update-main',
  templateUrl: './admin-update-main.component.html',
  styleUrls: ['./admin-update-main.component.css']
})
export class AdminUpdateMainComponent implements OnChanges {

  @Input() product: Product = new Product();
  protected selectedSubcategories = "";
  protected productImages = "";

  handleDropdownMenu = false;

  @ViewChild('select') select: ElementRef | undefined;
  isSelectOpen: boolean = false;

  @ViewChild('f') form!: NgForm;

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
  ) {
    this.types = Object.values(this.typesEnums);
    this.categories = Object.values(this.categoriesEnums);
    this.brands = Object.values(this.brandsEnums);
    this.availables = Object.values(this.availablesEnums);
    this.badges = Object.values(this.badgesEnums);
    this.formFieldService.getChangeCategoryObservable().subscribe(data => {
      this.product.type = data.currentType;
      this.product.typeUrlKey = data.currentTypeUrlKey;
      this.product.categoryUrlKey = data.currentCategUrlKey;
      this.selectedSubcategories = data.selectedSubcategories;
      this.productImages = data.currentImages;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'].currentValue;
    if (product.id) {
      this.product = product;
      this.getFieldsByCategories();
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

  getFieldsByCategories() {
    this.formFieldService.changeCurrentCategoryService(this.product.category)
  }

  updateProduct() {    
    // console.log(this.product)
    this.adminProductService.updateProdServ(this.product);
  }
}
