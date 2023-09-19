import { Component, Input } from '@angular/core';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-mega-menu-desktop',
  templateUrl: './mega-menu-desktop.component.html',
  styleUrls: ['./mega-menu-desktop.component.css']
})
export class MegaMenuDesktopComponent {

  departments: Array<Department> = DEPARTMENTS; 

  // @Input() handleDesktopMenu = false;

  constructor(
    private localStorageService: LocalStorageService,
  ) { }

  closeMenu(item: any) {
    // this.handleDesktopMenu = false;
    // this.localStorageService.sendItem(item);
  }
}
