import { Component, EventEmitter, Output } from '@angular/core';
import { DEPARTMENTS, IDepartment } from 'src/app/shared/data/mega-menu.data';

@Component({
  selector: 'app-mega-menu-desktop',
  templateUrl: './mega-menu-desktop.component.html',
  styleUrls: ['./mega-menu-desktop.component.css']
})
export class MegaMenuDesktopComponent {

  departments = DEPARTMENTS;

  closeDeskMenu: boolean = false;
  @Output() closeDeskMenuEvent = new EventEmitter<boolean>();

  closeDesktopMenu() {
    this.closeDeskMenuEvent.emit(this.closeDeskMenu);
  }
}
