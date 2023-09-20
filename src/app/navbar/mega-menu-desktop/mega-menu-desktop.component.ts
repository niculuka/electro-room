import { Component } from '@angular/core';
import { DEPARTMENTS, Department } from 'src/app/shared/data/mega-menu.data';

@Component({
  selector: 'app-mega-menu-desktop',
  templateUrl: './mega-menu-desktop.component.html',
  styleUrls: ['./mega-menu-desktop.component.css']
})
export class MegaMenuDesktopComponent {

  departments: Array<Department> = DEPARTMENTS; 

}
