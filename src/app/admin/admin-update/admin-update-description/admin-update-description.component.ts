import { Component, ElementRef, HostListener, Input, OnChanges, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BLANK_PHOTO } from 'src/app/shared/constants/const';
import { Product, ProductDescription } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';
import { AdminHandleFormFieldService } from 'src/app/shared/services/admin-handle-form-field.service';

@Component({
  selector: 'app-admin-update-description',
  templateUrl: './admin-update-description.component.html',
  styleUrls: ['./admin-update-description.component.css']
})
export class AdminUpdateDescriptionComponent implements OnChanges {

  @Input() product: Product = new Product();
  descriptions: Array<ProductDescription> = [];
  description: ProductDescription = new ProductDescription();
  protected productImages = "";

  @ViewChildren('selects') selects: QueryList<ElementRef> | undefined;
  currentIndex: number = -1;
  lastIndex: any;
  isInsideInputs = false;

  @ViewChild('d') form!: NgForm;
  errorMessage: string = "";

  constructor(
    private adminProductService: AdminProductService,
    private toastrService: ToastrService,
    private formFieldService: AdminHandleFormFieldService,
  ) {
    this.formFieldService.getChangeCategoryObservable().subscribe(data => {
      this.productImages = data.currentImages;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'].currentValue;
    if (product.id) {
      this.product = product;
      this.descriptions = product.descriptions;
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
        if (this.currentIndex == this.lastIndex) this.currentIndex = -1;
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
    this.lastIndex = this.currentIndex;
    // console.log(this.isInsideInputs)
  }
  // QueryList<ElementRef> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  // Select IN/OUT Multiple Inputs ===============================================================
  // SHOW / HIDE - O P T I O N   BY   I N D E X ==================================================

  openDropdownMenu(ind: any) {
    this.currentIndex = ind;
  }

  selectImage(img: any) {
    this.descriptions[this.currentIndex].image = img;
  }

  addDescription() {
    if (this.descriptions.length < 6) {
      this.description = new ProductDescription();
      this.description.title = "Titlu";
      this.description.text = "Scrie textul aici!";
      this.description.image = BLANK_PHOTO;
      this.description.product_id_fk = this.product.id;
      this.descriptions.push(this.description);
    }
    else this.toastrService.warning("Se permit maxim 6 descrieri");
  }

  removeDescription(ind: any) {
    this.descriptions.splice(ind, 1)
  }

  updateDescription() {
    // console.log("description", this.descriptions)  
    // console.log("product.gallery", this.product.descriptions)  
    this.adminProductService.updateProductService(this.product).subscribe({
      next: () => {
        window.location.reload();
      },
      error: err => {
        this.errorMessage = "Nu s-au putut salva descrierile!";
        console.log(err);
      }
    });
  }

}
