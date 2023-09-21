import { Component } from '@angular/core';
import { Department, DEPARTMENTS, Title } from 'src/app/shared/data/mega-menu.data';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'mega-menu-mobile',
  templateUrl: './mega-menu-mobile.component.html',
  styleUrls: ['./mega-menu-mobile.component.css']
})
export class MegaMenuMobileComponent {

  departments: Array<Department> = DEPARTMENTS;

  constructor(
    private menuService: MenuService,
  ) { }

  toogleDepartment(department: Department) {
    department.showTitle = !department.showTitle;
  }

  toogleTitle(title: Title) {
    title.showSubtitle = !title.showSubtitle;
  }

  closeMobileMenu() {
    this.menuService.isMobileMenuOpen = false;
    this.menuService.handleMobileMenuService();
  }

}
