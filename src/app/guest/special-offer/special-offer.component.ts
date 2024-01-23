import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NAV_ITEMS } from 'src/app/shared/data/menu.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { IBreadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.css']
})
export class SpecialOfferComponent {

  navs = NAV_ITEMS;

  specialOffer: string = CATEGORY.SPECIAL_OFFER;

  breadcrumbs: Array<IBreadcrumb> = [];
  crumb: IBreadcrumb = {} as IBreadcrumb;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private toastrService: ToastrService,
  ) {
    this.navs.find(nav => {
      if (nav.category == this.specialOffer) {
        this.createBreadcrumb(nav);
      }
    });
  }

  createBreadcrumb(nav: any) {
    this.crumb.label = nav.name;
    this.breadcrumbs.push(this.crumb);

    this.breadcrumbService.handleBreadcrumbsService(this.breadcrumbs);
  }

  offer() {
    this.toastrService.success("Oferta valabila in limita stocului disponibil");
  }
}
