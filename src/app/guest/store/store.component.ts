import { Component } from '@angular/core';
import { NAV_ITEMS } from 'src/app/shared/data/menu.data';
import { STORES_DETAILS } from 'src/app/shared/data/store.data';
import { CATEGORY, MENU_URL_KEY } from 'src/app/shared/enums/electro.enum';
import { IBreadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  protected stores = STORES_DETAILS;
  protected navs = NAV_ITEMS;
  store: string = MENU_URL_KEY.STORES_URL_KEY;

  breadcrumbs: Array<IBreadcrumb> = [];
  crumbNav: IBreadcrumb = {} as IBreadcrumb;
  crumbSubnav: IBreadcrumb = {} as IBreadcrumb;

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) {
    this.navs.filter(nav => {
      nav.subMenus.find(subnav => {
        if (subnav.category == this.store) {
          this.createBreadcrumb(nav, subnav);
        }
      });
    });
  }

  createBreadcrumb(nav: any, subnav: any) {
    this.crumbNav.label = nav.name;
    this.crumbNav.url = "/" + nav.category;
    this.breadcrumbs.push(this.crumbNav);

    this.crumbSubnav.label = subnav.name;
    this.breadcrumbs.push(this.crumbSubnav);

    this.breadcrumbService.handleBreadcrumbsService(this.breadcrumbs);
  }
}
