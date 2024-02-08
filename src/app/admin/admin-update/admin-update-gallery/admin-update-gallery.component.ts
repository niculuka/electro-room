import { Component, Input } from '@angular/core';
import { LAPTOP_GAMING_IMAGES } from 'src/app/shared/data/product-images.data';
import { Product } from 'src/app/shared/models/product.model';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';

@Component({
  selector: 'app-admin-update-gallery',
  templateUrl: './admin-update-gallery.component.html',
  styleUrls: ['./admin-update-gallery.component.css']
})
export class AdminUpdateGalleryComponent {

  @Input() product: Product = new Product();

  protected productImages = LAPTOP_GAMING_IMAGES;
  handleDropdownMenu = false;

  constructor(
    private adminProductService: AdminProductService,
  ) { }

  toggleDropdownMenu() {
    this.handleDropdownMenu = !this.handleDropdownMenu;
  }

  getImage(image: any) {
    this.product.image = image;
    this.handleDropdownMenu = false;
  }
  
}
