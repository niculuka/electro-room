import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DEPARTMENTS, IDepartment } from 'src/app/shared/data/mega-menu.data';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnDestroy {

  departments: Array<IDepartment> = DEPARTMENTS;
  cards: Array<any> = [];

  departPath: string = "";
  currentDepartment: string = "";
  customBreadcrumb: Breadcrumb = new Breadcrumb();

  private sub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
    private toastrService: ToastrService,
  ) {
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      this.departPath = params.get('departPath') || "";
      let depart: any = this.departments.find(item => item.path === this.departPath);
      if (depart) {
        this.cards = depart.titles;
        this.currentDepartment = depart.name;
        this.createBreadcrumb();
      }
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  createBreadcrumb() {
    this.customBreadcrumb = {
      customDepartment: this.currentDepartment,
      customType: "",
      customCategory: "",
      customLinkName: "",
    };
    this.breadcrumbService.handleBreadcrumbService(this.customBreadcrumb);
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
