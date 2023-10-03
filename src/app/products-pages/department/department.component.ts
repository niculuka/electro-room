import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  departments: Array<Department> = DEPARTMENTS;
  cards: Array<any> = [];

  currentDepartment: string = "";
  customBreadcrumb: Breadcrumb = new Breadcrumb();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breadcrumbService: BreadcrumbService,
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentDepartment = params.get('department') || "";
      this.createBreadcrumb();
      let depapartament: any = this.departments.find(item => item.department === this.currentDepartment);
      this.cards = depapartament.titles;
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
}
