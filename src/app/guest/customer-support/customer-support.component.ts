import { Component } from '@angular/core';
import { NAV_ITEMS } from 'src/app/shared/data/menu.data';
import { CATEGORY } from 'src/app/shared/enums/electro.enum';
import { IBreadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent {

  protected navs = NAV_ITEMS;
  customerSupport: string = CATEGORY.CUSTOMER_SUPORT_PATH;

  breadcrumbs: Array<IBreadcrumb> = [];
  crumb: IBreadcrumb = {} as IBreadcrumb;

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) {
    this.navs.find(nav => {
      if (nav.category == this.customerSupport) {
        this.createBreadcrumb(nav);
      }
    });
  }

  createBreadcrumb(nav: any) {
    this.crumb.label = nav.name;
    this.breadcrumbs.push(this.crumb);

    this.breadcrumbService.handleBreadcrumbsService(this.breadcrumbs);
  }

}
