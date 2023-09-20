import { Component } from '@angular/core';
import { Department, DEPARTMENTS, Title } from 'src/app/shared/data/mega-menu.data';
import { MobileMenuService } from 'src/app/shared/services/mobile-menu.service';

@Component({
  selector: 'mega-menu-mobile',
  templateUrl: './mega-menu-mobile.component.html',
  styleUrls: ['./mega-menu-mobile.component.css']
})
export class MegaMenuMobileComponent {

  departments: Array<Department> = DEPARTMENTS;

  isMobileMenuOpen: boolean = false;

  constructor(
    private mobileMenuService: MobileMenuService,
  ) {
    this.mobileMenuService.getHandleMobileMenuObservable().subscribe(data => {
      this.isMobileMenuOpen = data;
    })
  }  

  toogleDepartment(department: Department) {
    department.showTitle = !department.showTitle;
  }

  toogleTitle(title: Title) {
    title.showSubtitle = !title.showSubtitle;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.mobileMenuService.isMobileMenuOpen = this.isMobileMenuOpen;
    this.mobileMenuService.handleMobileMenuService();
  }

}
