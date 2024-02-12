import { Component, ElementRef, HostListener, Input, OnChanges, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BLANK_PHOTO } from 'src/app/shared/constants/const';
import { Product, ProductGallery } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';
import { AdminUpdateCategImgService } from 'src/app/shared/services/admin-update-categ-img.service';

@Component({
  selector: 'app-admin-update-gallery',
  templateUrl: './admin-update-gallery.component.html',
  styleUrls: ['./admin-update-gallery.component.css']
})
export class AdminUpdateGalleryComponent implements OnChanges {

  @Input() product: Product = new Product();
  gallery: Array<ProductGallery> = [];
  newImage: ProductGallery = new ProductGallery();
  protected productImages = "";

  currentIndex: number = -1;
  nextIndex: any;
  isInsideInputs = false;

  @ViewChildren('selects') selects: QueryList<ElementRef> | undefined;
  isSelectOpen: boolean = false;

  @ViewChild('i') form!: NgForm;
  errorMessage: string = "";

  constructor(
    private adminProductService: AdminProductService,
    private toastrService: ToastrService,
    private adminUpdateCategImgService: AdminUpdateCategImgService,
  ) {
    this.adminUpdateCategImgService.getChangeCategoryObservable().subscribe(data => {
      this.productImages = data.currentImages;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'].currentValue;
    if (product.id) {
      this.product = product;
      this.gallery = product.gallery;
      this.getImagesByCategories();
    }
  }

  // QueryList<ElementRef> =======================================================================
  // Select IN/OUT Multiple Inputs ===============================================================
  // SHOW / HIDE - O P T I O N   BY   I N D E X VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    this.isInsideInputs = false;
    this.selects?.forEach(input => {
      if (input.nativeElement.contains(event.target)) {
        this.isInsideInputs = true;
        if (this.currentIndex == this.nextIndex) this.currentIndex = -1;
        // console.log("INSIDE: ", input.nativeElement.value)
      }
      // else { console.log("OUTSIDE: ", input.nativeElement.value) }
    })
    if (this.isInsideInputs) {
      // console.log("INSIDE")
    }
    else {
      this.currentIndex = -1;
      // console.log("OUTSIDE")
    }
    this.nextIndex = this.currentIndex;
    // console.log(this.isInsideInputs)
  }
  // QueryList<ElementRef> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  // Select IN/OUT Multiple Inputs ===============================================================
  // SHOW / HIDE - O P T I O N   BY   I N D E X ==================================================

  openDropdownMenu(ind: any) {
    this.currentIndex = ind;
  }

  selectImage(img: any) {
    this.gallery[this.currentIndex].image = img;
  }

  addImage() {
    if (this.gallery.length < 12) {
      this.newImage = new ProductGallery();
      this.newImage.image = BLANK_PHOTO;
      this.newImage.product_id_fk = this.product.id;
      this.gallery.push(this.newImage);
    }
    else this.toastrService.warning("Se permit maxim 12 imagini");
  }

  removeImage(ind: any) {
    this.gallery.splice(ind, 1)
  }

  updateImages() {
    // console.log("gallery", this.gallery)
    // console.log("product.gallery", this.product.gallery)    
    this.adminProductService.updateProductService(this.product).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Nu s-au putut salva imaginile!";
        console.log(err);
      }
    });
  }

  getImagesByCategories() {
    this.adminUpdateCategImgService.changeCurrentCategoryService(this.product.category)
  }
}
