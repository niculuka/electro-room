import { Component } from '@angular/core';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-mega-menu-desktop',
  templateUrl: './mega-menu-desktop.component.html',
  styleUrls: ['./mega-menu-desktop.component.css']
})
export class MegaMenuDesktopComponent {

  departments: Array<Department> = DEPARTMENTS;

  constructor(
    private menuService: MenuService,
  ) { }

  closeDesktopMenu() {
    this.menuService.handleWindow.isDesktopMenuOpen = false;
    this.menuService.handleWindowService();
  }

}
