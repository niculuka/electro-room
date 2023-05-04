import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-laptop-accessory',
  templateUrl: './laptop-accessory.component.html',
  styleUrls: ['./laptop-accessory.component.css']
})
export class LaptopAccessoryComponent {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  constructor(
    private toastrService: ToastrService,
  ) { }

  noRoute() {
    this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
  }
}
