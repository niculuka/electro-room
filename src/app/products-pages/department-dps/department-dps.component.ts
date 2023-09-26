import { Component } from '@angular/core';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';

@Component({
  selector: 'app-department-dps',
  templateUrl: './department-dps.component.html',
  styleUrls: ['./department-dps.component.css']
})
export class DepartmentDpsComponent {

  departments: Array<Department> = DEPARTMENTS;
  cards: Array<any> = [];

  constructor(
  ) {
    let depapartament: any = this.departments.find(item => item.id === 2);
    this.cards = depapartament.titles;
  }

}
