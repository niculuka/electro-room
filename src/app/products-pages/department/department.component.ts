import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS } from 'src/app/shared/data/mega-menu.data';
import { IBreadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnDestroy {

  protected departments = DEPARTMENTS;
  cards: Array<any> = [];

  breadcrumbs: Array<IBreadcrumb> = [];
  crumb: IBreadcrumb = {} as IBreadcrumb;

  private sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private toastrService: ToastrService,
  ) {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      let department = params.get('depart') || "";
      this.departments.find(item => {
        if (item.department === department) {
          this.cards = item.titles;
          this.createBreadcrumb(item);
        }
      });
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  createBreadcrumb(item: any) {
    this.crumb.label = item.name;
    this.breadcrumbs.push(this.crumb);

    this.breadcrumbService.handleBreadcrumbsService(this.breadcrumbs);
  }

  noRoute(card: any) {
    if (card.isReady === false) {
      this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
