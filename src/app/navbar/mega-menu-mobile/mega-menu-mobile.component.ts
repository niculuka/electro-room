import { Component, EventEmitter, Output } from '@angular/core';
import { Department, DEPARTMENTS, Title } from 'src/app/shared/data/mega-menu.data';

@Component({
  selector: 'mega-menu-mobile',
  templateUrl: './mega-menu-mobile.component.html',
  styleUrls: ['./mega-menu-mobile.component.css']
})
export class MegaMenuMobileComponent {

  departments: Array<Department> = DEPARTMENTS;
  
  closeMobMenu: boolean = false;
  @Output() closeMobMenuEvent = new EventEmitter<boolean>();

  toogleDepartment(department: Department) {
    department.showTitle = !department.showTitle;
  }

  toogleTitle(title: Title) {
    title.showSubtitle = !title.showSubtitle;
  }

  closeMobileMenu() {
    this.closeMobMenuEvent.emit(this.closeMobMenu);
  }

}
