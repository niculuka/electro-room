import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-laptop-accessory-category',
  templateUrl: './laptop-accessory-category.component.html',
  styleUrls: ['./laptop-accessory-category.component.css']
})
export class LaptopAccessoryCategoryComponent {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  constructor(
    private toastrService: ToastrService,
  ) { }

  noRoute() {
    this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
  }
}
