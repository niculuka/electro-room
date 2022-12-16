import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { STORES, Stores } from 'src/app/shared/data/store.data';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent{

  isDesktopMenuOpen = false;
  isCarouselOpen = false;

  protected stores: Array<Stores> = STORES;

  constructor(
    private toastrService: ToastrService,
  ) { }

  noRoute() {
    this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
  }
}
