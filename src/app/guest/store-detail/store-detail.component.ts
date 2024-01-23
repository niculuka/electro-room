import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NAV_ITEMS } from 'src/app/shared/data/menu.data';
import { STORES_DETAILS } from 'src/app/shared/data/store.data';
import { IBreadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnDestroy {

  protected stores = STORES_DETAILS;
  currentStore: any;

  navs = NAV_ITEMS;

  breadcrumbs: Array<IBreadcrumb> = [];
  crumbNav: IBreadcrumb = {} as IBreadcrumb;
  crumbSubnav: IBreadcrumb = {} as IBreadcrumb;
  crumbStore: IBreadcrumb = {} as IBreadcrumb;

  private sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
  ) {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      let storename = params.get('storename') || "";
      this.stores.find(store => {
        if (store.linkname == storename) {
          this.currentStore = store;
          this.createBreadcrumb();
        }
      });
    });
  }

  createBreadcrumb() {
    this.navs.filter(nav => {
      nav.subMenus.find(subnav => {
        if (subnav.category == this.currentStore.category) {
          this.crumbNav.label = nav.name;
          this.crumbNav.url = "/" + nav.category;
          this.breadcrumbs.push(this.crumbNav);

          this.crumbSubnav.label = subnav.name;
          this.crumbSubnav.url = "/" + nav.category + "/" + subnav.category;
          this.breadcrumbs.push(this.crumbSubnav);

          this.crumbStore.label = this.currentStore.name;
          this.breadcrumbs.push(this.crumbStore);

          this.breadcrumbService.handleBreadcrumbsService(this.breadcrumbs);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
