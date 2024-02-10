import { Component, ElementRef, HostListener, Input, OnChanges, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BLANK_PHOTO } from 'src/app/shared/constants/const';
import { LAPTOP_GAMING_IMAGES, LAPTOP_ULTRA_IMAGES } from 'src/app/shared/data/product-images.data';
import { Product, ProductGallery } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-admin-update-gallery',
  templateUrl: './admin-update-gallery.component.html',
  styleUrls: ['./admin-update-gallery.component.css']
})
export class AdminUpdateGalleryComponent implements OnChanges {

  @Input() product: Product = new Product();
  gallery: Array<ProductGallery> = [];
  newImage: ProductGallery = new ProductGallery();

  protected productImages = LAPTOP_GAMING_IMAGES;
  currentInd: number = -1;
  isDropMenuOpen = false;

  @ViewChildren('select') select: ElementRef | undefined;
  isSelectOpen: boolean = false;

  @ViewChild('i') form!: NgForm;
  errorMessage: string = "";

  constructor(private adminProductService: AdminProductService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'].currentValue;
    if (product.id) this.gallery = product.gallery;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    console.log(event.target.value)
    // if (this.select?.nativeElement.contains(event.target)) { }
    // else this.currentInd = -1;
  }

  openDropdownMenu(ind: any) {
    // this.select?.forEach(item => console.log(item.nativeElement.children.image.value ))
    this.isDropMenuOpen = !this.isDropMenuOpen;
    if (this.isDropMenuOpen) this.currentInd = ind;
    else this.currentInd = -1;
  }

  selectImage(img: any) {
    this.gallery[this.currentInd].image = img;
    this.isDropMenuOpen = false;
    this.currentInd = -1;
  }

  addImage() {
    this.newImage = new ProductGallery();
    this.newImage.image = BLANK_PHOTO;
    this.newImage.product_id_fk = this.product.id;
    this.gallery.push(this.newImage);
  }

  removeImage(ind: any) {
    this.gallery.splice(ind, 1)
  }

  updateImaged() {
    this.product.gallery = this.gallery;
    console.log(this.product.gallery)
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

}
