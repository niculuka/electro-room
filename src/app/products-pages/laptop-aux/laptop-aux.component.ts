import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-laptop-aux',
  templateUrl: './laptop-aux.component.html',
  styleUrls: ['./laptop-aux.component.css']
})
export class LaptopAuxComponent {

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  constructor(
    private toastrService: ToastrService,
  ) { }

  noRoute() {
    this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
  }
}
