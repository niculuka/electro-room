import { Component } from '@angular/core';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';
import { BreadcrumbService } from 'src/app/shared/services/breadcrumb.service';

@Component({
  selector: 'app-department-lpt',
  templateUrl: './department-lpt.component.html',
  styleUrls: ['./department-lpt.component.css']
})
export class DepartmentLptComponent {

  departments: Array<Department> = DEPARTMENTS;
  cards: Array<any> = [];

  constructor() {
    let depapartament: any = this.departments.find(item => item.id === 1);
    this.cards = depapartament.titles;
  }
}
