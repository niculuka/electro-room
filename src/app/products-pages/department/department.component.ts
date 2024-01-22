import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS } from 'src/app/shared/data/mega-menu.data';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnDestroy {

  departments = DEPARTMENTS;
  cards: Array<any> = [];

  breadcrumb: Array<Breadcrumb> = [];
  crumb: Breadcrumb = new Breadcrumb();

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

  noRoute(card: any) {
    if (card.isReady === false) {
      this.toastrService.warning("C O N S T R U C T I O N", "U N D E R")
    }
  }

  createBreadcrumb(item: any) {
    this.crumb.label = item.name;
    this.crumb.url = "/depart/" + item.department;
    this.breadcrumb.push(this.crumb)

    this.breadcrumbService.handleBreadcrumbService(this.breadcrumb);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
