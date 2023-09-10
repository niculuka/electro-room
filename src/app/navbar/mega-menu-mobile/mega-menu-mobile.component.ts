import { Component, Input } from '@angular/core';
import { Department, DEPARTMENTS, Title } from 'src/app/shared/data/mega-menu.data';
import { ScreenBlockedService } from 'src/app/shared/services/screen-blocked.service';

@Component({
  selector: 'mega-menu-mobile',
  templateUrl: './mega-menu-mobile.component.html',
  styleUrls: ['./mega-menu-mobile.component.css']
})
export class MegaMenuMobileComponent {

  departments: Array<Department> = DEPARTMENTS;

  @Input() isMobileMenuOpen: boolean = false;

  constructor(
    private screenBlockedService: ScreenBlockedService,
  ) { }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.screenBlockedService.isScreenBlocked = this.isMobileMenuOpen;
    this.screenBlockedService.blockScreen();
  }

  openCloseDepartment(department: Department) {
    department.showTitle = !department.showTitle;
  }

  openCloseTitle(title: Title) {
    title.showSubtitle = !title.showSubtitle;
  }

  // closeFromSubtitles() {
  //   this.isMobileMenuOpen = false;
  // }

}
